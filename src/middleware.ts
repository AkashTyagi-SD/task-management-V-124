import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_TOKEN } from "./constant";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get(AUTH_TOKEN)?.value;

  const { pathname } = request.nextUrl;
  //If the user is login then redirect to home page.

  if (!isAuthenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
