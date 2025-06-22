import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Provider from '@/models/Provider'; // Mongoose model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    await connectToDB();

    const provider = await Provider.findOne({ email });
    if (!provider) {
      return NextResponse.json({ error: 'No provider found with this email' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, provider.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: provider._id,
        role: 'provider',
        email: provider.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({ message: 'Login successful' });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
