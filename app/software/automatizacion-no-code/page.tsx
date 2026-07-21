'use client'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Users, BarChart2, Workflow, Smartphone, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const useCases = [
  { Icon: Users,       title: 'CRM personalizado',     desc: 'Gestión de clientes, pipeline de ventas y seguimiento de oportunidades sin depender de software genérico.' },
  { Icon: BarChart2,   title: 'Control de gastos',     desc: 'Flujos de aprobación de reportes de gastos con notificaciones automáticas y dashboards en tiempo real.' },
  { Icon: Workflow,    title: 'Gestión de procesos',   desc: 'Automatiza flujos de trabajo internos: solicitudes, aprobaciones y notificaciones sin escribir una línea de código.' },
  { Icon: Smartphone,  title: 'Apps móviles',          desc: 'Todas las apps construidas con Kintone funcionan en navegador y móvil sin configuración adicional.' },
]

const kintoneFeatures = [
  'Constructor drag-and-drop para campos, formularios y flujos',
  'Bases de datos relacionales sin SQL',
  'Automatización de notificaciones y recordatorios',
  'Dashboards y gráficas generadas automáticamente',
  'Control de acceso granular por rol y departamento',
  'API abierta para conectar con sistemas existentes',
  'Sin instalación — 100% en la nube',
]

function KintoneLogo() {
  return (
    <img
      src="/products/software/kintone-logo.svg"
      alt="Kintone logo"
      style={{ maxWidth: 180, maxHeight: 60, objectFit: 'contain', display: 'block' }}
    />
  )
}

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function AutomatizacionNoCodePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Automatización No-Code"
          subtitle="Construye apps empresariales a medida con Kintone — sin desarrolladores, sin meses de proyecto, sin presupuesto de software a la medida."
          breadcrumbs={[{ label: 'Software y Soluciones', href: '/software/automatizacion-no-code' }, { label: 'Automatización No-Code' }]}
        />

        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0 100px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div aria-hidden style={{
            position: 'absolute', top: -100, right: -100, width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>

            {/* Kintone hero card — clickable */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(230,64,42,0.10), inset 0 0 0 1px rgba(230,64,42,0.16)' }}
              style={{
                background: '#f8faff', borderRadius: 24,
                border: '1px solid rgba(37,99,235,0.10)',
                padding: 'clamp(20px,4vw,48px)', marginBottom: 48,
                boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
                transition: 'box-shadow 0.22s',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'clamp(24px,4vw,48px)', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' as const }}>
                    <KintoneLogo />
                    <span style={{
                      display: 'inline-flex', padding: '4px 12px', borderRadius: 9999,
                      background: 'rgba(230,64,42,0.08)', border: '1px solid rgba(230,64,42,0.20)',
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                      color: '#E6402A', textTransform: 'uppercase' as const,
                      fontFamily: 'var(--font-montserrat)',
                    }}>
                      kintone
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                    fontSize: 'clamp(20px, 2.4vw, 30px)',
                    color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 14,
                  }}>
                    Tu equipo construye las apps que tu empresa necesita.
                  </h2>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, marginBottom: 20 }}>
                    Kintone es la plataforma no-code de Cybozu que permite a cualquier área de la empresa crear aplicaciones personalizadas con drag-and-drop. Sin código. Sin IT. Sin esperas.
                  </p>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, marginBottom: 28 }}>
                    Desde un CRM propio hasta un sistema de aprobación de gastos o un portal de proveedores — todo construido por tus propios equipos en días, no meses.
                  </p>

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
                    <Link
                      href="/soluciones/kintone"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'linear-gradient(135deg, #E6402A, #CC3322)',
                        color: '#ffffff', padding: '12px 24px', borderRadius: 9999,
                        fontSize: 14, fontWeight: 700, textDecoration: 'none',
                        boxShadow: '0 4px 20px rgba(230,64,42,0.28)',
                      }}
                    >
                      Ver detalles <ChevronRight size={13} strokeWidth={2.2} />
                    </Link>
                    <Link
                      href="/contacto"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: '#ffffff', color: '#64748b',
                        padding: '12px 18px', borderRadius: 9999,
                        fontSize: 13, fontWeight: 600, border: '1px solid rgba(37,99,235,0.14)',
                        textDecoration: 'none',
                      }}
                    >
                      Solicitar demo <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Feature list */}
                <div>
                  <p style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                    textTransform: 'uppercase' as const, color: '#94a3b8',
                    fontFamily: 'var(--font-montserrat)', marginBottom: 16,
                  }}>
                    Lo que incluye
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {kintoneFeatures.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(230,64,42,0.08)', border: '1px solid rgba(230,64,42,0.20)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                        }}>
                          <Check size={10} strokeWidth={2.8} style={{ color: '#E6402A' }} />
                        </span>
                        <span style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.60 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Use cases */}
            <div>
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase' as const, color: '#2563eb', marginBottom: 24,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Casos de uso frecuentes
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                {useCases.map((u, i) => (
                  <motion.div
                    key={u.title}
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
                      <u.Icon size={18} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 15, fontWeight: 700, color: '#0d0f14', marginBottom: 6 }}>
                        {u.title}
                      </h3>
                      <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65 }}>{u.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section style={{ background: '#020b1d', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 900, height: 240,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)',
          }}>
            {[
              { value: '0',    label: 'Líneas de código necesarias' },
              { value: 'Días', label: 'Para tener tu app lista' },
              { value: '∞',   label: 'Apps que puedes construir' },
            ].map((s, i, arr) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.50, delay: i * 0.10 }}
                style={{
                  textAlign: 'center', padding: '20px 16px',
                  borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1, marginBottom: 8,
                  background: 'linear-gradient(130deg, #ffffff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                }}>
                  {s.value}
                </p>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.30)' }}>
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
