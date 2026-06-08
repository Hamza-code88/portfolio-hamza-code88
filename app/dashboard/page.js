import { cookies } from 'next/headers';
import DashboardClient from './DashboardClient';
import LoginForm from './LoginForm';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

  return (
    <div className="min-h-screen py-20 bg-gray-50 flex items-center justify-center flex-col">
      <div className="w-[96%] max-w-6xl mx-auto">
        {isAuthenticated ? <DashboardClient /> : <LoginForm />}
      </div>
    </div>
  );
}
