const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    amount: {
        type: String, // Storing as string to keep currency symbol if needed, or number. Let's use String for flexibility '₹100' or Number 100. Using String to match UI '₹100'
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Active', 'Cancelled', 'Expired'],
        default: 'Pending',
    },
    paymentId: {
        type: String,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
