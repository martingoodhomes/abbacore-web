'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Zap, GitMerge, Lock, Globe, Headphones } from 'lucide-react'

const FEATURES = [
  {
    Icon: ShieldCheck,
    color: '#16a34a',
    title: 'Cumplimiento regulatorio',
    desc: 'Auditoría completa y retención según normativas colombianas e internacionales.',
  },
  {
    Icon: Zap,
    color: '#d97706',
    title: 'Implementación rápida',
    desc: 'De la firma al primer uso en semanas, no meses. Metodología probada en 500+ empresas.',
  },
  {
    Icon: GitMerge,
    color: '#2563eb',
    title: 'Integración nativa',
    desc: 'SAP, Oracle, Salesforce, Office 365 — conectados via API REST sin fricción.',
  },
  {
    Icon: Lock,
    color: '#dc2626',
    title: 'Seguridad empresarial',
    desc: 'Cifrado en reposo y tránsito, MFA, y control de acceso granular por usuario.',
  },
  {
    Icon: Globe,
    color: '#0284c7',
    title: 'Cloud o on-premise',
    desc: 'Despliega donde necesites. Arquitectura híbrida disponible para entornos regulados.',
  },
  {
    Icon: Headphones,
    color: '#7c3aed',
    title: 'Soporte local en Colombia',
    desc: 'Equipo en Bogotá. Respuesta en horas, no días. Capacitación incluida.',
  },
]

function FeatureRow({ feat, index }: { feat: typeof FEATURES[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 11, flexShrink: 0,
        background: `${feat.color}0f`,
        border: `1px solid ${feat.color}22`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 2,
      }}>
        <feat.Icon size={18} strokeWidth={1.7} style={{ color: feat.color }} />
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          fontSize: 15, fontWeight: 800,
          color: '#0f172a', letterSpacing: '-0.01em',
          marginBottom: 6,
        }}>
          {feat.title}
        </h3>
        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>
          {feat.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyAbbaCore() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section style={{ background: '#ffffff', padding: '112px 0 120px' }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 80 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              color: '#2563eb', marginBottom: 20, textTransform: 'uppercase',
            }}
          >
            Por qué AbbaCore
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05,
              color: '#0f172a', maxWidth: 520,
            }}
          >
            Construido para empresas que no aceptan mediocridad.
          </motion.h2>
        </div>

        {/* 3-column feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '48px 56px',
        }}>
          {FEATURES.map((feat, i) => (
            <FeatureRow key={feat.title} feat={feat} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
