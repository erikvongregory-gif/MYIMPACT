"use client";

import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen";
import NavMenu from "@/components/NavMenu";

export default function Startseite() {
  return (
    <>
      <LoadingScreen />
      <div className="page-bg min-h-screen">
        <header
          className="glass-panel sticky top-0 z-10 mx-4 mt-4 max-w-4xl rounded-2xl backdrop-blur-xl sm:mx-auto"
          style={{
            background: "rgba(248, 252, 250, 0.7)",
            border: "1px solid rgba(34, 197, 94, 0.15)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.35) inset, 0 4px 24px -4px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4">
            <h1 className="text-lg font-semibold tracking-tight text-emerald-900">
              MYIMPACT · Botschafter
            </h1>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-emerald-200/70 bg-white/50 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur-sm sm:inline-block">
                Nachhaltigkeit
              </span>
              <NavMenu />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8">
          <p className="mb-10 text-center text-emerald-700">
            Willkommen im Botschafter-Portal für deutsche Nachhaltigkeit. Dein
            zentraler Ort für Links, Events und Ressourcen.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/links">
              <section
                className="glass-panel flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-emerald-300/80 hover:bg-white/70"
                style={{
                  background: "rgba(248, 252, 250, 0.7)",
                  border: "1px solid rgba(34, 197, 94, 0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50/80">
                  <LinkIcon />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-emerald-900">
                    Individuellen Link erstellen
                  </h2>
                  <p className="mt-0.5 text-sm text-emerald-600">
                    Tippgebernummer eingeben
                  </p>
                </div>
                <span className="text-emerald-500">→</span>
              </section>
            </Link>

            <Link href="/events">
              <section
                className="glass-panel flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-emerald-300/80 hover:bg-white/70"
                style={{
                  background: "rgba(248, 252, 250, 0.7)",
                  border: "1px solid rgba(34, 197, 94, 0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50/80">
                  <CalendarIcon />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-emerald-900">Events</h2>
                  <p className="mt-0.5 text-sm text-emerald-600">
                    Veranstaltungen & Workshops
                  </p>
                </div>
                <span className="text-emerald-500">→</span>
              </section>
            </Link>

            <Link href="/startphase">
              <section
                className="glass-panel flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-emerald-300/80 hover:bg-white/70"
                style={{
                  background: "rgba(248, 252, 250, 0.7)",
                  border: "1px solid rgba(34, 197, 94, 0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50/80">
                  <RocketIcon />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-emerald-900">
                    Erfolgreiche Startphase
                  </h2>
                  <p className="mt-0.5 text-sm text-emerald-600">
                    Checklisten & Tipps
                  </p>
                </div>
                <span className="text-emerald-500">→</span>
              </section>
            </Link>

            <Link href="/teamaufbau">
              <section
                className="glass-panel flex items-center gap-4 rounded-2xl p-6 transition-all hover:border-emerald-300/80 hover:bg-white/70"
                style={{
                  background: "rgba(248, 252, 250, 0.7)",
                  border: "1px solid rgba(34, 197, 94, 0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50/80">
                  <TeamIcon />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-emerald-900">
                    Einarbeitung & Teamaufbau
                  </h2>
                  <p className="mt-0.5 text-sm text-emerald-600">
                    Onboarding & Schulungen
                  </p>
                </div>
                <span className="text-emerald-500">→</span>
              </section>
            </Link>
          </div>
        </main>

        <footer className="mt-16 border-t border-emerald-200/60 py-8">
          <div className="mx-auto max-w-4xl px-4 text-center text-sm text-emerald-500">
            MYIMPACT · Botschafter für deutsche Nachhaltigkeit
          </div>
        </footer>
      </div>
    </>
  );
}

function LinkIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
