// TODO: DELETE the under-construction block below (lines marked CONSTRUCTION) when ready to go live.
import { NextResponse, type NextRequest } from "next/server";

const REDIRECTS: Record<string, string> = {
  "/mens-hormone-replacement-pricing": "/pricing-mens-hrt",
  "/womens-hormone-replacement-pricing": "/pricing-womens-hrt",
  "/medical-weight-loss-pricing": "/medical-weight-loss-pricing-kyre",
  "/hormone-replacement-therapy": "/hormone-replacement-therapy-athens-ga",
  "/medical-weight-loss": "/medical-weight-loss-athens-ga",
  "/peptide-therapy": "/peptide-therapy-athens-ga",
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "") || "/";

  // CONSTRUCTION — redirect all visitors to under-construction page in production.
  // TODO: Delete the next 4 lines when ready to go live.
  if (process.env.NODE_ENV === "production" && path !== "/under-construction" && path !== "/help.html") {
    return NextResponse.redirect(new URL("/under-construction", request.url));
  }
  // END CONSTRUCTION

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
