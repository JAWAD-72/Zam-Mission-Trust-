'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const goToMembership = () => {
    router.push('/membership');
  };

  return (
    <section className="hero">
      <div className="container text-center flex flex-col items-center justify-center" style={{ position: 'relative', zIndex: 1 }}>
        <div className="pill mb-6">YA ZAHRA (SA)</div>
        <h1 className="title mb-6">
          ZAM MISSION CHARITABLE TRUST
        </h1>
        <p className="description mb-12">
          Join our blessed community in supporting religious activities, charitable works, and spiritual gatherings. Your monthly contribution helps us serve the faith and community with dignity and devotion.
        </p>
        <div className="buttons flex gap-4 justify-center">
          <button
            className="btn btn-primary"
            onClick={goToMembership}
            style={{ transition: 'all 0.2s ease' }}
          >
            BECOME A MEMBER
          </button>
          <button
            className="btn btn-outline"
            onClick={goToMembership}
            style={{ transition: 'all 0.2s ease' }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background-color: #050505;
          background-image: radial-gradient(circle at 50% 30%, #1a1605 0%, #000000 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
        }
        /* Background image overlay placeholder - in real app use Next.js Image */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.55)), url('/images/shrine1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: 0;
        }
        .hero-content {
          text-align: center;
          max-width: 800px;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }
        .title {
          font-size: 4rem;
          font-family: 'Cinzel', serif;
          color: #d4af37;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .subtitle {
          font-size: 1.5rem;
          color: #ccc;
          margin-bottom: 2rem;
          font-family: 'Inter', sans-serif;
        }
        .cta-button {
          background: #d4af37;
          color: #000;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        .cta-button:hover {
          background: #b8941f;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </section>
  );
}
