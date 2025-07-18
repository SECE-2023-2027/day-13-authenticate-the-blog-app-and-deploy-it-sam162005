import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  const { username, email, password } = await req.json();

  const existing = await User.findOne({ email });
  if (existing) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hash });

  return NextResponse.json({ success: true, user: { username: user.username, email: user.email } });
}
