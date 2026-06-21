'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb { label: string; href?: string }
interface PageHeroProps {
  title: string
  titleHighlight?: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHero({ title, titleHighlight, subtitle, breadcrumbs }: PageHeroProps) {
  const renderTitle = () => {
    if (!titleHighlight || !title.includes(titleHighlight)) return <>{title}</>
    const idx = title.indexOf(titleHighlight)
    return (
      <>
        {title.slice(0, idx)}
        <span style={{ color: '#2563eb' }}>{titleHighlight}</span>
        {title.slice(idx + titleHighlight.length)}
      </>
    )
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid rgba(37,99,235,0.08)',
        paddingTop: 128,
        paddingBottom: 72,
        textAlign: 'center',
      }}
    >
      {/* Faint dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(37,99,235,0.10) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        opacity: 0.35,
      }} />

      {/* Central radial glow */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-[860px] mx-auto px-6 md:px-10">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            className="flex items-center justify-center gap-1.5 mb-6 flex-wrap"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.40, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/"
              className="text-[11px] font-semibold uppercase tracking-widest transition-colors hover:text-[#2563eb]"
              style={{ color: '#b0bec5' }}>
              Inicio
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={10} style={{ color: '#cfd8dc' }} />
                {crumb.href ? (
                  <Link href={crumb.href}
                    className="text-[11px] font-semibold uppercase tracking-widest transition-colors hover:text-[#2563eb]"
                    style={{ color: '#b0bec5' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: '#b0bec5' }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Overline divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ height: 1, width: 48, background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.30))' }} />
          <span style={{
            fontSize: 10, fontWeight: 800, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#2563eb',
            fontFamily: 'var(--font-montserrat)',
          }}>
            AbbaCore
          </span>
          <div style={{ height: 1, width: 48, background: 'linear-gradient(to left, transparent, rgba(37,99,235,0.30))' }} />
        </motion.div>

        {/* Title */}
        <motion.h1
          style={{
            fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
            fontSize: 'clamp(34px, 5.2vw, 64px)',
            fontWeight: 800,
            color: '#0a0f1e',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: subtitle ? 20 : 0,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.60, delay: 0.10, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTitle()}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            style={{
              fontSize: 17,
              color: '#64748b',
              lineHeight: 1.72,
              maxWidth: 600,
              margin: '0 auto',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.20, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Bottom rule */}
        <motion.div
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.14), transparent)', marginTop: 40 }}
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.70, delay: 0.30, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  )
}
