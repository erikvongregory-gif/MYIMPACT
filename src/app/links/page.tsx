"use client";

import { useState } from "react";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";

const INVESTOR_BASE = typeof window !== "undefined" ? window.location.origin : "";

const INVESTOR_LINKS: { slug: string; label: string }[] = [
  { slug: "zeichnungsschein", label: "Individueller Zeichnungsschein" },
  { slug: "simple-show", label: "Simple Show" },
  { slug: "video-impact", label: "Video Impact Investments" },
  { slug: "video-testimonials", label: "Video Testimonials" },
  { slug: "isii-talk-faq", label: "ISII Talk 10% Anleihe FAQ" },
  { slug: "dn-portfolio", label: "DN Beteiligungs Portfolio" },
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
  const [error, setError] = useState("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const generateLinks = () => {
    const num = tippgebernummer.replace(/\s/g, "");
    if (!/^\d{8}$/.test(num)) {
      setError("Bitte genau 8 Ziffern eingeben.");
      setGeneratedLinks({});
      return;
    }
    setError("");
    const links: Record<string, string> = {};
    INVESTOR_LINKS.forEach(({ slug }) => {
      links[slug] = `${INVESTOR_BASE}/investoren/${slug}?tippgeber=${num}`;
    });
    setGeneratedLinks(links);
  };

  const copyToClipboard = async (link: string, slug: string) => {
    await navigator.clipboard.writeText(link);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

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
              Individuellen Link erstellen
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
            <LinkIcon />
            <h2 className="font-semibold text-emerald-900">Tippgebernummer eingeben</h2>
          </div>
          <div className="space-y-4 p-6">
            <p className="text-sm text-emerald-600">
              Gib deine 8-stellige Tippgebernummer ein, um individuelle Links für
              Investoren-Inhalte zu erstellen.
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
                className="flex-1 rounded-xl border border-emerald-200 bg-white/80 px-4 py-2.5 font-mono text-emerald-900 placeholder:text-emerald-500 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <button
                onClick={generateLinks}
                disabled={tippgebernummer.length !== 8}
                className="rounded-xl border border-emerald-300 bg-emerald-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600"
              >
                Links erstellen
              </button>
            </div>
            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
            {Object.keys(generatedLinks).length > 0 && (
              <div className="space-y-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                <span className="text-xs font-medium text-emerald-700">
                  Inhalte für Investoren:
                </span>
                <div className="space-y-2">
                  {INVESTOR_LINKS.map(({ slug, label }) => (
                    <div
                      key={slug}
                      className="flex flex-col gap-2 rounded-xl border border-emerald-100 bg-emerald-50/50 p-3 sm:flex-row sm:items-center"
                    >
                      <span className="min-w-[180px] shrink-0 text-sm font-medium text-emerald-900">
                        {label}
                      </span>
                      <code className="flex-1 truncate rounded-lg bg-white px-3 py-2 text-xs text-emerald-800">
                        {generatedLinks[slug]}
                      </code>
                      <button
                        onClick={() =>
                          copyToClipboard(generatedLinks[slug], slug)
                        }
                        className="shrink-0 rounded-xl border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
                      >
                        {copiedSlug === slug ? "Kopiert!" : "Kopieren"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
