'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Act = 'rest' | 'scan' | 'extract' | 'fadeout'

const DOC_LINES = [68, 92, 74, 86, 54, 82, 48, 76]

const PILLS = [
  { text: '✓ Verificado',       variant: 'white', top: 18,  left: 212 },
  { text: 'Factura',            variant: 'blue',  top: 70,  left: 334 },
  { text: 'NIT 900.123.456',    variant: 'dark',  top: 120, left: 208 },
  { text: '$4.820.000 COP',     variant: 'white', top: 172, left: 316 },
  { text: 'Mayo 2026',          variant: 'dark',  top: 224, left: 214 },
  { text: 'Servicios Técnicos', variant: 'blue',  top: 274, left: 298 },
] as const

const PILL_STYLE = {
  white: {
    background: 'rgba(255,255,255,0.93)',
    color: '#0f172a',
    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6)',
  },
  blue: {
    background: '#3b82f6',
    color: '#ffffff',
    border: '1px solid rgba(147,197,253,0.35)',
    boxShadow: '0 4px 20px rgba(37,99,235,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
  },
  dark: {
    background: '#1e2433',
    color: 'rgba(255,255,255,0.68)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
  },
}

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

export default function ScannerAnimation() {
  const [act, setAct] = useState<Act>('rest')
  const [cycle, setCycle] = useState(0)
  const alive = useRef(true)

  useEffect(() => {
    alive.current = true

    async function run() {
      while (alive.current) {
        // ACT 1 — Document at rest
        setAct('rest')
        await sleep(1500)
        if (!alive.current) break

        // ACT 2 — Scanning
        setAct('scan')
        await sleep(2300)
        if (!alive.current) break

        // ACT 3 — Extraction
        setAct('extract')
        await sleep(2800)
        if (!alive.current) break

        // Fade out
        setAct('fadeout')
        await sleep(750)
        if (!alive.current) break

        setCycle(c => c + 1)
      }
    }

    run()
    return () => { alive.current = false }
  }, [])

  return (
    <motion.div
      animate={{ opacity: act === 'fadeout' ? 0 : 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      style={{
        position: 'relative',
        width: 480,
        height: 340,
        flexShrink: 0,
      }}
    >

      {/* ── Document card ── */}
      <div style={{
        position: 'absolute',
        top: 28, left: 28,
        width: 164, height: 284,
        background: '#161b22',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 12,
        padding: '14px 12px',
        overflow: 'hidden',
        boxShadow: [
          'inset 0 1px 0 rgba(255,255,255,0.04)',
          '0 8px 32px rgba(0,0,0,0.6)',
        ].join(', '),
      }}>
        {/* Doc header mock */}
        <div style={{
          marginBottom: 12,
          paddingBottom: 10,
          borderBottom: '0.5px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{
            height: 6, width: '58%',
            background: 'rgba(255,255,255,0.22)',
            borderRadius: 3, marginBottom: 5,
          }} />
          <div style={{
            height: 3, width: '36%',
            background: 'rgba(255,255,255,0.09)',
            borderRadius: 2,
          }} />
        </div>

        {/* Text lines — illuminate as beam sweeps */}
        {DOC_LINES.map((w, i) => (
          <motion.div
            key={`${cycle}-ln-${i}`}
            style={{
              height: 4,
              width: `${w}%`,
              borderRadius: 2,
              marginBottom: i === 3 ? 10 : 6,
              background: 'white',
            }}
            animate={{
              opacity:
                act === 'scan'
                  ? [0.1, 0.9, 0.1]
                  : act === 'rest'
                  ? 0.1
                  : 0.06,
            }}
            transition={{
              duration: act === 'scan' ? 0.52 : 0.4,
              delay: act === 'scan' ? (i / DOC_LINES.length) * 2.2 : 0,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        ))}

        {/* ── Scan beam ── */}
        <AnimatePresence>
          {act === 'scan' && (
            <motion.div
              key={`${cycle}-beam`}
              style={{
                position: 'absolute',
                left: -1, right: -1,
                height: 3,
                background: [
                  'linear-gradient(90deg,',
                  'transparent 0%,',
                  'rgba(37,99,235,0.35) 12%,',
                  '#bfdbfe 42%,',
                  '#60a5fa 50%,',
                  '#bfdbfe 58%,',
                  'rgba(37,99,235,0.35) 88%,',
                  'transparent 100%)',
                ].join(' '),
                filter: 'blur(1.5px)',
                boxShadow: [
                  '0 0 12px 4px rgba(37,99,235,0.7)',
                  '0 0 28px 10px rgba(37,99,235,0.28)',
                  '0 0 56px 20px rgba(37,99,235,0.1)',
                ].join(', '),
              }}
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: '106%', opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.2,
                ease: 'linear',
                opacity: { times: [0, 0.04, 0.92, 1] },
              }}
            />
          )}
        </AnimatePresence>

        {/* Scanned-area blue fill — grows behind the beam */}
        <AnimatePresence>
          {act === 'scan' && (
            <motion.div
              key={`${cycle}-fill`}
              style={{
                position: 'absolute',
                left: 0, right: 0, top: 0,
                background:
                  'linear-gradient(to bottom, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.01) 100%)',
                pointerEvents: 'none',
              }}
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 2.2, ease: 'linear' }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── Floating extraction pills ── */}
      {PILLS.map((pill, i) => {
        const s = PILL_STYLE[pill.variant]
        const isShowing = act === 'extract' || act === 'fadeout'

        return (
          <motion.div
            key={`${cycle}-pw-${i}`}
            style={{
              position: 'absolute',
              top: pill.top,
              left: pill.left,
              zIndex: 10,
            }}
            /* Breathing — starts after spring settles */
            animate={act === 'extract' ? { y: [0, -5, 0] } : { y: 0 }}
            transition={
              act === 'extract'
                ? {
                    y: {
                      duration: 2.8 + i * 0.42,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.15 * i + 1.0,
                    },
                  }
                : { duration: 0.25 }
            }
          >
            {/* Pill body — spring entrance */}
            <motion.div
              style={{
                ...s,
                borderRadius: 100,
                padding: '5px 13px',
                fontSize: 11,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                letterSpacing: '0.01em',
                backdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0, x: -52, scale: 0.68 }}
              animate={
                isShowing
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -52, scale: 0.68 }
              }
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 22,
                mass: 0.8,
                delay: isShowing && act === 'extract' ? 0.15 * i : 0,
              }}
            >
              {pill.text}
            </motion.div>
          </motion.div>
        )
      })}

      {/* Corner decoration */}
      <div style={{
        position: 'absolute', bottom: 14, right: 18,
        display: 'flex', gap: 4, opacity: 0.14,
      }}>
        {[0, 1, 2].map(j => (
          <div
            key={j}
            style={{ width: 3, height: 3, borderRadius: '50%', background: 'white' }}
          />
        ))}
      </div>
    </motion.div>
  )
}
