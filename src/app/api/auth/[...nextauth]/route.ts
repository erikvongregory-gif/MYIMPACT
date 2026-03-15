import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
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
    CredentialsProvider({
      id: "credentials",
      name: "E-Mail & Passwort",
      credentials: {
        email: { label: "E-Mail", type: "email" },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const envEmail = process.env.CREDENTIALS_EMAIL;
        const envPassword = process.env.CREDENTIALS_PASSWORD;
        if (!envEmail || !envPassword) return null;
        if (
          credentials.email === envEmail &&
          credentials.password === envPassword
        ) {
          return {
            id: "credentials-user",
            email: credentials.email,
            name: credentials.email.split("@")[0],
          };
        }
        return null;
      },
    }),
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
      if (token?.email) session.user!.email = token.email as string;
      if (token?.name) session.user!.name = token.name as string;
      return session;
    },
    jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
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
