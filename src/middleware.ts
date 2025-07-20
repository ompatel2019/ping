// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userId = request.cookies.get("userId")?.value;

  const pathname = request.nextUrl.pathname;

  // 1. Block access to dashboard if not logged in
  if (pathname.startsWith("/dashboard") && !userId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. Redirect logged-in user away from login/signup
  if ((pathname === "/login" || pathname === "/signup") && userId) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
