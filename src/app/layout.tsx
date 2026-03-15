import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MYIMPACT – Botschafter-Portal für die Deutsche Nachhaltigkeit",
  description: "Botschafter-Portal für die Deutsche Nachhaltigkeit: Individuelle Links, Events, Startphase und Teamaufbau.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} font-sans antialiased pb-28`}
      >
        <SessionProvider>
          <LoadingGate>{children}</LoadingGate>
        </SessionProvider>
      </body>
    </html>
  );
}
