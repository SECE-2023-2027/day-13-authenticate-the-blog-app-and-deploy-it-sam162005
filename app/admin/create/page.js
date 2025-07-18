'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/blog/create', {
      method: 'POST',
      body: JSON.stringify({ title, content, author: 'Admin' }),
    });
    router.push('/admin/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Post</button>
    </form>
  );
}
