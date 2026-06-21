'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type Partner = {
  id:          string
  label:       string
  hoverColor:  string          // text + badge color on hover
  hoverBorder: string          // inset border rgba
  hoverShadow: string          // drop-shadow rgba
  hoverGlow:   string          // text-shadow rgba
  dotColor:    string          // primary dot rgba
  dotColor2?:  string          // optional 2nd dot layer (Kodak red+orange)
  bloomColor:  string          // radial vignette rgba
}

const PARTNERS: Partner[] = [
  {
    id: 'kodak', label: 'Kodak',
    hoverColor:  '#CC0000',
    hoverBorder: 'rgba(204,0,0,0.35)',
    hoverShadow: 'rgba(204,0,0,0.15)',
    hoverGlow:   'rgba(204,0,0,0.26)',
    dotColor:    'rgba(204,0,0,0.18)',
    dotColor2:   'rgba(255,69,0,0.12)',   // orange offset layer
    bloomColor:  'rgba(204,0,0,0.07)',
  },
  {
    id: 'asus', label: 'ASUS',
    hoverColor:  '#00247D',
    hoverBorder: 'rgba(0,36,125,0.35)',
    hoverShadow: 'rgba(0,36,125,0.14)',
    hoverGlow:   'rgba(0,36,125,0.22)',
    dotColor:    'rgba(0,36,125,0.14)',
    bloomColor:  'rgba(0,36,125,0.06)',
  },
  {
    id: 'epson', label: 'Epson',
    hoverColor:  '#2563eb',
    hoverBorder: 'rgba(37,99,235,0.32)',
    hoverShadow: 'rgba(29,78,216,0.14)',
    hoverGlow:   'rgba(37,99,235,0.28)',
    dotColor:    'rgba(37,99,235,0.14)',
    bloomColor:  'rgba(37,99,235,0.07)',
  },
  {
    id: 'laserfiche', label: 'Laserfiche',
    hoverColor:  '#FF6600',
    hoverBorder: 'rgba(255,102,0,0.35)',
    hoverShadow: 'rgba(255,102,0,0.14)',
    hoverGlow:   'rgba(255,102,0,0.26)',
    dotColor:    'rgba(255,102,0,0.16)',
    bloomColor:  'rgba(255,102,0,0.06)',
  },
  {
    id: 'ricoh', label: 'RICOH',
    hoverColor:  '#CC0000',
    hoverBorder: 'rgba(204,0,0,0.35)',
    hoverShadow: 'rgba(204,0,0,0.15)',
    hoverGlow:   'rgba(204,0,0,0.26)',
    dotColor:    'rgba(204,0,0,0.16)',
    bloomColor:  'rgba(204,0,0,0.06)',
  },
  {
    id: 'kintone', label: 'kintone',
    hoverColor:  '#FF4500',
    hoverBorder: 'rgba(255,69,0,0.35)',
    hoverShadow: 'rgba(255,69,0,0.15)',
    hoverGlow:   'rgba(255,69,0,0.26)',
    dotColor:    'rgba(255,69,0,0.16)',
    bloomColor:  'rgba(255,69,0,0.06)',
  },
  {
    id: 'brother', label: 'Brother',
    hoverColor:  '#0072CE',
    hoverBorder: 'rgba(0,114,206,0.35)',
    hoverShadow: 'rgba(0,114,206,0.15)',
    hoverGlow:   'rgba(0,114,206,0.30)',
    dotColor:    'rgba(0,114,206,0.14)',
    bloomColor:  'rgba(0,114,206,0.07)',
  },
]

const LOGO_STYLE = {
  fontFamily:    'var(--font-montserrat), sans-serif',
  fontWeight:    700,
  fontSize:      18,
  letterSpacing: '0.04em',
  lineHeight:    1,
  textTransform: 'uppercase' as const,
  userSelect:    'none'       as const,
}

const CARD_H = 108

