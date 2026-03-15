import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    ...(process.env.APPLE_CLIENT_ID && process.env.APPLE_CLIENT_SECRET
      ? [
          AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID,
            clientSecret: process.env.APPLE_CLIENT_SECRET,
          }),
        ]
      : []),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    session({ session, token }) {
      return session;
    },
    jwt({ token, account }) {
      return token;
    },
  },
});

const { GET: nextAuthGet, POST } = handler;

/** Wrapper: /api/auth/session liefert immer gültiges JSON (vermeidet CLIENT_FETCH_ERROR). */
export async function GET(
  req: Request,
  context: { params: Promise<{ nextauth?: string[] }> }
) {
  try {
    const res = await nextAuthGet(req, context);
    const params = await context.params;
    const isSession =
      (params?.nextauth?.[0] === "session") ||
      (req.url ?? "").includes("/api/auth/session");
    if (!isSession) return res;

    let text: string;
    try {
      text = await res.text();
    } catch {
      return NextResponse.json({});
    }
    if (text === "" || !text.trim()) return NextResponse.json({});
    try {
      return NextResponse.json(JSON.parse(text));
    } catch {
      return NextResponse.json({});
    }
  } catch {
    return NextResponse.json({});
  }
}

export { POST };
