import { NextResponse } from 'next/server';
import { landingPages } from '@/lib/site';

/*
 * Landing pages live in folders (/ghostwriting-lp/) and their old scripts load files
 * with relative paths ("images/x.png"), so their address must end with "/".
 * Every other page has no trailing slash (/ebook-writing), the same as the PHP site.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const first = pathname.split('/')[1];
  const isLpRoot = landingPages.includes(first) && pathname.replace(/\/+$/, '') === `/${first}`;

  if (isLpRoot && !pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = `/${first}/`;
    return NextResponse.redirect(url, 308);
  }
  if (!isLpRoot && pathname.length > 1 && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, '');
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // pages only, not files
  matcher: ['/((?!_next/|assets/|.*\\.[a-zA-Z0-9]+$).*)'],
};
