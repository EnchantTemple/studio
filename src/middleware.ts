import { NextResponse, type NextRequest } from 'next/server';
import { locales } from './navigation';

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  // If not, redirect to the default locale
  // e.g., from /about to /en/about
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and assets
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
};
