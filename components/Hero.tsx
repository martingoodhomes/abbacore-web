'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronRight, ScanLine, FolderOpen, Zap, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect, type CSSProperties } from 'react'

const PILLARS = [
  { id: 'scan', Icon: ScanLine,   label: 'Captura Digital',  color: '#2563eb', href: '/productos/escaneres'                    },
  { id: 'ecm',  Icon: FolderOpen, label: 'ECM Empresarial',  color: '#1d4ed8', href: '/software/gestion-de-contenido-empresarial' },
  { id: 'auto', Icon: Zap,        label: 'Automatización',   color: '#3b82f6', href: '/software/automatizacion-no-code'         },
  { id: 'crm',  Icon: Smartphone, label: 'CRM & Apps',       color: '#60a5fa', href: '/crm-apps'                               },
]

const CARD_POSITIONS: CSSProperties[] = [
  { top: '5%',    left: '50%', transform: 'translateX(-50%)' },
  { top: '50%',   right: '0%', transform: 'translateY(-50%)' },
  { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
  { top: '50%',   left: '0%',  transform: 'translateY(-50%)' },
]

const LINE_ENDS = [[50, 11], [89, 50], [50, 89], [11, 50]]

// Primary orbit particles: 4 large at compass points, 4 small at 45° offsets
const PRIMARY_PHASES   = [0, 90, 180, 270]
const SECONDARY_PHASES = [45, 135, 225, 315]

function EcosystemVisual() {
  return (
    <div
      className="relative select-none"
      style={{ width: '100%', maxWidth: 500, aspectRatio: '1 / 1' }}
    >
      {/* ── Deep ambient glow layers ── */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '110%', height: '110%',
        background: 'radial-gradient(circle at 50% 50%, rgba(219,234,254,0.95) 0%, rgba(219,234,254,0.35) 45%, transparent 70%)',
        filter: 'blur(28px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '52%', height: '52%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 100%)',
        filter: 'blur(32px)',
      }} />

      {/* ── Slow rotating background sweep ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '90%', height: '90%', borderRadius: '50%',
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(219,234,254,0.22) 14%, transparent 28%)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── SVG: rings, glow filters, spokes, particles ── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Soft glow filter */}
          <filter id="fx-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Strong glow for orb halo */}
          <filter id="fx-halo" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Radial gradient: orb halo fill */}
          <radialGradient id="rg-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#2563eb" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0"    />
          </radialGradient>
          {/* Per-spoke gradient */}
          {PILLARS.map((p, i) => (
            <linearGradient
              key={p.id}
              id={`lg-spoke-${p.id}`}
              x1="50" y1="50"
              x2={LINE_ENDS[i][0]} y2={LINE_ENDS[i][1]}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%"   stopColor={p.color} stopOpacity="0.04" />
              <stop offset="45%"  stopColor={p.color} stopOpacity="0.55" />
              <stop offset="100%" stopColor={p.color} stopOpacity="0.18" />
            </linearGradient>
          ))}
        </defs>

        {/* Outer whisper ring */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(37,99,235,0.055)" strokeWidth="0.5" />

        {/* Orb halo (blurred fill) */}
        <circle cx="50" cy="50" r="19" fill="url(#rg-halo)" filter="url(#fx-halo)" />

        {/* Primary orbit — solid thin + dashed overlay for depth */}
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(37,99,235,0.12)" strokeWidth="0.9" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(37,99,235,0.25)" strokeWidth="0.35" strokeDasharray="1.4 2.6" />

        {/* Inner orbit ring */}
        <circle cx="50" cy="50" r="21" fill="none" stroke="rgba(37,99,235,0.07)" strokeWidth="0.3" strokeDasharray="0.9 3" />

        {/* Pulsing corona rings */}
        {[0, 1, 2].map(j => (
          <motion.circle
            key={j}
            cx="50" cy="50"
            fill="none"
            stroke="rgba(37,99,235,0.55)"
            strokeWidth="0.38"
            initial={{ r: 16, opacity: 0.55 }}
            animate={{ r: [16, 27], opacity: [0.55, 0] }}
            transition={{ duration: 3.6, delay: j * 1.2, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* Spoke lines: gradient + glow layer */}
        {PILLARS.map((p, i) => (
          <g key={p.id}>
            <motion.path
              d={`M50,50 L${LINE_ENDS[i][0]},${LINE_ENDS[i][1]}`}
              stroke={`url(#lg-spoke-${p.id})`}
              strokeWidth="0.75"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.45 + i * 0.13, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.path
              d={`M50,50 L${LINE_ENDS[i][0]},${LINE_ENDS[i][1]}`}
              stroke={p.color}
              strokeWidth="0.28"
              strokeOpacity="0.32"
              fill="none"
              filter="url(#fx-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.45 + i * 0.13, duration: 0.85 }}
            />
          </g>
        ))}

        {/* Data-flow particles: travel from orb center → card */}
        {PILLARS.map((p, i) => (
          <motion.circle
            key={`flow-${p.id}`}
            r="1.3"
            fill={p.color}
            filter="url(#fx-glow)"
            initial={{ cx: 50, cy: 50, opacity: 0 }}
            animate={{
              cx: [50, 50, LINE_ENDS[i][0], LINE_ENDS[i][0]],
              cy: [50, 50, LINE_ENDS[i][1], LINE_ENDS[i][1]],
              opacity: [0, 0.95, 0.55, 0],
            }}
            transition={{
              delay: 1.6 + i * 0.55,
              duration: 2.2,
              times: [0, 0.08, 0.88, 1],
              repeat: Infinity,
              repeatDelay: 2 + i * 0.35,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* ── Orbit particles ── */}
        {/* Primary — larger, ~22 s, compass points */}
        {PRIMARY_PHASES.map((phase, i) => (
          <motion.g
            key={`op-${i}`}
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: [phase, phase + 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="88" cy="50" r="1.15" fill="#2563eb" opacity="0.88" filter="url(#fx-glow)" />
          </motion.g>
        ))}
        {/* Secondary — smaller, ~32 s, 45° offsets */}
        {SECONDARY_PHASES.map((phase, i) => (
          <motion.g
            key={`os-${i}`}
            style={{ transformOrigin: '50px 50px' }}
            animate={{ rotate: [phase, phase + 360] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="88" cy="50" r="0.68" fill="#60a5fa" opacity="0.62" filter="url(#fx-glow)" />
          </motion.g>
        ))}
      </svg>

      {/* ── Central orb ── */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 5 }}>

        {/* Outer pulsing halos */}
        {[1, 2].map(j => (
          <motion.div
            key={j}
            style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 160 + j * 46, height: 160 + j * 46,
              borderRadius: '50%',
              border: `1px solid rgba(37,99,235,${0.15 - j * 0.05})`,
              pointerEvents: 'none',
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.85, 0.25, 0.85] }}
            transition={{ duration: 3.6 + j * 0.9, repeat: Infinity, ease: 'easeInOut', delay: j * 0.65 }}
          />
        ))}

        {/* Main sphere */}
        <motion.div
          style={{
            position: 'relative',
            width: 160, height: 160, borderRadius: '50%',
            background: 'radial-gradient(circle at 34% 28%, #bfdbfe 0%, #3b82f6 28%, #2563eb 54%, #1e40af 78%, #1e3a8a 100%)',
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.22)',
              '0 0 48px rgba(37,99,235,0.58)',
              '0 0 96px rgba(37,99,235,0.32)',
              '0 0 180px rgba(37,99,235,0.14)',
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
          {/* Logo — inline SVG so it's identical in every environment */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="72" height="68"
              viewBox="0 0 100 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.92 }}
            >
              <path
                d="M42 0 Q32 0 32 8 L0 90 Q0 95 6 95 L35 95 L50 14 L65 95 L94 95 Q100 95 100 90 L68 8 Q68 0 58 0 Z"
                fill="rgba(255,255,255,0.95)"
              />
              <polygon
                points="50,46 59,64 50,84 41,64"
                fill="#93c5fd"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ── Pillar cards ── */}
      {PILLARS.map((p, i) => (
        <div
          key={p.id}
          style={{ position: 'absolute', zIndex: 10, ...CARD_POSITIONS[i] }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2 + i * 0.6, delay: i * 0.9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.35, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.5 + i * 0.14, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Link
                href={p.href}
                style={{
                  position: 'relative',
                  display: 'flex', alignItems: 'center', gap: 9,
                  maxWidth: 165,
                  background: 'linear-gradient(138deg, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.68) 100%)',
                  backdropFilter: 'blur(22px) saturate(1.9) brightness(1.06)',
                  WebkitBackdropFilter: 'blur(22px) saturate(1.9) brightness(1.06)',
                  border: '1px solid rgba(255,255,255,0.78)',
                  borderTop: '1px solid rgba(255,255,255,0.96)',
                  borderRadius: 18,
                  padding: '11px 14px',
                  boxShadow: `0 8px 32px ${p.color}1c, 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.88)`,
                  textDecoration: 'none',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.boxShadow = `0 14px 44px ${p.color}2e, 0 4px 14px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.96)`
                  el.style.borderColor = `${p.color}52`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.boxShadow = `0 8px 32px ${p.color}1c, 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.88)`
                  el.style.borderColor = 'rgba(255,255,255,0.78)'
                }}
              >
                {/* Colored bottom glow edge */}
                <div style={{
                  position: 'absolute', bottom: 0, left: '18%', right: '18%', height: 2,
                  background: `linear-gradient(90deg, transparent, ${p.color}95, transparent)`,
                  borderRadius: 2,
                }} />
                {/* Shimmer sweep */}
                <motion.div
                  style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'linear-gradient(108deg, transparent 28%, rgba(255,255,255,0.52) 50%, transparent 72%)',
                    x: '-100%',
                  }}
                  animate={{ x: ['-100%', '280%'] }}
                  transition={{
                    delay: 2.2 + i * 0.55,
                    duration: 1.3,
                    repeat: Infinity,
                    repeatDelay: 5 + i * 0.8,
                    ease: 'easeInOut',
                  }}
                />
                {/* Icon */}
                <div style={{
                  position: 'relative',
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: `linear-gradient(135deg, ${p.color}20 0%, ${p.color}0e 100%)`,
                  border: `1px solid ${p.color}2a`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 10,
                    background: `radial-gradient(circle at 35% 30%, ${p.color}2c 0%, transparent 70%)`,
                  }} />
                  <p.Icon size={16} style={{ color: p.color, position: 'relative', zIndex: 1 }} strokeWidth={2.2} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1e293b', whiteSpace: 'nowrap', position: 'relative', zIndex: 1 }}>
                  {p.label}
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const heroRef  = useRef<HTMLElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 16, damping: 26 })
  const sy = useSpring(my, { stiffness: 16, damping: 26 })
  const visualX = useTransform(sx, [0, 1], [-14, 14])
  const visualY = useTransform(sy, [0, 1], [-9, 9])

  useEffect(() => {
    const el = heroRef.current
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
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ minHeight: '100svh', background: '#ffffff', paddingTop: 80 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
        }}
      />

      {/* Top-right ambient blue */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -150, right: -150,
          width: 700, height: 700,
          background: 'radial-gradient(ellipse, rgba(219,234,254,0.65) 0%, transparent 65%)',
        }}
      />
      {/* Bottom-left soft accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -100, left: -100,
          width: 500, height: 500,
          background: 'radial-gradient(ellipse, rgba(239,246,255,0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,40px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center" style={{ gap: 48, minHeight: 'calc(100svh - 80px)', padding: '64px 0' }}>

          {/* ── Left: Text ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            {/* ABBACORE badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full self-center md:self-start"
              style={{
                background: 'rgba(37,99,235,0.06)',
                border: '1px solid rgba(37,99,235,0.2)',
              }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
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
              <span style={{ fontSize: 11, fontWeight: 800, color: '#2563eb', letterSpacing: '0.18em' }}>
                ABBACORE
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6" style={{ lineHeight: 1.06 }}>
              {['Automatizamos', 'hoy'].map((word, i) => (
                <motion.span
                  key={word}
                  style={{
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                    fontSize: 'clamp(32px, 3.8vw, 58px)',
                    fontWeight: 900,
                    color: '#0f172a',
                    letterSpacing: '-0.03em',
                    display: 'inline-block',
                    marginRight: '0.28em',
                  }}
                  initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: 0.22 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontSize: 'clamp(32px, 3.8vw, 58px)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  display: 'inline-block',
                  background: 'linear-gradient(128deg, #1d4ed8 0%, #2563eb 38%, #3b82f6 68%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                la evolución de tu empresa
              </motion.span>
            </h1>

            {/* Animated underline */}
            <motion.div
              className="mb-8 h-px rounded-full self-center md:self-start"
              style={{
                background: 'linear-gradient(90deg, #2563eb, #60a5fa, transparent)',
                width: '100%',
                maxWidth: 260,
                transformOrigin: 'left',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Subtitle */}
            <motion.p
              className="mb-10 self-center md:self-start"
              style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: '#64748b', lineHeight: 1.8, maxWidth: 460 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
            >
              Desde la captura documental hasta la automatización inteligente de procesos.
              La plataforma que transforma operaciones empresariales en Colombia.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-14 self-center md:self-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-[15px]"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    boxShadow: '0 4px 28px rgba(37,99,235,0.38), inset 0 1px 0 rgba(255,255,255,0.12)',
                  }}
                >
                  Empieza Ahora
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </motion.div>

              <motion.a
                href="/productos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[15px]"
                style={{
                  color: '#2563eb',
                  border: '1.5px solid rgba(37,99,235,0.22)',
                  background: 'rgba(37,99,235,0.03)',
                }}
                whileHover={{ x: 5, borderColor: 'rgba(37,99,235,0.5)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Ver Soluciones
                <ChevronRight size={16} strokeWidth={2.5} />
              </motion.a>
            </motion.div>

          </div>

          {/* ── Right: Ecosystem Visual ── */}
          <div className="hidden md:flex items-center justify-center" style={{ overflow: 'hidden', minWidth: 0 }}>
            <motion.div
              style={{ x: visualX, y: visualY, width: '100%' }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <EcosystemVisual />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          style={{
            width: 1.5, height: 38,
            background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.45))',
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
        />
      </motion.div>
    </section>
  )
}
