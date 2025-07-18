
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function POST(req) {
  await connectDB();
  const { title, content, author } = await req.json();
  const blog = await Blog.create({ title, content, author });
  return Response.json({ success: true, blog });
}
