'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Registered! Please login.');
      router.push('/user/login');
    } else {
      alert(data.error);
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ paddingLeft: '600px' }}>User Registration</h2>
      <form onSubmit={handleRegister} style={{ maxWidth: '400px' }}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
