'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion'
import { Zap, ArrowRight, ChevronRight, ShieldCheck, CheckCircle, Bell } from 'lucide-react'

// ─── 2 × 2 card grid ─────────────────────────────────────────────────────────
//  Solicitud (TL) ──► Validación (TR)
//       │                    │
//       ▼                    ▼
//  Aprobación (BL) ──► Notificación (BR)   clockwise particle circuit
// ─────────────────────────────────────────────────────────────────────────────
const SQUARES = [
  { id: 'sol', step: '01', label: 'Solicitud',    sub: 'Evento recibido',    Icon: Zap,         delay: 0.15, pulse: 0.0, floatY: 5 },
  { id: 'val', step: '02', label: 'Validación',   sub: 'Reglas automáticas', Icon: ShieldCheck, delay: 0.32, pulse: 0.7, floatY: 5 },
  { id: 'apr', step: '03', label: 'Aprobación',   sub: 'Sin fricción',       Icon: CheckCircle, delay: 0.49, pulse: 1.4, floatY: 5 },
  { id: 'not', step: '04', label: 'Notificación', sub: 'WhatsApp + email',   Icon: Bell,        delay: 0.66, pulse: 2.1, floatY: 5 },
]

// CSS absolute positions: TL, TR, BL, BR
const POS = [
  { top: '4%',    left:  '4%'  },
  { top: '4%',    right: '4%'  },
  { bottom: '4%', left:  '4%'  },
  { bottom: '4%', right: '4%'  },
]

// Clockwise bridge connections through the 8-unit gap between cards
// Cards occupy 4%–46% and 54%–96% in each axis (SVG viewBox 0–100)
// Guide rails extend 6 units into each card (hidden under the HTML layer)
// Guide-rail paths — cards at 38%/4% → edges at 42/58; rails extend 6 units into each card
const FLOW = [
  { id: 'tt', d: 'M 36,23 L 64,23' },  // TL → TR
  { id: 'rr', d: 'M 77,36 L 77,64' },  // TR → BR
  { id: 'bb', d: 'M 64,77 L 36,77' },  // BR → BL
  { id: 'll', d: 'M 23,64 L 23,36' },  // BL → TL
]

const ORB_GRADIENT = 'radial-gradient(circle at 34% 28%, #bfdbfe 0%, #3b82f6 28%, #2563eb 54%, #1e40af 78%, #1e3a8a 100%)'

const SQUARE_SHADOW = [
  'inset 0 1.5px 0 rgba(255,255,255,0.20)',
  'inset 0 -1px 0 rgba(0,0,0,0.20)',
  '0 0 48px rgba(37,99,235,0.52)',
  '0 0 100px rgba(37,99,235,0.20)',
  '0 0 180px rgba(37,99,235,0.09)',
].join(', ')

// Bridge segments for useAnimationFrame particles — clockwise, staggered by 600 ms
// Cards at 38%/4% → edges at 42/58; centers at 23/77
const BRIDGE_SEGS = [
  { sx: 42, sy: 23, ex: 58, ey: 23, phase:    0 },  // TL → TR
  { sx: 77, sy: 42, ex: 77, ey: 58, phase:  600 },  // TR → BR
  { sx: 58, sy: 77, ex: 42, ey: 77, phase: 1200 },  // BR → BL
  { sx: 23, sy: 58, ex: 23, ey: 42, phase: 1800 },  // BL → TL
]

// Each bridge gets its own component so hooks are called at the top level
function BridgeParticles({ sx, sy, ex, ey, phase }: {
  sx: number; sy: number; ex: number; ey: number; phase: number
}) {
  const leadRef  = useRef<SVGCircleElement>(null)
  const trailRef = useRef<SVGCircleElement>(null)

  useAnimationFrame((time) => {
    const P  = 2400
    const t  = ((time + phase) % P) / P
    const tt = (((time + phase - 300) % P) + P) % P / P

    const ix = (v: number) => sx + (ex - sx) * v
    const iy = (v: number) => sy + (ey - sy) * v
    const fo = (v: number, peak: number) =>
      v < 0.15 ? (v / 0.15) * peak : v > 0.85 ? ((1 - v) / 0.15) * peak : peak

    if (leadRef.current) {
      leadRef.current.setAttribute('cx',      String(ix(t)))
      leadRef.current.setAttribute('cy',      String(iy(t)))
      leadRef.current.setAttribute('opacity', String(fo(t,  1.0)))
    }
    if (trailRef.current) {
      trailRef.current.setAttribute('cx',      String(ix(tt)))
      trailRef.current.setAttribute('cy',      String(iy(tt)))
      trailRef.current.setAttribute('opacity', String(fo(tt, 0.65)))
    }
  })

  return (
    <>
      <circle ref={leadRef}  r="1.5"  fill="#3b82f6" filter="url(#dmd-pglow)" cx={sx} cy={sy} opacity={0} />
      <circle ref={trailRef} r="0.85" fill="#93c5fd" filter="url(#dmd-pglow)" cx={sx} cy={sy} opacity={0} />
    </>
  )
}

