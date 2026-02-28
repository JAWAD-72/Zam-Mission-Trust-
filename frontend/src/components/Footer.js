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
            {/* Social Icons */}
            <div className="social-icons">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1L1y92mSEs/" target="_blank" rel="noopener noreferrer" className="social-btn facebook" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@zehrachannelindia?si=9X9LzN60CH3eV8Qh" target="_blank" rel="noopener noreferrer" className="social-btn youtube" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#000" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/anjuman_e_baugezehra_sa?igsh=cjBuOXVwa3lrM2Vs" target="_blank" rel="noopener noreferrer" className="social-btn instagram" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
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
            <div className="contact-item"><span className="label">Phone:</span> <span className="value">8779559196 / 75060 69461</span></div>
            <div className="contact-item"><span className="label">Address:</span> <span className="value">B1-G5, SAHYOG BUILDING, NEAR JILANI PARK, TALO PALI ROAD, KAUSA, MUMBRA, THANE - 400612</span></div>
          </div>
        </div>
        <div className="copyright">
          <p className="trust-name">ZAM MISSION CHARITABLE TRUST</p>
          <p className="trust-sub">Religious programs organized in collaboration with Anjuman Baug-e-Zehra.</p>
          <p className="trust-copy">&copy; {new Date().getFullYear()} ZAM Mission Charitable Trust. All Rights Reserved.</p>
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
        .social-icons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.2rem;
        }
        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, opacity 0.2s;
          color: #fff;
        }
        .social-btn:hover { transform: scale(1.15); opacity: 0.9; }
        .facebook  { background: #1877f2; }
        .youtube   { background: #ff0000; }
        .instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
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
          text-align: center;
        }
        .trust-name {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          color: #d4af37;
          letter-spacing: 3px;
          margin-bottom: 0.4rem;
        }
        .trust-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: #555;
          margin-bottom: 0.6rem;
        }
        .trust-copy {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          color: #333;
        }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </footer>
  );
}
