'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

interface Dot  { label: string; color: string }
interface LineupCard {
  title:      string
  tagline:    string
  href:       string
  bg:         string
  textLight?: boolean
  Icon:       LucideIcon
  dots?:      Dot[]
}
interface Breadcrumb { label: string; href?: string }

interface AppleLineupTemplateProps {
  heroTitle:     string
  heroSubtitle:  string
  breadcrumbs:   Breadcrumb[]
  cards:         LineupCard[]
  sectionTitle?: string
}

export default function AppleLineupTemplate({
  heroTitle,
  heroSubtitle,
  breadcrumbs,
  cards,
  sectionTitle = 'Explora nuestras soluciones.',
}: AppleLineupTemplateProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={heroTitle} subtitle={heroSubtitle} breadcrumbs={breadcrumbs} />

        {/* ── Lineup — light base, cards keep their own bg ─────────────────── */}
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

          {/* Ambient glows */}
          <div aria-hidden style={{
            position: 'absolute', top: -100, right: -100, width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />

          {/* Section header */}
          <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#2563eb', marginBottom: 12,
                  fontFamily: 'var(--font-montserrat)',
                }}>
                  Portafolio
                </p>
                <h2 style={{
                  fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  color: '#0d0f14', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0,
                }}>
                  {sectionTitle}
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{ flexShrink: 0 }}
              >
                <Link
                  href="/contacto"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 600, color: '#2563eb',
                    textDecoration: 'none',
                  }}
                >
                  Solicitar cotización <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll container */}
          <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '100vw' }}>
            {/* Right fade */}
            <div aria-hidden style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 10,
              background: 'linear-gradient(to left, #f8faff, transparent)',
              pointerEvents: 'none',
            }} />

            <div style={{
              display: 'flex', gap: 20,
              overflowX: 'auto', scrollSnapType: 'x mandatory',
              padding: '8px 60px 24px',
              maxWidth: '100vw', boxSizing: 'border-box',
              msOverflowStyle: 'none', scrollbarWidth: 'none',
            }}>
              {cards.map((card, i) => (
                <motion.div
                  key={card.href}
                  style={{ scrollSnapAlign: 'start', flexShrink: 0 }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={card.href} style={{ display: 'block', textDecoration: 'none' }}>
                    <motion.div
                      style={{
                        width: 300, minHeight: 480, borderRadius: 20,
                        background: card.bg,
                        boxShadow: card.textLight
                          ? '0 20px 60px rgba(0,0,0,0.22)'
                          : '0 0 0 1px rgba(37,99,235,0.10), 0 8px 32px rgba(37,99,235,0.06)',
                        overflow: 'hidden',
                        display: 'flex', flexDirection: 'column',
                        position: 'relative',
                      }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    >
                      {/* Visual area */}
                      <div style={{
                        position: 'relative', flex: 1, minHeight: 320,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                      }}>
                        {/* Rings on dark cards */}
                        {card.textLight && (
                          <>
                            <div aria-hidden style={{
                              position: 'absolute', width: 240, height: 240, borderRadius: '50%',
                              border: '1px solid rgba(255,255,255,0.05)',
                            }} />
                            <div aria-hidden style={{
                              position: 'absolute', width: 170, height: 170, borderRadius: '50%',
                              border: '1px solid rgba(255,255,255,0.04)',
                            }} />
                          </>
                        )}
                        {/* Rings on light cards */}
                        {!card.textLight && (
                          <>
                            <div aria-hidden style={{
                              position: 'absolute', width: 220, height: 220, borderRadius: '50%',
                              border: '1px solid rgba(37,99,235,0.08)',
                            }} />
                            <div aria-hidden style={{
                              position: 'absolute', width: 155, height: 155, borderRadius: '50%',
                              border: '1px dashed rgba(37,99,235,0.10)',
                            }} />
                          </>
                        )}

                        {/* Icon */}
                        <div style={{ position: 'relative', zIndex: 1, marginBottom: 28 }}>
                          <card.Icon
                            size={68}
                            strokeWidth={1.2}
                            style={{
                              color: card.textLight ? 'rgba(255,255,255,0.92)' : '#2563eb',
                              filter: card.textLight
                                ? 'drop-shadow(0 0 20px rgba(96,165,250,0.30))'
                                : 'drop-shadow(0 4px 16px rgba(37,99,235,0.20))',
                            }}
                          />
                        </div>

                        {/* Dots */}
                        {card.dots && card.dots.length > 0 && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
                            {card.dots.map(dot => (
                              <div
                                key={dot.label}
                                title={dot.label}
                                style={{
                                  width: 11, height: 11, borderRadius: '50%', background: dot.color,
                                  boxShadow: `0 0 0 2px ${card.textLight ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)'}`,
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {/* Bottom gradient fade */}
                        <div aria-hidden style={{
                          position: 'absolute', bottom: 0, left: 0, right: 0, height: 64,
                          background: `linear-gradient(to top, ${card.bg}, transparent)`,
                          pointerEvents: 'none',
                        }} />
                      </div>

                      {/* Divider */}
                      <div style={{
                        height: 1,
                        background: card.textLight ? 'rgba(255,255,255,0.07)' : 'rgba(37,99,235,0.08)',
                      }} />

                      {/* Text area */}
                      <div style={{ padding: '24px 28px 28px' }}>
                        <p style={{
                          fontFamily: 'var(--font-montserrat)', fontSize: 17, fontWeight: 700,
                          color: card.textLight ? '#ffffff' : '#0d0f14',
                          marginBottom: 6, lineHeight: 1.3,
                        }}>
                          {card.title}
                        </p>
                        <p style={{
                          fontSize: 13, lineHeight: 1.6, marginBottom: 18,
                          color: card.textLight ? 'rgba(255,255,255,0.48)' : '#64748b',
                        }}>
                          {card.tagline}
                        </p>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          fontSize: 13, fontWeight: 700,
                          color: card.textLight ? 'rgba(255,255,255,0.65)' : '#2563eb',
                        }}>
                          Ver más <ArrowRight size={13} strokeWidth={2.5} />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              <div style={{ flexShrink: 0, width: 32 }} />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
