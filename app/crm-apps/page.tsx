'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Users, BarChart2, Workflow, Smartphone, Check,
  ChevronRight, ArrowRight, Blocks, Globe, Zap,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const BLUE      = '#0072CE'  // Kintone / section accent — note: Kintone is actually #E6402A but user wants it blue-toned here
const KINTONE_R = '#E6402A'
const KINTONE_D = '#CC3322'

const benefits = [
  {
    Icon: Users,
    title: 'CRM sin límites',
    desc: 'Gestiona contactos, empresas, oportunidades y el historial completo de cada relación comercial — sin pagar por módulos que no usas.',
  },
  {
    Icon: Workflow,
    title: 'Flujos de aprobación',
    desc: 'Automatiza solicitudes, revisiones y aprobaciones internas. Cada proceso fluye solo, con notificaciones y registros automáticos.',
  },
  {
    Icon: BarChart2,
    title: 'Dashboards en tiempo real',
    desc: 'Gráficas, KPIs y reportes generados automáticamente desde los datos de tus apps — sin exportar a Excel, sin trabajo manual.',
  },
  {
    Icon: Smartphone,
    title: 'Acceso móvil nativo',
    desc: 'Todas las aplicaciones funcionan en navegador y móvil sin configuración adicional. Tu equipo opera desde cualquier lugar.',
  },
  {
    Icon: Blocks,
    title: 'Sin una línea de código',
    desc: 'Constructor drag-and-drop para campos, formularios, flujos y relaciones entre bases de datos. Cualquier área lo usa en horas.',
  },
  {
    Icon: Globe,
    title: 'API abierta',
    desc: 'Conecta Kintone con tu ERP, sistema contable o herramienta existente mediante API REST y webhooks nativos.',
  },
]

