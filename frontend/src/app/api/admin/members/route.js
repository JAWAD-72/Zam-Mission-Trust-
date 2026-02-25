import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Member from '@/models/Member';

export async function GET() {
    try {
        await dbConnect();
        const members = await Member.find().sort({ createdAt: -1 });
        return NextResponse.json(members);
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
