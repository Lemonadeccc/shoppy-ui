import { NextRequest, NextResponse } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";
import { AUTHENTICATION_COOKIE } from "./app/auth/auth-cookie";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get(AUTHENTICATION_COOKIE)?.value;
  const isUnauthenticatedRoute = unauthenticatedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route.path)
  );
  if (!auth && !isUnauthenticatedRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
