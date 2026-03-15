"use client";

import Link from "next/link";
import NavMenu from "@/components/NavMenu";

function RocketIcon() {
  return (
    <svg className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="page-bg min-h-screen" style={{ background: "var(--bg)" }}>
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[var(--accent)] transition-colors hover:opacity-80">
              <BackIcon />
              <span className="text-sm font-medium">Zurück</span>
            </Link>
            <h1 className="heading-display text-lg font-semibold text-[var(--text)]">
              Erfolgreiche Startphase
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section className="glass-panel overflow-hidden rounded-2xl">
          <div className="glass-panel-header flex items-center gap-2 px-6 py-4">
            <RocketIcon />
            <h2 className="heading-display font-semibold text-[var(--text)]">
              Erfolgreiche Startphase
            </h2>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm text-[var(--text-muted)]">
              Checklisten, Tipps und Ressourcen für einen starken Start als
              Botschafter.
            </p>
            <ul className="space-y-2">
              {startphaseItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <span className="text-[var(--text)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
