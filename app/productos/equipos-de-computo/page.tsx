'use client'
import { motion } from 'framer-motion'
import { Monitor, Cpu, Shield, Zap, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const highlights = [
  { Icon: Shield,  title: 'Certificación empresarial',    desc: 'Equipos homologados para entornos corporativos con soporte técnico garantizado.' },
  { Icon: Cpu,     title: 'Rendimiento profesional',       desc: 'Procesadores Intel Core / AMD Ryzen para cargas de trabajo exigentes.' },
  { Icon: Zap,     title: 'Despliegue ágil',               desc: 'Configuración lista para dominio y gestión centralizada desde el día uno.' },
  { Icon: Monitor, title: 'Portafolio completo',           desc: 'Laptops ultradelgadas, desktops de escritorio y workstations de alto rendimiento.' },
]

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function EquiposComputoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Equipos de Cómputo"
          subtitle="Hardware Asus de grado empresarial — diseñado para durar, fácil de administrar, respaldado por AbbaCore."
          breadcrumbs={[{ label: 'Productos', href: '/productos/escaneres' }, { label: 'Equipos de Cómputo' }]}
        />

        {/* ── Partner strip + Coming soon ───────────────────────────────────── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '0 0 96px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />

          {/* ASUS partner strip */}
          <div style={{ background: '#020b1d', padding: '16px 0', marginBottom: 72 }}>
            <div style={{
              maxWidth: 1200, margin: '0 auto', padding: '0 40px',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <span style={{
                fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)',
                fontFamily: 'var(--font-montserrat)',
              }}>
                Partner certificado
              </span>
              <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.10)' }} />
              <span style={{
                fontSize: 13, fontWeight: 800, letterSpacing: '0.12em',
                color: '#60a5fa', fontFamily: 'var(--font-montserrat)', textTransform: 'uppercase',
              }}>
                ASUS Business
              </span>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

            {/* Highlights grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 64 }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.50, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: '#ffffff', borderRadius: 16,
                    border: '1px solid rgba(37,99,235,0.09)',
                    padding: '24px', display: 'flex', alignItems: 'flex-start', gap: 16,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.13)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <h.Icon size={20} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 16, fontWeight: 700, color: '#0d0f14', marginBottom: 6 }}>
                      {h.title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65 }}>{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coming soon card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%)',
                borderRadius: 20, border: '1px solid rgba(37,99,235,0.12)',
                padding: '56px 40px', textAlign: 'center',
                boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
              }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <Clock size={26} strokeWidth={1.6} style={{ color: '#2563eb' }} />
              </div>

              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                textTransform: 'uppercase', color: '#2563eb', marginBottom: 12,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Próximamente
              </p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                fontSize: 'clamp(22px, 2.6vw, 32px)',
                color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 14,
              }}>
                Catálogo completo en preparación
              </h2>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 32px' }}>
                Estamos publicando el portafolio completo de equipos Asus Business: laptops ExpertBook, desktops, Mini PC y workstations para empresas. Mientras tanto, nuestro equipo puede asesorarte directamente.
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
                <Link
                  href="/contacto"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#ffffff', padding: '13px 28px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.30)',
                  }}
                >
                  Solicitar asesoría <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/contacto"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#ffffff', color: '#0d0f14',
                    padding: '13px 28px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    border: '1px solid rgba(13,15,20,0.12)',
                  }}
                >
                  Recibir notificación
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
