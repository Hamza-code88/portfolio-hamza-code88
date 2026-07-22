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

export async function updateProject(id, projectData) {
  const { data, error } = await supabase
    .from('projects')
    .update(projectData)
    .eq('id', id);
  if (error) return { success: false, error: error.message };
  revalidatePath('/');
  return { success: true };
}

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  return { data, error: error ? error.message : null };
}

export async function reorderProjects(orderedProjects) {
  // orderedProjects should be an array of objects: { id: string, sort_order: number }
  for (const item of orderedProjects) {
    const { error } = await supabase
      .from('projects')
      .update({ sort_order: item.sort_order })
      .eq('id', item.id);
      
    if (error) {
      console.error("Error updating order:", error);
      return { success: false, error: error.message };
    }
  }

  revalidatePath('/');
  return { success: true };
}