function PartnerCard({
  partner, inView, delay,
}: {
  partner: Partner
  inView:  boolean
  delay:   number
}) {
  const [hovered, setHovered] = useState(false)

  const dotBg = partner.dotColor2
    // Kodak: interleaved red + orange dots at 7px offset
    ? `radial-gradient(circle, ${partner.dotColor} 1px, transparent 1px),
       radial-gradient(circle, ${partner.dotColor2} 1px, transparent 1px)`
    : `radial-gradient(circle, ${partner.dotColor} 1px, transparent 1px)`

  const dotSize = partner.dotColor2
    ? '14px 14px, 14px 14px'
    : '14px 14px'

  const dotPos = partner.dotColor2
    ? '0 0, 7px 7px'
    : '0 0'

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ flex: '1 1 0', minWidth: 0 }}
    >
      <motion.div
        animate={{
          backgroundColor: hovered ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.00)',
          boxShadow: hovered
            ? [
                `inset 0 0 0 1px ${partner.hoverBorder}`,
                `0 8px 32px ${partner.hoverShadow}`,
                `0 2px 8px ${partner.hoverShadow}`,
              ].join(', ')
            : 'inset 0 0 0 1px rgba(13,15,20,0.10)',
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position:       'relative',
          height:          CARD_H,
          borderRadius:    10,
          overflow:        'hidden',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          gap:             10,
          cursor:          'default',
        }}
      >
        {/* Dot grid — brand-colored, optional dual layer */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.30 }}
          aria-hidden
          style={{
            position:        'absolute', inset: 0,
            backgroundImage: dotBg,
            backgroundSize:  dotSize,
            backgroundPosition: dotPos,
            pointerEvents:   'none',
          }}
        />

        {/* Radial bloom — brand color, soft on white */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.30 }}
          aria-hidden
          style={{
            position:   'absolute', inset: 0,
            background: `radial-gradient(ellipse at 50% 40%, ${partner.bloomColor} 0%, transparent 72%)`,
            pointerEvents: 'none',
          }}
        />

        {/* Logo text */}
        <motion.span
          animate={{
            color:      hovered ? partner.hoverColor : '#0d0f14',
            textShadow: hovered
              ? `0 0 18px ${partner.hoverGlow}, 0 0 36px ${partner.hoverGlow}`
              : 'none',
          }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1, ...LOGO_STYLE }}
        >
          {partner.label}
        </motion.span>

        {/* Badge */}
        <motion.span
          animate={{
            opacity: hovered ? 1 : 0,
            y:       hovered ? 0 : 6,
            color:   partner.hoverColor,
          }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          style={{
            position:      'relative', zIndex: 1,
            fontFamily:    'var(--font-montserrat), sans-serif',
            fontSize:      7.5, fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            opacity:       0,
            whiteSpace:    'nowrap',
          }}
        >
          Partner Certificado
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default function PartnersSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{
      position: 'relative',
      padding:  '56px 0 64px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 35%, #e8f0ff 65%, #f5f8ff 100%)',
      overflow:  'hidden',
    }}>
      {/* Top rule */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.18) 30%,rgba(37,99,235,0.26) 50%,rgba(37,99,235,0.18) 70%,transparent)',
      }} />

      {/* Bottom rule */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.12) 30%,rgba(37,99,235,0.18) 50%,rgba(37,99,235,0.12) 70%,transparent)',
      }} />

      {/* Section-wide dot texture */}
      <div aria-hidden style={{
        position:        'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)',
        backgroundSize:  '32px 32px',
      }} />

      <div ref={ref} style={{
        position: 'relative',
        maxWidth: 1160, margin: '0 auto', padding: '0 40px',
      }}>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textAlign: 'center', marginBottom: 32,
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase' as const,
            color: 'rgba(13,15,20,0.32)',
          }}
        >
          Tecnología respaldada por
        </motion.p>

        <div style={{ display: 'flex', gap: 8 }}>
          {PARTNERS.map((p, i) => (
            <PartnerCard
              key={p.id}
              partner={p}
              inView={inView}
              delay={0.06 + i * 0.07}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
