"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import LiquidBackground from "@/components/LiquidBackground";
import BottomNav from "@/components/BottomNav";

export default function LoadingGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && (
        <LoadingScreen onComplete={() => setLoadingDone(true)} />
      )}
      <div
        className={`relative min-h-screen transition-opacity duration-300 ease-out ${
          loadingDone ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!loadingDone}
      >
        <LiquidBackground />
        <div className="relative z-10">{children}</div>
        <BottomNav />
      </div>
    </>
  );
}
