'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.user));
      router.push('/blogs');
    } else {
      alert(data.error);
    }
  };

 return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ paddingLeft: '630px' }}>User Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: '400px' }}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
