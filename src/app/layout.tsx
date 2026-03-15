import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import LiquidBackground from "@/components/LiquidBackground";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24`}
      >
        <LiquidBackground />
        <div className="relative z-10">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
