import Link from 'next/link';

export default function BlogCard({ blog, isAdmin, onDelete }) {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content.slice(0, 100)}...</p>
      <small>By {blog.author}</small>
      {isAdmin && (
        <>
          <button onClick={() => onDelete(blog._id)}>Delete</button>
        </>
      )}
    </div>
  );
}
