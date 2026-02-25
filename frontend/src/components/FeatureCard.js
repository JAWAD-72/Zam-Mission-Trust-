'use client';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="card">
      <div className="icon-wrapper mb-6">
        {icon}
      </div>
      <h3 className="card-title mb-4">{title}</h3>
      <p className="card-desc">{description}</p>
      <style jsx>{`
        .card {
          border: 1px solid #1a1a1a;
          padding: 2.5rem 2rem;
          background: #050505;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }
        .card:hover {
          border-color: #333;
          background: #0a0a0a;
          transform: translateY(-5px);
        }
        .icon-wrapper {
          color: var(--primary);
          width: 50px;
          height: 50px;
          border: 1px solid #222;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          font-size: 1.2rem;
        }
        .card-title {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          color: #e5e5e5;
          font-weight: 600;
        }
        .card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #888;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
