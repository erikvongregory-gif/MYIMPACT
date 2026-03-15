"use client";

import Link from "next/link";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";

// Simple Show – Video hat Vimeo-Privatsphäre (nur auf freigegebenen Domains einbettbar). Link zur offiziellen Seite.
const SIMPLE_SHOW_URL = "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/simple-show?bid=10600018";

function SimpleShowVideo() {
  return (
    <section
      className="glass-panel mb-12 overflow-hidden rounded-2xl p-6 sm:p-8"
      style={{ animation: "fade-in 0.5s ease-out 0.15s both" }}
    >
      <h3 className="heading-display mb-2 text-xl font-semibold text-[var(--text)]">
        Simple Show
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-[var(--text-muted)]">
        10 % Rendite, tägliche Verfügbarkeit und volle Sicherheit – in 2 Minuten erklärt.
      </p>
      <a
        href={SIMPLE_SHOW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-[var(--text)] transition-all duration-300 hover:opacity-95"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-white/30" aria-hidden>
          <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="text-sm font-semibold text-white">Simple Show ansehen</span>
        <span className="text-xs text-white/60">(öffnet in neuem Tab)</span>
      </a>
    </section>
  );
}

export default function Startseite() {
  return (
    <div className="page-bg min-h-screen" style={{ background: "var(--bg)" }}>
        <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="MYIMPACT"
                width={120}
                height={44}
                className="h-9 w-auto object-contain sm:h-10"
                priority
              />
              <h1 className="heading-display text-base font-semibold text-[var(--text)]">
                Botschafter
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-[var(--gold)]/40 bg-[var(--gold-soft)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--gold)] sm:inline-block">
                Deutsche Nachhaltigkeit
              </span>
              <NavMenu />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 pt-10 pb-16 sm:pt-14 sm:pb-20">
          <p
            className="hero-label mb-2 text-center"
            style={{ animation: "fade-in 0.5s ease-out" }}
          >
            Herzlich willkommen im
          </p>
          <h2
            className="hero-title mb-2 text-center text-3xl tracking-tight sm:text-4xl md:text-5xl"
            style={{ animation: "fade-in 0.5s ease-out 0.05s both" }}
          >
            Botschafter-Portal
          </h2>
          <section className="relative mb-12 mt-8 min-h-[260px] overflow-hidden rounded-2xl sm:min-h-[300px] md:min-h-[360px]" style={{ boxShadow: "var(--shadow-card-hover)" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            >
              <source src="/iif-ffm-2025.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" aria-hidden />
          </section>
          <p
            className="mx-auto mb-14 max-w-lg text-center text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base"
            style={{ animation: "fade-in 0.5s ease-out 0.1s both" }}
          >
            Dein zentraler Ort für Links, Events und Ressourcen für die Deutsche
            Nachhaltigkeit.
          </p>

          <SimpleShowVideo />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <Link href="/links" className="group block">
              <section
                className="premium-card flex items-center gap-4 rounded-2xl p-5 active:translate-y-0"
                style={{ animation: "card-row-in 0.55s var(--ease) 0.08s both" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-colors group-hover:bg-emerald-100">
                  <LinkIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="heading-display font-semibold text-[var(--text)]">
                    Individuellen Link erstellen
                  </h2>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    Tippgebernummer eingeben
                  </p>
                </div>
                <span className="shrink-0 text-lg font-medium text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </section>
            </Link>

            <Link href="/events" className="group block">
              <section
                className="premium-card flex items-center gap-4 rounded-2xl p-5 active:translate-y-0"
                style={{ animation: "card-row-in 0.55s var(--ease) 0.18s both" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-colors group-hover:bg-emerald-100">
                  <CalendarIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="heading-display font-semibold text-[var(--text)]">Events</h2>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    Veranstaltungen & Workshops
                  </p>
                </div>
                <span className="shrink-0 text-lg font-medium text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </section>
            </Link>

            <Link href="/startphase" className="group block">
              <section
                className="premium-card flex items-center gap-4 rounded-2xl p-5 active:translate-y-0"
                style={{ animation: "card-row-in 0.55s var(--ease) 0.28s both" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-colors group-hover:bg-emerald-100">
                  <RocketIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="heading-display font-semibold text-[var(--text)]">
                    Erfolgreiche Startphase
                  </h2>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    Checklisten & Tipps
                  </p>
                </div>
                <span className="shrink-0 text-lg font-medium text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </section>
            </Link>

            <Link href="/teamaufbau" className="group block">
              <section
                className="premium-card flex items-center gap-4 rounded-2xl p-5 active:translate-y-0"
                style={{ animation: "card-row-in 0.55s var(--ease) 0.38s both" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-colors group-hover:bg-emerald-100">
                  <TeamIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="heading-display font-semibold text-[var(--text)]">
                    Einarbeitung & Teamaufbau
                  </h2>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    Onboarding & Schulungen
                  </p>
                </div>
                <span className="shrink-0 text-lg font-medium text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </section>
            </Link>
          </div>
        </main>

        <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-8">
          <div className="mx-auto max-w-4xl px-4 text-center text-xs tracking-wide text-[var(--text-soft)]">
            MYIMPACT · Botschafter für die Deutsche Nachhaltigkeit
          </div>
        </footer>
      </div>
  );
}

function LinkIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
