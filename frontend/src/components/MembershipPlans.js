'use client';

import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function MembershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', customAmount: '' });
  const [status, setStatus] = useState('');
  const [step, setStep] = useState('details'); // details | payment

  const plans = [
    {
      name: "BASIC",
      price: "100",
      description: "Support essential community services",
      features: ["Monthly contribution of ₹100", "Support charitable activities", "Access to community events", "Monthly newsletter"]
    },
    {
      name: "MEDIUM",
      price: "200",
      description: "Enhanced support for religious programs",
      isPopular: true,
      features: ["Monthly contribution of ₹200", "Support religious gatherings", "Priority event notifications", "Recognition in annual report", "All Basic benefits"]
    },
    {
      name: "MODERATE",
      price: "500",
      description: "Significant impact on community welfare",
      features: ["Monthly contribution of ₹500", "Major program sponsorship", "Special invitations to events", "Personalized impact reports", "All Supporter benefits"]
    },
    {
      name: "HIGH",
      price: "1000",
      description: "Leading the path of community service",
      features: ["Monthly contribution of ₹1000", "Premium event access", "Direct consultation opportunities", "Legacy donor recognition", "All Patron benefits"]
    },
    {
      name: "SADQA",
      price: "Variable",
      description: "Give according to your will",
      features: ["One-time contribution", "Choose your own amount", "Support community initiatives", "No auto-debit", "Full membership benefits"]
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setFormData({ name: '', email: '', phone: '', customAmount: '' });
    setStatus('');
    setStep('details');
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
    setStep('details');
    setStatus('');
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all details");
      return;
    }
    if (selectedPlan.name === 'SADQA' && !formData.customAmount) {
      alert("Please enter an amount");
      return;
    }
    setStep('payment');
  };

  const handleSubmit = async () => {
    // Instant UI feedback
    setStatus('loading');

    // Generate a Transaction ID immediately
    const transactionId = 'TXN_' + Date.now() + '_' + Math.floor(Math.random() * 1000);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        plan: selectedPlan.name,
        amount: selectedPlan.name === 'SADQA' ? formData.customAmount : selectedPlan.price,
        paymentId: transactionId
      };

      // Use Promise with timeout for faster perceived performance
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const res = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        // Reset form after shorter delay
        setTimeout(() => {
          setSelectedPlan(null);
          setStep('details');
          setFormData({ name: '', email: '', phone: '', customAmount: '' });
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      // Auto-hide error after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }
  };

  // UPI Configuration
  const upiId = "327527012449695@cnrb";
  const payAmount = selectedPlan ? (selectedPlan.name === 'SADQA' ? formData.customAmount : selectedPlan.price) : '0';
  const upiUrl = `upi://pay?pa=${upiId}&pn=Anjuman&am=${payAmount}&cu=INR`;

  return (
    <section id="membership-section" className="membership-section py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="title mb-4">MEMBERSHIP PLANS</h2>
          <p className="subtitle">Choose a plan that resonates with your commitment.</p>
        </div>

        <div className="grid mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">MOST POPULAR</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>
              <div className="price-wrapper mb-6">
                <span className="currency">₹</span>
                <span className="price">{plan.price === 'Variable' ? 'Any' : plan.price}</span>
                <span className="period">{plan.name === 'SAKTA' ? '' : '/ mo'}</span>
              </div>
              <ul className="features-list mb-8">
                {plan.features.map((f, i) => <li key={i}><span className="check">✓</span>{f}</li>)}
              </ul>
              <button
                className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline-gold'}`}
                onClick={() => handleSelectPlan(plan)}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedPlan && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-btn" onClick={handleCloseModal}>×</button>

              {status === 'success' ? (
                <div className="success-view">
                  <div className="check-icon">✓</div>
                  <h3>Payment Successful!</h3>
                  <p className="mb-2">Your membership details have been saved.</p>
                  <p className="text-xs text-gray-500 font-mono">Ref ID: TXN_SAVED</p>
                </div>
              ) : step === 'payment' ? (
                // PAYMENT STEP
                <div className="payment-step">
                  <h3 className="modal-title text-center mb-4">COMPLETE PAYMENT</h3>
                  <div className="amount-display mb-6 text-center">
                    <p className="text-gray-400 text-sm">Amount to Pay</p>
                    <p className="text-3xl font-bold gold-text">₹{payAmount}</p>
                  </div>

                  <div className="scan-header mb-6">
                    <div className="scan-label">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                      </svg>
                      SCAN &amp; PAY VIA UPI
                    </div>
                  </div>

                  <div className="qr-container flex flex-col items-center mb-6 bg-white p-4 rounded-lg">
                    <QRCodeCanvas value={upiUrl} size={200} />
                    <p className="text-black text-xs mt-2 font-mono">{upiId}</p>
                  </div>

                  <p className="text-center text-xs text-gray-500 mb-6">
                    Scan with any UPI App (GPay, Paytm, PhonePe)
                  </p>

                  <div className="quick-pay-options grid grid-cols-2 gap-3 mb-6">
                    <a href={upiUrl} className="btn-app gpay">Google Pay</a>
                    <a href={upiUrl} className="btn-app paytm">Paytm</a>
                    <a href={upiUrl} className="btn-app phonepe">PhonePe</a>
                    <a href={upiUrl} className="btn-app upi">Other UPI</a>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary w-full mb-3"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'VERIFYING...' : 'I HAVE PAID'}
                  </button>

                  <button
                    onClick={() => setStep('details')}
                    className="btn-back-details"
                  >
                    ← Back to Details
                  </button>
                </div>
              ) : (
                // DETAILS STEP
                <>
                  <h3 className="modal-title">JOIN {selectedPlan.name} PLAN</h3>
                  <p className="modal-subtitle">
                    {selectedPlan.name === 'SADQA'
                      ? 'Enter your one-time contribution below'
                      : <>Monthly Contribution: <span className="gold-text">₹{selectedPlan.price}</span></>
                    }
                  </p>

                  <form onSubmit={handleProceedToPayment}>
                    {selectedPlan.name === 'SADQA' && (
                      <div className="form-group">
                        <label>One-time Amount (₹)</label>
                        <input
                          type="number"
                          required
                          min="1"
                          value={formData.customAmount}
                          onChange={e => setFormData({ ...formData, customAmount: e.target.value })}
                          placeholder="Enter amount (e.g. 50, 150, 5000)"
                          style={{ borderColor: '#d4af37' }}
                        />
                      </div>
                    )}

                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {status === 'error' && <p className="error-text">Something went wrong. Please try again.</p>}

                    <button type="submit" className="btn btn-primary w-full">
                      PROCEED TO PAYMENT
                    </button>
                    <p className="disclaimer">Secure Payment via UPI</p>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .membership-section { 
          background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/shrine1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #fff; 
        }
        .title { color: #d4af37; font-size: clamp(1.8rem, 4vw, 3rem); font-family: 'Cinzel', serif; }
        .subtitle { color: #999; font-family: 'Inter', sans-serif; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; }
        .plan-card { border: 1px solid #1a1a1a; background: #050505; padding: 2rem; position: relative; transition: all 0.3s; display: flex; flex-direction: column; }
        .plan-card:hover { border-color: #d4af37; transform: translateY(-5px); }
        .plan-card.popular { border-color: #d4af37; background: linear-gradient(180deg, rgba(198, 156, 58, 0.05) 0%, #050505 100%); transform: scale(1.05); z-index: 2; }
        .popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #d4af37; color: #000; font-size: 0.7rem; font-weight: 700; padding: 4px 12px; border-radius: 12px; }
        .plan-name { font-family: 'Cinzel', serif; color: #d4af37; margin-bottom: 0.5rem; }
        .plan-desc { color: #666; font-size: 0.85rem; margin-bottom: 1rem; height: 40px; }
        .price-wrapper { color: #fff; display: flex; align-items: baseline; }
        .price { font-size: 2.5rem; font-family: 'Cinzel', serif; color: #d4af37; }
        .currency { font-size: 1.5rem; color: #d4af37; margin-right: 2px; }
        .features-list { list-style: none; padding: 0; flex-grow: 1; }
        .features-list li { color: #ccc; font-size: 0.9rem; margin-bottom: 0.8rem; display: flex; }
        .check { color: #d4af37; margin-right: 10px; }
        .btn-outline-gold { background: transparent; border: 1px solid #332b10; color: #887a4c; width: 100%; padding: 1rem; cursor: pointer; }
        .btn-outline-gold:hover { border-color: #d4af37; color: #d4af37; }
        .w-full { width: 100%; }

        /* Modal Styles */
        .modal-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            display: flex; align-items: center; justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        .modal-content {
            background: #0a0a0a;
            border: 1px solid #333;
            padding: 2.5rem;
            width: 100%; max-width: 450px;
            position: relative;
            box-shadow: 0 0 50px rgba(212, 175, 55, 0.1);
            max-height: 90vh;
            overflow-y: auto;
        }
        @media (max-width: 768px) {
          .modal-overlay { align-items: flex-end; }
          .modal-content { max-width: 100%; border-radius: 16px 16px 0 0; padding: 2rem 1.2rem; max-height: 85vh; }
          .grid { grid-template-columns: 1fr !important; }
          .plan-card.popular { transform: scale(1); }
        }
        .close-btn {
            position: absolute; top: 1rem; right: 1rem;
            background: none; border: none; color: #666;
            font-size: 1.5rem; cursor: pointer;
        }
        .modal-title { color: #d4af37; font-family: 'Cinzel', serif; margin-bottom: 0.5rem; letter-spacing: 1px; font-size: 1.5rem; }
        .modal-subtitle { color: #888; font-family: 'Inter', sans-serif; margin-bottom: 2rem; }
        .gold-text { color: #d4af37; font-weight: 600; }
        
        .form-group { margin-bottom: 1.2rem; }
        label { display: block; color: #bbb; margin-bottom: 0.5rem; font-size: 0.85rem; }
        input {
            width: 100%; background: #000; border: 1px solid #333;
            padding: 0.8rem; color: #fff; outline: none;
            font-family: 'Inter', sans-serif;
        }
        input:focus { border-color: #d4af37; }
        .disclaimer { color: #555; font-size: 0.75rem; margin-top: 1rem; text-align: center; }
        
        .success-view { text-align: center; padding: 2rem 0; }
        .check-icon { font-size: 3rem; color: #4caf50; margin-bottom: 1rem; }
        .error-text { color: red; font-size: 0.9rem; margin-bottom: 1rem; }

        /* Payment Styles */
        .scan-header {
            border-bottom: 1px solid #1e1e1e;
            padding-bottom: 0.75rem;
        }
        .scan-label {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #d4af37;
            font-family: 'Cinzel', serif;
            font-size: 0.8rem;
            letter-spacing: 1.5px;
            font-weight: 700;
            border-bottom: 2px solid #d4af37;
            padding-bottom: 0.75rem;
            margin-bottom: -0.75rem;
        }
        .btn-app {
            display: block;
            text-align: center;
            padding: 0.8rem;
            border-radius: 4px;
            background: #111;
            border: 1px solid #2a2a2a;
            color: #ccc;
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.2s;
        }
        .btn-app:hover { border-color: #d4af37; color: #d4af37; background: rgba(212,175,55,0.05); }
        .btn-back-details {
            width: 100%;
            margin-top: 0.5rem;
            padding: 0.75rem 1rem;
            background: transparent;
            border: 1px solid #2a2a2a;
            color: #666;
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            text-transform: none;
        }
        .btn-back-details:hover { border-color: #555; color: #ccc; }
        .text-gold { color: #d4af37; }
        .border-gold { border-color: #d4af37; }
      `}</style>
    </section>
  );
}
