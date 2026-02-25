'use client';

import { useRouter } from 'next/navigation';

export default function CallToAction() {
  const router = useRouter();

  const goToMembership = () => {
    router.push('/membership');
  };

  return (
    <section className="cta-section py-24">
      <div className="container text-center">
        <h2 className="title mb-6">READY TO MAKE A DIFFERENCE?</h2>
        <p className="subtitle mb-8">
          Join hundreds of community members in supporting our noble cause
        </p>
        <button className="btn btn-primary" onClick={goToMembership}>VIEW MEMBERSHIP PLANS</button>
      </div>
      <style jsx>{`
        .cta-section {
          background: linear-gradient(180deg, #000000 0%, #050505 100%);
        }
        .title {
          font-size: 3rem;
          line-height: 1.2;
          color: var(--primary);
          letter-spacing: 1px;
        }
        .description {
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          color: #999;
          font-family: 'Inter', sans-serif;
          line-height: 1.7;
          margin-bottom: 3rem;
        }
      `}</style>
    </section>
  );
}
