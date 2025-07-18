import { connectDB } from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