const useCases = [
  { title: 'CRM de ventas propio',        desc: 'Pipeline de oportunidades, seguimiento de llamadas, historial de cliente — sin depender de Salesforce.' },
  { title: 'Control de gastos y viáticos', desc: 'Formulario de solicitud → aprobación del jefe → pago por finanzas. Todo trazable.' },
  { title: 'Portal de proveedores',        desc: 'Registro, evaluación y gestión de proveedores con acceso externo controlado.' },
  { title: 'Gestión de proyectos',         desc: 'Tareas, responsables, fechas y estados vinculados al cliente en una sola app.' },
  { title: 'Inspecciones y auditorías',    desc: 'Formulario en campo → foto adjunta → reporte automático al supervisor.' },
  { title: 'Help Desk interno',            desc: 'Tickets de soporte con asignación, SLA y seguimiento sin herramientas costosas.' },
]

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function CRMAppsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="CRM y Apps a la Medida"
          subtitle="Tu empresa opera con procesos únicos. Con Kintone construyes las aplicaciones exactas que necesitas — sin desarrolladores, sin meses de espera, sin presupuesto de software a la medida."
          breadcrumbs={[{ label: 'CRM y Apps' }]}
        />

        {/* ── What is it ── */}
        <section style={{ position: 'relative', background: '#ffffff', padding: '80px 0 0', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px 80px' }}>

            {/* Hero card — Kintone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#f8faff', borderRadius: 24,
                border: '1px solid rgba(37,99,235,0.10)',
                padding: '48px', marginBottom: 56,
                boxShadow: '0 4px 24px rgba(37,99,235,0.06)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
                <div>
                  {/* Kintone logo + badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' as const }}>
                    <img
                      src="/products/software/kintone-logo.svg"
                      alt="Kintone"
                      style={{ maxWidth: 160, maxHeight: 52, objectFit: 'contain', display: 'block' }}
                    />
                    <span style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '4px 12px', borderRadius: 9999,
                      background: `rgba(230,64,42,0.08)`, border: `1px solid rgba(230,64,42,0.22)`,
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                      color: KINTONE_R, textTransform: 'uppercase' as const,
                      fontFamily: 'var(--font-montserrat)',
                    }}>
                      Plataforma No-Code
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                    fontSize: 'clamp(22px, 2.6vw, 32px)',
                    color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18, marginBottom: 16,
                  }}>
                    Construye el CRM que tu equipo realmente usará.
                  </h2>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, marginBottom: 16 }}>
                    Kintone es la plataforma no-code de Cybozu que permite a cualquier departamento crear aplicaciones empresariales con drag-and-drop. Desde un CRM propio hasta un sistema de gestión de contratos — todo en días, no meses.
                  </p>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.78, marginBottom: 28 }}>
                    Sin depender de IT. Sin código. Sin presupuestos de desarrollo. Tu equipo diseña el proceso, Kintone lo convierte en una app que funciona en web y móvil de inmediato.
                  </p>

                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
                    <Link
                      href="/software/automatizacion-no-code"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: `linear-gradient(135deg, ${KINTONE_R}, ${KINTONE_D})`,
                        color: '#ffffff', padding: '12px 24px', borderRadius: 9999,
                        fontSize: 14, fontWeight: 700, textDecoration: 'none',
                        boxShadow: `0 4px 20px rgba(230,64,42,0.28)`,
                      }}
                    >
                      Ver Kintone en detalle <ChevronRight size={13} strokeWidth={2.2} />
                    </Link>
                    <Link
                      href="/contacto"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: '#ffffff', color: '#64748b',
                        padding: '12px 20px', borderRadius: 9999,
                        fontSize: 13, fontWeight: 600, border: '1px solid rgba(37,99,235,0.14)',
                        textDecoration: 'none',
                      }}
                    >
                      Solicitar demo <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Right — key numbers */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { val: '0',       label: 'Líneas de código para construir tu app' },
                    { val: 'Días',    label: 'Para tener tu primera app en producción' },
                    { val: '30,000+', label: 'Empresas confían en Kintone globalmente' },
                    { val: '100%',    label: 'Web y móvil sin configuración adicional' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16,
                        background: '#ffffff', borderRadius: 12,
                        border: '1px solid rgba(37,99,235,0.09)',
                        padding: '14px 18px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                        fontSize: 22, color: '#1d4ed8', lineHeight: 1, flexShrink: 0, minWidth: 64,
                      }}>{s.val}</span>
                      <span style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Benefits grid */}
            <div style={{ marginBottom: 16 }}>
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase' as const, color: '#2563eb', marginBottom: 24,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Capacidades incluidas
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: '#ffffff', borderRadius: 16,
                      border: '1px solid rgba(37,99,235,0.09)',
                      padding: '24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.13)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                    }}>
                      <b.Icon size={18} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700, color: '#0d0f14', marginBottom: 8 }}>
                      {b.title}
                    </h3>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Use cases ── */}
        <section style={{ background: '#f8faff', padding: '72px 0 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase' as const, color: '#2563eb', marginBottom: 8,
              fontFamily: 'var(--font-montserrat)',
            }}>
              Casos de uso frecuentes
            </p>
            <h2 style={{
              fontFamily: 'var(--font-montserrat)', fontWeight: 800,
              fontSize: 'clamp(22px, 2.4vw, 30px)', color: '#0d0f14',
              letterSpacing: '-0.02em', marginBottom: 32,
            }}>
              Procesos reales. Apps en días.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {useCases.map((u, i) => (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.42, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: '#ffffff', borderRadius: 14,
                    border: '1px solid rgba(37,99,235,0.09)',
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.18)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                    }}>
                      <Check size={10} strokeWidth={2.8} style={{ color: '#2563eb' }} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 13.5, fontWeight: 700, color: '#0d0f14', lineHeight: 1.3 }}>
                      {u.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.65, paddingLeft: 32 }}>{u.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                marginTop: 40,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                borderRadius: 20, padding: '36px 40px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                boxShadow: '0 8px 32px rgba(37,99,235,0.24)',
                flexWrap: 'wrap' as const, gap: 20,
              }}
            >
              <div>
                <p style={{
                  fontFamily: 'var(--font-montserrat)', fontSize: 20, fontWeight: 800,
                  color: '#ffffff', marginBottom: 6, letterSpacing: '-0.02em',
                }}>
                  ¿Tienes un proceso específico en mente?
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.70)', lineHeight: 1.6 }}>
                  Cuéntanos cómo opera tu equipo y te mostramos cómo construirlo en Kintone.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
                <Link
                  href="/contacto"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#ffffff', color: '#1d4ed8',
                    padding: '12px 24px', borderRadius: 9999,
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
                  }}
                >
                  Hablar con un experto <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/software/automatizacion-no-code"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(255,255,255,0.12)', color: '#ffffff',
                    padding: '12px 20px', borderRadius: 9999,
                    fontSize: 13, fontWeight: 600, border: '1px solid rgba(255,255,255,0.25)',
                    textDecoration: 'none',
                  }}
                >
                  Ver Kintone <ChevronRight size={13} strokeWidth={2.2} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
