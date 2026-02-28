'use client';

export default function AboutSection() {
  const initiatives = [
    { icon: '🏠', title: 'Housing Support', desc: 'Helping families secure safe shelter and essential living support.' },
    { icon: '🏥', title: 'Healthcare Assistance', desc: 'Providing medical aid and emergency treatment support.' },
    { icon: '🍱', title: 'Food Security', desc: 'Organizing food distribution for families facing hardship.' },
    { icon: '📚', title: 'Education & Skill Development', desc: 'Supporting students and individuals with academic and employment opportunities.' },
    { icon: '💼', title: 'Entrepreneurship Support', desc: 'Encouraging small business initiatives to promote financial independence.' },
    { icon: '💍', title: 'Marriage Aid', desc: 'Providing financial assistance to underprivileged families for marriage support.' },
  ];

  return (
    <section className="about-section">

      {/* ─── SECTION 1: ZAM Mission ─── */}
      <div className="part zam-part">
        <div className="container">
          <div className="section-header text-center">
            <div className="pill">REGISTERED TRUST</div>
            <h2 className="title">ZAM MISSION CHARITABLE TRUST</h2>
            <div className="divider"></div>
            <p className="reg">Reg. No: E-12614 / Thane</p>
          </div>

          <p className="lead-text">
            ZAM Mission Charitable Trust is a registered charitable organization committed to serving humanity with compassion, dignity, and responsibility. Our objective is to support underprivileged individuals and families by addressing essential needs such as housing, healthcare, education, employment, and financial assistance.
          </p>
          <p className="lead-text" style={{ marginTop: '1rem' }}>
            We believe that true charity empowers individuals to become self-sufficient and strengthens the foundation of society.
          </p>

          <div className="two-col">
            <div className="info-card">
              <div className="card-icon">🌍</div>
              <h3 className="card-title">OUR VISION</h3>
              <p className="card-text">To build an inclusive society where every individual has access to basic necessities, equal opportunities, and the support needed to live a secure and fulfilling life.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">OUR MISSION</h3>
              <p className="card-text">To uplift communities through sustainable welfare initiatives including housing assistance, healthcare support, food security, educational aid, skill development, and entrepreneurial guidance.</p>
            </div>
          </div>

          <div className="initiatives-header text-center">
            <h3 className="sub-heading">🏠 KEY INITIATIVES</h3>
          </div>
          <div className="initiatives-grid">
            {initiatives.map((item, i) => (
              <div key={i} className="initiative-card">
                <div className="init-icon">{item.icon}</div>
                <h4 className="init-title">{item.title}</h4>
                <p className="init-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="transparency-box">
            <h3 className="trans-title">🔍 TRANSPARENCY & ACCOUNTABILITY</h3>
            <p className="card-text">We are committed to responsible financial management and transparent utilization of funds. Every contribution directly supports our charitable and community initiatives.</p>
            <span className="reg-badge">Registered Trust – Reg. No: E-12614 / Thane</span>
          </div>
        </div>
      </div>

      {/* ─── DIVIDER ─── */}
      <div className="section-divider"></div>

      {/* ─── SECTION 2: Anjuman ─── */}
      <div className="part anjuman-part">
        <div className="container">
          <div className="section-header text-center">
            <div className="pill">YA ZAHRA (SA)</div>
            <h2 className="title">ANJUMAN BAUG-E-ZEHRA</h2>
            <div className="divider"></div>
          </div>

          <p className="lead-text">
            Anjuman Baug-e-Zehra is a religious organization dedicated to organizing Majalis, Matam, Shabedari, Muharram commemorations, and spiritual gatherings throughout the year. Through these religious programs, the Anjuman promotes faith, unity, and remembrance of the sacred message of Karbala.
          </p>

          <div className="two-col" style={{ marginTop: '2.5rem' }}>
            <div className="info-card">
              <div className="card-icon">🌙</div>
              <h3 className="card-title">RELIGIOUS PROGRAMS</h3>
              <p className="card-text">Organizing Majalis, Matam, Shabedari, Muharram commemorations and year-round spiritual gatherings that strengthen faith and community bonds.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">COLLABORATION</h3>
              <p className="card-text">ZAM Mission Charitable Trust collaborates with Anjuman Baug-e-Zehra to support both social welfare and religious initiatives — ensuring balanced development spiritually and socially.</p>
            </div>
          </div>

          <div className="quote-box text-center">
            <p className="quote">"THE BEST OF PEOPLE ARE THOSE WHO ARE MOST BENEFICIAL TO PEOPLE."</p>
            <p className="author">— PROPHET MUHAMMAD (PBUH)</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: #000;
        }
        .part {
          padding: 5rem 0;
        }
        .zam-part {
          background: linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('/images/rauza.jpg');
          background-size: cover;
          background-position: center;
        }
        .anjuman-part {
          background: linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url('/images/zari.jpg');
          background-size: cover;
          background-position: center;
        }
        .section-divider {
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
        }
        .section-header { margin-bottom: 2.5rem; }
        .pill {
          display: inline-block;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          letter-spacing: 3px;
          padding: 0.3rem 1rem;
          border-radius: 2rem;
          margin-bottom: 1rem;
        }
        .title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--primary);
          letter-spacing: 2px;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }
        .divider {
          width: 80px; height: 3px;
          background: var(--primary);
          margin: 1rem auto;
        }
        .reg { color: #666; font-size: 0.85rem; font-family: 'Inter', sans-serif; }
        .lead-text {
          font-family: 'Inter', sans-serif;
          color: #ccc;
          line-height: 1.9;
          font-size: 1rem;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }
        .info-card {
          border: 1px solid #1a1a1a;
          background: rgba(5,5,5,0.9);
          padding: 2rem;
          border-radius: 4px;
          text-align: center;
          transition: border-color 0.3s;
        }
        .info-card:hover { border-color: var(--primary); }
        .card-icon { font-size: 2rem; margin-bottom: 0.8rem; }
        .card-title {
          font-family: 'Cinzel', serif;
          color: var(--primary);
          font-size: 0.9rem;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
        }
        .card-text {
          font-family: 'Inter', sans-serif;
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.7;
        }
        .initiatives-header { margin: 3rem 0 1.5rem; }
        .sub-heading {
          font-family: 'Cinzel', serif;
          color: var(--primary);
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          letter-spacing: 2px;
        }
        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }
        .initiative-card {
          border: 1px solid #111;
          background: rgba(5,5,5,0.85);
          padding: 1.5rem;
          border-radius: 4px;
          text-align: center;
          transition: border-color 0.3s, transform 0.2s;
        }
        .initiative-card:hover { border-color: var(--primary); transform: translateY(-3px); }
        .init-icon { font-size: 1.8rem; margin-bottom: 0.6rem; }
        .init-title {
          font-family: 'Cinzel', serif;
          color: #d4af37;
          font-size: 0.82rem;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        .init-desc {
          font-family: 'Inter', sans-serif;
          color: #888;
          font-size: 0.82rem;
          line-height: 1.6;
        }
        .transparency-box {
          border: 1px solid #1a1a1a;
          border-left: 3px solid var(--primary);
          background: rgba(5,5,5,0.9);
          padding: 2rem;
          text-align: center;
        }
        .trans-title {
          font-family: 'Cinzel', serif;
          color: var(--primary);
          font-size: 1rem;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
        }
        .reg-badge {
          display: inline-block;
          margin-top: 1rem;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.2);
          color: var(--primary);
          padding: 0.4rem 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          border-radius: 2px;
        }
        .quote-box {
          margin-top: 3rem;
          border-top: 1px solid #1a1a1a;
          padding-top: 2.5rem;
        }
        .quote {
          font-family: 'Cinzel', serif;
          color: var(--primary);
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          letter-spacing: 1px;
          line-height: 1.7;
          font-style: italic;
        }
        .author {
          color: #666;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          margin-top: 0.8rem;
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr; }
          .initiatives-grid { grid-template-columns: 1fr 1fr; }
          .part { padding: 3rem 0; }
        }
        @media (max-width: 480px) {
          .initiatives-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
