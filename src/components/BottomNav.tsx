"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef, useLayoutEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Start", icon: HomeIcon },
  { href: "/links", label: "Links", icon: LinkIcon },
  { href: "/events", label: "Events", icon: CalendarIcon },
  { href: "/startphase", label: "Startphase", icon: RocketIcon },
  { href: "/teamaufbau", label: "Team", icon: TeamIcon },
];

function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={active ? 2.5 : 2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function LinkIcon({ active }: { active?: boolean }) {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={active ? 2.5 : 2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}

function CalendarIcon({ active }: { active?: boolean }) {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={active ? 2.5 : 2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function RocketIcon({ active }: { active?: boolean }) {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={active ? 2.5 : 2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function TeamIcon({ active }: { active?: boolean }) {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={active ? 2.5 : 2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);

  const activeIndex = navItems.findIndex(
    ({ href }) => pathname === href || (href === "/" && pathname === "/")
  );

  useLayoutEffect(() => {
    if (activeIndex < 0 || !containerRef.current || !itemRefs.current[activeIndex]) return;
    const container = containerRef.current.getBoundingClientRect();
    const activeEl = itemRefs.current[activeIndex];
    if (!activeEl) return;
    const rect = activeEl.getBoundingClientRect();
    setPillStyle({
      left: rect.left - container.left,
      width: rect.width,
    });
  }, [pathname, activeIndex]);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-6 pt-2"
      aria-label="Hauptnavigation"
    >
      <div
        ref={containerRef}
        className="relative flex items-center justify-around gap-1 rounded-[2rem] px-3 py-1.5 shadow-[var(--shadow-lg)] transition-shadow duration-200"
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(16, 185, 129, 0.45)",
          boxShadow: "var(--shadow-md), 0 0 0 1px rgba(255,255,255,0.6) inset",
        }}
      >
        {/* Gleitender Indikator */}
        {pillStyle && (
          <span
            className="absolute top-1.5 bottom-1.5 rounded-3xl bg-emerald-500/15"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            aria-hidden
          />
        )}
        {navItems.map(({ href, label, icon: Icon }, i) => {
          const active =
            pathname === href || (href === "/" && pathname === "/");
          return (
            <Link
              key={href}
              ref={(el) => { itemRefs.current[i] = el; }}
              href={href}
              className={`relative z-10 flex flex-col items-center gap-0.5 rounded-3xl px-3 py-1.5 transition-colors duration-300 ease-out min-w-[48px] ${
                active
                  ? "text-emerald-600"
                  : "text-slate-500 hover:text-slate-700 active:text-slate-900"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="relative">
                <Icon active={active} />
              </span>
              <span
                className={`relative text-[10px] font-medium transition-colors duration-300 ease-out ${
                  active ? "text-emerald-600" : ""
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
