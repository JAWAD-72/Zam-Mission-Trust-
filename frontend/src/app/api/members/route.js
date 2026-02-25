import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Member from '@/models/Member';

export async function POST(request) {
    try {
        await dbConnect();
        const { name, email, phone, plan, amount, paymentId } = await request.json();

        if (!name || !email || !phone || !plan) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        const newMember = new Member({
            name, email, phone, plan,
            amount: amount ? amount.toString() : '0',
            paymentId: paymentId || null,
            status: 'Pending',
        });

        const saved = await newMember.save();
        return NextResponse.json({ success: true, message: 'Member added successfully', member: saved });
    } catch (error) {
        console.error('Error adding member:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
