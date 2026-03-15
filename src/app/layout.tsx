import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingGate from "@/components/LoadingGate";
import SessionProvider from "@/components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MYIMPACT – Botschafter-Portal | Deutsche Nachhaltigkeit",
  description: "Portal für Botschafter: Individuelle Links, Events, Startphase und Teamaufbau.",
  manifest: "/manifest.json",
  themeColor: "#059669",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MYIMPACT",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-28`}
      >
        <SessionProvider>
          <LoadingGate>{children}</LoadingGate>
        </SessionProvider>
      </body>
    </html>
  );
}
