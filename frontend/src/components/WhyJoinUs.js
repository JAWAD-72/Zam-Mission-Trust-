'use client';

import FeatureCard from './FeatureCard';

export default function WhyJoinUs() {
    const features = [
        {
            title: "Charitable Works",
            description: "Support food distribution, medical aid, and financial assistance to those in need within our community.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            )
        },
        {
            title: "Majlis & Gatherings",
            description: "Fund religious programs, Muharram commemorations, and spiritual gatherings throughout the year.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            title: "100% Transparent",
            description: "Track every contribution through your dashboard. Complete transparency in how funds are utilized.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
            )
        },
        {
            title: "Secure Payments",
            description: "Safe and secure auto-debit subscriptions ",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 why-join-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-heading" style={{ marginBottom: '1rem', letterSpacing: '1px' }}>WHY JOIN US</h2>
                    <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
                        Be part of a blessed community dedicated to faith and service
                    </p>
                </div>
                <div className="grid">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
            <style jsx>{`
        .why-join-section {
          background: #050505;
        }
        .section-heading {
          font-size: clamp(1.8rem, 4vw, 3rem);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        @media (max-width: 480px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}
