// middleware.ts
import arcjet, { createMiddleware, detectBot } from "@arcjet/next";
import { env } from "./lib/env";
import { NextRequest, NextResponse } from "next/server";

const aj = arcjet({
  key: env.ARCJET_KEY!,
  rules: [
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:MONITOR",
        "CATEGORY:PREVIEW",
        "STRIPE_WEBHOOK",
      ],
    }),
  ],
});

function authMiddleware(request: NextRequest) {
  // Edge-safe: check if cookie exists
  const sessionCookie = request.cookies.get("session")?.value;

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};

export default createMiddleware(aj, (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return authMiddleware(request);
  }
  return NextResponse.next();
});
