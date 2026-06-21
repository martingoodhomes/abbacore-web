'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ScanLine, ArrowRight, ChevronRight } from 'lucide-react'

// ── Scanner visual ───────────────────────────────────────────────────────────
function ScannerVisual() {
  return (
    <div style={{ position: 'relative', maxWidth: 480, width: '100%' }}>

      {/* Soft ambient glow pooling beneath the scanner */}
      <div aria-hidden style={{
        position:   'absolute',
        bottom:     '2%',
        left:       '50%',
        transform:  'translateX(-50%)',
        width:      '80%',
        height:     '28%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 72%)',
        filter:     'blur(22px)',
        pointerEvents: 'none',
      }} />

      {/* Scanner image — already AbbaCore blue, sits on #f0f4fc naturally */}
      <Image
        src="/images/Scanner.png"
        alt="AbbaCore scanner de documentos"
        width={480}
        height={404}
        style={{
          width:    '100%',
          height:   'auto',
          display:  'block',
          position: 'relative',
          zIndex:   1,
          filter:   'drop-shadow(0 16px 40px rgba(29,78,216,0.18))',
        }}
      />

    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function CapturaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ref        = useRef<HTMLDivElement>(null)
  const inView     = useInView(ref, { once: true, margin: '-80px' })

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 16, damping: 26 })
  const sy = useSpring(my, { stiffness: 16, damping: 26 })
  const visualX = useTransform(sx, [0, 1], [-8, 8])
  const visualY = useTransform(sy, [0, 1], [-5, 5])

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
      style={{ position: 'relative', padding: 'clamp(60px,8vw,120px) 0 clamp(80px,10vw,140px)', overflow: 'hidden', background: '#f0f4fc' }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)',
      }} />

      {/* Corner glows */}
      <div style={{ position: 'absolute', top: -150, right: -150, pointerEvents: 'none', width: 700, height: 700, background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, pointerEvents: 'none', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />

      {/* Top separator */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.18) 30%, rgba(37,99,235,0.28) 50%, rgba(37,99,235,0.18) 70%, transparent)' }} />

      <div ref={ref} style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 48, minHeight: 560 }}>

          {/* ── Left: Text ── */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.20)' }}
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
              <ScanLine size={12} style={{ color: '#2563eb' }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: '#2563eb', letterSpacing: '0.18em' }}>
                CAPTURA DIGITAL
              </span>
            </motion.div>

            {/* Headline */}
            <h2 style={{ lineHeight: 1.06, marginBottom: 24 }}>
              {['De papel', 'a'].map((word, i) => (
                <motion.span
                  key={word}
                  style={{
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                    fontSize: 'clamp(38px, 4.5vw, 64px)',
                    fontWeight: 900, color: '#0f172a',
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
                  fontWeight: 900, letterSpacing: '-0.03em', display: 'inline-block',
                  background: 'linear-gradient(128deg, #1d4ed8 0%, #2563eb 38%, #3b82f6 68%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                digital.
              </motion.span>
            </h2>

            {/* Underline */}
            <motion.div
              style={{ height: 1, borderRadius: 9999, background: 'linear-gradient(90deg, #2563eb, #60a5fa, transparent)', maxWidth: 260, marginBottom: 32, transformOrigin: 'left' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Body */}
            <motion.p
              style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: '#475569', lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              Motor OCR que transforma cualquier documento físico en datos estructurados listos para auditoría, búsqueda y análisis automatizado — en segundos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="/productos/escaneres"
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
                Ver Motor OCR <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="/contacto"
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

            {/* Stats */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.88 }}
            >
              {[
                { val: '99.8%',   label: 'Precisión OCR' },
                { val: '120 ppm', label: 'Velocidad'     },
                { val: '50+',     label: 'Formatos'      },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={i > 0 ? { paddingLeft: 28, marginLeft: 28, borderLeft: '1px solid rgba(37,99,235,0.16)' } : {}}
                >
                  <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: 20, color: '#1d4ed8', lineHeight: 1, marginBottom: 4 }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Scanner visual ── */}
          <div className="hidden lg:flex items-center justify-center" style={{ overflow: 'visible', minWidth: 0 }}>
            <motion.div
              style={{ x: visualX, y: visualY, width: '100%', display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ScannerVisual />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
