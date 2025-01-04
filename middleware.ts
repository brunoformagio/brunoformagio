import { NextResponse } from "next/server";
 
let locales = ['en', 'pt']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request:any) {
    const acceptLanguage = request.headers.get('Accept-Language')
    if (!acceptLanguage) return 'en'
     
    const preferredLocales = acceptLanguage
        .split(',')
        .map((locale:any) => locale.split(';')[0])
     
    for (const locale of preferredLocales) {
        if (locales.includes(locale)) return locale
    }
     
    return 'en'
}
 
export function middleware(request:any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next)*)',
  ],
}