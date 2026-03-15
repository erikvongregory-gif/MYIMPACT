"use client";

import Link from "next/link";
import NavMenu from "@/components/NavMenu";

function RocketIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

const startphaseItems = [
  "Erste Schritte: Registrierung & Profil",
  "Kennzeichnung & Materialien nutzen",
  "Erste 5 Tippgeber gewinnen",
  "Feedback & Optimierung",
];

export default function StartphasePage() {
  return (
    <div className="page-bg min-h-screen">
      <header
        className="glass-panel sticky top-0 z-10 mx-4 mt-4 max-w-4xl rounded-2xl backdrop-blur-xl sm:mx-auto"
        style={{
          background: "rgba(248, 252, 250, 0.7)",
          border: "1px solid rgba(34, 197, 94, 0.12)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.35) inset, 0 4px 24px -4px rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-emerald-800 transition-colors hover:text-emerald-900"
            >
              <BackIcon />
              <span className="text-sm font-medium">Zurück</span>
            </Link>
            <h1 className="text-lg font-semibold tracking-tight text-emerald-900">
              Erfolgreiche Startphase
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section
          className="glass-panel overflow-hidden rounded-2xl"
          style={{
            background: "rgba(248, 252, 250, 0.7)",
            border: "1px solid rgba(34, 197, 94, 0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="glass-panel-header flex items-center gap-2 px-6 py-4">
            <RocketIcon />
            <h2 className="font-semibold text-emerald-900">
              Erfolgreiche Startphase
            </h2>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm text-emerald-600">
              Checklisten, Tipps und Ressourcen für einen starken Start als
              Botschafter.
            </p>
            <ul className="space-y-2">
              {startphaseItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-xs font-semibold text-emerald-800">
                    {i + 1}
                  </span>
                  <span className="text-emerald-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
