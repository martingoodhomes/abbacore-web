'use client'
import { useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { display: '99.8%', label: 'Precisión OCR', sub: 'en extracción de datos estructurados' },
  { display: '120 ppm', label: 'Velocidad de captura', sub: 'páginas por minuto en producción' },
  { display: '80%', label: 'Menos tiempo operativo', sub: 'en procesos documentales clave' },
  { display: '500+', label: 'Empresas confían en nosotros', sub: 'en Colombia y Latinoamérica' },
]

function StatItem({ stat, index }: { stat: typeof STATS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          background: 'linear-gradient(to bottom, #ffffff 40%, rgba(255,255,255,0.6))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {stat.display}
      </motion.div>
      <p style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.75)', marginBottom: 4 }}>
        {stat.label}
      </p>
      <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.55 }}>
        {stat.sub}
      </p>
    </motion.div>
  )
}

export default function TrustSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section style={{ position: 'relative', padding: '100px 0 112px', overflow: 'hidden' }}>
      {/* Deep blue gradient base */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #001230 0%, #0a1f6e 40%, #1a3aad 70%, #0d2480 100%)',
      }} />

      {/* Animated mesh orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-10%', left: '-5%',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '-15%', right: '-8%',
            width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '40%', left: '35%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12" style={{ position: 'relative' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 80px' }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              color: 'rgba(147,197,253,0.9)', marginBottom: 20, textTransform: 'uppercase',
            }}
          >
            Resultados Comprobados
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 900, letterSpacing: '-0.028em',
              lineHeight: 1.08, marginBottom: 20,
              background: 'linear-gradient(to bottom, #ffffff 40%, rgba(255,255,255,0.55))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Números que hablan por sí solos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}
          >
            Métricas reales de operaciones reales. Empresas colombianas que ya operan sin límites con AbbaCore.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          position: 'relative',
        }}>
          {/* Glass container */}
          <div style={{
            position: 'absolute', inset: 0,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)',
            pointerEvents: 'none',
          }} />

          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '44px 36px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                position: 'relative',
              }}
            >
              <StatItem stat={stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
