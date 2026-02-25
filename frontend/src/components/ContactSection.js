'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error details: ' + error.message); // Temporary alert for debugging
      setStatus('error');
    }
  };

  return (
    <section className="contact-section py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="title mb-4">CONTACT US</h2>
          <p className="subtitle">
            We're here to answer your questions and assist you
          </p>
        </div>

        <div className="grid">
          {/* Left Column: Contact Info */}
          <div className="info-column">
            <h3 className="column-title mb-8">GET IN TOUCH</h3>

            <div className="contact-card mb-6">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">EMAIL</h4>
                <p> zammissioncharitabletrust@gmail.com</p>

              </div>
            </div>

            <div className="contact-card mb-6">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">PHONE</h4>
                <p>+91 8779559196/+91 75060 69461</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">ADDRESS</h4>
                <p> B1-G5 , SAHYOG BUILDING , NEAR JILANI PARK, </p>
                <p>TALO PALI ROAD ,KAUSA ,</p>
                <p>MUMBRA, THANE -400612</p>
                <p>India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="form-column">
            <h3 className="column-title mb-8">SEND A MESSAGE</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Message subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
              {status === 'error' && <p className="error-msg">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/shrine2.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .title {
          font-size: 3rem;
          color: var(--primary);
          letter-spacing: 2px;
        }
        .subtitle {
          color: #999;
          font-family: 'Inter', sans-serif;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .column-title {
          font-family: 'Cinzel', serif;
          color: var(--primary);
          font-size: 1.1rem;
          letter-spacing: 1px;
          border-bottom: 1px solid #222;
          padding-bottom: 1rem;
          display: inline-block;
          width: 100%;
        }
        
        /* Contact Cards */
        .contact-card {
          display: flex;
          align-items: flex-start;
          background: #050505;
          border: 1px solid #1a1a1a;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }
        .contact-card:hover {
          border-color: var(--primary);
        }
        .icon-box {
          color: var(--primary);
          margin-right: 1.5rem;
          background: rgba(198, 156, 58, 0.1);
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-title {
          font-family: 'Cinzel', serif;
          color: var(--primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }
        .card-content p {
          color: #999;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          margin: 0 0 0.3rem 0;
        }

        /* Form */
        .form-column {
          background: #050505;
          padding: 2rem;
          border: 1px solid #1a1a1a;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          color: var(--primary);
          font-family: 'Cinzel', serif;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        input, textarea {
          width: 100%;
          background: #000;
          border: 1px solid #222;
          padding: 1rem;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        input:focus, textarea:focus {
          border-color: var(--primary);
        }
        .w-full {
          width: 100%;
          margin-top: 1rem;
        }
        .success-msg {
          color: #4caf50;
          margin-top: 1rem;
          font-family: 'Inter', sans-serif;
          text-align: center;
        }
        .error-msg {
          color: #f44336;
          margin-top: 1rem;
          font-family: 'Inter', sans-serif;
          text-align: center;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
