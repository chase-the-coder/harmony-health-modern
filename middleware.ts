import { NextResponse, type NextRequest } from "next/server";

const REDIRECTS: Record<string, string> = {
  "/mens-hormone-replacement-pricing": "/pricing-mens-hrt",
  "/womens-hormone-replacement-pricing": "/pricing-womens-hrt",
  "/medical-weight-loss-pricing": "/medical-weight-loss-pricing-kyre",
  "/hormone-replacement-therapy": "/hormone-replacement-therapy-athens-ga",
  "/medical-weight-loss": "/medical-weight-loss-athens-ga",
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  const host = request.headers.get("host") ?? "";
  const isProduction = host.includes("yourharmonyhealth.com");

  // On the live site, send all visitors to the under-construction page
  if (isProduction && path !== "/under-construction") {
    return NextResponse.redirect(new URL("/under-construction", request.url), 302);
  }

  const target = REDIRECTS[path];
  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|ico|json)$).*)",
  ],
};
