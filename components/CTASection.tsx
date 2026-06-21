'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Exact same deep blue gradient as TrustSection ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #001230 0%, #0a1f6e 40%, #1a3aad 70%, #0d2480 100%)',
      }} />

      {/* ── Animated mesh orbs (same as TrustSection) ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-15%', left: '-8%',
            width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '-20%', right: '-10%',
            width: 800, height: 800, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ x: [0, 35, -20, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '35%', left: '40%',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Dot grid (same as TrustSection) ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* ── Ghost wordmark — "ABBACORE" bleeding off edges ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          fontSize: 'clamp(80px, 17vw, 260px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          color: '#ffffff',
          opacity: 0.045,
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        ABBACORE
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            color: 'rgba(147,197,253,0.75)', marginBottom: 32,
            textTransform: 'uppercase',
          }}
        >
          Empieza hoy
        </motion.p>

        {/* Giant serif headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
            fontSize: 'clamp(56px, 9vw, 120px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: '#ffffff',
            marginBottom: 52,
          }}
        >
          Opera sin límites.
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}
        >
          {/* Primary — dark filled */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 20 }}
          >
            <Link
              href="/contacto"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px',
                borderRadius: 100,
                background: 'rgba(4, 6, 20, 0.82)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#ffffff',
                fontSize: 15, fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
                transition: 'box-shadow 0.25s ease, background 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(6, 9, 28, 0.92)'
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(4, 6, 20, 0.82)'
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
              }}
            >
              Empieza Ahora →
            </Link>
          </motion.div>

          {/* Ghost button */}
          <motion.div
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 20 }}
          >
            <Link
              href="https://wa.me/573165383437"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '13px 30px',
                borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.16)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.52)',
                fontSize: 15, fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(255,255,255,0.82)'
                el.style.borderColor = 'rgba(255,255,255,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(255,255,255,0.52)'
                el.style.borderColor = 'rgba(255,255,255,0.16)'
              }}
            >
              Contáctanos ›
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
