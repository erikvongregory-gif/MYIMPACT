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
      style={{ background: "var(--bg)" }}
    >
      <div className="liquid-glass relative flex flex-col items-center justify-center rounded-2xl px-16 py-20 sm:px-20 sm:py-24">
        <div className="relative z-10 flex flex-col items-center gap-12">
          <div className="relative">
            {!logoError ? (
              <Image
                src={LOGO_PATH}
                alt="MYIMPACT"
                width={200}
                height={90}
                className="h-auto w-[140px] object-contain sm:w-[160px]"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span className="text-2xl font-semibold tracking-widest text-[var(--text)] sm:text-3xl">
                MYIMPACT
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[var(--accent)]"
                style={{
                  animation: "liquid-loading-bounce 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
