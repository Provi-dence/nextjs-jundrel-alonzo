/**

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isStaticAsset = pathname.startsWith("/_next")
    || pathname.startsWith("/images")
    || pathname.endsWith(".png")
    || pathname.endsWith(".jpg")
    || pathname.endsWith(".jpeg")
    || pathname.endsWith(".svg")
    || pathname.endsWith(".webp")
    || pathname.endsWith(".ico")
    || pathname.endsWith(".pdf")
    || pathname === "/favicon.ico";

  if (isStaticAsset || pathname === "/coming-soon") {
    return NextResponse.next();
  }

  // Check launch date
  const launchDate = new Date("2025-07-15T12:00:00-07:00").getTime();
  const now = Date.now();
  const isBeforeLaunch = now < launchDate;

  if (isBeforeLaunch) {
    return NextResponse.redirect(new URL("/coming-soon", request.url));
  }

  return NextResponse.next();
}

// ✅ Use simple glob matching — no regex
export const config = {
  matcher: ["/((?!api|_next|images|favicon.ico|coming-soon).*)"],
};


 */