'use client';
import Link from 'next/link';

export default function Home() {
  const containerStyle = {
    padding: '60px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '500px',
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#222',
    textAlign: 'center',
  };

  const sectionTitle = {
    fontSize: '18px',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#333',
    borderBottom: '1px solid #eee',
    paddingBottom: '5px',
  };

  const linkStyle = {
    display: 'block',
    marginBottom: '8px',
    padding: '10px 16px',
    borderRadius: '8px',
    backgroundColor: '#0070f3',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#005bb5',
  };

  return (
    <main style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>📝 Welcome to the Blog Platform</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Please select your role to proceed:</p>

        <div>
          <h3 style={sectionTitle}>👨‍💼 Admin Panel</h3>
          <Link href="/admin/register" style={linkStyle} onMouseOver={e => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={e => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}>➡️ Admin Register</Link>
          <Link href="/admin/login" style={linkStyle} onMouseOver={e => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={e => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}>➡️ Admin Login</Link>

          <h3 style={sectionTitle}>🙋 User Panel</h3>
          <Link href="/user/register" style={linkStyle} onMouseOver={e => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={e => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}>➡️ User Register</Link>
          <Link href="/user/login" style={linkStyle} onMouseOver={e => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={e => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}>➡️ User Login</Link>

          <h3 style={sectionTitle}>🌐 Public</h3>
          <Link href="/blogs" style={linkStyle} onMouseOver={e => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={e => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}>➡️ View Blogs</Link>
        </div>
      </div>
    </main>
  );
}
