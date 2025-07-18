import { connectDB } from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();
  const { username, password } = await req.json();

  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    return Response.json({ error: 'Username already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new Admin({
    username,
    password: hashedPassword,
  });

  await newAdmin.save();

  return Response.json({ message: 'Admin registered successfully' });
}
