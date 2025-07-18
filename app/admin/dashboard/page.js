'use client';
import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog/getAll')
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  const deleteBlog = async (id) => {
    await fetch('/api/blog/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2 className="admin-heading">Admin Dashboard</h2>
        <Link href="/admin/create">
          <button className="create-button">+ Create New Blog</button>
        </Link>
      </div>

      <div className="blog-list">
        {blogs.length === 0 ? (
          <p className="no-blog-text">No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              isAdmin
              onDelete={deleteBlog}
            />
          ))
        )}
      </div>
    </div>
  );
}
