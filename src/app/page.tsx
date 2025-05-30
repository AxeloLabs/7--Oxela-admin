import { cookies } from 'next/headers';
// import Authentication from './auth/firebase/authentication';
import { redirect } from 'next/navigation';
// TODO:
// import './auth.css';

export default async function AuthPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('__session')?.value;

  if (session) {
    // TODO:
    return redirect('/admin/overview');
    // return redirect('/orders')
  }
  return redirect('/auth/sign-in');
  // return <Authentication />;
}
