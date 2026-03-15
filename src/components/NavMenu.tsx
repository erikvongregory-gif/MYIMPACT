"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const menuItems = [
  { href: "/", label: "Startseite" },
  { href: "/links", label: "Individuellen Link erstellen" },
  { href: "/events", label: "Events" },
  { href: "/startphase", label: "Erfolgreiche Startphase" },
  { href: "/teamaufbau", label: "Einarbeitung und Teamaufbau" },
];

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c1.32-1.58 1.14-3.93-.2-5.28-1.45-1.45-3.7-1.56-5.28-.2-1.58 1.32-1.14 3.93.2 5.28 1.45 1.45 3.7 1.56 5.28.2z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-6 w-6">
      <span
        className={`absolute left-0 top-1 h-0.5 w-6 bg-current transition-all duration-200 ${
          open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-all duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 bottom-1 h-0.5 w-6 bg-current transition-all duration-200 ${
          open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
        }`}
      />
    </div>
  );
}

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setOpen(false);

  const menuPortal = mounted && createPortal(
    <>
      {/* Backdrop - über gesamten Viewport */}
      <div
        className={`fixed inset-0 z-[9998] bg-slate-900/40 backdrop-blur-xl transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-out Menu - Liquid Glass */}
      <nav
        className={`fixed right-0 top-0 z-[9999] flex h-full w-72 max-w-[85vw] flex-col border-l border-slate-200/80 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "var(--shadow-lg), 0 0 0 1px rgba(255,255,255,0.5) inset",
        }}
        aria-label="Hauptmenü"
      >
        {/* Specular highlight top */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />
        <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-4">
          <span className="font-semibold text-slate-900">
            Menü
          </span>
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Menü schließen"
          >
            <MenuIcon open={true} />
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-3">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block rounded-2xl px-4 py-3 text-slate-700 transition-colors hover:bg-slate-100 ${
                    isActive
                      ? "bg-emerald-500/10 font-medium text-emerald-700"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Anmelden / Konto */}
        <div className="mt-auto border-t border-slate-200/80 p-4">
          {status === "loading" ? (
            <p className="text-sm text-slate-500">Lade …</p>
          ) : session?.user ? (
            <div className="space-y-3">
              <p className="truncate text-sm font-medium text-slate-900">
                {session.user.name ?? session.user.email}
              </p>
              <button
                type="button"
                onClick={() => signOut()}
                className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Abmelden
              </button>
            </div>
          ) : (
            <>
              <p className="mb-3 text-sm font-medium text-slate-900">Anmelden</p>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <GoogleIcon />
                  Mit Google anmelden
                </button>
                {process.env.NEXT_PUBLIC_APPLE_SIGNIN_ENABLED === "true" && (
                  <button
                    type="button"
                    onClick={() => signIn("apple")}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-black py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                  >
                    <AppleIcon />
                    Mit Apple anmelden
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </>,
    document.body
  );

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-2xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
        aria-label="Menü öffnen"
        aria-expanded={open}
      >
        <MenuIcon open={open} />
      </button>
      {menuPortal}
    </>
  );
}
