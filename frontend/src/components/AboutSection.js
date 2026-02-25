'use client';

export default function AboutSection() {
  return (
    <section className="about-section py-24">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="title">ABOUT ANJUMAN-E-BAGH-E-ZEHRA</h2>
          <div className="divider"></div>
        </div>

        <div className="content-box">
          <p className="description mb-8">
            Anjuman-e-Bagh-e-Zehra is a religious organization dedicated to serving the Shia Muslim community through faith, charity, and unity. Named in honor of Bibi Fatima Zahra (SA), our organization carries forward the blessed legacy of compassion, service, and devotion.
          </p>

          <div className="subsection mb-8">
            <h3 className="subtitle mb-4">OUR MISSION</h3>
            <p className="text">
              We strive to create a supportive and spiritually enriching environment for our community members. Through regular religious gatherings, charitable activities, and educational programs, we aim to strengthen faith and foster unity among believers.
            </p>
          </div>

          <div className="subsection mb-8">
            <h3 className="subtitle mb-4">WHAT WE DO</h3>
            <ul className="list">
              <li>
                <span className="highlight">Religious Programs:</span> Organize Majlis, Milad, and commemorations of Muharram and other significant Islamic events.
              </li>
              <li>

                <span className="highlight">Charitable Services:</span> Provide food, medical assistance, and financial support to underprivileged community members.
              </li>
              <li>
                <span className="highlight">Educational Initiatives:</span> Conduct Islamic education classes for children and adults to strengthen understanding of faith.
              </li>
              <li>
                <span className="highlight">Community Support:</span> Create a network of mutual assistance and brotherhood among community members.
              </li>
            </ul>
          </div>

          <div className="subsection mb-12">
            <h3 className="subtitle mb-4">WHY YOUR SUPPORT MATTERS</h3>
            <p className="text">
              Your monthly contribution is an act of Sadaqah Jariyah (continuous charity) that benefits the entire community. Every rupee donated helps us maintain our religious spaces, support those in need, and keep our spiritual traditions alive for future generations.
            </p>
          </div>

          <div className="quote-box text-center">
            <p className="quote">"THE BEST OF PEOPLE ARE THOSE WHO ARE MOST BENEFICIAL TO PEOPLE."</p>
            <p className="author">- PROPHET MUHAMMAD (PBUH)</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/images/shrine2.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .title {
          font-size: 2.5rem;
          color: var(--primary);
          letter-spacing: 2px;
          line-height: 1.2;
        }
        .divider {
          width: 100px;
          height: 3px;
          background-color: var(--primary);
          margin: 1.5rem auto 0;
        }
        .content-box {
          max-width: 900px;
          margin: 0 auto;
          border: 1px solid #1a1a1a;
          padding: 4rem;
          background: #050505; /* Slightly lighter black for contrast if needed, or keep 000 */
          background-image: radial-gradient(circle at top right, rgba(198, 156, 58, 0.03), transparent 40%);
        }
        .description, .text {
          font-family: 'Inter', sans-serif;
          color: #cccccc;
          line-height: 1.8;
          font-size: 1rem;
        }
        .subtitle {
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
        }
        .stat-number {
          font-size: 2.5rem;
          color: #d4af37;
          font-family: 'Cinzel', serif;
          font-weight: 700;
        }
        .stat-label {
          color: #888;
          margin-top: 0.5rem;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
