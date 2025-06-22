// app/api/service-request/route.js

import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Provider from '@/models/Provider'; // Make sure this model exists and is correct

export async function POST(req) {
  try {
    const body = await req.json();
    const { service, description } = body;

    if (!service || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectToDB();

    // Step 1: Price estimation logic
    const wordCount = description.trim().split(/\s+/).length;
    const price = 99 + wordCount * 2;

    // Step 2: User location (static for now)
    const userLocation = { lat: 28.6139, lng: 77.2090 }; // Delhi

    // Step 3: Query MongoDB for nearby providers offering the service
    const providers = await Provider.find({
      services: { $in: [service.toLowerCase()] },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [userLocation.lng, userLocation.lat],
          },
          $maxDistance: 5000, // within 5 km
        },
      },
    });

    // Step 4: Return data (In future: push notifications, WebSocket etc.)
    return NextResponse.json({ price, providers });

  } catch (err) {
    console.error('[SERVICE REQUEST ERROR]:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
