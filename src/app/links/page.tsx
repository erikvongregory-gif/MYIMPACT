"use client";

import { useState } from "react";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";

/** Investoren: Basis-URL + ?bid=, Nummer wird angehängt. */
const INVESTOR_LINKS: { slug: string; label: string; urlBase: string }[] = [
  { slug: "anleihe", label: "Individueller Zeichnungsschein", urlBase: "https://deutsche-nachhaltigkeit.com/inhalt/anleihe?bid=" },
  { slug: "simple-show", label: "Simple Show", urlBase: "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/simple-show?bid=" },
  { slug: "impact-investment", label: "Impact Investment", urlBase: "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/impact-investment?bid=" },
  { slug: "investoren-stimmen", label: "Investoren-Stimmen", urlBase: "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/investoren-stimmen?bid=" },
  { slug: "iisii-talk", label: "IISII Talk mit Ole Nixdorff", urlBase: "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/iisii-talk-mit-ole-nixdorff?bid=" },
  { slug: "dn-beteiligungen", label: "DN Beteiligungen", urlBase: "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/dn-beteiligungen?bid=" },
];

/** Botschafter: urlBase mit ?bid= → Nummer anhängen; ohne ?bid= → statischer Link (keine Nummer). */
const BOTSCHAFTER_LINKS: { slug: string; label: string; urlBase: string; withBid: boolean }[] = [
  { slug: "iisii-ag-trailer", label: "IISII AG Trailer (IMD 2025)", urlBase: "https://deutsche-nachhaltigkeit.eu-1.quentn-site.com/iisii-ag-trailer", withBid: false },
  { slug: "unternehmens-praesentation", label: "Zur Unternehmens-Präsentation einladen (Botschafter)", urlBase: "https://form.jotform.com/243291653178361?bid=", withBid: true },
  { slug: "botschafter-information", label: "Zur Botschafter-Information einladen", urlBase: "https://form.jotform.com/243291653178361?bid=", withBid: true },
  { slug: "tippgeber-registrieren", label: "Neuen Tippgeber registrieren", urlBase: "https://form.jotform.com/241507181817052?bid=", withBid: true },
];

function LinkIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
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

