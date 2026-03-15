import Link from "next/link";

export default async function RefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="page-bg flex min-h-screen flex-col items-center justify-center px-4" style={{ background: "var(--bg)" }}>
      <div
        className="max-w-md rounded-2xl border p-8 text-center"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-card-hover)",
        }}
      >
        <h1 className="heading-display text-xl font-semibold text-[var(--text)]">
          Willkommen über den Link von {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-3 text-[var(--text-muted)]">
          Du wurdest von einem Botschafter für die Deutsche Nachhaltigkeit weitergeleitet. Hier
          geht es zur Nachhaltigkeits-Plattform.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-[var(--accent)] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          Zur Botschafter-Übersicht
        </Link>
      </div>
    </div>
  );
}
