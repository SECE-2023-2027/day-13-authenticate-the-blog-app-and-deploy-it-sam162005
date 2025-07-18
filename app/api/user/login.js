import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return Response.json({ error: 'User not found' }, { status: 404 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return Response.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  return Response.json({ token, user: { username: user.username, email: user.email } });
}
