const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    durationMonths: {
        type: Number,
        default: 12,
    },
    description: {
        type: String,
    },
    features: [{
        type: String,
    }],
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
