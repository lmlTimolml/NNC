import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['no', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'no',

  localePrefix: 'always',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(no|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};