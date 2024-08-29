'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignJWT } from 'jose';

export default function LoginPage() {
  const [user, _setUser] = useState({
    username: '',
    password: '',
  });

  const [error, _setError] = useState('');

  const router = useRouter();

  const _handleLogin = async (e) => {
    e.preventDefault();
    _setError('');

    if (user.username !== 'user') {
      _setError('Invalid username');
      return;
    }

    if (user.password !== 'password') {
      _setError('Invalid password');
      return;
    }
    const secret = new TextEncoder().encode(
      'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
    );
    const alg = 'HS256';

    const jwt = await new SignJWT({ 'urn:example:claim': true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer('urn:example:issuer')
      .setAudience('urn:example:audience')
      .setExpirationTime('2h')
      .sign(secret);

    document.cookie = `token=${jwt}; path=/; SameSite=None; Secure`;

    router.push('/dashboard');
  };

  return (
    <form
      onSubmit={_handleLogin}
      className='bg-slate-300 max-w-96 m-auto p-4 overflow-hidden flex items-center justify-center'
    >
      <div className='flex flex-col items-center justify-center h-96 gap-4 bg-teal-600 w-full rounded-xl'>
        <input
          type='text'
          placeholder='Username'
          value={user.username}
          onChange={(e) => _setUser({ ...user, username: e.target.value })}
          required
          className='p-2 rounded-md'
        />
        <input
          type='password'
          placeholder='Password'
          value={user.password}
          onChange={(e) => _setUser({ ...user, password: e.target.value })}
          required
          className='p-2 rounded-md'
        />
        <button
          className='p-2 w-40 h-10 bg-slate-300 hover:bg-slate-100 text-center rounded-lg flex items-center justify-center'
          type='submit'
        >
          Login
        </button>
        {error && (
          <h1 className='absolute top-10 text-red-500 text-center'>{error}</h1>
        )}
      </div>
    </form>
  );
}
