'use client'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, ClipboardList, Users, RefreshCw, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const MC_COLOR = '#00A98F'
const MC_DARK  = '#008F78'
const MC_RGB   = '0,169,143'

const features = [
  { Icon: FileText,      title: 'Control de documentos',       desc: 'Versiones controladas, flujos de aprobación y distribución automática a los equipos correctos.' },
  { Icon: ClipboardList, title: 'CAPA y no conformidades',     desc: 'Registro, investigación y cierre de acciones correctivas y preventivas con trazabilidad completa.' },
  { Icon: Users,         title: 'Gestión de auditorías',       desc: 'Planificación, ejecución y seguimiento de auditorías internas y externas desde una sola plataforma.' },
  { Icon: RefreshCw,     title: 'Capacitación y competencias', desc: 'Asignación de entrenamientos, registro de completados y control de competencias por rol y área.' },
]

const compliance = ['FDA 21 CFR Part 11', 'ISO 9001 / 13485', 'GxP (GMP · GLP · GCP)', 'EU MDR / IVDR', 'ICH Q10']

function MasterControlLogo() {
  return (
    <img
      src="/products/software/mastercontrol-logo.svg"
      alt="MasterControl logo"
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

export default function GestionCalidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Gestión de Calidad"
          subtitle="QMS de clase mundial para industrias donde los errores no son una opción — farmacéutica, manufactura, dispositivos médicos."
          breadcrumbs={[{ label: 'Software y Soluciones', href: '/software/gestion-de-calidad' }, { label: 'Gestión de Calidad' }]}
        />

        {/* Hero product section */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px 80px' }}>

            {/* MasterControl card — clickable */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, boxShadow: `0 12px 40px rgba(${MC_RGB},0.10), inset 0 0 0 1px rgba(${MC_RGB},0.18)` }}
              style={{
                background: '#f8faff', borderRadius: 24,
                border: '1px solid rgba(37,99,235,0.10)',
                padding: '48px', marginBottom: 48,
                boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
                transition: 'box-shadow 0.22s',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' as const }}>
                    <MasterControlLogo />
                    <span style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '4px 12px', borderRadius: 9999,
                      background: `rgba(${MC_RGB},0.08)`, border: `1px solid rgba(${MC_RGB},0.22)`,
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                      color: MC_COLOR, textTransform: 'uppercase' as const,
                      fontFamily: 'var(--font-montserrat)',
                    }}>
                      MasterControl
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                    fontSize: 'clamp(22px, 2.8vw, 34px)',
                    color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18, marginBottom: 14,
                  }}>
                    El QMS más adoptado en industrias reguladas.
                  </h2>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, marginBottom: 28 }}>
                    MasterControl centraliza todos los procesos de calidad en una plataforma conectada — desde el control de documentos y SOPs hasta la gestión de auditorías y capacitaciones. Diseñado para pasar inspecciones regulatorias con confianza.
                  </p>

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
                    <Link
                      href="/soluciones/mastercontrol"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: `linear-gradient(135deg, ${MC_COLOR}, ${MC_DARK})`,
                        color: '#ffffff', padding: '12px 24px', borderRadius: 9999,
                        fontSize: 14, fontWeight: 700, textDecoration: 'none',
                        boxShadow: `0 4px 20px rgba(${MC_RGB},0.28)`,
                      }}
                    >
                      Ver detalles <ChevronRight size={13} strokeWidth={2.2} />
                    </Link>
                    <Link
                      href="/contacto"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: '#ffffff', color: '#64748b',
                        padding: '12px 20px', borderRadius: 9999,
                        fontSize: 13, fontWeight: 600, border: '1px solid rgba(37,99,235,0.14)',
                        textDecoration: 'none',
                      }}
                    >
                      Solicitar demo <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Compliance badges */}
                <div>
                  <p style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase' as const, color: '#94a3b8',
                    fontFamily: 'var(--font-montserrat)', marginBottom: 16,
                  }}>
                    Cumplimiento normativo
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 24 }}>
                    {compliance.map(c => (
                      <span key={c} style={{
                        padding: '6px 14px', borderRadius: 9999,
                        background: '#ffffff', border: '1px solid rgba(37,99,235,0.14)',
                        fontSize: 12, fontWeight: 700, color: '#0d0f14',
                        fontFamily: 'var(--font-montserrat)',
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>
                    MasterControl es el QMS de referencia para empresas que enfrentan inspecciones de la FDA, certificaciones ISO y regulaciones internacionales de dispositivos médicos y farmacéutica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
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
                    background: `rgba(${MC_RGB},0.08)`, border: `1px solid rgba(${MC_RGB},0.18)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <f.Icon size={18} strokeWidth={1.8} style={{ color: MC_COLOR }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 15, fontWeight: 700, color: '#0d0f14', marginBottom: 6 }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats stripe */}
        <section style={{ background: '#020b1d', padding: '64px 0' }}>
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 900, height: 240,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1200, margin: '0 auto', padding: '0 40px',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
          }}>
            {[
              { value: '1,000+', label: 'Clientes en industrias reguladas' },
              { value: '21 CFR', label: 'Cumplimiento FDA Part 11' },
              { value: '100%', label: 'Trazabilidad auditable' },
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
                  fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, lineHeight: 1, marginBottom: 8,
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
