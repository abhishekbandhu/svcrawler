import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';

    // Check if the request is using the non-canonical www subdomain
    // We only want to trigger this in production/custom domains, not localhost
    if (hostname.startsWith('www.svgcrawler.com')) {
        url.hostname = 'svgcrawler.com';
        // Ensure protocol is https for the redirect
        url.protocol = 'https:';

        // Return 301 Permanent Redirect
        return NextResponse.redirect(url, 301);
    }

    // Force HTTPS if someone accesses via HTTP (and not on localhost)
    if (
        request.headers.get('x-forwarded-proto') === 'http' &&
        hostname === 'svgcrawler.com'
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
