export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Basis: weicher Verlauf */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -15%, rgba(16, 185, 129, 0.12), transparent 55%), radial-gradient(ellipse 55% 35% at 100% 45%, rgba(6, 182, 212, 0.06), transparent 50%), radial-gradient(ellipse 50% 30% at 0% 75%, rgba(16, 185, 129, 0.06), transparent 50%), linear-gradient(180deg, #e4eae7 0%, #dce3e0 45%, #d8dfdb 100%)",
        }}
      />
      {/* Sanft animierte Orbs */}
      <div className="absolute left-1/4 top-1/4 h-[260px] w-[260px] animate-liquid-float rounded-full bg-emerald-400/12 blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/5 h-[300px] w-[300px] animate-liquid-float-delayed rounded-full bg-teal-400/10 blur-[90px]" />
      <div className="absolute right-1/4 top-1/2 h-[220px] w-[220px] animate-liquid-float-slow rounded-full bg-emerald-300/10 blur-[70px]" />
      <div className="absolute bottom-1/4 left-1/2 h-[180px] w-[180px] animate-liquid-float rounded-full bg-emerald-200/14 blur-[60px]" />
    </div>
  );
}
