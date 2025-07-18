import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectDB();
  const { username, password } = await req.json();

  const admin = await Admin.findOne({ username });
  if (!admin) return new Response(JSON.stringify({ error: "Admin not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });

  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401, headers: { 'Content-Type': 'application/json' } });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  return new Response(JSON.stringify({ token }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
