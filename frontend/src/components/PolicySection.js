'use client';

export default function PolicySection() {
    return (
        <section className="policy-section">
            <div className="container">

                {/* PRIVACY POLICY */}
                <div className="policy-box">
                    <h2 className="policy-title">PRIVACY POLICY</h2>
                    <p className="policy-meta">Zam Mission Charitable Trust<br />Effective Date: 01 January 2026</p>
                    <div className="policy-content">
                        <p>Zam Mission Charitable Trust (“we”, “our”, “us”) respects the privacy of our donors, supporters, and website visitors. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

                        <h3>1. Information We Collect</h3>
                        <p>We may collect the following information:</p>
                        <ul>
                            <li>Full Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Address</li>
                            <li>Payment Details (processed securely via payment gateway)</li>
                            <li>Donation history</li>
                            <li>Any information voluntarily submitted through contact forms</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Process donations and contributions</li>
                            <li>Send donation receipts and confirmations</li>
                            <li>Communicate updates about our programs and initiatives</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>
                        <p>We do not sell, rent, or trade your personal information to third parties.</p>

                        <h3>3. Payment Security</h3>
                        <p>All online payments are processed through secure and encrypted payment gateways. Zam Mission Charitable Trust does not store your card or banking details on our servers.</p>

                        <h3>4. Data Protection</h3>
                        <p>We implement reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.</p>

                        <h3>5. Cookies</h3>
                        <p>Our website may use basic cookies to enhance user experience and analyze website traffic. You may disable cookies in your browser settings if preferred.</p>

                        <h3>6. Third-Party Links</h3>
                        <p>Our website may contain links to third-party platforms (such as payment gateways or social media). We are not responsible for the privacy practices of those external websites.</p>

                        <h3>7. Donor Privacy Commitment</h3>
                        <p>We respect donor confidentiality. Your donation amount and personal information will not be publicly displayed without your consent.</p>

                        <h3>8. Policy Updates</h3>
                        <p>Zam Mission Charitable Trust reserves the right to update this Privacy Policy at any time. Changes will be posted on this page.</p>

                        <h3>9. Contact Us</h3>
                        <p>If you have any questions regarding this Privacy Policy, please contact:<br />
                            Zam Mission Charitable Trust<br />
                            Email: zammissioncharitabletrust@gmail.com<br />
                            Phone: 8779559196 / 7506069461</p>
                    </div>
                </div>

                {/* REFUND POLICY */}
                <div className="policy-box">
                    <h2 className="policy-title">REFUND POLICY</h2>
                    <p className="policy-meta">Zam Mission Charitable Trust<br />Effective Date: 01 January 2026</p>
                    <div className="policy-content">
                        <p>Zam Mission Charitable Trust values the trust and support of our donors. We maintain transparency and fairness in handling contributions.</p>

                        <h3>1. Voluntary Donations</h3>
                        <p>All donations and contributions made to Zam Mission Charitable Trust are voluntary and made with full consent of the donor.</p>

                        <h3>2. Refund Eligibility</h3>
                        <p>Refunds will only be considered under the following circumstances:</p>
                        <ul>
                            <li>Duplicate transaction</li>
                            <li>Incorrect donation amount entered due to technical error</li>
                            <li>Unauthorized transaction (subject to verification)</li>
                        </ul>
                        <p>Refund requests must be made within 7 days of the transaction date.</p>

                        <h3>3. Refund Process</h3>
                        <p>To request a refund, please email us with:</p>
                        <ul>
                            <li>Full Name</li>
                            <li>Transaction ID</li>
                            <li>Date of Donation</li>
                            <li>Amount Donated</li>
                            <li>Reason for Refund Request</li>
                        </ul>
                        <p>Email: zammissioncharitabletrust@gmail.com<br />
                            After verification, eligible refunds will be processed within 7–10 working days.</p>

                        <h3>4. Non-Refundable Cases</h3>
                        <p>Donations made for specific campaigns, religious contributions (such as Sadqa, Azadari), or already utilized funds may not be eligible for refund.</p>

                        <h3>5. Payment Gateway Charges</h3>
                        <p>Any payment gateway or bank processing charges deducted during the transaction may be adjusted at the time of refund.</p>

                        <h3>6. Policy Updates</h3>
                        <p>Zam Mission Charitable Trust reserves the right to modify this Refund Policy at any time without prior notice.</p>
                    </div>
                </div>

                {/* TERMS & CONDITIONS */}
                <div className="policy-box">
                    <h2 className="policy-title">TERMS & CONDITIONS</h2>
                    <p className="policy-meta">Zam Mission Charitable Trust<br />Last Updated: 01.01.2026</p>
                    <div className="policy-content">
                        <p>Welcome to Zam Mission Charitable Trust. By accessing our website and making a donation, you agree to the following Terms & Conditions.</p>

                        <h3>1. General Information</h3>
                        <p>Zam Mission Charitable Trust is a registered charitable organization committed to community welfare, emergency assistance, Azadari services, and humanitarian causes.<br />
                            By using this website, you confirm that you are at least 18 years of age or using the website under parental/guardian supervision.</p>

                        <h3>2. Donations</h3>
                        <p>All donations made through this website are voluntary and non-refundable unless there is a technical error.<br />
                            Donations can be made as One-Time or Monthly Contributions.<br />
                            The donor confirms that the funds donated belong to them and are from legal sources.<br />
                            Zam Mission reserves the right to allocate funds where most needed unless specified otherwise.</p>

                        <h3>3. Privacy</h3>
                        <p>Donor information will remain confidential and will not be sold or shared with third parties except as required by law.</p>

                        <h3>4. Changes to Terms</h3>
                        <p>Zam Mission reserves the right to modify these Terms & Conditions at any time without prior notice.</p>

                        <h3>5. Contact Information</h3>
                        <p>For any queries regarding donations or policies:<br />
                            Email: zammissioncharitabletrust@gmail.com<br />
                            Contact: 8779559196 / 7506069461</p>
                    </div>
                </div>

            </div>

            <style jsx>{`
        .policy-section {
          padding: 8rem 0 4rem;
          background: #000;
          color: #ccc;
          min-height: 100vh;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .policy-box {
          background: #0a0a0a;
          border: 1px solid #222;
          padding: 3rem 4rem;
          border-radius: 12px;
          margin-bottom: 3rem;
        }
        .policy-title {
          font-family: 'Cinzel', serif;
          color: #d4af37;
          font-size: 2rem;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          text-align: center;
          border-bottom: 1px solid #222;
          padding-bottom: 1.5rem;
        }
        .policy-meta {
          text-align: center;
          font-family: 'Inter', sans-serif;
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 2.5rem;
          margin-top: 1.5rem;
          line-height: 1.6;
        }
        .policy-content {
          font-family: 'Inter', sans-serif;
          line-height: 1.8;
          font-size: 0.95rem;
          color: #bbb;
        }
        .policy-content h3 {
          color: #fff;
          font-size: 1.1rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .policy-content p {
          margin-bottom: 1rem;
        }
        .policy-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .policy-content li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .policy-content li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #d4af37;
          font-size: 1.2rem;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .policy-box {
            padding: 2rem 1.5rem;
          }
          .policy-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
}
