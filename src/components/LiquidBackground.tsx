export default function LiquidBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Basis-Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(167, 243, 208, 0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(187, 247, 208, 0.12), transparent 55%), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(209, 250, 229, 0.12), transparent 50%), linear-gradient(180deg, #eaf5ef 0%, #e5f0eb 40%, #e2ebe7 100%)",
        }}
      />
      {/* Flüssige Orbs – sanft animiert */}
      <div className="absolute left-1/4 top-1/4 h-[280px] w-[280px] animate-liquid-float rounded-full bg-emerald-300/20 blur-[90px]" />
      <div className="absolute bottom-1/3 right-1/5 h-[320px] w-[320px] animate-liquid-float-delayed rounded-full bg-emerald-400/15 blur-[100px]" />
      <div className="absolute right-1/4 top-1/2 h-[240px] w-[240px] animate-liquid-float-slow rounded-full bg-teal-300/15 blur-[80px]" />
      <div className="absolute bottom-1/4 left-1/2 h-[200px] w-[200px] animate-liquid-float rounded-full bg-emerald-200/20 blur-[70px]" />
    </div>
  );
}
