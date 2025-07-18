import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function PUT(req) {
  await connectDB();
  const { id, title, content } = await req.json();
  const updated = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
  return Response.json(updated);
}
