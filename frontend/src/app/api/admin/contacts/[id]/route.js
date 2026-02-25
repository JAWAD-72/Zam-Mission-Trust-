import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await dbConnect();
        await Contact.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: 'Contact deleted' });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
