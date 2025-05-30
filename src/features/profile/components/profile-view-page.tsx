// components/UserProfile.tsx
'use client';

import { useAuth } from '@/hooks/firebase/useAuth';
import Image from 'next/image';

export default function UserProfile() {
  const { user, loading, error } = useAuth();

  if (loading) return <p>Chargement...</p>;
  if (error || !user) return <p>Non connecté</p>;

  return (
    <div className='flex flex-col items-center gap-4'>
      {user.photoURL && (
        <Image
          src={user.photoURL}
          alt='Avatar'
          width={80}
          height={80}
          className='rounded-full'
        />
      )}
      <div className='text-center'>
        <p className='font-bold'>{user.displayName || 'Utilisateur'}</p>
        <p className='text-sm text-gray-500'>{user.email}</p>
      </div>
    </div>
  );
}

// import { UserProfile } from '@clerk/nextjs';

// export default function ProfileViewPage() {
//   return (
//     <div className='flex w-full flex-col p-4'>
//       <UserProfile />
//     </div>
//   );
// }
