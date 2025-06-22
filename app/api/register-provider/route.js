// app/api/register-provider/route.js
import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Provider from '@/models/Provider';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, phone, password, services } = await req.json();

    if (!name || !email || !phone || !password || !services) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await connectToDB();

    const existing = await Provider.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'Provider already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newProvider = new Provider({
      name,
      email,
      phone,
      password: hashedPassword,
      services: services.split(',').map(s => s.trim().toLowerCase()),
    });

    await newProvider.save();

    return NextResponse.json({ success: true, message: 'Provider registered successfully' });
  } catch (err) {
    console.error('Registration Error:', err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
