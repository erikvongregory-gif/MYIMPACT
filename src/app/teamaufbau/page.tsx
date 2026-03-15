"use client";

import Link from "next/link";
import NavMenu from "@/components/NavMenu";

function TeamIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

const teamCards = [
  { title: "Onboarding-Guide", desc: "Schritt-für-Schritt-Anleitung" },
  { title: "Schulungsvideos", desc: "Zur Einarbeitung neuer Botschafter" },
  { title: "Team-Recruiting", desc: "Tipps zum Gewinnen neuer Mitglieder" },
  { title: "Best Practices", desc: "Erfolgreiche Teams teilen Erfahrungen" },
];

export default function TeamaufbauPage() {
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
              Einarbeitung und Teamaufbau
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
            <TeamIcon />
            <h2 className="font-semibold text-emerald-900">
              Einarbeitung und Teamaufbau
            </h2>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm text-emerald-600">
              Onboarding-Materialien, Schulungen und Ideen zum Aufbau deines
              Teams.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {teamCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/80"
                >
                  <h3 className="font-medium text-emerald-900">{card.title}</h3>
                  <p className="mt-1 text-sm text-emerald-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
