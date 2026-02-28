'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <div className="logo-main">
            <span className="logo-white">ZAM MISSION </span>
            <span className="logo-yellow">CHARITABLE TRUST</span>
          </div>
          <p className="logo-collab">In Collaboration with Anjuman Baug-e-Zehra</p>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? 'open1' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open2' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open3' : ''}`}></span>
        </button>

        {/* Desktop Nav */}
        <nav className="nav-desktop flex items-center">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/membership" className="nav-link">Membership</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/policy" className="nav-link">Privacy & Policy</Link>
          <Link href="/admin/login">
            <button className="btn btn-outline" style={{ padding: '0.6rem 1.8rem', fontSize: '0.8rem', border: '1px solid #d4af37', color: '#d4af37', background: 'transparent' }}>LOGIN</button>
          </Link>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="nav-mobile">
          <Link href="/" className="mob-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="mob-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/membership" className="mob-link" onClick={() => setMenuOpen(false)}>Membership</Link>
          <Link href="/contact" className="mob-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/policy" className="mob-link" onClick={() => setMenuOpen(false)}>Privacy & Policy</Link>
          <Link href="/admin/login" className="mob-link" onClick={() => setMenuOpen(false)}>Admin Login</Link>
        </nav>
      )}

      <style jsx>{`
        .header {
          padding: 1.2rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #1a1a1a;
        }
        .logo {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .logo-main {
          font-size: 1.05rem;
          letter-spacing: 2px;
          font-weight: 700;
          font-family: 'Cinzel', serif;
          line-height: 1.2;
        }
        .logo-collab {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          color: #666;
          letter-spacing: 1px;
          margin: 0;
          font-weight: 400;
        }
        .logo-white { color: #ffffff; }
        .logo-yellow { color: var(--primary); }

        :global(.nav-link) {
          color: #cccccc;
          margin-right: 2rem;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          transition: color 0.3s;
          text-decoration: none;
        }
        :global(.nav-link:hover) { color: var(--primary); }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .bar {
          display: block;
          width: 24px;
          height: 2px;
          background: #d4af37;
          transition: all 0.3s;
        }
        .open1 { transform: rotate(45deg) translate(5px, 5px); }
        .open2 { opacity: 0; }
        .open3 { transform: rotate(-45deg) translate(5px, -5px); }

        .nav-mobile {
          display: flex;
          flex-direction: column;
          background: rgba(0,0,0,0.97);
          border-top: 1px solid #222;
          padding: 1rem 0;
        }
        :global(.mob-link) {
          color: #ccc;
          padding: 0.9rem 1.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          text-decoration: none;
          border-bottom: 1px solid #111;
          transition: color 0.2s, background 0.2s;
        }
        :global(.mob-link:hover) { color: #d4af37; background: #0a0a0a; }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .hamburger { display: flex; }
          .logo { font-size: 0.85rem; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
