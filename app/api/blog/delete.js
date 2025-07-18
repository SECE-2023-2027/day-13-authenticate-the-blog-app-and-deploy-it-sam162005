import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function POST(req) {
  await connectDB();
  const { id } = await req.json();
  await Blog.findByIdAndDelete(id);
  return Response.json({ success: true });
}
