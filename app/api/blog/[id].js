import { connectDB } from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }
    return Response.json(blog);
  } catch (err) {
    return Response.json({ error: "Invalid ID" }, { status: 400 });
  }
}
