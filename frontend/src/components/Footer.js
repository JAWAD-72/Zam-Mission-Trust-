'use client';

export default function Footer() {
  return (
    <footer className="footer py-16">
      <div className="container">
        <div className="grid">
          <div className="col">
            <h4 className="mb-6 footer-title">
              <span style={{ color: '#ffffff' }}>ZAM MISSON</span>
              <span style={{ color: 'var(--primary)' }}> CHARITABLE TRUST
                REG. NO. E-12614/THANE
              </span>
            </h4>
            <p className="text-muted">Supporting our community through faith, charity, and unity. Every contribution helps us serve better.</p>
          </div>
          <div className="col">
            <h4 className="mb-6 footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Membership Plans</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h4 className="mb-6 footer-title">CONTACT INFO</h4>
            <div className="contact-item">
              <span className="label">Email:</span> <span className="value">zammissioncharitabletrust@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="label">Phone:</span> <span className="value">8779559196</span>
            </div>
            <div className="contact-item">
              <span className="label">Address:</span> <span className="value">B1-G5 , SAHYOG BUILDING , NEAR JILANI PARK, TALO PALI ROAD ,KAUSA ,MUMBRA, THANE -400612</span>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          &copy; {new Date().getFullYear()} Anjuman-e-Bagh-e-Zehra. All rights reserved.
        </div>
      </div>
      <style jsx>{`
        .footer {
          border-top: 1px solid #111;
          background: #000;
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-title {
          font-size: 1rem;
          letter-spacing: 1px;
          color: var(--primary);
        }
        .text-muted {
          color: #888;
          font-size: 0.95rem;
          line-height: 1.8;
          font-family: 'Inter', sans-serif;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: #888;
          transition: color 0.3s;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
        }
        .footer-links a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        .contact-item {
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          color: #888;
        }
        .contact-item .label {
          color: #666;
          margin-right: 0.5rem;
        }
        .contact-item .value {
          color: #aaa;
        }
        .copyright {
          border-top: 1px solid #111;
          padding-top: 2rem;
          font-size: 0.85rem;
          color: #444;
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </footer>
  );
}
