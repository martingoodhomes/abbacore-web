'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X, Search, ScanLine, Printer, Monitor } from 'lucide-react'

type MegaKey = 'productos' | 'software' | null

interface NavColumn {
  title: string
  href: string
  Icon: React.ComponentType<any> // eslint-disable-line
  items: { label: string; href: string }[]
  desc?: string
}

const productosNav: NavColumn[] = [
  {
    title: 'Escáneres', href: '/productos/escaneres', Icon: ScanLine,
    items: [
      { label: 'Portátiles',       href: '/productos/escaneres#portatiles' },
      { label: 'Grupo de Trabajo', href: '/productos/escaneres#grupo-de-trabajo' },
      { label: 'Producción',       href: '/productos/escaneres#produccion' },
    ],
  },
  {
    title: 'Impresoras', href: '/productos/impresoras', Icon: Printer,
    items: [
      { label: 'Inyección Heat Free', href: '/productos/impresoras#heat-free' },
      { label: 'Láser',               href: '/productos/impresoras#laser' },
      { label: 'POS',                  href: '/productos/impresoras#pos' },
      { label: 'Etiquetas',            href: '/productos/impresoras#etiquetas' },
    ],
  },
  {
    title: 'Equipos de Cómputo', href: '/productos/equipos-de-computo', Icon: Monitor,
    items: [],
    desc: 'Portafolio Asus para empresas: laptops, desktops y workstations certificados.',
  },
]

const softwareNav = [
  { title: 'Automatización de Captura',        href: '/software/automatizacion-de-captura',        desc: 'OCR inteligente, clasificación y extracción de datos.' },
  { title: 'Gestión de Contenido Empresarial', href: '/software/gestion-de-contenido-empresarial', desc: 'ECM: archiva, organiza y controla documentos.' },
  { title: 'Gestión de Calidad',               href: '/software/gestion-de-calidad',               desc: 'QMS para industrias reguladas — FDA · ISO.' },
  { title: 'Kitchen Display Systems',          href: '/software/kitchen-display-systems',          desc: 'Pantallas inteligentes para cocinas de restaurante.' },
  { title: 'Automatización No-Code',           href: '/software/automatizacion-no-code',           desc: 'Apps personalizadas sin una línea de código.' },
]

