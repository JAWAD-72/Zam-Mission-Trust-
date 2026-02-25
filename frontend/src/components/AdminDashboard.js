'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalMembers: 0,
        activeMembers: 0,
        cancelledMembers: 0,
        totalFunds: 0,
        lifetimeFunds: 0
    });
    const [members, setMembers] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [activeTab, setActiveTab] = useState('overview');
    const router = useRouter();

    useEffect(() => {
        // Basic Auth Check
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
            router.push('/admin/login');
            return;
        }

        fetchStats();
        fetchMembers();
        fetchContacts();
    }, [router]);

    const fetchStats = async () => {
        try {
            const res = await fetch('/api/admin/dashboard');
            const data = await res.json();
            setStats(data);
        } catch (err) { console.error(err); }
    };

    const fetchMembers = async () => {
        try {
            const res = await fetch('/api/admin/members');
            const data = await res.json();
            setMembers(data);
        } catch (err) { console.error(err); }
    };

    const fetchContacts = async () => {
        try {
            console.log('Fetching contacts from API...');
            const res = await fetch('/api/admin/contacts');
            console.log('Contacts response status:', res.status);
            const data = await res.json();
            console.log('Contacts data received:', data);
            setContacts(data);
        } catch (err) {
            console.error('Error fetching contacts:', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        router.push('/');
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this member?')) return;
        try {
            await fetch(`/api/admin/members/${id}`, { method: 'DELETE' });
            fetchStats();
            fetchMembers();
        } catch (err) { console.error(err); }
    };

    const handleExport = () => {
        if (members.length === 0) return alert('No members to export');

        const headers = ['Name', 'Email', 'Phone', 'Plan', 'Amount', 'Status', 'Date', 'PaymentID'];
        const csvContent = [
            headers.join(','),
            ...members.map(m => [
                `"${m.name}"`,
                `"${m.email}"`,
                `"${m.phone}"`,
                `"${m.plan}"`,
                `"${m.amount}"`,
                `"${m.status}"`,
                `"${new Date(m.createdAt).toLocaleDateString()}"`,
                `"${m.paymentId || ''}"`
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `members_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const handleDeleteContact = async (id) => {
        if (!confirm('Are you sure you want to delete this message?')) return;
        try {
            await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' });
            fetchContacts();
        } catch (err) { console.error(err); }
    };

    return (
        <div className="dashboard">
            <div className="container">
                {/* Header */}
                <div className="header flex justify-between items-center mb-12">
                    <div>
                        <h1 className="title">ADMIN DASHBOARD</h1>
                        <p className="welcome">Welcome back, Baqir Admin</p>
                    </div>
                    <button onClick={handleLogout} className="btn-logout">Logout</button>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid mb-12">
                    <div className="stat-card">
                        <div className="icon start-icon">👥</div>
                        <div className="stat-value">{stats.totalMembers}</div>
                        <div className="stat-label">Total Members</div>
                    </div>
                    <div className="stat-card">
                        <div className="icon up-icon">↗</div>
                        <div className="stat-value">₹{stats.totalFunds}</div>
                        <div className="stat-label">Monthly Recurring</div>
                    </div>
                    <div className="stat-card">
                        <div className="icon dollar-icon">$</div>
                        <div className="stat-value">₹{stats.lifetimeFunds}</div>
                        <div className="stat-label">Lifetime Funds</div>
                    </div>
                    <div className="stat-card">
                        <div className="icon check-icon">✓</div>
                        <div className="stat-value">{stats.activeMembers}</div>
                        <div className="stat-label">Active</div>
                    </div>
                    <div className="stat-card">
                        <div className="icon cross-icon">✗</div>
                        <div className="stat-value">{stats.cancelledMembers}</div>
                        <div className="stat-label">Cancelled</div>
                    </div>
                </div>

                {/* Tabs / Divider */}
                <div className="tabs mb-8">
                    <span
                        className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >OVERVIEW</span>
                    <span
                        className={`tab ${activeTab === 'members' ? 'active' : ''}`}
                        onClick={() => setActiveTab('members')}
                    >MEMBERS</span>
                    <span
                        className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('transactions')}
                    >TRANSACTIONS</span>
                    <span
                        className={`tab ${activeTab === 'feedback' ? 'active' : ''}`}
                        onClick={() => setActiveTab('feedback')}
                    >FEEDBACK</span>
                </div>

                {/* Content based on Tab */}
                {activeTab === 'overview' && (
                    <div className="overview-section mb-12">
                        <h3 className="section-title mb-6">DASHBOARD OVERVIEW</h3>
                        <div className="detail-list">
                            <p>Total registered members: <span className="highlight">{stats.totalMembers}</span></p>
                            <p>Active subscriptions: <span className="highlight green">{stats.activeMembers}</span></p>
                            <p>Monthly recurring revenue: <span className="highlight gold">₹{stats.totalFunds}</span></p>
                            <p>Total funds collected: <span className="highlight gold">₹{stats.lifetimeFunds}</span></p>
                        </div>
                    </div>
                )}

                {/* Members Table */}
                {(activeTab === 'overview' || activeTab === 'members') && (
                    <div className="table-section mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="section-title">MEMBERS LIST</h3>
                            <button onClick={handleExport} className="btn-export">Export CSV</button>
                        </div>

                        <div className="table-wrapper">
                            <table className="members-table">
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>PHONE</th>
                                        <th>PLAN</th>
                                        <th>AMOUNT</th>
                                        <th>STATUS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.length === 0 ? (
                                        <tr><td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No members found</td></tr>
                                    ) : (
                                        members.map(m => (
                                            <tr key={m._id}>
                                                <td>{m.name}</td>
                                                <td>{m.email}</td>
                                                <td>{m.phone}</td>
                                                <td>{m.plan}</td>
                                                <td className="gold-text">₹{m.amount}</td>
                                                <td>
                                                    <span className={`status-badge ${m.status.toLowerCase()}`}>{m.status}</span>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(m._id)} className="btn-delete">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Transaction History Table */}
                {(activeTab === 'overview' || activeTab === 'transactions') && (
                    <div className="table-section">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="section-title">TRANSACTION HISTORY</h3>
                        </div>

                        <div className="table-wrapper">
                            <table className="members-table">
                                <thead>
                                    <tr>
                                        <th>MEMBER</th>
                                        <th>EMAIL</th>
                                        <th>AMOUNT</th>
                                        <th>STATUS</th>
                                        <th>DATE</th>
                                        <th>PAYMENT ID</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.length === 0 ? (
                                        <tr><td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No transactions found</td></tr>
                                    ) : (
                                        members.map(m => (
                                            <tr key={m._id + '_trans'}>
                                                <td>{m.name}</td>
                                                <td>{m.email}</td>
                                                <td className="gold-text">₹{m.amount}</td>
                                                <td>
                                                    <span className="status-badge active">Success</span>
                                                </td>
                                                <td>{new Date(m.createdAt).toLocaleDateString()}</td>
                                                <td style={{ fontFamily: 'monospace', color: '#888' }}>
                                                    {m.paymentId || 'PAY_MOCK_123456'}
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(m._id)} className="btn-delete">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Feedback Section */}
                {(activeTab === 'overview' || activeTab === 'feedback') && (
                    <div className="table-section">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="section-title">CONTACT MESSAGES</h3>
                            <span className="text-gray-500 text-sm">{contacts.length} messages</span>
                        </div>

                        <div className="table-wrapper">
                            <table className="members-table">
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>SUBJECT</th>
                                        <th>MESSAGE</th>
                                        <th>DATE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.length === 0 ? (
                                        <tr><td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No messages found</td></tr>
                                    ) : (
                                        contacts.map(c => (
                                            <tr key={c._id}>
                                                <td>{c.name}</td>
                                                <td>{c.email}</td>
                                                <td>{c.subject}</td>
                                                <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {c.message}
                                                </td>
                                                <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                                                <td>
                                                    <button onClick={() => handleDeleteContact(c._id)} className="btn-delete">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>

            <style jsx>{`
        .dashboard {
            min-height: 100vh;
            background: #000;
            color: #fff;
            padding: 2rem 0;
            font-family: 'Inter', sans-serif;
        }
        .title {
            color: #d4af37;
            font-family: 'Cinzel', serif;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        .welcome { color: #888; font-size: 0.9rem; }
        .btn-logout {
            background: transparent;
            border: 1px solid #333;
            color: #ff4444;
            padding: 0.5rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
        }
        .stat-card {
            background: #050505;
            border: 1px solid #1a1a1a;
            padding: 2rem 1.5rem;
            border-radius: 4px;
        }
        .icon { font-size: 1.5rem; margin-bottom: 1rem; color: #d4af37; }
        .stat-value { font-size: 2rem; font-weight: 700; color: #d4af37; font-family: 'Cinzel', serif; }
        .stat-label { color: #888; font-size: 0.8rem; margin-top: 0.5rem; }

        .tabs { border-bottom: 1px solid #222; }
        .tab {
            display: inline-block;
            padding: 1rem 1.5rem;
            color: #666;
            cursor: pointer;
            font-size: 0.85rem;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .tab.active { color: #d4af37; border-bottom: 2px solid #d4af37; }

        .overview-section, .table-section {
            background: #050505;
            border: 1px solid #1a1a1a;
            padding: 2rem;
            border-radius: 4px;
        }
        .section-title {
            color: #d4af37;
            font-family: 'Cinzel', serif;
            letter-spacing: 1px;
            font-size: 1.2rem;
        }
        .detail-list p { color: #888; margin-bottom: 1rem; font-size: 0.95rem; }
        .highlight { color: #fff; font-weight: 600; margin-left: 0.5rem; }
        .highlight.gold { color: #d4af37; }
        .highlight.green { color: #4caf50; }

        .btn-export {
            background: #d4af37;
            color: #000;
            border: none;
            padding: 0.6rem 1.2rem;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .table-wrapper { overflow-x: auto; }
        .members-table { width: 100%; border-collapse: collapse; min-width: 800px; }
        .members-table th {
            text-align: left;
            color: #d4af37;
            padding: 1rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #222;
        }
        .members-table td {
            padding: 1.2rem 1rem;
            color: #ccc;
            font-size: 0.9rem;
            border-bottom: 1px solid #111;
        }
        .gold-text { color: #d4af37 !important; }
        .status-badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            background: #222;
            color: #aaa;
        }
        .status-badge.active { background: rgba(76, 175, 80, 0.2); color: #4caf50; }
        .status-badge.pending { background: rgba(255, 193, 7, 0.2); color: #ffc107; }
        .status-badge.cancelled { background: rgba(244, 67, 54, 0.2); color: #f44336; }
        
        .btn-delete {
            background: rgba(244, 67, 54, 0.1);
            color: #f44336;
            border: 1px solid #f44336;
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.75rem;
            transition: all 0.2s;
        }
        .btn-delete:hover {
            background: #f44336;
            color: #fff;
        }
      `}</style>
        </div>
    );
}
