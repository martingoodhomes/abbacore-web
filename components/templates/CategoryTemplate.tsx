'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

interface Card {
  Icon:         LucideIcon
  title:        string
  description:  string
  href:         string
  items?:       string[]
}

interface Breadcrumb { label: string; href?: string }

interface CategoryTemplateProps {
  title:       string
  subtitle:    string
  breadcrumbs: Breadcrumb[]
  cards:       Card[]
}

const container   = { hidden: {}, show: { transition: { staggerChildren: 0.10 } } }
const cardVariant = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.60, ease: [0.22, 1, 0.36, 1] } },
}

export default function CategoryTemplate({ title, subtitle, breadcrumbs, cards }: CategoryTemplateProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />

        {/* ── Cards — light ───────────────────────────────────────────────── */}
        <section style={{
          position: 'relative', background: '#f8faff',
          padding: '96px 0 120px', overflow: 'hidden',
        }}>
          {/* Subtle grid */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: [
              'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '60px 60px',
          }} />

          {/* Corner glows */}
          <div aria-hidden style={{
            position: 'absolute', top: -120, right: -120, width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: -80, left: -80, width: 480, height: 480,
            background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div ref={ref} style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

            {/* Section header */}
            <motion.div
              style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#2563eb', marginBottom: 12,
                  fontFamily: 'var(--font-montserrat)',
                }}>
                  Elige tu solución
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                  fontSize: 'clamp(24px, 2.8vw, 36px)',
                  color: '#0d0f14', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0,
                }}>
                  Todo lo que necesitas, en un solo lugar.
                </h2>
              </div>
              <span style={{
                flexShrink: 0, fontSize: 12, fontWeight: 600, color: '#94a3b8',
              }}>
                {cards.length} {cards.length === 1 ? 'opción' : 'opciones'}
              </span>
            </motion.div>

            {/* Card grid */}
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 20,
              }}
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {cards.map((c, i) => (
                <motion.div key={c.href} variants={cardVariant}>
                  <Link href={c.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <motion.div
                      whileHover={{
                        y: -6,
                        boxShadow: '0 16px 48px rgba(37,99,235,0.13), inset 0 0 0 1px rgba(37,99,235,0.28)',
                        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                      }}
                      style={{
                        position: 'relative', height: '100%', minHeight: 280,
                        background: '#ffffff',
                        border: '1px solid rgba(37,99,235,0.10)',
                        borderRadius: 16, padding: '32px 28px',
                        display: 'flex', flexDirection: 'column',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
                        cursor: 'pointer',
                      }}
                    >
                      {/* Ghost number */}
                      <div aria-hidden style={{
                        position: 'absolute', bottom: 12, right: 20,
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: 80, fontWeight: 900, lineHeight: 1,
                        color: 'rgba(37,99,235,0.04)',
                        userSelect: 'none', pointerEvents: 'none',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      {/* Icon pill */}
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: 'rgba(37,99,235,0.08)',
                        border: '1px solid rgba(37,99,235,0.14)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 22, flexShrink: 0,
                      }}>
                        <c.Icon size={20} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: 18, fontWeight: 700, color: '#0d0f14',
                        letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.3,
                      }}>
                        {c.title}
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: 14, color: '#64748b', lineHeight: 1.70,
                        marginBottom: c.items?.length ? 18 : 0, flex: 1,
                      }}>
                        {c.description}
                      </p>

                      {/* Optional items */}
                      {c.items && c.items.length > 0 && (
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                          {c.items.map(item => (
                            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: '#64748b' }}>
                              <span style={{
                                width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                                background: '#2563eb', opacity: 0.5,
                              }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        marginTop: 'auto', paddingTop: 16,
                        borderTop: '1px solid rgba(37,99,235,0.07)',
                        fontSize: 13, fontWeight: 700, color: '#2563eb',
                      }}>
                        Ver más <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
