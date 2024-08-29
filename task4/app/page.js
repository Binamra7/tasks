import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/login" className='w-40 h-24 bg-slate-300 text-center rounded-lg flex items-center justify-center'><button>Go to Login</button></Link>
    </main>
  );
}
