'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

const GLASS: CSSProperties = {
  background: 'linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(245,249,255,0.88) 100%)',
  backdropFilter: 'blur(24px) saturate(180%) brightness(1.02)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(1.02)',
  border: '1px solid rgba(255,255,255,0.92)',
  borderTop: '1px solid rgba(255,255,255,0.99)',
  boxShadow: '0 4px 28px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.96)',
  borderRadius: 20,
  overflow: 'hidden',
  position: 'relative',
}

const PARTNERS = [
  {
    name: 'Kodak Alaris',
    tag: 'Captura Documental',
    desc: 'Escáneres de producción de alta velocidad. El estándar mundial en captura para entornos de alto volumen.',
    color: '#ea580c',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 6l6 6h-6V6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <line x1="7" y1="14" x2="15" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <motion.line
          x1="2" y1="15" x2="22" y2="15"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
          animate={{ y: [-4, 6, -4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    ),
  },
  {
    name: 'Laserfiche',
    tag: 'ECM & Workflows',
    desc: 'Gestión documental empresarial. Clasificación automática, versiones y cumplimiento regulatorio integrado.',
    color: '#16a34a',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="11.5" x2="6" y2="18.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="14" y1="11.5" x2="22" y2="18.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Kintone',
    tag: 'No-Code Apps',
    desc: 'Plataforma no-code para crear aplicaciones y flujos de trabajo sin una línea de código.',
    color: '#2563eb',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <motion.rect
          x="16" y="16" width="9" height="9" rx="2"
          stroke="currentColor" strokeWidth="1.5"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    ),
  },
  {
    name: 'Ricoh',
    tag: 'Infraestructura',
    desc: 'Multifuncionales y plotters de precisión japonesa para entornos corporativos exigentes.',
    color: '#0284c7',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        <line x1="14" y1="4" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />
        <line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth="1.2" />
        <line x1="4" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.2" />
        <line x1="20" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Docuware',
    tag: 'Archivo Digital',
    desc: 'Solución cloud y on-premise para archivo digital inteligente con búsqueda full-text avanzada.',
    color: '#d97706',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h12M8 14h8M8 18h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Epson',
    tag: 'Impresión',
    desc: 'Impresoras y escáneres de alta eficiencia energética. Tecnología de inyección de tinta sin rival.',
    color: '#7c3aed',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10V7a2 2 0 012-2h10a2 2 0 012 2v3" stroke="currentColor" strokeWidth="1.3" />
        <rect x="8" y="14" width="12" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <motion.circle
          cx="21" cy="15.5" r="1" fill="currentColor"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </svg>
    ),
  },
]

function PartnerCard({ p, index }: { p: typeof PARTNERS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      style={{ ...GLASS, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16, cursor: 'default', transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
    >
      {/* Subtle top sheen */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${p.color}40, transparent)`,
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 13,
          background: `${p.color}12`,
          border: `1px solid ${p.color}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: p.color, flexShrink: 0,
          boxShadow: `0 2px 12px ${p.color}18`,
        }}>
          {p.icon}
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
            fontWeight: 800, color: '#0f172a', fontSize: 14.5, lineHeight: 1.2,
          }}>
            {p.name}
          </p>
          <p style={{ fontSize: 10.5, color: p.color, fontWeight: 700, letterSpacing: '0.08em', marginTop: 3, textTransform: 'uppercase' }}>
            {p.tag}
          </p>
        </div>
      </div>

      <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.72 }}>
        {p.desc}
      </p>
    </motion.div>
  )
}

export default function WhatIsAbbaCore() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section style={{ background: '#ffffff', padding: '100px 0 112px', position: 'relative', overflow: 'hidden' }}>
      {/* Background radial hints */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12" style={{ position: 'relative' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 72px' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#2563eb', marginBottom: 20, textTransform: 'uppercase' }}
          >
            Partners Certificados
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontWeight: 900, letterSpacing: '-0.028em',
              lineHeight: 1.08, marginBottom: 20, color: '#0f172a',
            }}
          >
            La tecnología que{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              impulsa a los mejores.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 16, color: '#64748b', lineHeight: 1.75 }}
          >
            AbbaCore integra las marcas líderes del mundo en una sola plataforma cohesiva. Tecnología certificada para resultados garantizados.
          </motion.p>
        </div>

        {/* Partner grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {PARTNERS.map((p, i) => (
            <PartnerCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
