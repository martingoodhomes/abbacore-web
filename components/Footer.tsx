'use client'
import { type CSSProperties } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageCircle, Phone } from 'lucide-react'

const solutions = [
  { label: 'Captura y Digitalización', href: '/productos/digitalizacion-documental' },
  { label: 'ECM Empresarial',          href: '/software/gestion-documental' },
  { label: 'Automatización No-Code',   href: '/automatizacion' },
  { label: 'CRM y Apps a la Medida',   href: '/crm-apps' },
]
const company = [
  { label: 'Nosotros',  href: '/nosotros' },
  { label: 'Contacto',  href: '/contacto' },
  { label: 'Partners',  href: '/nosotros' },
]
const contact = [
  { Icon: Mail,          label: 'andres.casasbuenas@abba-core.com', href: 'mailto:andres.casasbuenas@abba-core.com' },
  { Icon: MessageCircle, label: '+57 316 538 3437',                 href: 'https://wa.me/573165383437' },
  { Icon: Phone,         label: '+57 301 200 5752',                 href: 'tel:+573012005752' },
]

const linkStyle: CSSProperties = {
  fontSize: 14,
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color .2s',
  lineHeight: 1,
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2563eb'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94a3b8'}
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(37,99,235,0.08)',
        padding: '72px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 48,
            paddingBottom: 60,
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image
                src="/images/Logo 1.png"
                alt="AbbaCore"
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
              />
              <span style={{
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                fontWeight: 900, fontSize: 15,
                color: '#0f172a',
                letterSpacing: '-0.01em',
              }}>
                AbbaCore
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7, maxWidth: 220 }}>
              La plataforma que transforma operaciones empresariales en Colombia.
            </p>
            {/* Social / accent bar */}
            <div style={{
              width: 32, height: 3, borderRadius: 100,
              background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
              marginTop: 4,
            }} />
          </div>

          {/* Solutions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
              color: '#cbd5e1', textTransform: 'uppercase', marginBottom: 4,
            }}>
              Soluciones
            </p>
            {solutions.map(s => (
              <NavLink key={s.href} href={s.href}>{s.label}</NavLink>
            ))}
          </div>

          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
              color: '#cbd5e1', textTransform: 'uppercase', marginBottom: 4,
            }}>
              Empresa
            </p>
            {company.map(c => (
              <NavLink key={c.href} href={c.href}>{c.label}</NavLink>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
              color: '#cbd5e1', textTransform: 'uppercase', marginBottom: 4,
            }}>
              Contacto
            </p>
            {contact.map(c => (
              <Link
                key={c.href}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 13, color: '#94a3b8',
                  textDecoration: 'none', transition: 'color .2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2563eb'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94a3b8'}
              >
                <c.Icon size={14} strokeWidth={1.8} style={{ flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {c.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(37,99,235,0.08)',
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: 12, color: '#cbd5e1' }}>
            © {new Date().getFullYear()} AbbaCore. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Privacidad', href: '#' },
              { label: 'Términos',   href: '#' },
              { label: 'Seguridad',  href: '#' },
            ].map(item => (
              <Link
                key={item.label}
                href={item.href}
                style={{ fontSize: 12, color: '#cbd5e1', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2563eb'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#cbd5e1'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
