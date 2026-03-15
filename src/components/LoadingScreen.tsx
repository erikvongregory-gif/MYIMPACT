"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOGO_PATH = "/logo.svg";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 600);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 liquid-loading-bg" />

      {/* Floating glass orbs - ambient light */}
      <div className="absolute left-1/4 top-1/3 h-72 w-72 animate-liquid-float rounded-full bg-emerald-400/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-liquid-float-delayed rounded-full bg-emerald-500/8 blur-[120px]" />
      <div className="absolute right-1/3 top-1/2 h-64 w-64 animate-liquid-float-slow rounded-full bg-emerald-400/10 blur-[80px]" />

      {/* Central liquid glass container */}
      <div className="liquid-glass relative flex flex-col items-center justify-center rounded-[2.5rem] p-12 sm:p-16">
        {/* Inner glow */}
        <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
          <div className="absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-emerald-400/5 blur-3xl" />
        </div>

        {/* Specular highlight - top edge */}
        <div
          className="absolute left-[10%] right-[10%] top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="relative">
            {!logoError ? (
              <Image
                src={LOGO_PATH}
                alt="MYIMPACT"
                width={200}
                height={90}
                className="h-auto w-[160px] max-w-[200px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:w-[180px]"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span className="liquid-logo-text text-3xl font-semibold tracking-[0.12em] sm:text-4xl">
                MYIMPACT
              </span>
            )}
          </div>

          {/* Loading indicator */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-white/90"
                style={{
                  animation: "liquid-loading-bounce 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient glass shards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[15%] top-[20%] h-32 w-32 rounded-full border border-white/5 bg-white/[0.02] blur-xl" />
        <div className="absolute bottom-[25%] right-[20%] h-40 w-40 rounded-full border border-white/5 bg-white/[0.02] blur-xl" />
      </div>
    </div>
  );
}
