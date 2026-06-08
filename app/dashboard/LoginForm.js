"use client";
import React, { useState } from 'react';
import { loginAdmin } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const res = await loginAdmin(username, password);
    if (res.success) {
      router.refresh();
    } else {
      setError(res.error || 'Login failed');
    }
  };

  return (
    <div className="bg-white shadow-md mx-auto rounded-lg p-10 max-w-md border-t-4 border-red-600">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Admin Login</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-bold">Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-red-600"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-bold">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-red-600"
            required
          />
        </div>
        <button type="submit" className="w-full bg-red-600 hover:bg-red-800 text-white py-3 rounded-lg font-bold transition duration-200">
          Login
        </button>
      </form>
    </div>
  );
}
