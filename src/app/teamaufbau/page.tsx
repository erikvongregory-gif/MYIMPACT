"use client";

import Link from "next/link";
import NavMenu from "@/components/NavMenu";

function TeamIcon() {
  return (
    <svg className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="page-bg min-h-screen" style={{ background: "var(--bg)" }}>
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[var(--accent)] transition-colors hover:opacity-80">
              <BackIcon />
              <span className="text-sm font-medium">Zurück</span>
            </Link>
            <h1 className="heading-display text-lg font-semibold text-[var(--text)]">
              Einarbeitung und Teamaufbau
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section className="glass-panel overflow-hidden rounded-2xl">
          <div className="glass-panel-header flex items-center gap-2 px-6 py-4">
            <TeamIcon />
            <h2 className="heading-display font-semibold text-[var(--text)]">
              Einarbeitung und Teamaufbau
            </h2>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm text-[var(--text-muted)]">
              Onboarding-Materialien, Schulungen und Ideen zum Aufbau deines
              Teams.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {teamCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--border-strong)]"
                >
                  <h3 className="heading-display font-medium text-[var(--text)]">{card.title}</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
