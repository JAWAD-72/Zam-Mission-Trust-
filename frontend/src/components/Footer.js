'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="col">
            <h4 className="footer-title">
              <span style={{ color: '#ffffff' }}>ZAM MISSION</span>
              <span style={{ color: 'var(--primary)' }}> CHARITABLE TRUST</span>
            </h4>
            <p className="text-muted">REG. NO. E-12614/THANE</p>
            <p className="text-muted" style={{ marginTop: '0.5rem' }}>Supporting our community through faith, charity, and unity. Every contribution helps us serve better.</p>
          </div>
          <div className="col">
            <h4 className="footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/membership">Membership Plans</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col">
            <h4 className="footer-title">CONTACT INFO</h4>
            <div className="contact-item"><span className="label">Email:</span> <span className="value">zammissioncharitabletrust@gmail.com</span></div>
            <div className="contact-item"><span className="label">Phone:</span> <span className="value">8779559196/ 75060 69461</span></div>
            <div className="contact-item"><span className="label">Address:</span> <span className="value">B1-G5, SAHYOG BUILDING, NEAR JILANI PARK, TALO PALI ROAD, KAUSA, MUMBRA, THANE - 400612</span></div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Anjuman-e-Bagh-e-Zehra. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid #111;
          background: #000;
          padding: 4rem 0 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .footer-title {
          font-size: 0.95rem;
          letter-spacing: 1px;
          color: var(--primary);
          font-family: 'Cinzel', serif;
          margin-bottom: 1.2rem;
        }
        .text-muted {
          color: #888;
          font-size: 0.9rem;
          line-height: 1.7;
          font-family: 'Inter', sans-serif;
        }
        .footer-links { list-style: none; padding: 0; margin: 0; }
        .footer-links li { margin-bottom: 0.7rem; }
        :global(.footer-links a) {
          color: #888;
          transition: color 0.3s;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          text-decoration: none;
        }
        :global(.footer-links a:hover) { color: var(--primary); padding-left: 4px; }
        .contact-item {
          margin-bottom: 0.7rem;
          font-size: 0.88rem;
          font-family: 'Inter', sans-serif;
          color: #888;
          line-height: 1.5;
        }
        .contact-item .label { color: #666; margin-right: 0.4rem; }
        .contact-item .value { color: #aaa; }
        .copyright {
          border-top: 1px solid #111;
          padding-top: 1.5rem;
          font-size: 0.82rem;
          color: #444;
          font-family: 'Inter', sans-serif;
          text-align: center;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 480px) {
          .footer { padding: 3rem 0 1.5rem; }
        }
      `}</style>
    </footer>
  );
}
