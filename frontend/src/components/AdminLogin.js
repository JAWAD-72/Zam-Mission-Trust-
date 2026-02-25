'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // Simple auth simulation - storing flag
        localStorage.setItem('isAdmin', 'true');
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Check server connection.');
    }
  };

  return (
    <div className="login-container">
      {/* Home Button - Top Right */}
      <button className="home-btn" onClick={() => router.push('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        HOME
      </button>
      <div className="login-box">
        <div className="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <h2 className="title">ADMIN ACCESS</h2>
        <p className="subtitle">Secure login for administrators only</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Admin Email</label>
            <input
              type="email"
              placeholder="admin@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="btn-login">ADMIN LOGIN</button>
        </form>
      </div>

      <style jsx>{`
        .home-btn {
          position: fixed; top: 20px; right: 24px;
          display: flex; align-items: center;
          background: transparent; border: 1px solid #d4af37;
          color: #d4af37; font-family: 'Cinzel', serif;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 1px;
          padding: 0.5rem 1rem; cursor: pointer;
          border-radius: 4px; transition: background 0.2s, color 0.2s; z-index: 100;
        }
        .home-btn:hover { background: #d4af37; color: #000; }
        .login-container {
          min-height: 100vh; background-color: #000;
          display: flex; align-items: center; justify-content: center; padding: 2rem;
        }
        .login-box { width: 100%; max-width: 400px; padding: 2rem; background: #000; text-align: center; }
        .icon-wrapper {
          width: 60px; height: 60px; background: rgba(212,175,55,0.1);
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; margin: 0 auto 1.5rem;
        }
        .title { color: #d4af37; font-family: 'Cinzel', serif; font-size: 2rem; margin-bottom: 0.5rem; letter-spacing: 1px; }
        .subtitle { color: #666; font-family: 'Inter', sans-serif; font-size: 0.9rem; margin-bottom: 2.5rem; }
        .form-group { text-align: left; margin-bottom: 1.5rem; }
        label { display: block; color: #ccc; font-size: 0.8rem; margin-bottom: 0.5rem; font-family: 'Inter', sans-serif; }
        input {
          width: 100%; background: #050505; border: 1px solid #333;
          padding: 0.8rem 1rem; color: #fff; font-family: 'Inter', sans-serif;
          outline: none; transition: border-color 0.3s; border-radius: 4px;
        }
        input:focus { border-color: #d4af37; }
        .btn-login {
          width: 100%; background: linear-gradient(180deg, #b88a28 0%, #8a6616 100%);
          border: none; padding: 1rem; color: #fff; font-family: 'Cinzel', serif;
          font-weight: 600; letter-spacing: 1px; cursor: pointer; margin-top: 1rem; transition: filter 0.3s;
        }
        .btn-login:hover { filter: brightness(1.1); }
        .error-msg { color: #ff4444; font-size: 0.85rem; margin-bottom: 1rem; font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
}
