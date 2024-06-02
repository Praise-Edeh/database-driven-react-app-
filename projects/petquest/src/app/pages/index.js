// pages/index.js
import Link from 'next/link';
import { useClerk, useUser } from '@clerk/clerk-react';
import { supabase } from '../supabaseClient';

export default function Home() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to PetQuest</h1>
      {user ? (
        <>
          <p>Welcome, {user.firstName}</p>
          <button onClick={() => signOut()} className="btn">Sign Out</button>
        </>
      ) : (
        <Link href="/sign-in">
          <a className="btn">Sign In</a>
        </Link>
      )}
    </div>
  );
}
