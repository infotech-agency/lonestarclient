import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();

    url.pathname = pathname.slice(0, -1);

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}