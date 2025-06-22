import { jwtVerify } from 'jose';

export async function verifyToken(token) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const { payload } = await jwtVerify(token, secret);
    return payload; // Contains user info like id, role, etc.
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}
