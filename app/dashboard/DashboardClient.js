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

// New component for Sortable Item
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
    <div ref={setNodeRef} style={style} className={`flex border-2 ${isDragging ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-white'} rounded-lg overflow-hidden p-2 items-center`}>
      <button {...attributes} {...listeners} className="px-3 cursor-grab touch-none text-gray-500 hover:text-red-600 text-xl font-bold">
        ☰
      </button>
      <img src={p.image_url} alt={p.title} className="w-20 h-20 object-cover rounded border" />
      <div className="ml-4 flex-grow">
        <h4 className="font-bold text-red-600">{p.title}</h4>
        <p className="text-sm text-gray-600 truncate max-w-xs">{p.description}</p>
      </div>
      <button onClick={() => handleEdit(p)} className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-3 py-1 rounded font-bold ml-2">Edit</button>
      <button onClick={() => handleDelete(p.id)} className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded font-bold ml-2">Delete</button>
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
    setFile(null); // Reset file input when editing
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
        // Update existing project
        const res = await updateProject(editingId, payload);
        if (res.success) {
          alert('Project updated successfully!');
          cancelEdit();
          fetchProjects();
          router.refresh();
        } else {
          alert('Error: ' + res.error);
        }
      } else {
        // Add new project
        const nextOrder = projects.length > 0 ? projects.length : 0;
        const res = await addProject({ ...payload, sort_order: nextOrder });
        if (res.success) {
          alert('Project added successfully!');
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
    if(confirm("Are you sure you want to delete this project?")) {
      const res = await deleteProject(id);
      if (res.success) {
        fetchProjects();
        router.refresh();
      } else {
        alert("Error: " + res.error);
      }
    }
  }

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
    <div className="bg-white shadow-md mx-auto rounded-lg p-10 border-t-4 border-red-600">
      <div className="flex justify-between items-center mb-8 pb-4 border-b">
        <h2 className="text-3xl font-bold text-red-600">Manage Projects</h2>
        <button onClick={handleLogout} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 font-bold text-gray-700">Logout</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">{editingId ? 'Edit Project' : 'Add New Project'}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 font-bold">Title</label>
              <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-bold">Description</label>
              <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" rows="3"></textarea>
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-bold">Project Image</label>
              {editingId && formData.image_url && !file && (
                <div className="mb-2 flex items-center gap-4">
                  <img src={formData.image_url} alt="Current" className="w-16 h-16 object-cover rounded border" />
                  <p className="text-xs text-gray-500">Current Image. Select a new one below to replace.</p>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={e => setFile(e.target.files[0])} 
                className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600 bg-white" 
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-bold">Demo Link (Optional)</label>
              <input type="url" value={formData.demo_link} onChange={e => setFormData({...formData, demo_link: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-bold">GitHub Link (Optional)</label>
              <input type="url" value={formData.github_link} onChange={e => setFormData({...formData, github_link: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" />
            </div>
            <div className="flex gap-2 pt-2">
              <button type="submit" disabled={loading} className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-800 disabled:opacity-50 transition duration-200">
                {loading ? 'Saving...' : (editingId ? 'Update Project' : 'Add Project')}
              </button>
              {editingId && (
                <button type="button" onClick={cancelEdit} className="bg-gray-400 text-white px-4 py-3 rounded-lg font-bold hover:bg-gray-500 transition duration-200">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Existing Projects (Drag to Reorder)</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 pb-10">
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
            {projects.length === 0 && <p className="text-gray-500">No projects found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
