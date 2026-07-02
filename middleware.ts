import { auth } from "./auth";

export const middleware = auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/admin/login";

  if (isAdminRoute && !isLoginRoute && !isLoggedIn) {
    return Response.redirect(new URL("/admin/login", req.nextUrl.origin));
  }

  if (isLoginRoute && isLoggedIn) {
    return Response.redirect(new URL("/admin", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};