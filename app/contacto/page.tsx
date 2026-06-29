'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Clock, Shield, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

const contactInfo = [
  { Icon: Phone,  label: 'Teléfono', value: '316 538 3437',                     href: 'tel:+573165383437' },
  { Icon: Phone,  label: 'Teléfono', value: '301 200 5752',                     href: 'tel:+573012005752' },
  { Icon: Mail,   label: 'Email',    value: 'info@abba-core.com',              href: 'mailto:info@abba-core.com' },
  { Icon: MapPin, label: 'Oficina',  value: 'Bogotá D.C., Colombia',            href: '#' },
]

const trustPoints = [
  { Icon: Clock,  text: 'Respuesta en menos de 24 horas' },
  { Icon: Shield, text: 'Tus datos son tratados con confidencialidad' },
  { Icon: Users,  text: 'Especialistas certificados te atienden' },
]

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

const FIELD: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: 10,
  border: '1.5px solid rgba(37,99,235,0.14)',
  background: '#ffffff', color: '#0d0f14',
  fontSize: 15, outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.18s, box-shadow 0.18s',
  fontFamily: 'var(--font-inter, Inter, sans-serif)',
}

const LABEL: React.CSSProperties = {
  display: 'block', marginBottom: 6,
  fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
  textTransform: 'uppercase', color: '#64748b',
  fontFamily: 'var(--font-montserrat)',
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={LABEL}>{label}</label>
      {children}
    </div>
  )
}

