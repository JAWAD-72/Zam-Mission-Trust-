'use client';

export default function TransparencySection() {
    const items = [
        { icon: '📋', title: 'Registered Trust', desc: 'Reg. No: E-12614 / Thane — officially registered and legally recognized.' },
        { icon: '💰', title: 'Transparent Fund Utilization', desc: 'Every rupee is accounted for and directed to the intended welfare purpose.' },
        { icon: '🔒', title: 'Secure Online Payments', desc: 'All transactions are processed through secured and trusted UPI payment systems.' },
        { icon: '🛡️', title: 'Donor Privacy Protection', desc: 'Your personal and financial information is kept strictly confidential.' },
        { icon: '📊', title: 'Annual Reporting', desc: 'Financial and activity reports are prepared and shared where applicable.' },
    ];

    return (
        <section className="transparency-section">
            <div className="container">
                <div className="header text-center">
                    <div className="pill">OUR COMMITMENT</div>
                    <h2 className="title">TRANSPARENCY & ACCOUNTABILITY</h2>
                    <div className="divider"></div>
                    <p className="subtitle">
                        ZAM Mission Charitable Trust is committed to responsible and transparent management of all contributions.
                    </p>
                </div>

                <div className="grid">
                    {items.map((item, i) => (
                        <div key={i} className="card">
                            <div className="icon">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="reg-badge text-center">
                    <span>🏛️ Registered Charitable Trust — Reg. No: E-12614 / Thane</span>
                </div>
            </div>

            <style jsx>{`
        .transparency-section {
          background: #000;
          padding: 5rem 0;
          border-top: 1px solid #1a1500;
        }
        .header { margin-bottom: 3rem; }
        .pill {
          display: inline-block;
          border: 1px solid var(--primary, #d4af37);
          color: var(--primary, #d4af37);
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 3px;
          padding: 0.3rem 1rem;
          border-radius: 2rem;
          margin-bottom: 1rem;
        }
        .title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #d4af37;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }
        .divider {
          width: 60px;
          height: 2px;
          background: #d4af37;
          margin: 1rem auto;
        }
        .subtitle {
          color: #777;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }
        .card {
          background: linear-gradient(180deg, #0a0800 0%, #000 100%);
          border: 1px solid #1a1500;
          padding: 1.8rem 1.4rem;
          text-align: center;
          transition: border-color 0.3s, transform 0.3s;
        }
        .card:hover {
          border-color: #d4af37;
          transform: translateY(-4px);
        }
        .icon { font-size: 2rem; margin-bottom: 0.8rem; }
        .card-title {
          font-family: 'Cinzel', serif;
          color: #d4af37;
          font-size: 0.82rem;
          letter-spacing: 1px;
          margin-bottom: 0.7rem;
        }
        .card-desc {
          font-family: 'Inter', sans-serif;
          color: #777;
          font-size: 0.82rem;
          line-height: 1.6;
        }
        .reg-badge {
          border-top: 1px solid #111;
          padding-top: 1.8rem;
          color: #555;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.5px;
        }
        .reg-badge span { color: #666; }
        @media (max-width: 600px) {
          .grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}
