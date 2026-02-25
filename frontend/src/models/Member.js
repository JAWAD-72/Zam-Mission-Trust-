import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    plan: { type: String, required: true },
    amount: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Active', 'Cancelled', 'Expired'], default: 'Pending' },
    paymentId: { type: String, default: null },
}, { timestamps: true });

export default mongoose.models.Member || mongoose.model('Member', memberSchema);
