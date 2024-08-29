import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request) {
    const token = request.cookies.get('token')?.value;

    const isAuthPage = request.nextUrl.pathname.startsWith('/login');
    const isPublicFile = PUBLIC_FILE.test(request.nextUrl.pathname);

    if (isAuthPage || isPublicFile) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'));
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
