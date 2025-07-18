'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog/getAll')
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div className="bloglist-container">
      <h2 className="bloglist-title">All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>
          <Link href={`/blogs/${blog._id}`} className="read-more-link">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
