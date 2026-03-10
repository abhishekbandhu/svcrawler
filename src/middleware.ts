import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';
    const currentProtocol = request.headers.get('x-forwarded-proto') || url.protocol;

    if (hostname.startsWith('www.svgcrawler.com')) {
        url.hostname = 'svgcrawler.com';
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    if (
        currentProtocol === 'http' &&
        hostname === 'svgcrawler.com' &&
        !url.pathname.startsWith('/api') &&
        !url.pathname.startsWith('/_next')
    ) {
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Config to run on all paths except static assets and API routes
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