export default function LinkErstellenPage() {
  const [tippgebernummer, setTippgebernummer] = useState("");
  const [generatedLinks, setGeneratedLinks] = useState<Record<string, string>>({});
  const [generatedBotschafterLinks, setGeneratedBotschafterLinks] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [copiedBotschafterSlug, setCopiedBotschafterSlug] = useState<string | null>(null);

  const generateLinks = () => {
    const num = tippgebernummer.replace(/\s/g, "");
    if (!/^\d{8}$/.test(num)) {
      setError("Überprüfe deine Tippgebernummer");
      setGeneratedLinks({});
      setGeneratedBotschafterLinks({});
      return;
    }
    setError("");
    const links: Record<string, string> = {};
    INVESTOR_LINKS.forEach(({ slug, urlBase }) => {
      links[slug] = urlBase + num;
    });
    setGeneratedLinks(links);
    const botschafterLinks: Record<string, string> = {};
    BOTSCHAFTER_LINKS.forEach(({ slug, urlBase, withBid }) => {
      botschafterLinks[slug] = withBid ? urlBase + num : urlBase;
    });
    setGeneratedBotschafterLinks(botschafterLinks);
  };

  const copyToClipboard = async (link: string, slug: string) => {
    await navigator.clipboard.writeText(link);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const copyBotschafterToClipboard = async (link: string, slug: string) => {
    await navigator.clipboard.writeText(link);
    setCopiedBotschafterSlug(slug);
    setTimeout(() => setCopiedBotschafterSlug(null), 2000);
  };

  return (
    <div className="page-bg min-h-screen">
      <header
        className="glass-panel sticky top-0 z-10 mx-4 mt-4 max-w-4xl rounded-3xl backdrop-blur-xl sm:mx-auto"
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
              Individuellen Link erstellen
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section
          className="glass-panel overflow-hidden rounded-3xl"
          style={{
            background: "rgba(248, 252, 250, 0.7)",
            border: "1px solid rgba(34, 197, 94, 0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="glass-panel-header flex items-center gap-2 px-6 py-4">
            <LinkIcon />
            <h2 className="font-semibold text-emerald-900">Tippgebernummer eingeben</h2>
          </div>
          <div className="space-y-4 p-6">
            <p className="text-sm text-emerald-600">
              Gib deine 8-stellige Tippgebernummer ein, um individuelle Links für
              Investoren und Botschafter zu erstellen.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                inputMode="numeric"
                maxLength={8}
                placeholder="Tippgebernummer (8 Ziffern, z.B. 12345678)"
                value={tippgebernummer}
                onChange={(e) =>
                  setTippgebernummer(e.target.value.replace(/\D/g, "").slice(0, 8))
                }
                className="flex-1 rounded-2xl border border-emerald-200 bg-white/80 px-4 py-2.5 font-mono text-emerald-900 placeholder:text-emerald-500 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <button
                onClick={generateLinks}
                disabled={tippgebernummer.length !== 8}
                className="rounded-2xl border border-emerald-300 bg-emerald-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600"
              >
                Links erstellen
              </button>
            </div>
            {error && (
              <p className="text-sm font-medium text-red-500">{error}</p>
            )}
            {tippgebernummer.length > 0 && tippgebernummer.length !== 8 && (
              <p className="text-sm font-medium text-red-500">
                Überprüfe deine Tippgebernummer
              </p>
            )}
            {Object.keys(generatedLinks).length > 0 && (
              <>
                <div className="space-y-3 rounded-2xl border border-emerald-300 bg-emerald-100/60 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    Inhalte für Investoren
                  </span>
                  <div className="space-y-2">
                    {INVESTOR_LINKS.map(({ slug, label }) => (
                      <div
                        key={slug}
                        className="flex flex-col gap-2 rounded-2xl border border-emerald-200 bg-white/80 p-3 sm:flex-row sm:items-center"
                      >
                        <span className="min-w-[180px] shrink-0 text-sm font-medium text-emerald-900">
                          {label}
                        </span>
                        <code className="flex-1 truncate rounded-xl bg-emerald-50/80 px-3 py-2 text-xs text-emerald-800">
                          {generatedLinks[slug]}
                        </code>
                        <button
                          onClick={() =>
                            copyToClipboard(generatedLinks[slug], slug)
                          }
                          disabled={tippgebernummer.length !== 8}
                          className="shrink-0 rounded-2xl border border-emerald-300 bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
                        >
                          {copiedSlug === slug ? "Kopiert!" : "Kopieren"}
                        </button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-emerald-800">
                    Der Link befindet sich nun in der Zwischenablage und kann beliebig eingefügt und versendet werden.
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl border border-emerald-300 bg-emerald-100/60 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    Inhalte für Botschafter
                  </span>
                  <div className="space-y-2">
                    {BOTSCHAFTER_LINKS.map(({ slug, label }) => (
                      <div
                        key={slug}
                        className="flex flex-col gap-2 rounded-2xl border border-emerald-200 bg-white/80 p-3 sm:flex-row sm:items-center"
                      >
                        <span className="min-w-[180px] shrink-0 text-sm font-medium text-emerald-900">
                          {label}
                        </span>
                        <code className="flex-1 truncate rounded-xl bg-emerald-50/80 px-3 py-2 text-xs text-emerald-800">
                          {generatedBotschafterLinks[slug]}
                        </code>
                        <button
                          onClick={() =>
                            copyBotschafterToClipboard(generatedBotschafterLinks[slug], slug)
                          }
                          disabled={tippgebernummer.length !== 8}
                          className="shrink-0 rounded-2xl border border-emerald-300 bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
                        >
                          {copiedBotschafterSlug === slug ? "Kopiert!" : "Kopieren"}
                        </button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-emerald-800">
                    Der Link befindet sich nun in der Zwischenablage und kann beliebig eingefügt und versendet werden.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