function AbbaCoreMark({ onDark }: { onDark: boolean }) {
  const a = onDark ? '#ffffff' : '#0d0f14'
  const d = onDark ? '#60a5fa' : '#2563eb'
  return (
    <svg width="27" height="26" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/*
        Clockwise path traces full A silhouette:
        - Q32,0 → 32,8   rounded top-left cap corner
        - L 0,90          left outer leg (straight)
        - Q0,95 → 6,95   rounded outer bottom-left
        - L 35,95         left leg bottom edge
        - L 50,14         left inner edge up to V point (inner opening starts here)
        - L 65,95         right inner edge back down
        - L 94,95         right leg bottom edge
        - Q100,95→100,90  rounded outer bottom-right
        - L 68,8          right outer leg (straight)
        - Q68,0 → 58,0   rounded top-right cap corner
        - Z               closes across flat top cap (58→42, 16 units)
      */}
      <path
        d="M42 0 Q32 0 32 8 L0 90 Q0 95 6 95 L35 95 L50 14 L65 95 L94 95 Q100 95 100 90 L68 8 Q68 0 58 0 Z"
        style={{ fill: a, transition: 'fill 0.3s' }}
      />
      <polygon
        points="50,46 59,64 50,84 41,64"
        style={{ fill: d, transition: 'fill 0.3s' }}
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [megaOpen,       setMegaOpen]       = useState<MegaKey>(null)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileProdOpen, setMobileProdOpen] = useState(false)
  const [mobileSoftOpen, setMobileSoftOpen] = useState(false)
  const [searchOpen,     setSearchOpen]     = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const pathname  = usePathname()

  useEffect(() => { setMobileOpen(false); setMegaOpen(null); setSearchOpen(false) }, [pathname])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { if (searchOpen) searchRef.current?.focus() }, [searchOpen])
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setSearchOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const onDark = pathname.startsWith('/soluciones/') && !scrolled && !megaOpen && !mobileOpen

  const navBg  = scrolled || megaOpen || mobileOpen ? 'liquid-glass-navbar' : 'bg-transparent'
  const lnkCls = (active: boolean) =>
    `font-label-bold text-label-bold flex items-center gap-1 pb-0.5 transition-colors relative ${
      active
        ? (onDark ? 'text-[#60a5fa]' : 'text-[#2563eb]')
        : (onDark ? 'text-white hover:text-[#60a5fa]' : 'text-on-surface-variant hover:text-[#2563eb]')
    }`
  const lnkPlain = onDark
    ? 'font-label-bold text-label-bold transition-colors text-white hover:text-[#60a5fa]'
    : 'font-label-bold text-label-bold transition-colors text-on-surface-variant hover:text-[#2563eb]'

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}
      onMouseLeave={() => setMegaOpen(null)}
    >
      {/* ── Top bar ── */}
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-[1200px] mx-auto">

        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/ST.png"
            alt="AbbaCore"
            style={{
              height: 168,
              width: 'auto',
              display: 'block',
              transform: 'translateX(4px) translateY(6px)',
              filter: onDark ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">

          {/* Productos */}
          <button className={lnkCls(megaOpen === 'productos')} onMouseEnter={() => setMegaOpen('productos')}>
            Productos
            <motion.span className="flex items-center" animate={{ rotate: megaOpen === 'productos' ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} strokeWidth={2.5} />
            </motion.span>
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#2563eb] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: megaOpen === 'productos' ? '100%' : 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>

          {/* Software y Soluciones */}
          <button className={lnkCls(megaOpen === 'software')} onMouseEnter={() => setMegaOpen('software')}>
            Software y Soluciones
            <motion.span className="flex items-center" animate={{ rotate: megaOpen === 'software' ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} strokeWidth={2.5} />
            </motion.span>
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#2563eb] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: megaOpen === 'software' ? '100%' : 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>

          <Link href="/nosotros" className={lnkPlain} onMouseEnter={() => setMegaOpen(null)}>
            Nosotros
          </Link>
          <Link href="/contacto" className={lnkPlain} onMouseEnter={() => setMegaOpen(null)}>
            Contacto
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {searchOpen ? (
                <motion.div
                  key="bar"
                  className="flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{
                    backdropFilter: 'blur(12px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.45)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.5)',
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 210, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Search size={14} className="text-on-surface-variant flex-shrink-0" />
                  <input
                    ref={searchRef} type="text" placeholder="Buscar..."
                    className="bg-transparent outline-none text-[13px] text-on-surface placeholder:text-on-surface-variant w-full min-w-0"
                    onBlur={() => setSearchOpen(false)}
                  />
                </motion.div>
              ) : (
                <motion.button
                  key="icon"
                  className={`p-2 transition-colors ${onDark ? 'text-white hover:text-[#60a5fa]' : 'text-on-surface-variant hover:text-[#2563eb]'}`}
                  onClick={() => setSearchOpen(true)}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  aria-label="Buscar"
                >
                  <Search size={18} strokeWidth={2} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contacto" className="bg-[#2563eb] text-white font-label-bold text-label-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
              Empieza Ahora
            </Link>
          </motion.div>

          <button
            className={`md:hidden p-2 transition-colors ${onDark ? 'text-white' : 'text-on-surface-variant'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mega menus ── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 liquid-glass-mega border-t-[3px] border-[#2563eb]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setMegaOpen(megaOpen)}
          >
            <div className="max-w-[1200px] mx-auto px-margin-desktop py-10">

              {megaOpen === 'productos' && (
                <div className="grid grid-cols-3 gap-10">
                  {productosNav.map((col) => (
                    <div key={col.href}>
                      <Link
                        href={col.href}
                        className="inline-flex items-center gap-2 font-bold text-[#2563eb] text-[12px] uppercase tracking-widest mb-5 hover:opacity-70 transition-opacity"
                        onClick={() => setMegaOpen(null)}
                      >
                        <col.Icon size={13} strokeWidth={2.2} />
                        {col.title}
                      </Link>
                      {col.items.length > 0 ? (
                        <ul className="space-y-3">
                          {col.items.map(item => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-1.5 text-[13px] text-on-surface-variant hover:text-[#2563eb] transition-colors group"
                                onClick={() => setMegaOpen(null)}
                              >
                                <ChevronRight size={11} className="text-[#2563eb]/40 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : col.desc && (
                        <p className="text-[13px] text-on-surface-variant leading-relaxed">{col.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {megaOpen === 'software' && (
                <div className="grid grid-cols-2 gap-2">
                  {softwareNav.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col gap-1 p-3.5 rounded-xl hover:bg-[#f0f4ff] transition-colors group cursor-pointer"
                      onClick={() => setMegaOpen(null)}
                    >
                      <span className="font-semibold text-[13.5px] text-on-surface group-hover:text-[#2563eb] transition-colors flex items-center gap-1.5">
                        {item.title}
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2563eb]" />
                      </span>
                      <span className="text-[12px] text-on-surface-variant leading-relaxed">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-surface border-t border-outline-variant/20 shadow-xl md:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-margin-mobile py-4">

              {/* Productos accordion */}
              <button
                className="w-full flex items-center justify-between py-3.5 font-label-bold text-label-bold text-on-surface border-b border-outline-variant/10"
                onClick={() => setMobileProdOpen(!mobileProdOpen)}
              >
                Productos
                <motion.span animate={{ rotate: mobileProdOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={17} />
                </motion.span>
              </button>
              <AnimatePresence>
                {mobileProdOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 pb-2 pl-3 space-y-4 border-b border-outline-variant/10">
                      {productosNav.map(col => (
                        <div key={col.href}>
                          <Link href={col.href} className="block font-bold text-[#2563eb] text-[12px] uppercase tracking-widest mb-2" onClick={() => setMobileOpen(false)}>
                            {col.title}
                          </Link>
                          {col.items.length > 0 && (
                            <ul className="pl-3 space-y-2">
                              {col.items.map(item => (
                                <li key={item.href}>
                                  <Link href={item.href} className="text-[13px] text-on-surface-variant" onClick={() => setMobileOpen(false)}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Software accordion */}
              <button
                className="w-full flex items-center justify-between py-3.5 font-label-bold text-label-bold text-on-surface border-b border-outline-variant/10"
                onClick={() => setMobileSoftOpen(!mobileSoftOpen)}
              >
                Software y Soluciones
                <motion.span animate={{ rotate: mobileSoftOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={17} />
                </motion.span>
              </button>
              <AnimatePresence>
                {mobileSoftOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 pb-2 pl-3 space-y-2 border-b border-outline-variant/10">
                      {softwareNav.map(item => (
                        <Link key={item.href} href={item.href} className="block font-semibold text-on-surface text-[13px] py-1" onClick={() => setMobileOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/nosotros" className="block py-3.5 font-label-bold text-label-bold text-on-surface border-b border-outline-variant/10" onClick={() => setMobileOpen(false)}>
                Nosotros
              </Link>
              <Link href="/contacto" className="block py-3.5 font-label-bold text-label-bold text-on-surface border-b border-outline-variant/10" onClick={() => setMobileOpen(false)}>
                Contacto
              </Link>
              <div className="pt-4 pb-2">
                <Link href="/contacto" className="block w-full text-center bg-[#2563eb] text-white font-label-bold text-label-bold px-6 py-3 rounded-full" onClick={() => setMobileOpen(false)}>
                  Empieza Ahora
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
