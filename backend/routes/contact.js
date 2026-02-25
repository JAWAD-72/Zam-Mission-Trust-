const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Save contact form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create new contact message
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
            status: 'New'
        });

        await newContact.save();

        console.log('Contact message saved:', { name, email, subject });

        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again.'
        });
    }
});

module.exports = router;