// ─── Visual component ─────────────────────────────────────────────────────────
function GridVisual() {
  return (
    <div className="relative select-none" style={{ width: '100%', maxWidth: 380, aspectRatio: '1 / 1', margin: '0 auto' }}>

      {/* ── Layer 1 — bridge rails behind cards ── */}
      <svg className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%', overflow: 'visible', zIndex: 2 }}
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="dmd-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="0.8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="dmd-halo" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="dmd-cg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#93c5fd" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0"    />
          </radialGradient>
        </defs>

        {/* Centre node glow */}
        <circle cx="50" cy="50" r="6" fill="url(#dmd-cg)" filter="url(#dmd-halo)" />
        <motion.circle cx="50" cy="50" fill="#93c5fd" filter="url(#dmd-glow)"
          animate={{ r: [1.0, 1.7, 1.0], opacity: [0.55, 1.0, 0.55] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          r="1.0"
        />

        {/* Faint guide rails (extend 6 units into each card, hidden under HTML layer) */}
        {FLOW.map(p => (
          <motion.path key={`rail-${p.id}`} d={p.d}
            stroke="rgba(37,99,235,0.09)" strokeWidth="1.0" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Marching-ants data stream */}
        {FLOW.map((p, i) => (
          <motion.path key={`dash-${p.id}`} d={p.d}
            stroke="rgba(37,99,235,0.35)"
            strokeWidth="1.0"
            strokeDasharray="3.0 8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -11] }}
            transition={{
              pathLength:       { delay: 0.9 + i * 0.08, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              opacity:          { delay: 0.9 + i * 0.08, duration: 1.2 },
              strokeDashoffset: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'linear', repeatType: 'loop' },
            }}
          />
        ))}
      </svg>

      {/* ── Layer 2 — four matte rounded-square cards ── */}
      {SQUARES.map((sq, i) => (
        <div key={sq.id} style={{ position: 'absolute', zIndex: 5, width: '38%', height: '38%', ...(POS[i] as object) }}>

          {/* Sonar pulse — rounded-rect outline */}
          {[{ scale: 1.14, dur: 2.2, op: 0.36 }, { scale: 1.28, dur: 3.2, op: 0.20 }].map((r, ri) => (
            <motion.div key={ri} style={{
              position: 'absolute', inset: 0, borderRadius: 16,
              border: `1.5px solid rgba(37,99,235,${r.op})`,
              pointerEvents: 'none',
            }}
              animate={{ scale: [1, r.scale], opacity: [r.op, 0] }}
              transition={{ duration: r.dur, delay: sq.pulse + ri * 0.6, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}

          {/* Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.50, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1,    filter: 'blur(0px)'  }}
            transition={{ delay: sq.delay, duration: 0.90, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Float */}
            <motion.div
              animate={{ y: [0, -sq.floatY, 0] }}
              transition={{ duration: 4.0 + i * 0.55, repeat: Infinity, ease: 'easeInOut', delay: i * 0.85 }}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Breath scale */}
              <motion.div
                animate={{ scale: [1, 1.016, 1] }}
                transition={{ duration: 4.6 + i * 0.65, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                style={{
                  position: 'relative', width: '100%', height: '100%',
                  borderRadius: 16,
                  background: ORB_GRADIENT,
                  boxShadow: SQUARE_SHADOW,
                  overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  padding: '12px 14px',
                  boxSizing: 'border-box',
                }}
              >
                {/* Rotating conic shimmer */}
                <motion.div style={{
                  position: 'absolute', inset: 0, borderRadius: 16,
                  background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.10) 60deg, transparent 120deg)',
                }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8 + i * 1.4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Specular highlight */}
                <div style={{
                  position: 'absolute', top: '8%', left: '10%',
                  width: '48%', height: '28%', borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(255,255,255,0.28) 0%, rgba(191,219,254,0.08) 50%, transparent 100%)',
                  filter: 'blur(6px)', pointerEvents: 'none',
                }} />

                {/* Matte bottom absorption */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                  background: 'radial-gradient(ellipse at 50% 100%, rgba(6,15,52,0.22) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Card content */}
                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,0.38)',
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  }}>{sq.step}</span>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <sq.Icon
                      size={28}
                      strokeWidth={1.5}
                      style={{
                        color: 'rgba(255,255,255,0.93)',
                        filter: [
                          'drop-shadow(0 2px 8px rgba(0,0,0,0.32))',
                          'drop-shadow(0 0 16px rgba(191,219,254,0.55))',
                        ].join(' '),
                      }}
                    />
                  </div>

                  <div>
                    <div style={{
                      fontSize: 12, fontWeight: 800,
                      color: 'rgba(255,255,255,0.93)', letterSpacing: '0.01em', lineHeight: 1.2,
                    }}>{sq.label}</div>
                    <div style={{
                      fontSize: 9.5,
                      color: 'rgba(255,255,255,0.42)',
                      marginTop: 3, lineHeight: 1.2,
                    }}>{sq.sub}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      ))}

      {/* ── Layer 3 — seamless particles (useAnimationFrame, no keyframe resets) ── */}
      <svg className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%', overflow: 'visible', zIndex: 8 }}
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="dmd-pglow" x="-140%" y="-140%" width="380%" height="380%">
            <feGaussianBlur stdDeviation="1.6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {BRIDGE_SEGS.map(seg => (
          <BridgeParticles key={seg.phase} {...seg} />
        ))}
      </svg>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function AutomacionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ref        = useRef<HTMLDivElement>(null)
  const inView     = useInView(ref, { once: true, margin: '-80px' })

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 16, damping: 26 })
  const sy = useSpring(my, { stiffness: 16, damping: 26 })
  const visualX = useTransform(sx, [0, 1], [-12, 12])
  const visualY = useTransform(sy, [0, 1], [-8, 8])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      mx.set((e.clientX - r.left) / r.width)
      my.set((e.clientY - r.top) / r.height)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section ref={sectionRef}
      style={{ position: 'relative', padding: 'clamp(60px,8vw,120px) 0 clamp(80px,10vw,140px)', overflow: 'hidden', background: '#f0f4ff' }}>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
      }} />
      <div style={{ position: 'absolute', top: -150, left: -150, pointerEvents: 'none', width: 700, height: 700, background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', bottom: -100, right: -100, pointerEvents: 'none', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.18) 30%, rgba(37,99,235,0.28) 50%, rgba(37,99,235,0.18) 70%, transparent)' }} />

      <div ref={ref} style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 48, minHeight: 580 }}>

          {/* ── Text (dark text on light bg) ── */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.20)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <motion.span className="absolute inset-0 rounded-full" style={{ background: '#3b82f6' }}
                  animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                />
                <span className="relative h-2 w-2 rounded-full" style={{ background: '#2563eb' }} />
              </span>
              <Zap size={12} style={{ color: '#2563eb' }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: '#2563eb', letterSpacing: '0.18em' }}>
                AUTOMATIZACIÓN
              </span>
            </motion.div>

            <h2 style={{ lineHeight: 1.06, marginBottom: 24 }}>
              <motion.span
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontSize: 'clamp(38px, 4.5vw, 64px)',
                  fontWeight: 900, color: '#0f172a',
                  letterSpacing: '-0.03em',
                  display: 'block',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Automatización
              </motion.span>
              <motion.span
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontSize: 'clamp(38px, 4.5vw, 64px)',
                  fontWeight: 900, letterSpacing: '-0.03em', display: 'block',
                  background: 'linear-gradient(128deg, #1d4ed8 0%, #2563eb 38%, #3b82f6 68%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                No-Code.
              </motion.span>
            </h2>

            <motion.div
              style={{ height: 1, borderRadius: 9999, background: 'linear-gradient(90deg, #2563eb, #60a5fa, transparent)', maxWidth: 260, marginBottom: 32, transformOrigin: 'left' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: '#475569', lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              Flujos de aprobación, notificaciones y reglas de negocio complejas — sin escribir una sola línea de código. Construye y despliega en minutos, no semanas.
            </motion.p>

            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a href="/software/automatizacion-no-code"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff', padding: '14px 28px', borderRadius: 9999,
                  fontSize: 15, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 28px rgba(37,99,235,0.38), inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                Ver Automatización <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>
              <motion.a href="/contacto"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#2563eb', border: '1.5px solid rgba(37,99,235,0.30)',
                  background: 'rgba(37,99,235,0.05)',
                  padding: '14px 24px', borderRadius: 9999,
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                }}
                whileHover={{ x: 5 } as never}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.55)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.30)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Ver demo <ChevronRight size={16} strokeWidth={2.5} />
              </motion.a>
            </motion.div>

          </div>

          {/* ── Visual ── */}
          <div className="hidden lg:flex items-center justify-center" style={{ overflow: 'visible', minWidth: 0 }}>
            <motion.div
              style={{ x: visualX, y: visualY, width: '100%' }}
              initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
              animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <GridVisual />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
