'use client'
import { useRef, useEffect, type CSSProperties } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FolderOpen, ArrowRight, ChevronRight, FileText, Users, Shield, Briefcase } from 'lucide-react'

// ── Document nodes — SVG coordinate space 0-100 (= percentage of container) ──
const NODES = [
  { id: 'n1', label: 'Contratos', file: 'Aceros_Norte.pdf',   Icon: FileText,  color: '#2563eb', status: 'Aprobado', cx: 16, cy: 25 },
  { id: 'n2', label: 'Facturas',  file: 'Fact_2026_042.pdf',  Icon: Briefcase, color: '#3b82f6', status: 'Aprobado', cx: 62, cy: 10 },
  { id: 'n3', label: 'RRHH',      file: 'Cto_Martinez.pdf',   Icon: Users,     color: '#60a5fa', status: 'Revisión', cx: 85, cy: 46 },
  { id: 'n4', label: 'Legal',     file: 'Poder_Not_2026.pdf', Icon: Shield,    color: '#1d4ed8', status: 'Aprobado', cx: 70, cy: 85 },
  { id: 'n5', label: 'Auditoría', file: 'Acta_May_2026.pdf',  Icon: FileText,  color: '#8b5cf6', status: 'Aprobado', cx: 16, cy: 80 },
]

// Inter-node secondary edges (thin, dashed) — creates network feel
const PEER_EDGES = [
  [62, 10, 85, 46],  // Facturas → RRHH
  [85, 46, 70, 85],  // RRHH → Legal
  [16, 25, 16, 80],  // Contratos → Auditoría (vertical, left side)
]

// Ambient star-field dots — fixed positions, no orbiting
const AMBIENT = [
  { cx: 6,  cy: 48, r: 0.55, color: '#2563eb', delay: 0.0 },
  { cx: 38, cy: 4,  r: 0.45, color: '#3b82f6', delay: 0.9 },
  { cx: 94, cy: 18, r: 0.50, color: '#60a5fa', delay: 1.6 },
  { cx: 96, cy: 72, r: 0.45, color: '#2563eb', delay: 0.4 },
  { cx: 44, cy: 96, r: 0.55, color: '#3b82f6', delay: 1.2 },
  { cx: 4,  cy: 64, r: 0.40, color: '#8b5cf6', delay: 0.7 },
  { cx: 78, cy: 3,  r: 0.40, color: '#1d4ed8', delay: 2.0 },
]

const STATUS_DOT: Record<string, string> = {
  Aprobado: '#16a34a',
  Revisión: '#f59e0b',
}

