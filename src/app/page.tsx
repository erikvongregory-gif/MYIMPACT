"use client";

import Link from "next/link";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";

// Simple Show – Video hat Vimeo-Privatsphäre (nur auf freigegebenen Domains einbettbar). Link zur offiziellen Seite.
const SIMPLE_SHOW_URL = "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/simple-show?bid=10600018";

function SimpleShowVideo() {
  return (
    <section
      className="mb-10 overflow-hidden rounded-3xl glass-panel p-4 sm:p-5"
      style={{ animation: "fade-in 0.5s ease-out 0.15s both" }}
    >
      <h3 className="mb-2 text-lg font-semibold text-slate-900 sm:text-xl">
        Simple Show
      </h3>
      <p className="mb-4 text-sm text-slate-600">
        10 % Rendite, tägliche Verfügbarkeit und volle Sicherheit – in 2 Minuten erklärt.
      </p>
      <a
        href={SIMPLE_SHOW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-800 transition-opacity hover:opacity-95"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white" aria-hidden>
          <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="text-sm font-medium text-white">Simple Show Video ansehen</span>
        <span className="text-xs text-white/80">(öffnet in neuem Tab)</span>
      </a>
    </section>
  );
}

export default function Startseite() {
  return (
    <div className="page-bg min-h-screen">
        <header className="glass-panel sticky top-0 z-10 mx-4 mt-4 max-w-4xl rounded-3xl sm:mx-auto">
          <div className="flex items-center justify-between gap-4 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="MYIMPACT"
                width={120}
                height={44}
                className="h-9 w-auto object-contain sm:h-10"
                priority
              />
              <h1 className="text-base font-semibold tracking-tight text-slate-900">
                Botschafter
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 sm:inline-block">
                Nachhaltigkeit
              </span>
              <NavMenu />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
          {/* Titel leicht über dem Video */}
          <h2
            className="mb-3 text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            style={{ animation: "fade-in 0.5s ease-out" }}
          >
            Herzlich willkommen im
            <br />
            Botschafter-Portal
          </h2>
          {/* Video */}
          <section className="relative mb-10 min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[320px] md:min-h-[380px]">
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
          </section>
          <p
            className="mb-10 max-w-xl mx-auto text-center text-slate-600 sm:text-base"
            style={{ animation: "fade-in 0.5s ease-out 0.1s both" }}
          >
            Dein zentraler Ort für Links, Events und Ressourcen für deutsche
            Nachhaltigkeit.
          </p>

          <SimpleShowVideo />

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/links" className="group block">
              <section
                className="glass-panel flex items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] active:translate-y-0"
                style={{ animation: "slide-up 0.5s ease-out 0.05s both" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/15">
                  <LinkIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-slate-900">
                    Individuellen Link erstellen
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-500">
                    Tippgebernummer eingeben
                  </p>
                </div>
                <span className="shrink-0 text-emerald-500 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </section>
            </Link>

            <Link href="/events" className="group block">
              <section
                className="glass-panel flex items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] active:translate-y-0"
                style={{ animation: "slide-up 0.5s ease-out 0.1s both" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/15">
                  <CalendarIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-slate-900">Events</h2>
                  <p className="mt-0.5 text-sm text-slate-500">
                    Veranstaltungen & Workshops
                  </p>
                </div>
                <span className="shrink-0 text-emerald-500 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </section>
            </Link>

            <Link href="/startphase" className="group block">
              <section
                className="glass-panel flex items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] active:translate-y-0"
                style={{ animation: "slide-up 0.5s ease-out 0.15s both" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/15">
                  <RocketIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-slate-900">
                    Erfolgreiche Startphase
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-500">
                    Checklisten & Tipps
                  </p>
                </div>
                <span className="shrink-0 text-emerald-500 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </section>
            </Link>

            <Link href="/teamaufbau" className="group block">
              <section
                className="glass-panel flex items-center gap-4 rounded-3xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] active:translate-y-0"
                style={{ animation: "slide-up 0.5s ease-out 0.2s both" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/15">
                  <TeamIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-slate-900">
                    Einarbeitung & Teamaufbau
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-500">
                    Onboarding & Schulungen
                  </p>
                </div>
                <span className="shrink-0 text-emerald-500 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </section>
            </Link>
          </div>
        </main>

        <footer className="mt-16 border-t border-slate-200/80 py-8">
          <div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-500">
            MYIMPACT · Botschafter für deutsche Nachhaltigkeit
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
