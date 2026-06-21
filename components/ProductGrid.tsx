'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, Eye, Code, type LucideIcon } from 'lucide-react'

interface Card {
  num: string
  Icon: LucideIcon
  title: string
  body: string
  color: string
  bgTint: string
}

const cards: Card[] = [
  {
    num: '01',
    Icon: Zap,
    title: 'De semanas a segundos.',
    body: 'Reducimos los tiempos de procesamiento documental mediante escáneres de alto rendimiento y OCR de alta precisión.',
    color: '#2563eb',
    bgTint: 'rgba(37,99,235,0.05)',
  },
  {
    num: '02',
    Icon: Target,
    title: '99% de exactitud.',
    body: 'Captura y extrae datos críticos sin error humano. Clasificación automática y metadatos inteligentes desde el primer día.',
    color: '#7c3aed',
    bgTint: 'rgba(124,58,237,0.05)',
  },
  {
    num: '03',
    Icon: Eye,
    title: 'Visibilidad total.',
    body: 'Control de versiones, auditoría completa e integración con ERP, CRM y Office 365 en un solo ecosistema.',
    color: '#0891b2',
    bgTint: 'rgba(8,145,178,0.05)',
  },
  {
    num: '04',
    Icon: Code,
    title: '0 código necesario.',
    body: 'Con Kintone creamos aplicaciones empresariales sin escribir código. De meses a días en implementación.',
    color: '#059669',
    bgTint: 'rgba(5,150,105,0.05)',
  },
]

export default function ProductGrid() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient top glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(219,234,254,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: '#2563eb' }}>
            Por qué AbbaCore
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
            }}
          >
            Resultados que cambian empresas.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              className="relative rounded-2xl overflow-hidden flex flex-col p-7"
              style={{
                minHeight: 320,
                background: '#ffffff',
                border: `1.5px solid ${card.color}18`,
                boxShadow: `0 4px 20px ${card.color}08`,
              }}
              initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                boxShadow: `0 16px 48px ${card.color}18, 0 0 0 1.5px ${card.color}30`,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {/* Ghost number */}
              <div
                className="absolute bottom-3 right-5 select-none pointer-events-none leading-none"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: 90,
                  fontWeight: 900,
                  color: card.color,
                  opacity: 0.04,
                  lineHeight: 1,
                }}
              >
                {card.num}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-auto">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
                  style={{
                    background: card.bgTint,
                    border: `1px solid ${card.color}20`,
                    boxShadow: `0 0 20px ${card.color}10`,
                  }}
                >
                  <card.Icon size={20} style={{ color: card.color }} strokeWidth={2} />
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3
                  className="mb-3 leading-snug"
                  style={{
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#64748b' }}>
                  {card.body}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-7 right-7 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}40, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
