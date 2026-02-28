'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const goToMembership = () => router.push('/membership');

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="pill mb-6">YA ZAHRA (SA)</div>
        <h1 className="title mb-6">ZAM MISSION CHARITABLE TRUST</h1>
        <p className="description mb-12">
          Supporting Faith. Serving Humanity. Empowering Communities.
        </p>
        <p className="description mb-12">
          Zam Mission Charitable Trust is dedicated to social welfare and community development. Through housing support, healthcare assistance, education programs, employment initiatives, and religious services, we strive to uplift individuals and strengthen families with dignity and compassion.
        </p>
        <div className="buttons">
          <button className="btn btn-primary" onClick={goToMembership}>BECOME A SUPPORTER</button>

        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background-color: #050505;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 1.5rem 3rem;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.55)), url('/images/hussain.jpg');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
        }
        .pill {
          display: inline-block;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 3px;
          padding: 0.4rem 1.2rem;
          border-radius: 2rem;
          margin-bottom: 1.5rem;
        }
        .title {
          font-size: clamp(1.8rem, 5vw, 4rem);
          font-family: 'Cinzel', serif;
          color: #d4af37;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .description {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: #ccc;
          line-height: 1.8;
          font-family: 'Inter', sans-serif;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          padding: 0 0.5rem;
        }
        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .buttons { flex-direction: column; align-items: center; }
          .buttons .btn { width: 100%; max-width: 280px; }
        }
      `}</style>
    </section>
  );
}
