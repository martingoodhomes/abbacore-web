'use client'
import { motion } from 'framer-motion'
import { Bot, Brain, Search, Shield, Workflow, TrendingUp, ArrowRight, Check, Zap, BarChart2, Users, Lightbulb, ChevronRight, FileText, GitBranch, PieChart, BarChart } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

const C  = '#7B2FF7'
const CD = '#6A1FE0'
const R  = '123,47,247'

const features = [
  { Icon: Bot,        title: 'Captura automática multicanal',         desc: 'Ingesta documentos físicos y digitales desde escáneres, email, portales web, ERP y sistemas en la nube.' },
  { Icon: Brain,      title: 'Clasificación inteligente con IA',      desc: 'Identifica automáticamente el tipo y estructura del documento usando modelos de IA de última generación.' },
  { Icon: Search,     title: 'Extracción de datos clave',             desc: 'Localiza y extrae campos específicos de documentos complejos: fechas, montos, partes, números de referencia.' },
  { Icon: Shield,     title: 'Validación y control de calidad',       desc: 'Verifica la integridad y coherencia de los datos antes de distribuirlos a los sistemas destino.' },
  { Icon: Workflow,   title: 'Integración con sistemas corporativos', desc: 'Conecta con ERP, CRM, ECM y sistemas legados mediante APIs y conectores nativos.' },
  { Icon: TrendingUp, title: 'Analítica de operaciones documentales', desc: 'Dashboards de rendimiento que muestran volúmenes procesados, tiempos y tasas de precisión.' },
]

const useCases = [
  { sector: 'Industria y manufactura', desc: 'Procesamiento de órdenes de compra, facturas de proveedores y documentos de logística.' },
  { sector: 'Sector salud',            desc: 'Captura y extracción de datos de historias clínicas, órdenes médicas y registros de pacientes.' },
  { sector: 'Entidades financieras',   desc: 'Automatización del procesamiento de contratos, solicitudes de crédito y documentos KYC.' },
  { sector: 'Sector público',          desc: 'Gestión automatizada de trámites ciudadanos, expedientes y correspondencia oficial.' },
]

const benefits = [
  'Reduce errores y costos operativos en el procesamiento documental',
  'Acelera los tiempos de respuesta administrativa y regulatoria',
  'Mejora la precisión con aprendizaje continuo de cada documento',
  'Se adapta a cualquier tipo de documento sin programación',
  'Plataforma SaaS: sin infraestructura, actualizaciones automáticas',
]

const pills = [
  { Icon: Zap,       label: 'Más eficiencia' },
  { Icon: Shield,    label: 'Menos errores' },
  { Icon: Users,     label: 'Mejores experiencias' },
  { Icon: Lightbulb, label: 'Decisiones más inteligentes' },
]

const GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    `linear-gradient(rgba(${R},0.06) 1px, transparent 1px)`,
    `linear-gradient(90deg, rgba(${R},0.06) 1px, transparent 1px)`,
  ].join(','),
  backgroundSize: '60px 60px',
}

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.022) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.022) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function RIAPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', background: '#020b1d', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div style={GRID} />

          {/* purple glow left */}
          <div aria-hidden style={{
            position: 'absolute', top: '10%', left: '-8%', width: 600, height: 600,
            background: `radial-gradient(circle, rgba(${R},0.18) 0%, transparent 68%)`,
            pointerEvents: 'none',
          }} />
          {/* subtle glow right */}
          <div aria-hidden style={{
            position: 'absolute', bottom: '0%', right: '-5%', width: 500, height: 500,
            background: `radial-gradient(circle, rgba(${R},0.10) 0%, transparent 68%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '120px 40px 80px', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

              {/* ── LEFT: text ── */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.70, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* breadcrumb */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
                  <Link href="/" style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.40)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.10em' }}>Inicio</Link>
                  <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.25)' }} />
                  <Link href="/software/automatizacion-de-captura" style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.40)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.10em' }}>Automatización de Captura</Link>
                  <ChevronRight size={11} style={{ color: 'rgba(255,255,255,0.25)' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: `rgba(${R},0.90)`, textTransform: 'uppercase', letterSpacing: '0.10em' }}>RIA</span>
                </nav>

                {/* "Ria | Ricoh intelligent automation" header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}>
                  <span style={{
                    fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(52px, 6vw, 80px)',
                    fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em',
                    background: `linear-gradient(135deg, #C084FC, ${C})`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>
                    Ria
                  </span>
                  <div style={{ width: 1, height: 70, background: 'rgba(255,255,255,0.20)', flexShrink: 0 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.90)', lineHeight: 1.3, fontFamily: 'var(--font-montserrat)' }}>Ricoh</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.90)', lineHeight: 1.3, fontFamily: 'var(--font-montserrat)' }}>intelligent</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.90)', lineHeight: 1.3, fontFamily: 'var(--font-montserrat)' }}>automation</span>
                  </div>
                </div>

                {/* gradient tagline */}
                <h1 style={{
                  fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                  fontSize: 'clamp(24px, 3.2vw, 44px)', lineHeight: 1.15,
                  letterSpacing: '-0.025em', marginBottom: 20,
                  background: 'linear-gradient(90deg, #A78BFA 0%, #818CF8 40%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  Automatiza. Optimiza. Transforma.
                </h1>

                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, marginBottom: 32, maxWidth: 480 }}>
                  Ria es la solución de automatización inteligente de Ricoh que combina tecnología, innovación y conocimiento para liberar el potencial de tu negocio.
                </p>

                {/* feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
                  {pills.map(({ Icon, label }) => (
                    <span key={label} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: `rgba(${R},0.12)`, border: `1px solid rgba(${R},0.28)`,
                      color: '#C4B5FD', fontSize: 12, fontWeight: 600,
                      padding: '7px 14px', borderRadius: 9999,
                      fontFamily: 'var(--font-montserrat)',
                    }}>
                      <Icon size={12} strokeWidth={2.2} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/contacto" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: `linear-gradient(135deg, ${C}, ${CD})`,
                    color: '#ffffff', padding: '13px 26px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    boxShadow: `0 6px 28px rgba(${R},0.38)`,
                    fontFamily: 'var(--font-montserrat)',
                  }}>
                    Solicitar demo <ArrowRight size={15} strokeWidth={2.5} />
                  </Link>
                  <Link href="/contacto" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.80)',
                    padding: '13px 22px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 600, border: '1px solid rgba(255,255,255,0.14)',
                    textDecoration: 'none',
                  }}>
                    Contáctanos
                  </Link>
                </div>

                {/* closing line — from brochure */}
                <p style={{ marginTop: 40, fontSize: 14, color: 'rgba(255,255,255,0.40)', lineHeight: 1.6, maxWidth: 420 }}>
                  Simplificamos lo complejo.{' '}
                  <span style={{ color: '#C4B5FD', fontWeight: 600 }}>Impulsamos lo que importa.</span>
                </p>
              </motion.div>

              {/* ── RIGHT: robot ── */}
              {/* ── RIGHT: robot + floating icon cards ── */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 480 }}
              >
                {/* purple halo behind robot */}
                <div aria-hidden style={{
                  position: 'absolute', width: '70%', height: '70%',
                  background: `radial-gradient(ellipse, rgba(${R},0.22) 0%, transparent 70%)`,
                  borderRadius: '50%', filter: 'blur(48px)', zIndex: 0,
                }} />

                {/* floating card — upper-left: document */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{ opacity: { duration: 0.45, delay: 0.6 }, scale: { duration: 0.45, delay: 0.6 }, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0 } }}
                  style={{
                    position: 'absolute', top: '20%', left: '8%', zIndex: 3,
                    width: 64, height: 64, borderRadius: 18,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(14px)',
                    boxShadow: `0 6px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10), 0 0 16px rgba(${R},0.16)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <FileText size={26} strokeWidth={1.6} style={{ color: '#C4B5FD', filter: `drop-shadow(0 0 5px rgba(${R},0.55))` }} />
                </motion.div>

                {/* floating card — upper-right: workflow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{ opacity: { duration: 0.45, delay: 0.75 }, scale: { duration: 0.45, delay: 0.75 }, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }}
                  style={{
                    position: 'absolute', top: '20%', right: '8%', zIndex: 3,
                    width: 64, height: 64, borderRadius: 18,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(14px)',
                    boxShadow: `0 6px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10), 0 0 16px rgba(${R},0.16)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <GitBranch size={26} strokeWidth={1.6} style={{ color: '#A78BFA', filter: `drop-shadow(0 0 5px rgba(${R},0.50))` }} />
                </motion.div>

                {/* floating card — lower-left: bar chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{ opacity: { duration: 0.45, delay: 0.90 }, scale: { duration: 0.45, delay: 0.90 }, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2.4 } }}
                  style={{
                    position: 'absolute', bottom: '20%', left: '8%', zIndex: 3,
                    width: 64, height: 64, borderRadius: 18,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(14px)',
                    boxShadow: `0 6px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10), 0 0 16px rgba(${R},0.16)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <BarChart size={26} strokeWidth={1.6} style={{ color: '#93C5FD', filter: 'drop-shadow(0 0 5px rgba(147,197,253,0.50))' }} />
                </motion.div>

                {/* floating card — lower-right: pie chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{ opacity: { duration: 0.45, delay: 1.05 }, scale: { duration: 0.45, delay: 1.05 }, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 3.6 } }}
                  style={{
                    position: 'absolute', bottom: '20%', right: '8%', zIndex: 3,
                    width: 64, height: 64, borderRadius: 18,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(14px)',
                    boxShadow: `0 6px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.10), 0 0 16px rgba(${R},0.16)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <PieChart size={26} strokeWidth={1.6} style={{ color: '#C4B5FD', filter: `drop-shadow(0 0 5px rgba(${R},0.50))` }} />
                </motion.div>

                {/* robot */}
                <img
                  src="/products/software/ria-robot.png"
                  alt="Ria — Ricoh Intelligent Automation mascot"
                  style={{
                    width: '100%', maxWidth: 540,
                    position: 'relative', zIndex: 2,
                    margin: '0 auto', display: 'block',
                    mixBlendMode: 'screen',
                    filter: 'drop-shadow(0 0 40px rgba(123,47,247,0.30))',
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* bottom fade */}
          <div aria-hidden style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
            background: 'linear-gradient(to bottom, transparent, #020b1d)',
            pointerEvents: 'none',
          }} />
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{ background: '#0d0f14', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {[
                { value: 'IDP',   label: 'Plataforma de procesamiento inteligente' },
                { value: '70%',   label: 'Reducción en tiempos de procesamiento' },
                { value: 'SaaS',  label: 'Sin infraestructura, 100% en la nube' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.48, delay: i * 0.10 }}
                  style={{
                    padding: '36px 32px',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-montserrat)', fontSize: 36, fontWeight: 900,
                    lineHeight: 1, marginBottom: 6, color: C,
                  }}>{s.value}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IS RIA — Connected Pipeline ── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '88px 0 80px', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>

            {/* Intro: 2-col */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 64, alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 12 }}>¿Qué es RIA?</p>
                <h2 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.20, marginBottom: 20 }}>
                  Del documento no estructurado al dato listo para usarse.
                </h2>
                <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.82, marginBottom: 16 }}>
                  RIA es una plataforma IDP que combina captura avanzada, inteligencia artificial y automatización de procesos para convertir información no estructurada en datos confiables y utilizables.
                </p>
                <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.82 }}>
                  Extrae, clasifica, valida y distribuye información de facturas, contratos, formularios y expedientes. Plataforma 100% SaaS — sin infraestructura, con actualizaciones automáticas continuas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.60, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                {([
                  { value: 'IDP',   label: 'Procesamiento inteligente de documentos', Icon: Brain },
                  { value: '70%',   label: 'Reducción promedio en tiempos de proceso', Icon: TrendingUp },
                  { value: 'SaaS',  label: 'Sin infraestructura, actualización continua', Icon: Workflow },
                ] as const).map(({ value, label, Icon }, i) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.42, delay: 0.22 + i * 0.10 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      background: `rgba(${R},0.05)`, borderRadius: 14,
                      border: `1px solid rgba(${R},0.10)`, padding: '16px 20px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: 22, fontWeight: 900, color: C, flexShrink: 0, minWidth: 52 }}>{value}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Icon size={14} strokeWidth={2} style={{ color: C, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: '#475569', lineHeight: 1.45 }}>{label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Pipeline label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.40 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}
            >
              <div style={{ height: 1, flex: 1, background: `rgba(${R},0.14)` }} />
              <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase', color: `rgba(${R},0.60)`, fontFamily: 'var(--font-montserrat)', whiteSpace: 'nowrap' }}>
                Proceso de captura a acción — 6 pasos
              </p>
              <div style={{ height: 1, flex: 1, background: `rgba(${R},0.14)` }} />
            </motion.div>

            {/* Row 1: Steps 01–03 */}
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              {([
                { num: '01', Icon: Bot,    title: 'Captura',       desc: 'Multicanal, física y digital',    featured: 'start' },
                { num: '02', Icon: Brain,  title: 'Clasificación', desc: 'IA de última generación',         featured: null },
                { num: '03', Icon: Search, title: 'Extracción',    desc: 'Datos clave automáticamente',     featured: null },
              ] as const).map((step, i) => (
                <>
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.46, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      flex: i === 0 ? '1.14' : i === 1 ? '0.94' : '1.06',
                      background: step.featured === 'start' ? C : '#ffffff',
                      borderRadius: 16,
                      border: step.featured === 'start' ? 'none' : `1px solid rgba(${R},0.11)`,
                      padding: i === 0 ? '28px 22px' : i === 1 ? '22px 18px' : '25px 20px',
                      boxShadow: step.featured === 'start' ? `0 8px 28px rgba(${R},0.28)` : '0 2px 8px rgba(0,0,0,0.04)',
                      display: 'flex', flexDirection: 'column', gap: 10,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: step.featured === 'start' ? 'rgba(255,255,255,0.50)' : `rgba(${R},0.40)` }}>{step.num}</span>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: step.featured === 'start' ? 'rgba(255,255,255,0.18)' : `rgba(${R},0.09)`, border: step.featured === 'start' ? '1px solid rgba(255,255,255,0.22)' : `1px solid rgba(${R},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <step.Icon size={19} strokeWidth={1.8} style={{ color: step.featured === 'start' ? '#fff' : C }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 700, color: step.featured === 'start' ? '#fff' : '#0d0f14', fontFamily: 'var(--font-montserrat)', marginBottom: 4, lineHeight: 1.3 }}>{step.title}</p>
                      <p style={{ fontSize: 11.5, color: step.featured === 'start' ? 'rgba(255,255,255,0.65)' : '#64748b', lineHeight: 1.55 }}>{step.desc}</p>
                    </div>
                  </motion.div>

                  {i < 2 && (
                    <div key={`c${i}`} style={{ width: 24, flexShrink: 0, display: 'flex', alignItems: 'center', position: 'relative' }}>
                      <motion.div
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.32, delay: 0.12 + i * 0.13 }}
                        style={{ position: 'absolute', left: 0, right: 6, height: 2, background: `linear-gradient(to right, rgba(${R},0.22), rgba(${R},0.55))`, transformOrigin: 'left' }}
                      />
                      <div style={{ position: 'absolute', right: 0, width: 0, height: 0, borderLeft: `5px solid rgba(${R},0.55)`, borderTop: '3px solid transparent', borderBottom: '3px solid transparent' }} />
                    </div>
                  )}
                </>
              ))}
            </div>

            {/* Snake connector: 03 → 04 */}
            <div style={{ position: 'relative', height: 52 }}>
              <svg viewBox="0 0 1000 52" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  <marker id="ria-snake-arrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
                    <polygon points="0,0 7,3.5 0,7" fill={C} opacity="0.55" />
                  </marker>
                </defs>
                <motion.path
                  d="M 1000,0 C 1000,52 0,0 0,52"
                  fill="none"
                  stroke={C}
                  strokeWidth="1.8"
                  strokeDasharray="5 4"
                  strokeOpacity="0.45"
                  markerEnd="url(#ria-snake-arrow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 1.10, delay: 0.50, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            {/* Row 2: Steps 04–06 */}
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              {([
                { num: '04', Icon: Shield,     title: 'Validación',  desc: 'Control de calidad integrado', featured: null },
                { num: '05', Icon: Workflow,   title: 'Integración', desc: 'ERP, CRM, ECM, APIs',          featured: null },
                { num: '06', Icon: TrendingUp, title: 'Analítica',   desc: 'Dashboards en tiempo real',    featured: 'end' },
              ] as const).map((step, i) => (
                <>
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.46, delay: 0.55 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      flex: i === 0 ? '1.06' : i === 1 ? '0.94' : '1.14',
                      background: step.featured === 'end' ? `linear-gradient(135deg, ${C}, #4F46E5 60%, #2563EB)` : '#ffffff',
                      borderRadius: 16,
                      border: step.featured === 'end' ? 'none' : `1px solid rgba(${R},0.11)`,
                      padding: i === 0 ? '25px 20px' : i === 1 ? '22px 18px' : '28px 22px',
                      boxShadow: step.featured === 'end' ? `0 8px 28px rgba(${R},0.24)` : '0 2px 8px rgba(0,0,0,0.04)',
                      display: 'flex', flexDirection: 'column', gap: 10,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: step.featured === 'end' ? 'rgba(255,255,255,0.50)' : `rgba(${R},0.40)` }}>{step.num}</span>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: step.featured === 'end' ? 'rgba(255,255,255,0.18)' : `rgba(${R},0.09)`, border: step.featured === 'end' ? '1px solid rgba(255,255,255,0.22)' : `1px solid rgba(${R},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <step.Icon size={19} strokeWidth={1.8} style={{ color: step.featured === 'end' ? '#fff' : C }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 700, color: step.featured === 'end' ? '#fff' : '#0d0f14', fontFamily: 'var(--font-montserrat)', marginBottom: 4, lineHeight: 1.3 }}>{step.title}</p>
                      <p style={{ fontSize: 11.5, color: step.featured === 'end' ? 'rgba(255,255,255,0.65)' : '#64748b', lineHeight: 1.55 }}>{step.desc}</p>
                    </div>
                  </motion.div>

                  {i < 2 && (
                    <div key={`c2${i}`} style={{ width: 24, flexShrink: 0, display: 'flex', alignItems: 'center', position: 'relative' }}>
                      <motion.div
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.32, delay: 0.65 + i * 0.13 }}
                        style={{ position: 'absolute', left: 0, right: 6, height: 2, background: `linear-gradient(to right, rgba(${R},0.22), rgba(${R},0.55))`, transformOrigin: 'left' }}
                      />
                      <div style={{ position: 'absolute', right: 0, width: 0, height: 0, borderLeft: `5px solid rgba(${R},0.55)`, borderTop: '3px solid transparent', borderBottom: '3px solid transparent' }} />
                    </div>
                  )}
                </>
              ))}
            </div>

          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section style={{ position: 'relative', background: '#f8f4ff', padding: '80px 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ marginBottom: 48, maxWidth: 640 }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>Capacidades clave</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800, color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18,
              }}>
                Todo lo que RIA puede hacer por tu organización.
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: '#ffffff', borderRadius: 16,
                    border: `1px solid rgba(${R},0.10)`,
                    padding: '26px', display: 'flex', alignItems: 'flex-start', gap: 16,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `rgba(${R},0.08)`, border: `1px solid rgba(${R},0.15)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <f.Icon size={20} strokeWidth={1.7} style={{ color: C }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700,
                      color: '#0d0f14', marginBottom: 8, lineHeight: 1.3,
                    }}>{f.title}</h3>
                    <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.68 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES (dark navy) ── */}
        <section style={{ position: 'relative', background: '#020b1d', padding: '90px 0', overflow: 'hidden' }}>
          <div style={GRID} />
          <div aria-hidden style={{
            position: 'absolute', top: '20%', right: '-10%', width: 500, height: 500,
            background: `radial-gradient(circle, rgba(${R},0.12) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ marginBottom: 52 }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>Casos de uso</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.18, maxWidth: 560,
              }}>
                RIA trabaja en los sectores donde más importa la precisión.
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
              {useCases.map((u, i) => (
                <motion.div
                  key={u.sector}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.48, delay: i * 0.09 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)', borderRadius: 16,
                    border: `1px solid rgba(${R},0.18)`,
                    padding: '28px 24px',
                  }}
                >
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', background: C, marginBottom: 16,
                  }} />
                  <h3 style={{
                    fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700,
                    color: '#ffffff', marginBottom: 10, lineHeight: 1.3,
                  }}>{u.sector}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.70 }}>{u.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS CHECKLIST ── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 40px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.50 }}
              style={{ textAlign: 'center', marginBottom: 52 }}
            >
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: C, fontFamily: 'var(--font-montserrat)', marginBottom: 10,
              }}>Por qué elegir RIA</p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800, color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18,
              }}>
                Resultados reales desde el primer día.
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.44, delay: i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    background: '#f8f4ff', borderRadius: 12,
                    border: `1px solid rgba(${R},0.10)`,
                    padding: '18px 22px',
                  }}
                >
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                    background: `rgba(${R},0.12)`, border: `1px solid rgba(${R},0.25)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                  }}>
                    <Check size={11} strokeWidth={2.8} style={{ color: C }} />
                  </span>
                  <span style={{ fontSize: 14.5, color: '#334155', lineHeight: 1.65, fontWeight: 500 }}>{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING QUOTE ── */}
        <section style={{
          position: 'relative', overflow: 'hidden',
          background: `linear-gradient(135deg, ${C} 0%, #4F46E5 60%, #2563EB 100%)`,
          padding: '80px 40px',
        }}>
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: [
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '60px 60px',
          }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.60 }}
            style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', textAlign: 'center' }}
          >
            <p style={{
              fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3.5vw, 38px)',
              fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: 12,
              letterSpacing: '-0.02em',
            }}>
              Simplificamos lo complejo.
            </p>
            <p style={{
              fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(22px, 3.5vw, 38px)',
              fontWeight: 800, color: 'rgba(255,255,255,0.80)', lineHeight: 1.25, marginBottom: 36,
              letterSpacing: '-0.02em',
            }}>
              Impulsamos lo que importa.
            </p>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#ffffff', color: C,
              padding: '14px 30px', borderRadius: 9999,
              fontSize: 14, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              fontFamily: 'var(--font-montserrat)',
            }}>
              Hablar con un especialista <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
