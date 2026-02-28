'use client';

import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function MembershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', customAmount: '' });
  const [status, setStatus] = useState('');
  const [step, setStep] = useState('details');
  const [sadqaAmount, setSadqaAmount] = useState('');
  const [sadqaType, setSadqaType] = useState('one-time');
  const [sadqaStep, setSadqaStep] = useState('form');
  const [sadqaDetails, setSadqaDetails] = useState({ name: '', email: '', phone: '' });
  const [azadariAmount, setAzadariAmount] = useState('');
  const [azadariType, setAzadariType] = useState('one-time');

  const plans = [
    {
      name: "SUPPORTER",
      price: "100",
      period: "/ month (auto-pay)",
      description: "Supporting essential community welfare activities.",
      features: ["Contributes to general trust welfare", "Supports food & basic assistance", "Strengthens community initiatives"]
    },
    {
      name: "CONTRIBUTOR",
      price: "200",
      period: "/ month (auto-pay)",
      description: "Helping expand food distribution and social support programs.",
      features: ["Supports widows & orphans", "Community welfare programs", "Monthly contribution impact"]
    },
    {
      name: "COMMUNITY PARTNER",
      price: "500",
      period: "/ month (auto-pay)",
      description: "Making a meaningful and consistent impact in community welfare.",
      isPopular: true,
      features: ["Food & essential distribution", "Medical assistance support", "Emergency relief contribution"]
    },
    {
      name: "PATRON SUPPORTER",
      price: "1000",
      period: "/ month (auto-pay)",
      description: "Providing strong support for major welfare and emergency initiatives.",
      features: ["High-impact community support", "Medical & urgent assistance", "Sustained welfare contribution"]
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
    if ((selectedPlan.name === 'SADQA' || selectedPlan.name === 'AZADARI') && !formData.customAmount) {
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
        amount: (selectedPlan.name === 'SADQA' || selectedPlan.name === 'AZADARI') ? formData.customAmount : selectedPlan.price,
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
  const payeeName = encodeURIComponent('ZAM MISSION TRUST');
  const txNote = encodeURIComponent('Membership Payment');
  const payAmount = selectedPlan ? (selectedPlan.name === 'SADQA' ? formData.customAmount : selectedPlan.price) : '0';
  const amountParam = parseFloat(payAmount || 0).toFixed(2);
  const transactionRef = 'TXN' + Date.now();

  // UPI URL with tr (transaction ref) — no mc param
  const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amountParam}&cu=INR&tn=${txNote}&tr=${transactionRef}`;

  return (
    <section id="membership-section" className="membership-section">
      <div className="container">
        <div className="text-center section-top">
          <h2 className="title">SUPPORT PLANS</h2>
          <p className="subtitle">Choose a monthly contribution to strengthen our welfare initiatives<br />of ZAM Mission Charitable Trust.</p>
        </div>

        <div className="grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">MOST<br />RECOMMENDED</div>}
              <div className="price-block">
                <span className="currency">₹</span>
                <span className="price">{plan.price === 'Variable' ? 'Any' : plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <h3 className="plan-name">{plan.name}</h3>
              <ul className="features-list">
                {plan.features.map((f, i) => <li key={i}><span className="check">✓</span>{f}</li>)}
              </ul>
              <button
                className="contribute-btn"
                onClick={() => handleSelectPlan(plan)}
              >
                {plan.price === 'Variable' ? 'CONTRIBUTE NOW' : 'CONTRIBUTE MONTHLY'}
              </button>
            </div>
          ))}
        </div>

        {/* ─── GIVE SADQA SECTION ─── */}
        <div className="sadqa-section">
          <div className="sadqa-header text-center">
            <h2 className="sadqa-title">GIVE SADQA</h2>
            <p className="sadqa-sub"><em>Flexible Contribution</em></p>
            <div className="sadqa-divider">◆</div>
          </div>

          <div className="sadqa-card">
            <p className="sadqa-desc">Support urgent needs and community assistance with your chosen amount.</p>

            <div className="sadqa-input-row">
              <span className="sadqa-rupee">₹</span>
              <input
                type="number"
                min="1"
                className="sadqa-input"
                placeholder="₹  Enter Custom Amount"
                value={sadqaAmount}
                onChange={e => setSadqaAmount(e.target.value)}
              />
            </div>

            <div className="sadqa-radio-row">
              <label className="sadqa-radio">
                <input type="radio" name="sadqaType" value="one-time" checked={sadqaType === 'one-time'} onChange={() => setSadqaType('one-time')} />
                <span>One-Time</span>
              </label>
              <label className="sadqa-radio">
                <input type="radio" name="sadqaType" value="monthly" checked={sadqaType === 'monthly'} onChange={() => setSadqaType('monthly')} />
                <span>Monthly</span>
              </label>
            </div>

            <button
              className="sadqa-btn"
              onClick={() => {
                if (!sadqaAmount) { alert('Please enter an amount'); return; }
                const sadqaPlan = { name: 'SADQA', price: 'Variable', period: sadqaType };
                setFormData({ name: '', email: '', phone: '', customAmount: sadqaAmount });
                setSelectedPlan(sadqaPlan);
                setStep('details');
              }}
            >
              GIVE SADQA NOW
            </button>

            <div className="sadqa-virtue">
              <p className="virtue-title">✦ <em>The Virtue of Sadqa</em></p>
              <p className="virtue-text">Sadqa brings blessings, removes hardships, and protects from difficulties.<br />Your contribution becomes a source of relief and hope for families in need.</p>
              <div className="virtue-features">
                <span><span className="vcheck">✓</span> Emergency family support</span>
                <span><span className="vcheck">✓</span> Food &amp; essential assistance</span>
                <span><span className="vcheck">✓</span> Flexible giving option</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── AZADARI SECTION ─── */}
        <div className="sadqa-section azadari-section">
          <div className="sadqa-header text-center">
            <h2 className="sadqa-title az-title">🕯️ SUPPORT AZADARI</h2>
            <p className="sadqa-sub"><em>Azadari-e-Imam Hussain (A.S.)</em></p>
            <p className="az-meta">Organized in Collaboration with <strong>Anjuman Baugh-e-Zehra</strong></p>
            <p className="az-meta">Supported &amp; Managed by <strong>ZAM Mission Charitable Trust</strong></p>
            <div className="sadqa-divider">◆</div>
          </div>

          <div className="sadqa-card az-card">
            <p className="sadqa-desc">Enter Your Contribution <span className="optional">(Optional)</span></p>

            <div className="sadqa-input-row">
              <span className="sadqa-rupee">₹</span>
              <input
                type="number"
                min="1"
                className="sadqa-input"
                placeholder="₹  Enter Custom Amount"
                value={azadariAmount}
                onChange={e => setAzadariAmount(e.target.value)}
              />
            </div>

            <div className="sadqa-radio-row">
              <label className="sadqa-radio">
                <input type="radio" name="azadariType" value="one-time" checked={azadariType === 'one-time'} onChange={() => setAzadariType('one-time')} />
                <span>One-Time</span>
              </label>
              <label className="sadqa-radio">
                <input type="radio" name="azadariType" value="monthly" checked={azadariType === 'monthly'} onChange={() => setAzadariType('monthly')} />
                <span>Monthly</span>
              </label>
            </div>

            <button
              className="sadqa-btn az-btn"
              onClick={() => {
                const azPlan = { name: 'AZADARI', price: 'Variable', period: azadariType };
                setFormData({ name: '', email: '', phone: '', customAmount: azadariAmount || '' });
                setSelectedPlan(azPlan);
                setStep('details');
              }}
            >
              🔶 SUPPORT AZADARI
            </button>

            <div className="az-info-grid">
              <div className="az-info-box">
                <p className="virtue-title">✨ Purpose of Your Contribution</p>
                <p className="virtue-text" style={{ marginBottom: '0.8rem' }}>Your support helps in organizing:</p>
                <div className="virtue-features" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span><span className="vcheck">✔</span> Majlis</span>
                  <span><span className="vcheck">✔</span> Shabedari</span>
                  <span><span className="vcheck">✔</span> Mehfil</span>
                  <span><span className="vcheck">✔</span> Community religious arrangements</span>
                </div>
              </div>
              <div className="az-info-box">
                <p className="virtue-title">🌙 Virtue of Supporting Azadari</p>
                <p className="virtue-text">Azadari-e-Imam Hussain (A.S.) preserves the eternal message of Karbala — sacrifice, patience, and justice. Contributing towards it is a source of spiritual reward and strengthens unity within the community.</p>
              </div>
            </div>

            <div className="az-trust">
              <span>🔒</span>
              <span>All contributions are managed with transparency under <strong>ZAM Mission Charitable Trust</strong> (Reg. No: E-12614 / Thane)</span>
            </div>
          </div>
        </div>

        {/* ─── TRUST BAR ─── */}
        <div className="trust-bar">
          <span>Registered Trust (Reg. No: E-12614 / Thane)</span>
          <span className="dot">•</span>
          <span>Transparent &amp; Accountable</span>
          <span className="dot">•</span>
          <span>Community Focused</span>
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
                  <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', margin: '0 auto 1.5rem' }}>
                    <QRCodeCanvas value={upiUrl} size={210} bgColor="#ffffff" fgColor="#000000" level="H" />
                    <p style={{ color: '#000', fontSize: '0.75rem', marginTop: '0.6rem', fontFamily: 'monospace' }}>{upiId}</p>
                  </div>
                  <p className="text-center text-xs text-gray-500 mb-6">Scan with any UPI App (GPay, Paytm, PhonePe)</p>
                  <div className="quick-pay-options grid grid-cols-2 gap-3 mb-6">
                    <a href={upiUrl} className="btn-app gpay">Google Pay</a>
                    <a href={upiUrl} className="btn-app paytm">Paytm</a>
                    <a href={upiUrl} className="btn-app phonepe">PhonePe</a>
                    <a href={upiUrl} className="btn-app upi">Other UPI</a>
                  </div>
                  <button onClick={handleSubmit} className="btn btn-primary w-full mb-3" disabled={status === 'loading'}>
                    {status === 'loading' ? 'VERIFYING...' : 'I HAVE PAID'}
                  </button>
                  <button onClick={() => setStep('details')} className="btn-back-details">← Back to Details</button>
                </div>
              ) : (
                <>
                  <h3 className="modal-title">JOIN {selectedPlan.name} PLAN</h3>
                  <p className="modal-subtitle">
                    {(selectedPlan.name === 'SADQA' || selectedPlan.name === 'AZADARI')
                      ? 'Enter your one-time contribution below'
                      : <>Monthly Contribution: <span className="gold-text">₹{selectedPlan.price}</span></>
                    }
                  </p>
                  <form onSubmit={handleProceedToPayment}>
                    {(selectedPlan.name === 'SADQA' || selectedPlan.name === 'AZADARI') && (
                      <div className="form-group">
                        <label>Amount (₹)</label>
                        <input type="number" required min="1" value={formData.customAmount}
                          onChange={e => setFormData({ ...formData, customAmount: e.target.value })}
                          placeholder="Enter amount" style={{ borderColor: '#d4af37' }} />
                      </div>
                    )}
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" required value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" required value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" required value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number" />
                    </div>
                    {status === 'error' && <p className="error-text">Something went wrong. Please try again.</p>}
                    <button type="submit" className="btn btn-primary w-full">PROCEED TO PAYMENT</button>
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
          background: linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('/images/R.jpg');
          background-size: cover;
          background-position: center;
          padding: 5rem 0 3rem;
          color: #fff;
        }
        .section-top { margin-bottom: 3rem; }
        .title { color: #d4af37; font-size: clamp(1.8rem, 4vw, 2.8rem); font-family: 'Cinzel', serif; letter-spacing: 3px; margin-bottom: 1rem; }
        .subtitle { color: #aaa; font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.7; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.2rem; margin-bottom: 2.5rem; }
        .plan-card {
          border: 1px solid #2a2200;
          background: linear-gradient(180deg, #0d0b00 0%, #000 100%);
          padding: 1.8rem 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, transform 0.3s;
          border-radius: 2px;
        }
        .plan-card:hover { border-color: #d4af37; transform: translateY(-4px); }
        .plan-card.popular {
          border: 2px solid #d4af37;
          background: linear-gradient(180deg, #120e00 0%, #000 100%);
          transform: scale(1.03);
          z-index: 2;
        }
        .popular-badge {
          position: absolute; top: -1px; right: -1px;
          background: #d4af37; color: #000;
          font-size: 0.6rem; font-weight: 800;
          padding: 6px 10px; line-height: 1.3;
          font-family: 'Cinzel', serif;
          letter-spacing: 1px;
          text-align: center;
        }
        .price-block { margin-bottom: 0.8rem; }
        .currency { font-size: 1.3rem; color: #d4af37; font-family: 'Cinzel', serif; vertical-align: top; margin-top: 6px; display: inline-block; }
        .price { font-size: 2.8rem; color: #d4af37; font-family: 'Cinzel', serif; line-height: 1; }
        .period { display: block; color: #777; font-size: 0.78rem; font-family: 'Inter', sans-serif; margin-top: 0.2rem; }
        .plan-name {
          font-family: 'Cinzel', serif;
          color: #d4af37;
          font-size: 0.95rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          margin-top: 0.2rem;
          border-bottom: 1px solid #1a1500;
          padding-bottom: 0.8rem;
        }
        .features-list { list-style: none; padding: 0; margin: 0 0 1.5rem; flex-grow: 1; }
        .features-list li { color: #bbb; font-size: 0.85rem; margin-bottom: 0.7rem; display: flex; align-items: flex-start; font-family: 'Inter', sans-serif; line-height: 1.4; }
        .check { color: #d4af37; margin-right: 8px; flex-shrink: 0; }
        .contribute-btn {
          width: 100%;
          padding: 0.75rem;
          background: linear-gradient(135deg, #d4af37 0%, #aa8c2c 100%);
          border: none;
          color: #000;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: auto;
          box-shadow: 0 4px 15px rgba(212,175,55,0.2);
        }
        .contribute-btn:hover { background: #fff; color: #000; box-shadow: 0 4px 20px rgba(255,255,255,0.3); }
        .plan-card.popular .contribute-btn { outline: 2px solid rgba(212,175,55,0.5); outline-offset: 2px; }
        .trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: #666;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          padding-top: 1.5rem;
          border-top: 1px solid #111;
          flex-wrap: wrap;
          text-align: center;
        }
        .dot { color: #d4af37; }

        /* ── GIVE SADQA ── */
        .sadqa-section { padding: 3rem 0; }
        .sadqa-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #d4af37;
          letter-spacing: 4px;
          margin-bottom: 0.4rem;
        }
        .sadqa-sub { color: #aaa; font-family: 'Inter', sans-serif; font-size: 1rem; margin-bottom: 0.8rem; }
        .sadqa-divider { color: #d4af37; font-size: 1rem; margin: 0.5rem 0 2rem; opacity: 0.7; }
        .sadqa-card {
          max-width: 680px;
          margin: 0 auto;
          border: 1px solid #3a2e00;
          background: radial-gradient(ellipse at top, #1a1200 0%, #0a0800 100%);
          padding: 2.5rem 2rem;
          text-align: center;
        }
        .sadqa-desc { color: #bbb; font-family: 'Inter', sans-serif; font-size: 0.95rem; margin-bottom: 1.5rem; }
        .sadqa-input-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 1.2rem;
        }
        .sadqa-rupee {
          background: #1a1400;
          border: 1px solid #3a2e00;
          border-right: none;
          color: #d4af37;
          padding: 0.75rem 1rem;
          font-family: 'Cinzel', serif;
          font-size: 1rem;
        }
        .sadqa-input {
          flex: 1;
          max-width: 320px;
          background: #0d0a00;
          border: 1px solid #3a2e00;
          color: #d4af37;
          padding: 0.75rem 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          outline: none;
        }
        .sadqa-input::placeholder { color: #554400; }
        .sadqa-input:focus { border-color: #d4af37; }
        .sadqa-radio-row {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .sadqa-radio {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ccc;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .sadqa-radio input[type="radio"] { accent-color: #d4af37; width: 16px; height: 16px; cursor: pointer; }
        .sadqa-btn {
          width: 100%;
          max-width: 320px;
          padding: 1rem;
          background: linear-gradient(135deg, #b8860b, #d4af37, #b8860b);
          color: #000;
          font-family: 'Cinzel', serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 3px;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s, transform 0.2s;
          margin-bottom: 2rem;
        }
        .sadqa-btn:hover { opacity: 0.88; transform: scale(1.02); }
        .sadqa-virtue { border-top: 1px solid #1a1400; padding-top: 1.5rem; }
        .virtue-title { color: #d4af37; font-family: 'Inter', sans-serif; font-size: 1rem; margin-bottom: 0.8rem; font-style: italic; }
        .virtue-text { color: #888; font-family: 'Inter', sans-serif; font-size: 0.88rem; line-height: 1.7; margin-bottom: 1.2rem; }
        .virtue-features { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
        .virtue-features span { color: #aaa; font-family: 'Inter', sans-serif; font-size: 0.82rem; }
        .vcheck { color: #d4af37; margin-right: 4px; }
        @media (max-width: 768px) {
          .sadqa-card { padding: 1.5rem 1rem; }
          .virtue-features { gap: 0.8rem; }
          .sadqa-input { max-width: 220px; }
        }


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

        /* ── AZADARI ── */
        .azadari-section { border-top: 1px solid #1a1400; }
        .az-title { color: #c9a961; }
        .az-meta { color: #777; font-family: 'Inter', sans-serif; font-size: 0.82rem; margin: 0.2rem 0; }
        .az-meta strong { color: #aaa; }
        .az-card { border-color: #2a1e00; background: radial-gradient(ellipse at top, #120d00 0%, #050300 100%); }
        .az-btn { background: linear-gradient(135deg, #8b6914, #c9a961, #8b6914); color: #000; }
        .az-btn:hover { opacity: 0.85; }
        .optional { color: #555; font-size: 0.8rem; }
        .az-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; text-align: left; }
        .az-info-box { background: rgba(0,0,0,0.4); border: 1px solid #1a1400; padding: 1.2rem; border-radius: 2px; }
        .az-trust { display: flex; align-items: center; gap: 0.6rem; color: #666; font-family: 'Inter', sans-serif; font-size: 0.8rem; border-top: 1px solid #1a1400; padding-top: 1rem; }
        .az-trust strong { color: #aaa; }
        @media (max-width: 600px) { .az-info-grid { grid-template-columns: 1fr; } }
        .text-gold { color: #d4af37; }
        .border-gold { border-color: #d4af37; }
      `}</style>
    </section >
  );
}
