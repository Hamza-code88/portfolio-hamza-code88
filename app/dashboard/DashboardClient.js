"use client";
import React, { useState, useEffect } from 'react';
import { addProject, deleteProject, getProjects, reorderProjects, updateProject } from '@/app/actions/projects';
import { logoutAdmin } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableProjectItem({ p, handleDelete, handleEdit }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: p.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={style} className={`flex border-2 ${isDragging ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-white'} rounded-xl overflow-hidden p-3 items-center shadow-xs`}>
      <button {...attributes} {...listeners} className="px-3 cursor-grab touch-none text-gray-400 hover:text-red-600 text-xl font-bold">
        ☰
      </button>
      <img src={p.image_url} alt={p.title} className="w-16 h-16 object-cover rounded-lg border border-gray-100" />
      <div className="ml-4 flex-grow">
        <h4 className="font-bold text-gray-900">{p.title}</h4>
        <p className="text-xs text-gray-500 truncate max-w-xs">{p.description}</p>
        <span className="text-[11px] text-red-600 font-mono truncate block max-w-xs">{p.demo_link || 'No demo link'}</span>
      </div>
      <button onClick={() => handleEdit(p)} className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg text-xs font-bold ml-2 transition">Edit</button>
      <button onClick={() => handleDelete(p.id)} className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold ml-2 transition">Delete</button>
    </div>
  );
}

export default function DashboardClient() {
  const [formData, setFormData] = useState({
    title: '', description: '', image_url: '', demo_link: '', github_link: ''
  });
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const fetchProjects = async () => {
    const res = await getProjects();
    if (res.data) setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleEdit = (project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title || '',
      description: project.description || '',
      image_url: project.image_url || '',
      demo_link: project.demo_link || '',
      github_link: project.github_link || ''
    });
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', description: '', image_url: '', demo_link: '', github_link: '' });
    setFile(null);
  };

  const uploadImage = async (selectedFile) => {
    const fileExt = selectedFile.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('project_images')
      .upload(filePath, selectedFile);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('project_images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let finalImageUrl = formData.image_url;

      if (file) {
        finalImageUrl = await uploadImage(file);
      } else if (!editingId && !formData.image_url) {
        throw new Error("Please select an image to upload");
      }

      const payload = { ...formData, image_url: finalImageUrl };

      if (editingId) {
        const res = await updateProject(editingId, payload);
        if (res.success) {
          alert('Featured Case Study updated successfully! It is now live on the homepage.');
          cancelEdit();
          fetchProjects();
          router.refresh();
        } else {
          alert('Error: ' + res.error);
        }
      } else {
        const nextOrder = projects.length > 0 ? projects.length : 0;
        const res = await addProject({ ...payload, sort_order: nextOrder });
        if (res.success) {
          alert('New Case Study added successfully! It is now live on the homepage.');
          cancelEdit();
          fetchProjects();
          router.refresh();
        } else {
          alert('Error: ' + res.error);
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(confirm("Are you sure you want to delete this case study from the homepage?")) {
      const res = await deleteProject(id);
      if (res.success) {
        fetchProjects();
        router.refresh();
      } else {
        alert("Error: " + res.error);
      }
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = projects.findIndex(item => item.id === active.id);
      const newIndex = projects.findIndex(item => item.id === over.id);
      const newItems = arrayMove(projects, oldIndex, newIndex);
      
      setProjects(newItems);
      
      const orderedProjects = newItems.map((item, index) => ({
        id: item.id,
        sort_order: index
      }));
      
      await reorderProjects(orderedProjects);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    router.refresh();
  };

  return (
    <div className="bg-white shadow-xl mx-auto rounded-3xl p-8 sm:p-12 border-t-4 border-red-600 max-w-7xl mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Homepage Case Studies Manager</h2>
          <p className="text-sm text-gray-500 mt-1">Changes made here update the <strong>Featured Proof & Case Studies</strong> section on your live portfolio in real time.</p>
        </div>
        <button onClick={handleLogout} className="bg-gray-100 px-5 py-2.5 rounded-xl hover:bg-gray-200 font-bold text-gray-700 text-sm transition">Logout</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Add/Edit Form */}
        <div className="lg:col-span-6 bg-[#fbfbfa] p-6 sm:p-8 rounded-2xl border-2 border-gray-100">
          <h3 className="text-xl font-extrabold mb-6 text-gray-900">{editingId ? '✏️ Edit Case Study' : '➕ Add New Case Study'}</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">Project Title (e.g. Bharosa Lab, Dine-Sync)</label>
              <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-600 bg-white text-sm" />
            </div>
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">Project Description & Outcomes</label>
              <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-600 bg-white text-sm resize-none" rows="4"></textarea>
            </div>
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">Project Image / Screenshot</label>
              {editingId && formData.image_url && !file && (
                <div className="mb-3 flex items-center gap-4 p-2 bg-white rounded-xl border border-gray-200">
                  <img src={formData.image_url} alt="Current" className="w-20 h-20 object-cover rounded-lg border" />
                  <p className="text-xs text-gray-500">Current live photo. Select a file below to replace it.</p>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={e => setFile(e.target.files[0])} 
                className="w-full border-2 border-gray-200 rounded-xl p-2.5 outline-none focus:border-red-600 bg-white text-sm" 
              />
            </div>
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">Live Demo / App URL</label>
              <input type="url" value={formData.demo_link} onChange={e => setFormData({...formData, demo_link: e.target.value})} className="w-full border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-600 bg-white text-sm" placeholder="https://..." />
            </div>
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">GitHub Repository URL (Optional)</label>
              <input type="url" value={formData.github_link} onChange={e => setFormData({...formData, github_link: e.target.value})} className="w-full border-2 border-gray-200 rounded-xl p-3 outline-none focus:border-red-600 bg-white text-sm" placeholder="https://github.com/..." />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={loading} className="flex-1 bg-red-600 text-white py-3.5 rounded-xl font-bold hover:bg-red-700 disabled:opacity-50 transition duration-200 shadow-md shadow-red-600/20 text-sm">
                {loading ? 'Saving to Database...' : (editingId ? 'Update Case Study' : 'Publish to Homepage')}
              </button>
              {editingId && (
                <button type="button" onClick={cancelEdit} className="bg-gray-200 text-gray-700 px-5 py-3.5 rounded-xl font-bold hover:bg-gray-300 transition duration-200 text-sm">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right: Reorder / Manage List */}
        <div className="lg:col-span-6">
          <h3 className="text-xl font-extrabold mb-2 text-gray-900">Featured Case Studies Order</h3>
          <p className="text-xs text-gray-500 mb-6">Drag the handle (☰) to change the order in which they appear on the homepage.</p>
          <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 pb-10">
            <DndContext 
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext 
                items={projects.map(p => p.id)}
                strategy={verticalListSortingStrategy}
              >
                {projects.map(p => (
                  <SortableProjectItem key={p.id} p={p} handleDelete={handleDelete} handleEdit={handleEdit} />
                ))}
              </SortableContext>
            </DndContext>
            {projects.length === 0 && <p className="text-gray-500 text-sm">No case studies found in database.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}
