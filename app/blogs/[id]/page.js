'use client';
import { useEffect, useState } from 'react';

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('/api/blog/getAll') // or create `/api/blog/[id]` for more optimized
      .then(res => res.json())
      .then(data => {
        const found = data.find(b => b._id === params.id);
        setBlog(found);
      });
  }, [params.id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <small>By {blog.author}</small>
    </div>
  );
}
