'use client'
import { motion } from 'framer-motion'
import { ScanLine, Brain, Bot, Eye, Check, ArrowRight, ChevronRight } from 'lucide-react'
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
  logoText?: string
  tagline: string
  description: string
  features: string[]
}

function SoftwareImage({ src, logoText, name, Icon, brandColor, rgb }: {
  src?: string; logoText?: string; name: string
  Icon: AnyIcon
  brandColor: string
  rgb: string
}) {
  if (logoText) {
    return (
      <span style={{
        fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
        fontSize: 42, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1,
        background: `linear-gradient(135deg, #C084FC, ${brandColor})`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}>
        {logoText}
      </span>
    )
  }
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

const solutions: Solution[] = [
  {
    Icon: ScanLine,
    name: 'PaperStream Capture',
    brand: 'Ricoh · PFU', brandColor: '#005BAC', brandDark: '#004A8F', rgb: '0,91,172',
    slug: 'paperstream-capture',
    image: '/products/software/ricoh-logo.svg',
    tagline: 'Captura documental con un clic.',
    description: 'Software de captura de imagen incluido con los escáneres fi-Series. Digitaliza, limpia y clasifica documentos en un solo paso — sin configuración compleja. Permite automatizar rutinas de escaneo mediante perfiles configurables.',
    features: [
      'Detección y eliminación de páginas en blanco (simple/doble)',
      'OCR zonal y reconocimiento de códigos de barras 1D/2D',
      'Extracción de hasta 100 campos por formulario (versión Pro)',
      'Exportación a SharePoint, FTP, email, impresoras y aplicaciones',
    ],
  },
  {
    Icon: Brain,
    name: 'InfoInput',
    brand: 'Kodak Alaris', brandColor: '#CC0000', brandDark: '#AA0000', rgb: '204,0,0',
    slug: 'infoinput',
    image: '/products/software/kodak-alaris-logo.png',
    tagline: 'Clasificación e indexación inteligente.',
    description: 'Plataforma de captura avanzada de Kodak Alaris que combina inteligencia artificial con automatización de flujos para clasificar y extraer datos de documentos complejos desde cualquier fuente — email, escáner, móvil o nube.',
    features: [
      'Clasificación automática de documentos por tipo y contenido',
      'Extracción de campos estructurados y no estructurados con IA',
      'Aprendizaje continuo: el sistema mejora con cada documento',
      'Compatible con escáneres Kodak Alaris y fuentes digitales',
    ],
  },
  {
    Icon: Bot,
    name: 'RIA — Ricoh Intelligent Automation',
    brand: 'Ricoh', brandColor: '#7B2FF7', brandDark: '#6A1FE0', rgb: '123,47,247',
    slug: 'ria',
    logoText: 'Ria',
    tagline: 'IDP con IA que convierte documentos en decisiones.',
    description: 'Plataforma de procesamiento inteligente de documentos (IDP) que combina captura avanzada, IA, reconocimiento y automatización de procesos para convertir información no estructurada en datos confiables y utilizables.',
    features: [
      'Captura automática desde cualquier fuente física o digital',
      'Clasificación inteligente con IA y extracción de datos clave',
      'Validación y control de calidad de la información extraída',
      'Integración con ERP, CRM, ECM y sistemas corporativos',
      'Reduce errores manuales y acelera tiempos de respuesta operativa',
    ],
  },
  {
    Icon: Eye,
    name: 'natif.ai',
    brand: 'natif.ai', brandColor: '#4338CA', brandDark: '#3730A3', rgb: '67,56,202',
    slug: 'natif-ai',
    image: '/products/software/natif-logo.png',
    tagline: 'Procesamiento Inteligente de Documentos con IA.',
    description: 'Plataforma IDP que utiliza inteligencia artificial avanzada para capturar, clasificar y extraer información de documentos empresariales con alta precisión, independientemente del formato o estructura del documento.',
    features: [
      'Extracción inteligente de datos en documentos estructurados y no estructurados',
      'Aprendizaje continuo para mejorar la precisión automáticamente',
      'Integración con SAP, Oracle, Microsoft Dynamics 365 y SharePoint',
      'Ideal para Gobierno, Salud, Banca, Seguros y Empresas',
    ],
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

export default function AutomatizacionCaptura() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Automatización de Captura"
          subtitle="Del papel al dato estructurado en segundos — sin intervención manual, con precisión de nivel industrial."
          breadcrumbs={[{ label: 'Software y Soluciones', href: '/software/automatizacion-de-captura' }, { label: 'Automatización de Captura' }]}
        />

        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0 100px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div aria-hidden style={{
            position: 'absolute', top: -100, right: -100, width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 68%)',
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
                  {/* Left */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' as const }}>
                      <SoftwareImage src={s.image} logoText={s.logoText} name={s.name} Icon={s.Icon} brandColor={s.brandColor} rgb={s.rgb} />
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
                    <p style={{ fontSize: 14, color: s.brandColor, fontWeight: 600, marginBottom: 12 }}>
                      {s.tagline}
                    </p>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.72, marginBottom: 20 }}>
                      {s.description}
                    </p>
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

                  {/* Right: features */}
                  <div style={{
                    background: '#f8faff', borderRadius: 14,
                    border: '1px solid rgba(37,99,235,0.08)',
                    padding: '24px',
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
