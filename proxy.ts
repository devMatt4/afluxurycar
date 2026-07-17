import { NextResponse } from "next/server";

import { auth } from "./auth";

export const proxy = auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isLoggedIn = Boolean(req.auth);

  const isLoginRoute = pathname === "/admin/login";
  const isProtectedAdminRoute =
    pathname === "/admin" ||
    (pathname.startsWith("/admin/") && !isLoginRoute);

  if (isProtectedAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  if (isLoginRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};