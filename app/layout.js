import './globals.css';

export const metadata = {
  title: 'Next Blog App',
  description: 'A full-featured blog app with admin and user panels',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <header className="layout-header">
          <h1 className="layout-title">📝 Blog Application</h1>
        </header>

        <main className="layout-main">{children}</main>

        <footer className="layout-footer">
          © 2024 Blog App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
