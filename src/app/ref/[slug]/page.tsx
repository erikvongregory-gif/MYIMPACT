import Link from "next/link";

export default async function RefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="page-bg flex min-h-screen flex-col items-center justify-center px-4">
      <div
        className="max-w-md rounded-3xl p-8 text-center"
        style={{
          background: "rgba(248, 252, 250, 0.8)",
          border: "1px solid rgba(34, 197, 94, 0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.4) inset, 0 20px 40px -20px rgba(0,0,0,0.08)",
        }}
      >
        <h1 className="text-xl font-semibold text-emerald-900">
          Willkommen über den Link von {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-3 text-emerald-600">
          Du wurdest von einem Botschafter für die Deutsche Nachhaltigkeit weitergeleitet. Hier
          geht es zur Nachhaltigkeits-Plattform.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-2xl border border-emerald-300 bg-emerald-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Zur Botschafter-Übersicht
        </Link>
      </div>
    </div>
  );
}
