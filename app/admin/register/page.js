'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/admin/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Registration failed');
    } else {
      alert('Admin registered successfully!');
      router.push('/admin/login'); // Redirect to login after success
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{paddingLeft: '600px'}}>Admin Registration</h2>
      <form onSubmit={handleRegister} style={{ maxWidth: '400px' }}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
