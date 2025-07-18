'use client';

import { useEffect, useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
