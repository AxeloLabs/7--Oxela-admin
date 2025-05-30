// 🟢 import { auth } from '@clerk/nextjs/server';
// import { useAuth } from '@/hooks/firebase/useAuth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// export default async function Dashboard() {
export default async function Dashboard() {
  // firebase v1 (failed, client/server issue)
  // const { user } = useAuth();
  // const isLoggedIn = !!user?.uid;
  // if (!isLoggedIn) {
  //   return redirect('/auth/sign-in');
  // } else {
  //   redirect('/dashboard/overview');
  // }

  // firebase v2 :
  const cookieStore = await cookies();
  const session = cookieStore.get('__session')?.value;

  if (session) {
    return redirect('/dashboard/overview');
  }
  return redirect('/auth/sign-in');

  // clerk
  // const { userId } = await auth();

  // if (!userId) {
  //   return redirect('/auth/sign-in');
  // } else {
  //   redirect('/dashboard/overview');
  // }
}
