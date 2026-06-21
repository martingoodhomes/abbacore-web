'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScanLine, Database, Zap, Users } from 'lucide-react'

const PRODUCTS = [
  {
    Icon: ScanLine,
    color: '#3b82f6',
    title: 'Captura y Digitalización',
    desc: 'Documentos físicos a datos estructurados. Precisión OCR del 99.8% a 120 páginas por minuto.',
  },
  {
    Icon: Database,
    color: '#8b5cf6',
    title: 'ECM Empresarial',
    desc: 'Control de versiones, auditoría completa y acceso inteligente. Todo el ciclo documental en un solo lugar.',
  },
  {
    Icon: Zap,
    color: '#10b981',
    title: 'Automatización No-Code',
    desc: 'Flujos de aprobación, notificaciones y reglas de negocio sin escribir una sola línea de código.',
  },
  {
    Icon: Users,
    color: '#f59e0b',
    title: 'CRM y Apps a la Medida',
    desc: 'Aplicaciones construidas exactamente para tu proceso. Tu lógica, tus reglas, sin compromisos.',
  },
]

function ProductCard({ p, index }: { p: typeof PRODUCTS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.14)' }}
      style={{
        background: '#16161e',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        cursor: 'default',
        transition: 'border-color 0.25s ease',
      }}
    >
      {/* Icon badge */}
      <div style={{
        width: 52, height: 52,
        borderRadius: 14,
        background: `${p.color}14`,
        border: `1px solid ${p.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <p.Icon size={22} strokeWidth={1.6} style={{ color: p.color }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 style={{
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          fontSize: 18, fontWeight: 800,
          color: 'rgba(255,255,255,0.88)',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
        }}>
          {p.title}
        </h3>
        <p style={{
          fontSize: 14, lineHeight: 1.75,
          color: 'rgba(255,255,255,0.38)',
        }}>
          {p.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function BentoSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section style={{ position: 'relative', padding: '112px 0 120px', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: '#0c0c14',
      }} />
      {/* Very subtle blue tint at center */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 72 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              color: 'rgba(147,197,253,0.65)', marginBottom: 20, textTransform: 'uppercase',
            }}
          >
            Soluciones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05,
              color: '#ffffff', maxWidth: 560,
              background: 'linear-gradient(to bottom, #ffffff 50%, rgba(255,255,255,0.5))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Cuatro módulos.<br />Un ecosistema.
          </motion.h2>
        </div>

        {/* 2×2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
          gap: 12,
        }}>
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