export default function ContactoPage() {
  const [sent, setSent]   = useState(false)
  const [focus, setFocus] = useState<string | null>(null)
  const [form, setForm]   = useState({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const focused = (name: string): React.CSSProperties => ({
    ...FIELD,
    borderColor: focus === name ? 'rgba(37,99,235,0.55)' : undefined,
    boxShadow: focus === name ? '0 0 0 3px rgba(37,99,235,0.08)' : undefined,
  })

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Hablemos de tu proyecto"
          subtitle="Cuéntanos qué necesitas y un especialista AbbaCore se pondrá en contacto contigo en menos de 24 horas."
          breadcrumbs={[{ label: 'Contacto' }]}
        />

        {/* ── Form + Contact — light ─────────────────────────────────────────── */}
        <section style={{
          position: 'relative', background: '#ffffff',
          padding: '96px 0 112px', overflow: 'hidden',
        }}>
          <div style={LIGHT_GRID} />

          {/* Corner glows */}
          <div aria-hidden style={{
            position: 'absolute', top: -120, right: -120, width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: -80, left: -80, width: 480, height: 480,
            background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="grid grid-cols-1 md:grid-cols-2" style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)',
            gap: 'clamp(40px,5vw,72px)', alignItems: 'start',
          }}>

            {/* ── Left: Form ──────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                textTransform: 'uppercase', color: '#2563eb', marginBottom: 12,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Formulario de contacto
              </p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18, marginBottom: 32,
              }}>
                Cuéntanos qué necesitas.
              </h2>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.40, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', textAlign: 'center', padding: '64px 24px',
                      background: '#f8faff', borderRadius: 20,
                      border: '1px solid rgba(37,99,235,0.10)',
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        width: 72, height: 72, borderRadius: '50%',
                        background: 'rgba(37,99,235,0.09)',
                        border: '1px solid rgba(37,99,235,0.22)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 20,
                      }}
                    >
                      <CheckCircle size={34} strokeWidth={1.5} style={{ color: '#2563eb' }} />
                    </motion.div>
                    <h3 style={{
                      fontFamily: 'var(--font-montserrat)', fontSize: 22, fontWeight: 800,
                      color: '#0d0f14', marginBottom: 10,
                    }}>
                      ¡Mensaje enviado!
                    </h3>
                    <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.70, maxWidth: 320 }}>
                      Gracias por contactarnos. Un especialista revisará tu mensaje y te responderá en menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                      <Field label="Nombre *">
                        <input
                          type="text" name="nombre" required
                          value={form.nombre} onChange={handleChange}
                          placeholder="Juan García"
                          style={focused('nombre')}
                          onFocus={() => setFocus('nombre')}
                          onBlur={() => setFocus(null)}
                        />
                      </Field>
                      <Field label="Empresa *">
                        <input
                          type="text" name="empresa" required
                          value={form.empresa} onChange={handleChange}
                          placeholder="Tu empresa S.A.S"
                          style={focused('empresa')}
                          onFocus={() => setFocus('empresa')}
                          onBlur={() => setFocus(null)}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                      <Field label="Email *">
                        <input
                          type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="juan@empresa.com"
                          style={focused('email')}
                          onFocus={() => setFocus('email')}
                          onBlur={() => setFocus(null)}
                        />
                      </Field>
                      <Field label="Teléfono">
                        <input
                          type="tel" name="telefono"
                          value={form.telefono} onChange={handleChange}
                          placeholder="+57 300 000 0000"
                          style={focused('telefono')}
                          onFocus={() => setFocus('telefono')}
                          onBlur={() => setFocus(null)}
                        />
                      </Field>
                    </div>

                    <Field label="Mensaje *">
                      <textarea
                        name="mensaje" required rows={5}
                        value={form.mensaje} onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto, cuántos usuarios, qué procesos quieres automatizar..."
                        style={{ ...focused('mensaje'), resize: 'none' }}
                        onFocus={() => setFocus('mensaje')}
                        onBlur={() => setFocus(null)}
                      />
                    </Field>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        width: '100%', padding: '14px 28px', borderRadius: 9999,
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        color: '#ffffff', fontSize: 15, fontWeight: 700, border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 24px rgba(37,99,235,0.32), inset 0 1px 0 rgba(255,255,255,0.12)',
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      Enviar mensaje <ArrowRight size={16} strokeWidth={2.5} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── Right: Contact info + trust ────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                textTransform: 'uppercase', color: '#2563eb', marginBottom: 12,
                fontFamily: 'var(--font-montserrat)',
              }}>
                Información de contacto
              </p>
              <h2 style={{
                fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                color: '#0d0f14', letterSpacing: '-0.02em', lineHeight: 1.18, marginBottom: 12,
              }}>
                Estamos aquí para ayudarte.
              </h2>
              <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, marginBottom: 36 }}>
                Nuestro equipo de especialistas está disponible para resolver tus dudas, hacer demostraciones en vivo o diseñar una propuesta a la medida de tu empresa.
              </p>

              {/* Contact links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                {contactInfo.map(({ Icon, label, value, href }, i) => (
                  <motion.a
                    key={`${label}-${i}`}
                    href={href}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300 } }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      textDecoration: 'none', padding: '14px 16px', borderRadius: 12,
                      background: '#f8faff',
                      border: '1px solid rgba(37,99,235,0.08)',
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={17} strokeWidth={1.8} style={{ color: '#2563eb' }} />
                    </div>
                    <div>
                      <p style={{
                        fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em',
                        textTransform: 'uppercase', color: '#94a3b8', marginBottom: 2,
                        fontFamily: 'var(--font-montserrat)',
                      }}>
                        {label}
                      </p>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#0d0f14' }}>
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Trust points */}
              <div style={{
                background: '#f8faff', borderRadius: 16,
                border: '1px solid rgba(37,99,235,0.09)',
                padding: '20px 22px',
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                {trustPoints.map(({ Icon, text }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: 'rgba(37,99,235,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={14} strokeWidth={2} style={{ color: '#2563eb' }} />
                    </div>
                    <span style={{ fontSize: 13.5, color: '#475569' }}>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── Dark trust stripe ──────────────────────────────────────────────── */}
        <section style={{
          position: 'relative', background: '#020b1d',
          padding: '72px 0', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900, height: 260,
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="grid grid-cols-1 sm:grid-cols-3" style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)',
            gap: 1,
          }}>
            {[
              { value: '500+', label: 'Empresas confían en nosotros' },
              { value: '<24h', label: 'Tiempo de respuesta garantizado' },
              { value: '10+',  label: 'Años de experiencia en Colombia' },
            ].map((s, i, arr) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.52, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textAlign: 'center', padding: '24px 16px',
                  borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: 'clamp(30px, 3vw, 42px)',
                  fontWeight: 800, lineHeight: 1, marginBottom: 8,
                  background: 'linear-gradient(130deg, #ffffff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)',
                }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
