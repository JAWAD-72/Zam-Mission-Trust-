'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <span className="logo-white">ANJUMAN BAG-E-</span>
          <span className="logo-yellow">ZEHRA</span>
        </div>
        <nav className="flex items-center">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/membership" className="nav-link">Membership</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/admin/login">
            <button className="btn btn-primary" style={{ padding: '0.6rem 1.8rem', fontSize: '0.8rem' }}>LOGIN</button>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .header {
          padding: 1.5rem 0;
          position: absolute;
          width: 100%;
          top: 0;
          z-index: 50;
          background: transparent;
        }
        .logo {
          font-size: 1.1rem;
          letter-spacing: 2px;
          font-weight: 700;
          font-family: 'Cinzel', serif;
        }
        .logo-white {
          color: #ffffff;
        }
        .logo-yellow {
          color: var(--primary);
        }
        /* Global styles handle .nav-link, but we ensure specificity here if needed or inherit */
        :global(.nav-link) {
          color: #cccccc;
          margin-right: 2rem;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          transition: color 0.3s;
          text-transform: capitalize;
          text-decoration: none;
        }
        :global(.nav-link:hover) {
          color: var(--primary);
        }
      `}</style>
    </header>
  );
}
