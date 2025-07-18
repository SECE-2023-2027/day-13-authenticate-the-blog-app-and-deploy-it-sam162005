'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();

  return (
    <nav style={{ padding: '10px 20px', backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
      <Link href="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link href="/blogs" style={{ marginRight: '20px' }}>Blogs</Link>
      <Link href="/user/login" style={{ marginRight: '20px' }}>User</Link>
      <Link href="/admin/login">Admin</Link>
    </nav>
  );
}
