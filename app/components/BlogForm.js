'use client';
import { useState } from 'react';

export default function BlogForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData.title ? 'Edit Blog' : 'Create Blog'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={8}
      />
      <button type="submit">{initialData.title ? 'Update' : 'Publish'}</button>
    </form>
  );
}
