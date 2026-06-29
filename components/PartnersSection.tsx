'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

type Partner = {
  id:          string
  label:       string
  logo:        string
  logoWidth:   number
  logoHeight:  number
  hoverBorder: string
  hoverShadow: string
  bloomColor:  string
  filterOnHover?: string
}

const PARTNERS: Partner[] = [
  {
    id: 'kodak', label: 'Kodak Alaris',
    logo: '/products/software/kodak-alaris-logo.png',
    logoWidth: 130, logoHeight: 48,
    hoverBorder: 'rgba(204,0,0,0.30)',
    hoverShadow: 'rgba(204,0,0,0.12)',
    bloomColor:  'rgba(204,0,0,0.06)',
  },
  {
    id: 'asus', label: 'ASUS',
    logo: '/images/partners/asus-logo.svg',
    logoWidth: 120, logoHeight: 40,
    hoverBorder: 'rgba(0,36,125,0.30)',
    hoverShadow: 'rgba(0,36,125,0.10)',
    bloomColor:  'rgba(0,36,125,0.05)',
  },
  {
    id: 'epson', label: 'Epson',
    logo: '/products/software/epson-logo.svg',
    logoWidth: 120, logoHeight: 44,
    hoverBorder: 'rgba(37,99,235,0.30)',
    hoverShadow: 'rgba(29,78,216,0.12)',
    bloomColor:  'rgba(37,99,235,0.06)',
  },
  {
    id: 'laserfiche', label: 'Laserfiche',
    logo: '/products/software/laserfiche-logo.png',
    logoWidth: 130, logoHeight: 40,
    hoverBorder: 'rgba(255,102,0,0.30)',
    hoverShadow: 'rgba(255,102,0,0.12)',
    bloomColor:  'rgba(255,102,0,0.05)',
  },
  {
    id: 'ricoh', label: 'RICOH',
    logo: '/products/software/ricoh-logo.svg',
    logoWidth: 110, logoHeight: 44,
    hoverBorder: 'rgba(204,0,0,0.30)',
    hoverShadow: 'rgba(204,0,0,0.12)',
    bloomColor:  'rgba(204,0,0,0.05)',
  },
  {
    id: 'kintone', label: 'kintone',
    logo: '/products/software/kintone-logo.svg',
    logoWidth: 120, logoHeight: 40,
    hoverBorder: 'rgba(255,69,0,0.30)',
    hoverShadow: 'rgba(255,69,0,0.12)',
    bloomColor:  'rgba(255,69,0,0.05)',
  },
  {
    id: 'brother', label: 'Brother',
    logo: '/images/partners/brother-logo.svg',
    logoWidth: 130, logoHeight: 40,
    hoverBorder: 'rgba(0,114,206,0.30)',
    hoverShadow: 'rgba(0,114,206,0.12)',
    bloomColor:  'rgba(0,114,206,0.06)',
  },
]

const CARD_H = 108

function PartnerCard({
  partner, inView, delay,
}: {
  partner: Partner
  inView:  boolean
  delay:   number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ minWidth: 0 }}
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
          position:      'relative',
          height:         CARD_H,
          borderRadius:   10,
          overflow:       'hidden',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          cursor:         'default',
          padding:        '12px 16px',
        }}
      >
        {/* Radial bloom */}
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

        {/* Logo image */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0.55, scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            src={partner.logo}
            alt={partner.label}
            width={partner.logoWidth}
            height={partner.logoHeight}
            style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: 56 }}
            unoptimized
          />
        </motion.div>
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

      {/* Dot texture */}
      <div aria-hidden style={{
        position:        'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)',
        backgroundSize:  '32px 32px',
      }} />

      <div ref={ref} style={{
        position: 'relative',
        maxWidth: 1160, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)',
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7" style={{ gap: 8 }}>
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