// ── The visual ──
function ECMGraphVisual() {
  return (
    <div
      className="relative select-none"
      style={{ width: '100%', maxWidth: 500, aspectRatio: '1 / 1' }}
    >
      {/* Background radial glow behind orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '75%', height: '75%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.26) 0%, transparent 70%)',
          filter: 'blur(42px)',
        }}
      />

      {/* ── SVG: spokes, peer edges, particles, ambient dots ── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="ecmg-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.0" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="ecmg-halo" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="ecmg-orb-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#2563eb" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0"    />
          </radialGradient>
          {/* Per-spoke gradient from orb → node */}
          {NODES.map(n => (
            <linearGradient key={n.id} id={`ecmg-lg-${n.id}`} x1="50" y1="50" x2={n.cx} y2={n.cy} gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor={n.color} stopOpacity="0.03" />
              <stop offset="50%"  stopColor={n.color} stopOpacity="0.52" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.14" />
            </linearGradient>
          ))}
        </defs>

        {/* Soft orb halo (blurred fill only, no hard ring) */}
        <circle cx="50" cy="50" r="15" fill="url(#ecmg-orb-halo)" filter="url(#ecmg-halo)" />

        {/* Spoke lines: orb → each node */}
        {NODES.map((n, i) => (
          <g key={`spoke-${n.id}`}>
            <motion.path
              d={`M50,50 L${n.cx},${n.cy}`}
              stroke={`url(#ecmg-lg-${n.id})`}
              strokeWidth="0.55"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.path
              d={`M50,50 L${n.cx},${n.cy}`}
              stroke={n.color}
              strokeWidth="0.20"
              strokeOpacity="0.25"
              fill="none"
              filter="url(#ecmg-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.9 }}
            />
          </g>
        ))}

        {/* Peer edges — thin dashed inter-node connections */}
        {PEER_EDGES.map(([x1, y1, x2, y2], i) => (
          <motion.path
            key={`peer-${i}`}
            d={`M${x1},${y1} L${x2},${y2}`}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.28"
            strokeDasharray="1.0 2.4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Data-flow particles: orb → node */}
        {NODES.map((n, i) => (
          <motion.circle
            key={`pflow-${n.id}`}
            r="0.95"
            fill={n.color}
            filter="url(#ecmg-glow)"
            initial={{ cx: 50, cy: 50, opacity: 0 }}
            animate={{
              cx: [50, 50, n.cx, n.cx],
              cy: [50, 50, n.cy, n.cy],
              opacity: [0, 0.92, 0.45, 0],
            }}
            transition={{
              delay: 1.0 + i * 0.58,
              duration: 1.9,
              times: [0, 0.04, 0.92, 1],
              repeat: Infinity,
              repeatDelay: 2.8 + i * 0.35,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Node end-point dots */}
        {NODES.map((n, i) => (
          <motion.circle
            key={`ndot-${n.id}`}
            cx={n.cx} cy={n.cy}
            fill={n.color}
            filter="url(#ecmg-glow)"
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: 1.3, opacity: 0.72 }}
            transition={{ delay: 0.85 + i * 0.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          />
        ))}

        {/* Ambient star-field — pulsing, no orbiting */}
        {AMBIENT.map((a, i) => (
          <motion.circle
            key={`amb-${i}`}
            cx={a.cx} cy={a.cy}
            r={a.r}
            fill={a.color}
            filter="url(#ecmg-glow)"
            animate={{ opacity: [0.18, 0.65, 0.18], r: [a.r, a.r * 1.5, a.r] }}
            transition={{ duration: 3.2 + i * 0.4, delay: a.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      {/* ── Central orb — identical matte finish to Hero ── */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 5 }}>
        <motion.div
          style={{
            position: 'relative',
            width: 168, height: 168, borderRadius: '50%',
            background: 'radial-gradient(circle at 34% 28%, #bfdbfe 0%, #3b82f6 28%, #2563eb 54%, #1e40af 78%, #1e3a8a 100%)',
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.22)',
              '0 0 52px rgba(37,99,235,0.60)',
              '0 0 104px rgba(37,99,235,0.34)',
              '0 0 190px rgba(37,99,235,0.16)',
            ].join(', '),
            overflow: 'hidden',
          }}
          animate={{ scale: [1, 1.036, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Rotating conic shimmer */}
          <motion.div
            style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.13) 58deg, transparent 116deg)',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          {/* Specular top-left highlight */}
          <div style={{
            position: 'absolute', top: '9%', left: '16%',
            width: '46%', height: '30%', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.42) 0%, transparent 100%)',
            filter: 'blur(5px)', pointerEvents: 'none',
          }} />
          {/* ECM icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FolderOpen
              size={56}
              strokeWidth={1.35}
              style={{
                color: 'rgba(255,255,255,0.92)',
                filter: 'drop-shadow(0 2px 14px rgba(0,0,0,0.28))',
                position: 'relative', zIndex: 1,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── Floating document pills ── */}
      {NODES.map((node, i) => {
        const dotColor = STATUS_DOT[node.status] ?? '#16a34a'
        return (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              top: `${node.cy}%`, left: `${node.cx}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.4 + i * 0.55, delay: i * 0.72, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.38, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.55 + i * 0.13, duration: 0.68, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(138deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)',
                    backdropFilter: 'blur(22px) saturate(1.9) brightness(1.06)',
                    WebkitBackdropFilter: 'blur(22px) saturate(1.9) brightness(1.06)',
                    border: '1px solid rgba(255,255,255,0.78)',
                    borderTop: '1px solid rgba(255,255,255,0.96)',
                    borderRadius: 22,
                    padding: '8px 12px 8px 8px',
                    whiteSpace: 'nowrap',
                    boxShadow: `0 6px 24px ${node.color}22, 0 2px 10px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.90)`,
                    overflow: 'hidden',
                  }}
                >
                  {/* Colored bottom edge */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: '14%', right: '14%', height: 1.5,
                    background: `linear-gradient(90deg, transparent, ${node.color}85, transparent)`,
                    borderRadius: 2,
                  }} />
                  {/* Shimmer sweep */}
                  <motion.div
                    style={{
                      position: 'absolute', inset: 0, pointerEvents: 'none',
                      background: 'linear-gradient(108deg, transparent 28%, rgba(255,255,255,0.48) 50%, transparent 72%)',
                      x: '-100%',
                    }}
                    animate={{ x: ['-100%', '280%'] }}
                    transition={{
                      delay: 2.4 + i * 0.6,
                      duration: 1.25, repeat: Infinity,
                      repeatDelay: 5.5 + i * 0.65,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Icon box */}
                  <div style={{
                    position: 'relative',
                    width: 28, height: 28, borderRadius: 9, flexShrink: 0,
                    background: `linear-gradient(135deg, ${node.color}20 0%, ${node.color}0e 100%)`,
                    border: `1px solid ${node.color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: 9,
                      background: `radial-gradient(circle at 35% 30%, ${node.color}2c 0%, transparent 70%)`,
                    }} />
                    <node.Icon size={13} style={{ color: node.color, position: 'relative', zIndex: 1 }} strokeWidth={2.2} />
                  </div>
                  {/* Label + filename */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#1e293b', lineHeight: 1.15 }}>{node.label}</div>
                    <div style={{ fontSize: 9, color: '#64748b', fontWeight: 500 }}>{node.file}</div>
                  </div>
                  {/* Status dot with pulse */}
                  <div style={{ position: 'relative', zIndex: 1, marginLeft: 2, flexShrink: 0 }}>
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%,-50%)',
                        width: 6, height: 6, borderRadius: '50%',
                        background: dotColor,
                      }}
                      animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.7, repeat: Infinity, ease: 'easeOut', delay: i * 0.38 }}
                    />
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor }} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

// ── Section ──
export default function ECMSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ref        = useRef<HTMLDivElement>(null)
  const inView     = useInView(ref, { once: true, margin: '-80px' })

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 16, damping: 26 })
  const sy = useSpring(my, { stiffness: 16, damping: 26 })
  const visualX = useTransform(sx, [0, 1], [-14, 14])
  const visualY = useTransform(sy, [0, 1], [-9, 9])

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
    <section
      ref={sectionRef}
      style={{ position: 'relative', padding: '120px 0 140px', overflow: 'hidden', background: '#020B2B' }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
      }} />

      {/* Corner glows */}
      <div style={{ position: 'absolute', top: -150, right: -150, pointerEvents: 'none', width: 700, height: 700, background: 'radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, pointerEvents: 'none', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)' }} />

      <div ref={ref} style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 48, minHeight: 580 }}>

          {/* ── Left: Text ── */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full"
              style={{ background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.28)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: '#3b82f6' }}
                  animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                />
                <span className="relative h-2 w-2 rounded-full" style={{ background: '#2563eb' }} />
              </span>
              <FolderOpen size={12} style={{ color: '#60a5fa' }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: '#60a5fa', letterSpacing: '0.18em' }}>
                ECM EMPRESARIAL
              </span>
            </motion.div>

            {/* Headline */}
            <h2 style={{ lineHeight: 1.06, marginBottom: 24 }}>
              {['Control', 'absoluto'].map((word, i) => (
                <motion.span
                  key={word}
                  style={{
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                    fontSize: 'clamp(38px, 4.5vw, 64px)',
                    fontWeight: 900, color: '#ffffff',
                    letterSpacing: '-0.03em',
                    display: 'inline-block', marginRight: '0.28em',
                  }}
                  initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                  animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.75, delay: 0.12 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontSize: 'clamp(38px, 4.5vw, 64px)',
                  fontWeight: 900, letterSpacing: '-0.03em',
                  display: 'inline-block',
                  background: 'linear-gradient(128deg, #1d4ed8 0%, #2563eb 38%, #3b82f6 68%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                documental.
              </motion.span>
            </h2>

            {/* Animated underline */}
            <motion.div
              style={{
                height: 1, borderRadius: 9999,
                background: 'linear-gradient(90deg, #2563eb, #60a5fa, transparent)',
                maxWidth: 260, marginBottom: 32, transformOrigin: 'left',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Subtitle */}
            <motion.p
              style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'rgba(255,255,255,0.46)', lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              Contratos, facturas, RRHH, legal — todo centralizado con trazabilidad total,
              control de versiones y auditoría completa de cada cambio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="/software/gestion-de-contenido-empresarial"
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
                Ver Software ECM
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="/contacto"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#60a5fa', border: '1.5px solid rgba(37,99,235,0.28)',
                  background: 'rgba(37,99,235,0.06)',
                  padding: '14px 24px', borderRadius: 9999,
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                }}
                whileHover={{ x: 5 } as never}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.55)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.28)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Ver demo
                <ChevronRight size={16} strokeWidth={2.5} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.88 }}
            >
              {[
                { val: '100%', label: 'Trazabilidad' },
                { val: '∞',    label: 'Versiones'    },
                { val: '3.2k+', label: 'Documentos'  },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={i > 0 ? { paddingLeft: 28, marginLeft: 28, borderLeft: '1px solid rgba(37,99,235,0.20)' } : {}}
                >
                  <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 20, color: '#60a5fa', lineHeight: 1, marginBottom: 4 }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Document graph ── */}
          <div className="hidden lg:flex items-center justify-center" style={{ overflow: 'visible', minWidth: 0 }}>
            <motion.div
              style={{ x: visualX, y: visualY, width: '100%' }}
              initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
              animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ECMGraphVisual />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
