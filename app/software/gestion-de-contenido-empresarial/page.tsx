'use client'
import { motion } from 'framer-motion'
import { Archive, BookOpen, Database, Check, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

type AnyIcon = React.ComponentType<any> // eslint-disable-line

interface Solution {
  Icon: AnyIcon
  name: string
  brand: string
  brandColor: string
  brandDark: string
  rgb: string
  slug: string
  image?: string
  tagline: string
  description: string
  features: string[]
}

const solutions: Solution[] = [
  {
    Icon: Archive,
    name: 'DocuWare',
    brand: 'DocuWare', brandColor: '#0066B3', brandDark: '#003D7A', rgb: '0,102,179',
    slug: 'docuware',
    image: '/products/software/docuware-logo.png',
    tagline: 'Gestión documental y automatización de flujos.',
    description: 'Plataforma ECM en la nube y on-premise para capturar, archivar y procesar documentos empresariales. Convierte papeles en procesos digitales automatizados que fluyen solos. Compatible con cualquier industria y escala desde PYME hasta enterprise.',
    features: [
      'Archivo digital con indexación automática',
      'Flujos de aprobación configurables sin código',
      'Firma electrónica integrada',
      'Acceso desde cualquier dispositivo y ubicación',
      'Cumplimiento con normativas de retención documental',
    ],
  },
  {
    Icon: BookOpen,
    name: 'Laserfiche',
    brand: 'Laserfiche', brandColor: '#E35205', brandDark: '#C14604', rgb: '227,82,5',
    slug: 'laserfiche',
    image: '/products/software/laserfiche-logo.png',
    tagline: 'ECM + automatización + cumplimiento regulatorio.',
    description: 'Plataforma líder de gestión de contenido empresarial con capacidades avanzadas de automatización de procesos y herramientas para cumplimiento en sectores regulados como banca, salud y gobierno. La plataforma ECM más adoptada en gobierno y sector regulado de Latinoamérica.',
    features: [
      'Repositorio centralizado de documentos y registros',
      'Automatización de procesos con flujos visuales',
      'Cumplimiento con normas ISO, HIPAA, GDPR y locales',
      'Portales de colaboración y acceso externo',
      'Analítica e informes de actividad documental',
    ],
  },
  {
    Icon: Database,
    name: 'Docuclass',
    brand: 'Docuclass', brandColor: '#0047AB', brandDark: '#003B8E', rgb: '0,71,171',
    slug: 'docuclass',
    tagline: 'Archivo digital y gestión de expedientes.',
    description: 'Solución de gestión documental y archivística diseñada para organizaciones latinoamericanas. Facilita la transición del archivo físico al digital con herramientas sencillas y resultados inmediatos. Especializada en gestión de expedientes y clasificación documental.',
    features: [
      'Migración y digitalización de archivos históricos',
      'Clasificación por expediente, tipo documental y fecha',
      'Motor de búsqueda de texto completo (OCR)',
      'Control de acceso por perfil y área',
      'Integración con ERPs y sistemas legados',
    ],
  },
]

function SoftwareImage({ src, name, Icon, brandColor, rgb }: {
  src?: string; name: string
  Icon: AnyIcon
  brandColor: string
  rgb: string
}) {
  // Use icon fallback directly — logos load from /public
  if (src) {
    return (
      <img
        src={src} alt={`${name} logo`}
        style={{ maxWidth: 180, maxHeight: 60, objectFit: 'contain', display: 'block' }}
      />
    )
  }
  return (
    <div style={{
      width: 52, height: 52, borderRadius: 14,
      background: `rgba(${rgb},0.10)`, border: `1px solid rgba(${rgb},0.22)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={24} strokeWidth={1.7} style={{ color: brandColor }} />
    </div>
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

export default function GestionContenidoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Gestión de Contenido Empresarial"
          subtitle="Centraliza, organiza y automatiza el ciclo de vida de todos tus documentos con plataformas ECM de clase mundial."
          breadcrumbs={[{ label: 'Software y Soluciones', href: '/software/gestion-de-contenido-empresarial' }, { label: 'Gestión de Contenido Empresarial' }]}
        />

        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0 100px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div aria-hidden style={{
            position: 'absolute', bottom: -80, left: -80, width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {solutions.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2, boxShadow: `0 8px 32px rgba(${s.rgb},0.10), inset 0 0 0 1px rgba(${s.rgb},0.16)` }}
                  style={{
                    background: '#ffffff', borderRadius: 18,
                    border: '1px solid rgba(37,99,235,0.09)',
                    padding: '32px', display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: 40, alignItems: 'start',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.22s',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap' as const }}>
                      <SoftwareImage src={s.image} name={s.name} Icon={s.Icon} brandColor={s.brandColor} rgb={s.rgb} />
                      <span style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '3px 10px', borderRadius: 9999,
                        background: `rgba(${s.rgb},0.08)`, border: `1px solid rgba(${s.rgb},0.22)`,
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                        color: s.brandColor, textTransform: 'uppercase' as const,
                        fontFamily: 'var(--font-montserrat)',
                      }}>
                        {s.brand}
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-montserrat)', fontSize: 20, fontWeight: 800,
                      color: '#0d0f14', letterSpacing: '-0.015em', marginBottom: 6, lineHeight: 1.2,
                    }}>
                      {s.name}
                    </h2>
                    <p style={{ fontSize: 14, color: s.brandColor, fontWeight: 600, marginBottom: 12 }}>{s.tagline}</p>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.72, marginBottom: 20 }}>{s.description}</p>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
                      <Link
                        href={`/soluciones/${s.slug}`}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          background: `linear-gradient(135deg, ${s.brandColor}, ${s.brandDark})`,
                          color: '#ffffff', padding: '10px 20px', borderRadius: 9999,
                          fontSize: 13, fontWeight: 700, textDecoration: 'none',
                          boxShadow: `0 4px 16px rgba(${s.rgb},0.28)`,
                        }}
                      >
                        Ver detalles <ChevronRight size={13} strokeWidth={2.2} />
                      </Link>
                      <Link
                        href="/contacto"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          background: 'transparent', color: '#64748b',
                          padding: '10px 16px', borderRadius: 9999,
                          fontSize: 13, fontWeight: 600, border: '1px solid rgba(37,99,235,0.14)',
                          textDecoration: 'none',
                        }}
                      >
                        Solicitar demo <ArrowRight size={13} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>

                  <div style={{
                    background: '#f8faff', borderRadius: 14,
                    border: '1px solid rgba(37,99,235,0.08)', padding: '24px',
                  }}>
                    <p style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase' as const, color: '#94a3b8',
                      fontFamily: 'var(--font-montserrat)', marginBottom: 16,
                    }}>
                      Capacidades clave
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                      {s.features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <span style={{
                            flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                            background: `rgba(${s.rgb},0.10)`, border: `1px solid rgba(${s.rgb},0.22)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                          }}>
                            <Check size={10} strokeWidth={2.8} style={{ color: s.brandColor }} />
                          </span>
                          <span style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.60 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
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
