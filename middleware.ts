import arcjet, { createMiddleware, detectBot } from "@arcjet/next";
import { env } from "./lib/env";
import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Define the type of your session user
interface SessionUser {
  id: string;
  email: string;
  role: string;
  isAdmin?: boolean;
}

// Define the session type
interface Session {
  user: SessionUser;
  // add other session fields if needed
}

// Arcjet config
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

function adminAuthMiddleware(request: NextRequest) {
  const sessionRaw = getSessionCookie(request);

  // ⛔ Not logged in or cookie missing
  if (!sessionRaw) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Cast session to proper type
  const session = sessionRaw as unknown as Session;

  // ⛔ Not admin
  if (!session.user?.isAdmin) {
    return NextResponse.redirect(new URL("/403", request.url));
  }

  // ✅ Admin user → allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};

export default createMiddleware(aj, (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return adminAuthMiddleware(request);
  }

  return NextResponse.next();
});
