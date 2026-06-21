'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import { ScanLine, BrainCircuit, GitBranch, Plug } from 'lucide-react'

const GLASS: CSSProperties = {
  background: 'linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(245,249,255,0.88) 100%)',
  backdropFilter: 'blur(24px) saturate(180%) brightness(1.02)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(1.02)',
  border: '1px solid rgba(255,255,255,0.92)',
  borderTop: '1px solid rgba(255,255,255,0.99)',
  boxShadow: '0 4px 28px rgba(37,99,235,0.06), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.96)',
  borderRadius: 20,
  overflow: 'hidden',
  position: 'relative',
}

const STEPS = [
  {
    num: '01',
    Icon: ScanLine,
    title: 'Captura',
    desc: 'Documentos físicos o digitales son capturados por escáneres de alta velocidad con precisión OCR del 99.8%.',
    color: '#2563eb',
  },
  {
    num: '02',
    Icon: BrainCircuit,
    title: 'Clasificación',
    desc: 'El motor de IA clasifica, indexa y enruta cada documento al repositorio correcto en tiempo real.',
    color: '#7c3aed',
  },
  {
    num: '03',
    Icon: GitBranch,
    title: 'Automatización',
    desc: 'Flujos de aprobación, notificaciones y reglas de negocio se ejecutan sin intervención humana.',
    color: '#059669',
  },
  {
    num: '04',
    Icon: Plug,
    title: 'Integración',
    desc: 'Los datos fluyen hacia tu ERP, CRM, SAP u Office 365 de forma transparente vía API REST.',
    color: '#d97706',
  },
]

const INTEGRATIONS = [
  'SAP', 'Salesforce', 'Office 365', 'SharePoint',
  'Power BI', 'API REST', 'Webhook', 'Oracle',
]

function StepCard({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{ ...GLASS, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 20, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
    >
      {/* Color accent top stripe */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${step.color}70, ${step.color}20)`,
        pointerEvents: 'none',
      }} />

      {/* Step number badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: `${step.color}10`,
          border: `1px solid ${step.color}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: step.color,
          boxShadow: `0 2px 16px ${step.color}18`,
        }}>
          <step.Icon size={22} strokeWidth={1.6} />
        </div>
        <span style={{
          fontFamily: '"Courier New", monospace',
          fontSize: 28, fontWeight: 800,
          color: `${step.color}20`,
          letterSpacing: '-0.02em', lineHeight: 1,
        }}>
          {step.num}
        </span>
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          fontSize: 18, fontWeight: 800,
          color: '#0f172a',
          marginBottom: 10, letterSpacing: '-0.015em',
        }}>
          {step.title}
        </h3>
        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75 }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function EcosystemSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const intRef = useRef<HTMLDivElement>(null)
  const intInView = useInView(intRef, { once: true, margin: '-40px' })

  return (
    <section style={{ background: '#f8faff', padding: '100px 0 112px', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle dot grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      {/* Fade overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,255,255,0.7) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12" style={{ position: 'relative' }}>
        {/* Header */}
        <div ref={headerRef} style={{ maxWidth: 580, marginBottom: 72 }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#2563eb', marginBottom: 20, textTransform: 'uppercase' }}
          >
            Cómo Funciona
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontWeight: 900, letterSpacing: '-0.028em',
              lineHeight: 1.08, marginBottom: 20, color: '#0f172a',
            }}
          >
            Del documento a la decisión{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              en cuatro pasos.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 15.5, color: '#64748b', lineHeight: 1.75 }}
          >
            Una arquitectura end-to-end que conecta captura, clasificación, automatización e integración en un flujo sin fisuras.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: 16,
          marginBottom: 72,
        }}>
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Integrations strip */}
        <div
          ref={intRef}
          style={{
            borderTop: '1px solid rgba(37,99,235,0.1)',
            paddingTop: 48,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={intInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
              color: '#94a3b8', marginBottom: 20, textTransform: 'uppercase',
            }}
          >
            Integra con tus herramientas existentes
          </motion.p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {INTEGRATIONS.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={intInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '7px 18px',
                  borderRadius: 100,
                  border: '1px solid rgba(37,99,235,0.14)',
                  fontSize: 13, fontWeight: 600,
                  color: '#475569',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(240,247,255,0.8) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 1px 4px rgba(37,99,235,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
