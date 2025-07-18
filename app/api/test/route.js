import { connectDB } from '@/lib/db';

export async function GET() {
  await connectDB();

  return new Response(JSON.stringify({ message: 'DB check complete' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
