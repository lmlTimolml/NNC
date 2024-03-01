import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './src/navigation';
 
export default createMiddleware({
  defaultLocale: 'no',
  locales,
  localePrefix,
  pathnames
});
 
export const config = {
  
  matcher: ['/', '/(no|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};