import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Member from '@/models/Member';

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await dbConnect();
        await Member.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: 'Member deleted' });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
