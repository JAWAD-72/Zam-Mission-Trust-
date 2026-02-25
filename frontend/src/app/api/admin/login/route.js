import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            return NextResponse.json({ success: true, message: 'Login successful' });
        }

        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
