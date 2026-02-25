const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const Contact = require('../models/Contact');

const ADMIN_EMAIL = 'Baqir@gmail.com';
const ADMIN_PASS = 'Baqir@123';

// --- ADMIN ROUTES ---

// POST /api/admin/login
router.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// GET /api/admin/dashboard
router.get('/admin/dashboard', async (req, res) => {
    try {
        const totalMembers = await Member.countDocuments();
        const activeMembers = await Member.countDocuments({ status: 'Active' });
        const cancelledMembers = await Member.countDocuments({ status: 'Cancelled' });

        const members = await Member.find();
        let totalFunds = 0;

        members.forEach(m => {
            const val = parseFloat(m.amount.toString().replace(/[^0-9.-]+/g, ""));
            if (!isNaN(val)) totalFunds += val;
        });

        res.json({
            totalMembers,
            activeMembers,
            cancelledMembers,
            totalFunds,
            lifetimeFunds: totalFunds
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/admin/members
router.get('/admin/members', async (req, res) => {
    try {
        const members = await Member.find().sort({ createdAt: -1 });
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE /api/admin/members/:id
router.delete('/admin/members/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Member.findByIdAndDelete(id);
        res.json({ success: true, message: 'Member deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// --- PUBLIC ROUTES ---

// POST /api/members - Add new member (User Checkout)
router.post('/members', async (req, res) => {
    try {
        const { name, email, phone, plan, amount } = req.body;

        // Basic validation
        if (!name || !email || !phone || !plan) {
            return res.status(400).json({ success: false, message: 'Missing fields' });
        }

        const newMember = new Member({
            name,
            email,
            phone,
            plan,
            amount: amount ? amount.toString() : '0',
            status: 'Pending'
        });

        const savedMember = await newMember.save();
        res.json({ success: true, message: 'Member added successfully', member: savedMember });
    } catch (error) {
        console.error('Error adding member:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// GET /api/admin/contacts - Get all contact messages
router.get('/admin/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE /api/admin/contacts/:id - Delete a contact message
router.delete('/admin/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.json({ success: true, message: 'Contact message deleted' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
