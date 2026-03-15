"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Startseite" },
  { href: "/links", label: "Individuellen Link erstellen" },
  { href: "/events", label: "Events" },
  { href: "/startphase", label: "Erfolgreiche Startphase" },
  { href: "/teamaufbau", label: "Einarbeitung und Teamaufbau" },
];

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pathname = usePathname();

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
        className={`fixed right-0 top-0 z-[9999] flex h-full w-72 max-w-[85vw] flex-col border-l border-emerald-100 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(248, 252, 250, 0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.08) inset, -20px 0 40px rgba(0,0,0,0.06)",
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
        <div className="flex items-center justify-between border-b border-emerald-100 px-4 py-4">
          <span className="font-semibold text-emerald-900">
            Menü
          </span>
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-emerald-600 transition-all hover:bg-emerald-50 hover:text-emerald-800"
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
                  className={`block rounded-xl px-4 py-3 text-emerald-800 transition-all hover:bg-emerald-50 ${
                    isActive
                      ? "bg-emerald-50 font-medium text-emerald-900"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Login-Bereich - Liquid Glass */}
        <div
          className="mt-auto border-t border-emerald-100 p-4"
        >
          <p className="mb-3 text-sm font-medium text-emerald-900">
            Login
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3"
          >
            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              style={{ backdropFilter: "blur(10px)" }}
            />
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              style={{ backdropFilter: "blur(10px)" }}
            />
            <button
              type="submit"
              className="w-full rounded-xl border border-emerald-300 bg-emerald-600 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:border-emerald-400"
            >
              Anmelden
            </button>
          </form>
        </div>
      </nav>
    </>,
    document.body
  );

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-emerald-600 transition-all hover:bg-emerald-50 hover:text-emerald-800"
        aria-label="Menü öffnen"
        aria-expanded={open}
      >
        <MenuIcon open={open} />
      </button>
      {menuPortal}
    </>
  );
}
