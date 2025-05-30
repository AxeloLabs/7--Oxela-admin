'use client';
import { useAuth } from '@/hooks/firebase/useAuth';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { UserAvatarProfile } from '@/components/user-avatar-profile';
// import { SignOutButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export function UserNav() {
  const { push } = useRouter();
  // const { user } = useUser();
  const { user: fbUser } = useAuth();
  const isSignedIn = !!fbUser?.uid;

  // adapter from clerk-auth to firebase-auth
  const user = {
    ...fbUser,
    emailAddresses: [{ emailAddress: fbUser?.email ?? '' }],
    fullName: fbUser?.displayName
  };

  const router = useRouter();
  // if (user) {
  if (isSignedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <UserAvatarProfile user={user} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-56'
          align='end'
          sideOffset={10}
          forceMount
        >
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm leading-none font-medium'>
                {user.fullName}
              </p>
              <p className='text-muted-foreground text-xs leading-none'>
                {user.emailAddresses[0].emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push('/admin/profile')}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {/* clerk */}
            {/* <SignOutButton redirectUrl='/auth/sign-in' /> */}
            <button
              onClick={() => {
                signOut(auth);
                push('/auth/firebase');
              }}
              className='flex w-full items-center rounded-full px-4 py-2 font-medium transition-colors hover:bg-gray-200'
            >
              Sign out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
