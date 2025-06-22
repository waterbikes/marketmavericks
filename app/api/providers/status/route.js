// app/api/providers/status/route.js
import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Provider from '@/models/Provider';
import { getProviderFromToken } from '@/lib/auth'; // Custom util to get provider from JWT

export async function POST(req) {
  const { status } = await req.json();
  const providerId = await getProviderFromToken(req);

  await connectToDB();
  const updated = await Provider.findByIdAndUpdate(providerId, { status }, { new: true });
  return NextResponse.json({ status: updated.status });
}
