'use client'
import { motion } from 'framer-motion'
import { ScanLine, Database, Zap, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const useCases = [
  'Captura y digitalización de documentos físicos',
  'Gestión documental con ECM empresarial',
  'Automatización de procesos sin código',
  'CRM y aplicaciones a la medida',
]

/* ── Outer pillar nodes ── */
const PILLARS = [
  { Icon: ScanLine, label: 'Captura',      color: '#2563eb', x: 190, y: 30  },
  { Icon: Database, label: 'ECM',          color: '#7c3aed', x: 360, y: 178 },
  { Icon: Zap,      label: 'Automación',   color: '#059669', x: 190, y: 326 },
  { Icon: Users,    label: 'CRM & Apps',   color: '#d97706', x: 20,  y: 178 },
]

/* Smooth bezier path from outer node to center (190, 178) */
function getPath(x: number, y: number): string {
  const cx = 190
  const cy = 178
  const mx = (x + cx) / 2
  const my = (y + cy) / 2
  return `M${x},${y} Q${mx},${y} ${cx},${cy}`
}

function EcosystemVisual() {
  return (
    <div className="relative select-none" style={{ width: 380, height: 356 }}>

      {/* Deep background glow */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 280, height: 280, background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', filter: 'blur(28px)', pointerEvents: 'none' }} />

      {/* SVG: paths + animated pulses */}
      <svg style={{ position: 'absolute', inset: 0, overflow: 'visible' }} width="380" height="356">
        <defs>
          {PILLARS.map((p, i) => (
            <linearGradient key={i} id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={p.color} stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
            </linearGradient>
          ))}
        </defs>

        {/* Connection paths */}
        {PILLARS.map((p, i) => (
          <motion.path
            key={`path-${i}`}
            d={getPath(p.x + 20, p.y + 20)}
            fill="none"
            stroke={`url(#grad-${i})`}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Animated light particles traveling to center */}
        {PILLARS.map((p, i) =>
          [0, 1].map(pass => (
            <motion.circle
              key={`particle-${i}-${pass}`}
              r="4"
              fill={p.color}
              style={{ filter: `drop-shadow(0 0 6px ${p.color})` }}
              initial={{ offsetDistance: '0%', opacity: 0 }}
              animate={{ offsetDistance: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 1.2 + i * 0.22 + pass * 2.1,
                duration: 1.1,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 2.8,
                opacity: { times: [0, 0.1, 0.85, 1] },
              }}
            >
              <animateMotion
                dur={`${1.1}s`}
                begin={`${1.2 + i * 0.22 + pass * 2.1}s`}
                repeatCount="indefinite"
                path={getPath(p.x + 20, p.y + 20)}
              />
            </motion.circle>
          ))
        )}
      </svg>

      {/* ── Outer pillar nodes ── */}
      {PILLARS.map((p, i) => (
        <motion.div
          key={`node-${i}`}
          style={{ position: 'absolute', left: p.x, top: p.y }}
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
          animate={{ y: [0, -5, 0] }}
        >
          {/* Outer glow ring */}
          <motion.div
            style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: `1.5px solid ${p.color}30`, pointerEvents: 'none' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
          {/* Node circle */}
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}20, ${p.color}10)`, border: `2px solid ${p.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 20px ${p.color}30` }}>
            <p.Icon size={16} style={{ color: p.color }} strokeWidth={2} />
          </div>
          {/* Label */}
          <div style={{ position: 'absolute', top: 44, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: 9.5, fontWeight: 700, color: p.color, letterSpacing: '0.04em' }}>
            {p.label}
          </div>
        </motion.div>
      ))}

      {/* ── Central AbbaCore hub ── */}
      <motion.div
        style={{ position: 'absolute', left: 190 - 30, top: 178 - 30 }}
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Pulse rings */}
        {[1, 2].map(r => (
          <motion.div
            key={r}
            style={{ position: 'absolute', inset: -(r * 12), borderRadius: '50%', border: '1px solid rgba(37,99,235,0.2)', pointerEvents: 'none' }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.15, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: r * 0.5 }}
          />
        ))}
        {/* Hub */}
        <div style={{ position: 'relative', width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #93c5fd, #2563eb 52%, #1e40af)', boxShadow: '0 0 40px rgba(37,99,235,0.4), 0 0 80px rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <Image src="/images/Logo 1.png" alt="AbbaCore" fill className="object-contain p-1.5" style={{ filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
        </div>
        {/* AbbaCore label */}
        <div style={{ position: 'absolute', top: 68, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: 10, fontWeight: 800, color: '#2563eb', letterSpacing: '0.1em' }}>
          AbbaCore
        </div>
      </motion.div>
    </div>
  )
}

export default function UseCases() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#ffffff' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(37,99,235,0.022) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(37,99,235,0.022) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* Text column */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: '#2563eb' }}>
            Ecosistema
          </p>

          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.025em',
            }}
          >
            Un Ecosistema{' '}
            <span
              style={{
                background: 'linear-gradient(130deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Totalmente Integrado
            </span>
          </h2>

          <p className="mb-9 leading-relaxed" style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, maxWidth: 480 }}>
            Nuestro enfoque no es vender productos aislados, sino conectar cada capa tecnológica
            para que los datos fluyan sin fricciones desde la captura hasta la acción.
          </p>

          <ul className="space-y-4 mb-10">
            {useCases.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.18)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563eb' }} />
                </span>
                <span style={{ fontSize: 15, color: '#334155', fontWeight: 500 }}>{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            className="inline-flex items-center gap-2 font-semibold text-[14px] group"
            href="/nosotros"
            style={{ color: '#2563eb' }}
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Más información
            <ArrowRight size={15} strokeWidth={2.5} />
          </motion.a>
        </motion.div>

        {/* Visual column */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <EcosystemVisual />
        </motion.div>
      </div>
    </section>
  )
}
