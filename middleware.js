import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const url = request.nextUrl;

  const isCustomerDashboard = url.pathname.startsWith('/dashboard');
  const isProviderDashboard = url.pathname.startsWith('/provider_dashboard');

  if (isCustomerDashboard || isProviderDashboard) {
    if (!token) {
      return NextResponse.redirect(
        new URL(isCustomerDashboard ? '/login' : '/sp_login', request.url)
      );
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(
        new URL(isCustomerDashboard ? '/login' : '/sp_login', request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/provider_dashboard/:path*'],
};
