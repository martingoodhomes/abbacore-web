'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, Eye, Shield, TrendingUp, Users, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const values = [
  {
    Icon: Zap,
    title: 'Velocidad',
    description: 'Implementamos soluciones en días, no meses. Arquitectura modular que permite despliegues ágiles sin comprometer la estabilidad.',
  },
  {
    Icon: Target,
    title: 'Precisión',
    description: 'Cada solución se calibra al nivel exacto que tu operación exige. Sin aproximaciones, sin compromisos con la exactitud.',
  },
  {
    Icon: Eye,
    title: 'Control',
    description: 'Visibilidad completa sobre cada proceso, cada documento, cada decisión. Tu operación, transparente de principio a fin.',
  },
]

const differentiators = [
  {
    Icon: Shield,
    title: 'Seguridad de nivel bancario',
    description: 'Cifrado AES-256, autenticación multifactor y cumplimiento con normativas colombianas de protección de datos.',
  },
  {
    Icon: TrendingUp,
    title: 'Escalabilidad sin límites',
    description: 'Arquitectura diseñada para crecer: desde una oficina de 10 personas hasta operaciones con miles de usuarios concurrentes.',
  },
  {
    Icon: Users,
    title: 'Equipo especializado',
    description: 'Más de 10 años de experiencia en digitalización, gestión documental y automatización en el mercado colombiano.',
  },
  {
    Icon: Award,
    title: 'Soporte certificado',
    description: 'Tiempos de respuesta garantizados por contrato y técnicos certificados por los fabricantes que representamos.',
  },
]

const stats = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '500+', label: 'Empresas atendidas' },
  { value: '99.8%', label: 'Satisfacción de clientes' },
  { value: '24h', label: 'Tiempo de respuesta' },
]

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function NosotrosPage() {
  const missionRef = useRef<HTMLElement>(null)
  const valuesRef  = useRef<HTMLElement>(null)
  const diffRef    = useRef<HTMLElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)

  const missionInView = useInView(missionRef, { once: true, margin: '-60px' })
  const valuesInView  = useInView(valuesRef,  { once: true, margin: '-60px' })
  const diffInView    = useInView(diffRef,    { once: true, margin: '-60px' })
  const statsInView   = useInView(statsRef,   { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Liderando la evolución tecnológica"
          subtitle="AbbaCore lleva la precisión, velocidad y control documental a organizaciones que no pueden permitirse quedarse atrás."
          breadcrumbs={[{ label: 'Nosotros' }]}
        />

        <section ref={missionRef} style={{
          position: 'relative', background: '#ffffff',
          padding: '112px 0 120px', overflow: 'hidden',
        }}>
          <div style={LIGHT_GRID} />
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                  textTransform: 'uppercase', color: '#2563eb', marginBottom: 24,
                  fontFamily: 'var(--font-montserrat)',
                }}
              >
                Nuestra Misión
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: 'clamp(30px, 4vw, 50px)',
                  fontWeight: 800, color: '#0d0f14',
                  letterSpacing: '-0.03em', lineHeight: 1.12,
                  marginBottom: 28,
                }}
              >
                Transformar la operación documental de Colombia.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.60, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 17, color: '#64748b', lineHeight: 1.80,
                  marginBottom: 40,
                }}
              >
                Creemos que toda organización merece operar con la eficiencia de las empresas más avanzadas del mundo. Por eso combinamos hardware de alto rendimiento, software inteligente y automatización de procesos en soluciones integradas que generan resultados reales desde el primer día.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.50, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/contacto"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#ffffff', padding: '13px 28px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    boxShadow: '0 4px 24px rgba(37,99,235,0.30)',
                  }}
                >
                  Conoce nuestro equipo <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section ref={valuesRef} style={{
          position: 'relative', background: '#020b1d',
          padding: '100px 0 112px', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: [
              'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '60px 60px',
          }} />
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

            <motion.div
              style={{ textAlign: 'center', marginBottom: 64 }}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                textTransform: 'uppercase', color: '#60a5fa', marginBottom: 16,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Nuestros valores
              </p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0,
              }}>
                Los principios que nos definen.
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                  animate={valuesInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.65, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(145deg, rgba(16,32,80,0.80) 0%, rgba(4,10,38,0.70) 100%)',
                    border: '1px solid rgba(37,99,235,0.18)',
                    borderRadius: 16, padding: '36px 28px',
                    textAlign: 'center',
                    boxShadow: 'inset 0 1px 0 rgba(147,197,253,0.08), 0 8px 32px rgba(0,4,20,0.30)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: 'rgba(37,99,235,0.15)',
                    border: '1px solid rgba(37,99,235,0.28)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 0 24px rgba(37,99,235,0.20)',
                  }}>
                    <v.Icon size={24} strokeWidth={1.6} style={{ color: '#60a5fa' }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-montserrat)', fontSize: 20, fontWeight: 700,
                    color: '#ffffff', marginBottom: 12, letterSpacing: '-0.01em',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.44)', lineHeight: 1.72 }}>
                    {v.description}
                  </p>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 28, right: 28, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.50), transparent)',
                  }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={diffRef} style={{
          position: 'relative', background: '#f8faff',
          padding: '100px 0 112px', overflow: 'hidden',
        }}>
          <div style={LIGHT_GRID} />
          <div aria-hidden style={{
            position: 'absolute', bottom: -100, right: -100, width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

            <motion.div
              style={{ marginBottom: 60 }}
              initial={{ opacity: 0, y: 20 }}
              animate={diffInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                textTransform: 'uppercase', color: '#2563eb', marginBottom: 16,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Por qué elegirnos
              </p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                fontSize: 'clamp(26px, 3.2vw, 40px)',
                color: '#0d0f14', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0,
                maxWidth: 520,
              }}>
                Lo que nos hace diferentes.
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                  animate={diffInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.60, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(37,99,235,0.09)',
                    borderRadius: 16,
                    padding: '28px 24px',
                    display: 'flex', alignItems: 'flex-start', gap: 20,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(37,99,235,0.07)',
                    border: '1px solid rgba(37,99,235,0.13)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <d.Icon size={20} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-montserrat)', fontSize: 16, fontWeight: 700,
                      color: '#0d0f14', marginBottom: 8, letterSpacing: '-0.01em',
                    }}>
                      {d.title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.70 }}>
                      {d.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{
          position: 'relative', background: '#020b1d',
          padding: '72px 0', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900, height: 260,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div ref={statsRef} style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1200, margin: '0 auto', padding: '0 40px',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textAlign: 'center', padding: '24px 16px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 800, lineHeight: 1, marginBottom: 8,
                  background: 'linear-gradient(130deg, #ffffff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)',
                }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
