'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Zap, Clock, BarChart2, Wifi, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const benefits = [
  { Icon: Zap,       title: 'Velocidad de servicio',        desc: 'Las órdenes viajan en tiempo real desde el POS a la pantalla de cocina — sin papel, sin errores de transcripción.' },
  { Icon: Clock,     title: 'Tiempos de preparación',       desc: 'Seguimiento en tiempo real de cada orden: cuánto lleva en cola, cuánto falta para completarse.' },
  { Icon: BarChart2, title: 'Analítica de cocina',          desc: 'Métricas de rendimiento por estación, turno y día para optimizar procesos y reducir tiempos de espera.' },
  { Icon: Wifi,      title: 'Integración con cualquier POS',desc: 'Compatible con los principales sistemas POS del mercado mediante protocolos estándar.' },
]

const features = [
  'Visualización en tiempo real de órdenes activas',
  'Alertas de tiempos excedidos por estación',
  'Filtros por tipo de platillo o estación de trabajo',
  'Pantallas de alta resolución con visibilidad en ambientes de cocina',
  'Integración con impresoras de tickets Epson TM series',
  'Sin papel: reduce costos y errores operativos',
]

const HW = [
  {
    brand: 'ēlo', color: '#003082', rgb: '0,48,130',
    products: ['I-Series Linux', 'Backpack Linux'],
    desc: 'Pantallas táctiles de grado industrial con modo kiosco y alta durabilidad para ambientes de cocina.',
    img: '/products/software/kds-elo.jpg',
    status: 'available' as const,
  },
  {
    brand: 'Kitchen Armor', color: '#374151', rgb: '55,65,81',
    products: ['KDS Display'],
    desc: 'Pantallas resistentes diseñadas para entornos de alto calor y humedad en cocinas profesionales.',
    img: '/products/software/kds-kitchen-armor.jpg',
    status: 'coming-soon' as const,
  },
  {
    brand: 'Logic Controls', color: '#0060A9', rgb: '0,96,169',
    products: ['KDS Integration'],
    desc: 'Sistemas de visualización para punto de venta y cocina con integración directa con TrueOrder™.',
    img: '/products/software/kds-logic-controls.jpg',
    status: 'available' as const,
  },
  {
    brand: 'MicroTouch', color: '#C0392B', rgb: '192,57,43',
    products: ['KDS Series'],
    desc: 'Monitores táctiles de alta resolución con visibilidad superior en ambientes con luz intensa y vapor.',
    img: '/products/software/kds-microtouch.jpg',
    status: 'available' as const,
  },
]

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function KitchenDisplayPage() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Kitchen Display Systems"
          subtitle="Reemplaza los tickets de papel con pantallas inteligentes — tus cocineros ven las órdenes al instante, tu servicio se acelera."
          breadcrumbs={[{ label: 'Software y Soluciones', href: '/software/kitchen-display-systems' }, { label: 'Kitchen Display Systems' }]}
        />

        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0 100px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

            {/* ── Main product card ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#f8faff', borderRadius: 24,
                border: '1px solid rgba(37,99,235,0.10)',
                padding: '48px', marginBottom: 48,
                boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <img src="/products/software/epson-logo.svg" alt="Epson"
                      style={{ height: 36, width: 'auto', display: 'block' }} />
                    <span style={{
                      display: 'inline-flex', padding: '4px 12px', borderRadius: 9999,
                      background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.20)',
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                      color: '#2563eb', textTransform: 'uppercase' as const,
                      fontFamily: 'var(--font-montserrat)',
                    }}>Epson KDS</span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                    fontSize: 'clamp(20px, 2.4vw, 30px)',
                    color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 14,
                  }}>
                    Cocinas más rápidas, servicio más preciso.
                  </h2>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, marginBottom: 28 }}>
                    El sistema de visualización de cocina de Epson reemplaza los tickets de papel por pantallas en tiempo real. Cada orden que sale del POS aparece al instante en la estación correcta — sin demoras, sin malentendidos, sin papel perdido.
                  </p>

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
                    <button
                      onClick={() => setOpen(v => !v)}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        border: 'none', color: '#ffffff', padding: '12px 24px', borderRadius: 9999,
                        fontSize: 14, fontWeight: 700, cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(37,99,235,0.28)',
                        transition: 'opacity 0.18s',
                      }}
                    >
                      {open ? 'Ocultar detalles' : 'Ver detalles'}
                      <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'inline-flex' }}>
                        <ChevronDown size={15} strokeWidth={2.2} />
                      </motion.span>
                    </button>
                    <Link href="/contacto" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'transparent', border: '1px solid rgba(37,99,235,0.22)',
                      color: '#2563eb', padding: '12px 20px', borderRadius: 9999,
                      fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    }}>
                      Solicitar demostración <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Feature list */}
                <div>
                  <p style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                    textTransform: 'uppercase' as const, color: '#94a3b8',
                    fontFamily: 'var(--font-montserrat)', marginBottom: 16,
                  }}>Características</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.20)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                        }}>
                          <Check size={10} strokeWidth={2.8} style={{ color: '#2563eb' }} />
                        </span>
                        <span style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.60 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── VER DETALLES PANEL ── */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Divider */}
                    <div style={{ height: 1, background: 'rgba(37,99,235,0.10)', margin: '40px 0' }} />

                    {/* Chef cinematic strip */}
                    <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 380, marginBottom: 40 }}>
                      <img
                        src="/products/software/chef-kds.png"
                        alt="Chef usando Epson KDS"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(2,11,29,0.88) 42%, rgba(2,11,29,0.18) 100%)' }} />
                      <div style={{ position: 'relative', zIndex: 1, padding: '56px 52px', maxWidth: 520 }}>
                        <p style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                          textTransform: 'uppercase' as const, color: '#60a5fa',
                          fontFamily: 'var(--font-montserrat)', marginBottom: 14,
                        }}>Epson TrueOrder™ KDS</p>
                        <h3 style={{
                          fontFamily: 'var(--font-montserrat)', fontWeight: 900,
                          fontSize: 'clamp(24px, 3vw, 38px)',
                          color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.12, marginBottom: 18,
                        }}>
                          Del ticket de papel<br />a la cocina digital.
                        </h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.80, marginBottom: 28 }}>
                          Cada orden aparece en la pantalla de la estación correcta en tiempo real — sin impresoras de tickets, sin errores de lectura. Tu equipo se enfoca en cocinar, no en descifrar papel.
                        </p>
                        <a href="https://epson.com/kitchen-display-system" target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.22)',
                          color: 'rgba(255,255,255,0.90)', padding: '11px 22px', borderRadius: 9999,
                          fontSize: 13, fontWeight: 600, textDecoration: 'none',
                        }}>
                          Ver en Epson.com <ArrowRight size={13} strokeWidth={2.2} />
                        </a>
                      </div>
                    </div>

                    {/* Hardware portfolio */}
                    <div style={{ marginBottom: 8 }}>
                      <p style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                        textTransform: 'uppercase' as const, color: '#2563eb',
                        fontFamily: 'var(--font-montserrat)', marginBottom: 6,
                      }}>Hardware certificado</p>
                      <h3 style={{
                        fontFamily: 'var(--font-montserrat)', fontWeight: 900,
                        fontSize: 'clamp(18px, 2.2vw, 26px)',
                        color: '#0d0f14', letterSpacing: '-0.02em', marginBottom: 24,
                      }}>
                        Pantallas compatibles con TrueOrder™ KDS
                      </h3>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
                        {HW.map((hw, i) => (
                          <motion.div
                            key={hw.brand}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.40, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                              background: '#ffffff', borderRadius: 18,
                              border: '1px solid rgba(37,99,235,0.09)',
                              overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                              display: 'flex', flexDirection: 'column',
                            }}
                          >
                            {/* Product photo */}
                            <div style={{
                              background: '#f1f5f9',
                              aspectRatio: '4/3',
                              overflow: 'hidden',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <img
                                src={hw.img}
                                alt={hw.brand}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                              />
                            </div>

                            {/* Brand header */}
                            <div style={{
                              background: `rgba(${hw.rgb},0.05)`,
                              borderBottom: `1px solid rgba(${hw.rgb},0.09)`,
                              padding: '14px 16px 12px',
                            }}>
                              <p style={{
                                fontFamily: 'var(--font-montserrat)', fontWeight: 900,
                                fontSize: 17, letterSpacing: '-0.02em',
                                color: `rgb(${hw.rgb})`, marginBottom: 8,
                              }}>{hw.brand}</p>
                              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 4 }}>
                                {hw.products.map(p => (
                                  <span key={p} style={{
                                    padding: '2px 8px', borderRadius: 9999,
                                    background: `rgba(${hw.rgb},0.10)`, border: `1px solid rgba(${hw.rgb},0.22)`,
                                    fontSize: 9.5, fontWeight: 700, letterSpacing: '0.05em',
                                    color: `rgb(${hw.rgb})`,
                                  }}>{p}</span>
                                ))}
                              </div>
                            </div>

                            {/* Body */}
                            <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 12 }}>
                              <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.65 }}>{hw.desc}</p>
                              {hw.status === 'coming-soon' ? (
                                <span style={{
                                  alignSelf: 'flex-start', padding: '3px 10px', borderRadius: 9999,
                                  background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.28)',
                                  fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em', color: '#b45309',
                                }}>Próximamente</span>
                              ) : (
                                <span style={{
                                  alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 4,
                                  padding: '3px 10px', borderRadius: 9999,
                                  background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.25)',
                                  fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em', color: '#065f46',
                                }}>
                                  <Check size={8} strokeWidth={3} /> Disponible
                                </span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* POS note */}
                      <div style={{
                        marginTop: 20, padding: '16px 22px', borderRadius: 12,
                        background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.10)',
                        display: 'flex', alignItems: 'center', gap: 12,
                      }}>
                        <Wifi size={16} strokeWidth={1.8} style={{ color: '#2563eb', flexShrink: 0 }} />
                        <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.65, margin: 0 }}>
                          <strong style={{ color: '#0d0f14' }}>Compatible con más de 50 sistemas POS</strong> — Aloha, Toast, Square, Micros, TouchBistro y cualquier plataforma con impresión a impresoras Epson. Sin suscripción mensual, compra única por estación.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Benefits */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: '#ffffff', borderRadius: 16,
                    border: '1px solid rgba(37,99,235,0.09)',
                    padding: '24px', display: 'flex', alignItems: 'flex-start', gap: 16,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.13)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <b.Icon size={18} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 15, fontWeight: 700, color: '#0d0f14', marginBottom: 6 }}>
                      {b.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
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
