"use client";

import Link from "next/link";
import NavMenu from "@/components/NavMenu";

const EVENTS_BY_MONTH: { month: string; events: { date: string; time?: string; title: string; location?: string; type?: "qa" | "update" | "best-practice" | "info" | "zinszahlung" }[] }[] = [
  {
    month: "Evergreen",
    events: [
      { date: "", title: "Investoren Q&A mit Boris und Hanno", location: "Alle Zoom Termine 2026", type: "qa" },
    ],
  },
  {
    month: "Februar",
    events: [
      { date: "11.02.2026", time: "12:30 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
      { date: "13.02.2026", time: "17:00 Uhr", title: "Investoren Update", location: "Update für alle bereits investierten Kunden von Boris Staab, Ole & Tim Nixdorff, Dr. Andreas Rickert uvm.", type: "update" },
      { date: "13.02.2026", time: "18:00 Uhr", title: "Botschafter Update", type: "update" },
      { date: "17.02.2026", time: "09:00 Uhr", title: "Best Practice für Newcomer und Botschafter", type: "best-practice" },
      { date: "18.02.2026", time: "18:00 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
      { date: "23.02.2026", title: "Infoveranstaltung für Investoren, Kitzingen", location: "LARSONS Kitchen, Steigweg 24, 97318 Kitzingen", type: "info" },
      { date: "24.02.2026", title: "Infoveranstaltung für Investoren, Meerane", location: "ROMANTIKHOTEL SCHWANEFELD, Schwanefelder Straße 22, 08393 Meerane", type: "info" },
      { date: "24.02.2026", time: "09:00 Uhr", title: "Best Practice für Newcomer und Botschafter", type: "best-practice" },
      { date: "25.02.2026", title: "Infoveranstaltung für Investoren, Dresden", location: "ARCOTEL Hafen City Dresden, Leipziger Straße 29, 01097 Dresden", type: "info" },
      { date: "25.02.2026", title: "Infoveranstaltung für Investoren, Köln", location: "MOTORWORLD Köln", type: "info" },
      { date: "26.02.2026", title: "Infoveranstaltung für Investoren, Königstein", location: "MIRO'S RISTORANTE, Königstein", type: "info" },
      { date: "27.02.2026", time: "17:00 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
    ],
  },
  {
    month: "März",
    events: [
      { date: "04.03.2026", title: "Infoveranstaltung für Investoren, Bremen", location: "Lür-Kropp Hof, Rockwinkeler Landstrasse 5, 28355 Bremen", type: "info" },
      { date: "06.03.2026", time: "11:30 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
      { date: "15.03.2026", title: "ZINSZAHLUNG", type: "zinszahlung" },
      { date: "17.03.2026", time: "09:00 Uhr", title: "Best Practice für Newcomer und Botschafter", type: "best-practice" },
      { date: "18.03.2026", time: "18:00 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
      { date: "20.03.2026", title: "Infoveranstaltung für Investoren, Regensburg", location: "TechBase Regensburg", type: "info" },
      { date: "23.03.2026", time: "17:00 Uhr", title: "Botschafter Update", type: "update" },
      { date: "24.03.2026", time: "17:00 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
    ],
  },
  {
    month: "April",
    events: [
      { date: "02.04.2026", time: "17:00 Uhr", title: "Investoren Q&A mit Boris und Hanno", type: "qa" },
    ],
  },
  {
    month: "Juni",
    events: [
      { date: "15.06.2026", title: "ZINSZAHLUNG", type: "zinszahlung" },
    ],
  },
  {
    month: "September",
    events: [
      { date: "15.09.2026", title: "ZINSZAHLUNG", type: "zinszahlung" },
    ],
  },
  {
    month: "Dezember",
    events: [
      { date: "15.12.2026", title: "ZINSZAHLUNG", type: "zinszahlung" },
    ],
  },
];

function CalendarIcon() {
  return (
    <svg className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

function EventTypeIcon({ type }: { type?: string }) {
  if (type === "qa") {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-lg font-bold text-white">
        F&A
      </div>
    );
  }
  if (type === "zinszahlung") {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
        <svg className="h-7 w-7 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
    );
  }
  if (type === "update" || type === "best-practice") {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-center text-[10px] font-semibold leading-tight text-white">
        Update
      </div>
    );
  }
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
      <CalendarIcon />
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="page-bg min-h-screen" style={{ background: "var(--bg)" }}>
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--accent)] transition-colors hover:opacity-80"
            >
              <BackIcon />
              <span className="text-sm font-medium">Zurück</span>
            </Link>
            <h1 className="heading-display text-lg font-semibold text-[var(--text)]">
              Events
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section className="glass-panel overflow-hidden rounded-2xl">
          <div className="glass-panel-header flex items-center gap-2 px-6 py-4">
            <CalendarIcon />
            <h2 className="heading-display font-semibold text-[var(--text)]">Events 2025/2026</h2>
          </div>
          <div className="p-4 sm:p-6">
            <p className="mb-6 text-sm text-[var(--text-muted)]">
              Kommende Veranstaltungen, Workshops und Vernetzungstreffen für
              Botschafter.
            </p>
            <div className="space-y-8">
              {EVENTS_BY_MONTH.map(({ month, events }) => (
                <div key={month}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-800">
                    {month}
                  </h3>
                  <div className="space-y-3">
                    {events.map((event, i) => (
                      <div
                        key={`${month}-${i}`}
                        className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--border-strong)]"
                      >
                        <EventTypeIcon type={event.type} />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-slate-600">
                            {event.date}
                            {event.time ? ` · ${event.time}` : ""}
                          </p>
                          <h4 className="mt-0.5 font-medium text-slate-900">
                            {event.title}
                          </h4>
                          {event.location && (
                            <p className="mt-1 text-sm text-slate-600">
                              {event.location}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
