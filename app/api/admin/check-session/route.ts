import { getSessionCookie } from "better-auth/cookies";

export async function GET(request: Request) {
  const session = getSessionCookie(request);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response(JSON.stringify({ session }));
}
