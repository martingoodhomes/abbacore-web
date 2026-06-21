/**
 * AnimatedMesh — reusable full-area gradient mesh background.
 * Drop inside any `relative overflow-hidden` container.
 * All motion lives in CSS (globals.css .mesh-orb-* classes) — zero JS overhead.
 */
export default function AnimatedMesh() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/*
       * Six orbs, each independently animated.
       * Colors: #dae1ff (light brand blue), #2563eb (vivid blue), #0050cb (primary dark blue).
       * Opacities keep light orbs visible and dark-blue orbs as tints.
       */}

      {/* 1 — large, top-left anchor, slowest */}
      <div
        className="mesh-orb-a absolute rounded-full blur-[130px] bg-[#dae1ff] opacity-55"
        style={{ width: 920, height: 920, top: '-22%', left: '-18%' }}
      />

      {/* 2 — medium, top-right, vivid blue tint */}
      <div
        className="mesh-orb-b absolute rounded-full blur-[140px] bg-[#2563eb] opacity-[0.10]"
        style={{ width: 680, height: 680, top: '-8%', right: '-12%' }}
      />

      {/* 3 — large, center-left, second lightest — very slow */}
      <div
        className="mesh-orb-c absolute rounded-full blur-[110px] bg-[#dae1ff] opacity-40"
        style={{ width: 800, height: 800, top: '28%', left: '22%' }}
      />

      {/* 4 — medium-small, left-mid, dark blue accent — fastest */}
      <div
        className="mesh-orb-d absolute rounded-full blur-[120px] bg-[#0050cb] opacity-[0.08]"
        style={{ width: 520, height: 520, top: '48%', left: '3%' }}
      />

      {/* 5 — large, bottom-right, soft light blue */}
      <div
        className="mesh-orb-e absolute rounded-full blur-[130px] bg-[#dae1ff] opacity-50"
        style={{ width: 660, height: 660, bottom: '-18%', right: '4%' }}
      />

      {/* 6 — small, center-right, vivid blue accent */}
      <div
        className="mesh-orb-f absolute rounded-full blur-[90px] bg-[#2563eb] opacity-[0.09]"
        style={{ width: 400, height: 400, top: '52%', right: '26%' }}
      />
    </div>
  )
}
