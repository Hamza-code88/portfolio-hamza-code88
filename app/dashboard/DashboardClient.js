"use client";
import React, { useState, useEffect } from 'react';
import { addProject, deleteProject, getProjects } from '@/app/actions/projects';
import { logoutAdmin } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';

export default function DashboardClient() {
  const [formData, setFormData] = useState({
    title: '', description: '', image_url: '', demo_link: '', github_link: ''
  });
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  const fetchProjects = async () => {
    const res = await getProjects();
    if (res.data) setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await addProject(formData);
    setLoading(false);
    if (res.success) {
      alert('Project added successfully!');
      setFormData({ title: '', description: '', image_url: '', demo_link: '', github_link: '' });
      fetchProjects();
      router.refresh();
    } else {
      alert('Error: ' + res.error);
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
          <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Project</h3>
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
              <label className="block mb-1 text-gray-700 font-bold">Image URL (e.g. ./projects/img 1.png)</label>
              <input type="text" required value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-bold">Demo Link (Optional)</label>
              <input type="url" value={formData.demo_link} onChange={e => setFormData({...formData, demo_link: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-bold">GitHub Link (Optional)</label>
              <input type="url" value={formData.github_link} onChange={e => setFormData({...formData, github_link: e.target.value})} className="w-full border-2 border-gray-200 rounded-lg p-2 outline-none focus:border-red-600" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-800 disabled:opacity-50 transition duration-200">
              {loading ? 'Adding...' : 'Add Project'}
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Existing Projects</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {projects.map(p => (
              <div key={p.id} className="flex border-2 border-gray-200 rounded-lg overflow-hidden p-2 items-center">
                <img src={p.image_url} alt={p.title} className="w-20 h-20 object-cover rounded border" />
                <div className="ml-4 flex-grow">
                  <h4 className="font-bold text-red-600">{p.title}</h4>
                  <p className="text-sm text-gray-600 truncate max-w-xs">{p.description}</p>
                </div>
                <button onClick={() => handleDelete(p.id)} className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded font-bold ml-2">Delete</button>
              </div>
            ))}
            {projects.length === 0 && <p className="text-gray-500">No projects found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
