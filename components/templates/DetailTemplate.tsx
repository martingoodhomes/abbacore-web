'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LucideIcon, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

interface StatCard   { value: string; label: string }
interface Breadcrumb { label: string; href?: string }

interface DetailTemplateProps {
  title: string
  subtitle: string
  breadcrumbs: Breadcrumb[]
  description: string
  features: string[]
  stats: StatCard[]
  Icon: LucideIcon
}

// ── Subtle grid overlay for light sections ───────────────────────────────────
const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function DetailTemplate({
  title, subtitle, breadcrumbs, description, features, stats, Icon,
}: DetailTemplateProps) {
  const featRef  = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featInView  = useInView(featRef,  { once: true, margin: '-60px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />

        {/* ── Features — light ─────────────────────────────────────────────── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '100px 0 120px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />

          {/* Top-right ambient */}
          <div aria-hidden style={{
            position: 'absolute', top: -160, right: -160, width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />

          <div ref={featRef} style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

              {/* Left: description + feature list */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={featInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.70, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#2563eb', marginBottom: 20,
                  fontFamily: 'var(--font-montserrat)',
                }}>
                  Características
                </p>

                <p style={{
                  fontSize: 17, color: '#334155', lineHeight: 1.80,
                  marginBottom: 40, maxWidth: 480,
                }}>
                  {description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {features.map((feat, i) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -14 }}
                      animate={featInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 13 }}
                    >
                      <span style={{
                        flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                        background: 'rgba(37,99,235,0.10)',
                        border: '1px solid rgba(37,99,235,0.22)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: 2,
                      }}>
                        <Check size={11} strokeWidth={2.5} style={{ color: '#2563eb' }} />
                      </span>
                      <span style={{ fontSize: 15, color: '#475569', lineHeight: 1.65 }}>{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={featInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.50, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/contacto"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                      color: '#ffffff', padding: '13px 26px', borderRadius: 9999,
                      fontSize: 14, fontWeight: 700, textDecoration: 'none',
                      boxShadow: '0 4px 24px rgba(37,99,235,0.32), inset 0 1px 0 rgba(255,255,255,0.12)',
                    }}
                  >
                    Solicitar información <ArrowRight size={15} strokeWidth={2.5} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right: premium icon panel */}
              <motion.div
                initial={{ opacity: 0, x: 28, scale: 0.96 }}
                animate={featInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div style={{ position: 'relative', width: 360, height: 360 }}>

                  {/* Outer glow ring */}
                  <div aria-hidden style={{
                    position: 'absolute', inset: -20,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 72%)',
                  }} />

                  {/* Main circle */}
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: 'radial-gradient(circle at 38% 28%, #dbeafe 0%, #eff6ff 55%, #f0f4ff 100%)',
                    border: '1px solid rgba(37,99,235,0.12)',
                    boxShadow: '0 24px 60px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.80)',
                  }} />

                  {/* Dashed ring */}
                  <div aria-hidden style={{
                    position: 'absolute', inset: 20, borderRadius: '50%',
                    border: '1px dashed rgba(37,99,235,0.14)',
                  }} />

                  {/* Inner accent ring */}
                  <motion.div
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute', inset: 48, borderRadius: '50%',
                      border: '1px solid rgba(37,99,235,0.10)',
                      borderTopColor: 'rgba(37,99,235,0.35)',
                    }}
                  />

                  {/* Center icon */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        width: 120, height: 120, borderRadius: 28,
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 16px 48px rgba(37,99,235,0.38), inset 0 1px 0 rgba(255,255,255,0.18)',
                      }}
                    >
                      <Icon size={56} strokeWidth={1.2} style={{ color: '#ffffff' }} />
                    </motion.div>
                  </div>

                  {/* Floating stat chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={featInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{
                      position: 'absolute', top: 28, right: -20,
                      padding: '7px 14px', borderRadius: 9999,
                      background: '#ffffff',
                      border: '1px solid rgba(37,99,235,0.14)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      fontSize: 12, fontWeight: 700, color: '#2563eb',
                      whiteSpace: 'nowrap',
                      fontFamily: 'var(--font-montserrat)',
                    }}
                  >
                    {stats[0]?.value}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={featInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    style={{
                      position: 'absolute', bottom: 48, left: -24,
                      padding: '7px 14px', borderRadius: 9999,
                      background: '#ffffff',
                      border: '1px solid rgba(37,99,235,0.14)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      fontSize: 12, fontWeight: 700, color: '#0d0f14',
                      whiteSpace: 'nowrap',
                      fontFamily: 'var(--font-montserrat)',
                    }}
                  >
                    {stats[1]?.value} <span style={{ fontWeight: 400, color: '#64748b', fontSize: 11 }}>{stats[1]?.label}</span>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Stats — dark, luxurious ───────────────────────────────────────── */}
        <section ref={statsRef} style={{
          position: 'relative', background: '#020b1d',
          padding: '80px 0', overflow: 'hidden',
        }}>
          {/* Ambient */}
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800, height: 300,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 1 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    textAlign: 'center', padding: '32px 24px',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    fontWeight: 800, lineHeight: 1, marginBottom: 10,
                    background: 'linear-gradient(130deg, #ffffff 0%, #93c5fd 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    letterSpacing: '-0.03em',
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)',
                  }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
