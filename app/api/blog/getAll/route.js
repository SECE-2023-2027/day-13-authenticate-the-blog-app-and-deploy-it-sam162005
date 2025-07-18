import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
