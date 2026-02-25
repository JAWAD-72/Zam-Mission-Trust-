import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
    try {
        await dbConnect();
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        const newContact = new Contact({ name, email, subject, message, status: 'New' });
        await newContact.save();

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error);
        return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }
}
