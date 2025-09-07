import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nConfig } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip next internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Already has a locale segment
  const hasLocale = i18nConfig.locales.some((l) =>
    pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  // Redirect / -> /en (or detect Accept-Language if you want)
  const url = request.nextUrl.clone();
  url.pathname = `/${i18nConfig.defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
