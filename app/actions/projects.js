"use server";
import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function addProject(projectData) {
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData]);
  if (error) return { success: false, error: error.message };
  revalidatePath('/');
  return { success: true };
}

export async function deleteProject(id) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/');
  return { success: true };
}

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error: error ? error.message : null };
}
