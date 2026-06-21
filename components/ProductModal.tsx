'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import Link from 'next/link'

type AnyIcon = React.ComponentType<any> // eslint-disable-line

export interface ModalProduct {
  name: string
  brand: string
  brandColor: string
  image?: string
  description: string
  spec?: string
  features: string[]
  Icon?: AnyIcon
}

function ProductImage({ src, alt, Icon, brandColor }: {
  src?: string; alt: string
  Icon?: AnyIcon
  brandColor?: string
}) {
  const [err, setErr] = useState(false)
  if (src && !err) {
    return (
      <img
        src={src} alt={alt}
        onError={() => setErr(true)}
        style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain', display: 'block' }}
      />
    )
  }
  if (!Icon) return null
  return (
    <div style={{
      width: 80, height: 80, borderRadius: 20,
      background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.14)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={40} strokeWidth={1.5} style={{ color: brandColor ?? '#2563eb' }} />
    </div>
  )
}

export default function ProductModal({ product, onClose }: { product: ModalProduct; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(2,11,29,0.70)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            background: '#ffffff', borderRadius: 22,
            width: '100%', maxWidth: 680, maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 28px 80px rgba(2,11,29,0.42)',
          }}
        >
          {/* Image / hero area */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(160deg, #f0f4ff 0%, #e8f0fe 100%)',
            borderRadius: '22px 22px 0 0',
            padding: '32px',
            minHeight: 240,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderBottom: '1px solid rgba(37,99,235,0.09)',
          }}>
            <ProductImage
              src={product.image} alt={product.name}
              Icon={product.Icon} brandColor={product.brandColor}
            />

            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(37,99,235,0.14)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.16s',
              }}
              aria-label="Cerrar"
            >
              <X size={15} strokeWidth={2.2} style={{ color: '#64748b' }} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '28px 32px 36px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '3px 10px', borderRadius: 9999,
              background: `${product.brandColor}1a`, border: `1px solid ${product.brandColor}33`,
              fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
              color: product.brandColor, textTransform: 'uppercase',
              fontFamily: 'var(--font-montserrat)',
            }}>
              {product.brand}
            </span>

            <h2 style={{
              fontFamily: 'var(--font-montserrat)', fontSize: 22, fontWeight: 800,
              color: '#0d0f14', lineHeight: 1.2, margin: '12px 0 0',
              letterSpacing: '-0.015em',
            }}>
              {product.name}
            </h2>

            {product.spec && (
              <p style={{ fontSize: 12.5, color: '#2563eb', fontWeight: 600, marginTop: 8, marginBottom: 0 }}>
                {product.spec}
              </p>
            )}

            <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.76, marginTop: 16, marginBottom: 0 }}>
              {product.description}
            </p>

            {product.features.length > 0 && (
              <div style={{
                background: '#f8faff', borderRadius: 14,
                border: '1px solid rgba(37,99,235,0.08)',
                padding: '20px 24px', marginTop: 24,
              }}>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: '#94a3b8',
                  fontFamily: 'var(--font-montserrat)', marginBottom: 14, marginTop: 0,
                }}>
                  Características clave
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {product.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{
                        flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                        background: 'rgba(37,99,235,0.10)', border: '1px solid rgba(37,99,235,0.20)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                      }}>
                        <Check size={10} strokeWidth={2.8} style={{ color: '#2563eb' }} />
                      </span>
                      <span style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.60 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ marginTop: 28 }}>
              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: '#ffffff', padding: '12px 28px', borderRadius: 9999,
                  fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.28)',
                }}
              >
                Cotizar / Solicitar demo
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
