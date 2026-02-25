import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Member from '@/models/Member';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const totalMembers = await Member.countDocuments();
        const activeMembers = await Member.countDocuments({ status: 'Active' });
        const cancelledMembers = await Member.countDocuments({ status: 'Cancelled' });

        const members = await Member.find();
        let totalFunds = 0;
        members.forEach(m => {
            const val = parseFloat(m.amount.toString().replace(/[^0-9.-]+/g, ''));
            if (!isNaN(val)) totalFunds += val;
        });

        return NextResponse.json({ totalMembers, activeMembers, cancelledMembers, totalFunds, lifetimeFunds: totalFunds });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
