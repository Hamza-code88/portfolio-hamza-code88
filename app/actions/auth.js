"use server";
import { cookies } from 'next/headers';

export async function loginAdmin(username, password) {
  // Hardcoded check for the exact username and password you requested
  if (username === 'hamza-code88' && password === '329663') {
    const cookieStore = await cookies();
    cookieStore.set('admin_auth', 'true', { httpOnly: true, path: '/' });
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials. Please check your username and password.' };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth');
}
