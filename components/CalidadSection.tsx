'use client'
import { useRef } from 'react'
import { motion, useInView, useAnimationFrame } from 'framer-motion'
import { ShieldCheck, ArrowRight, ChevronRight, FileCheck } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────
const NODES = [
  { id: 'doc', name: 'Control Docs',  val: '4,820', tag: 'Activo',     cx: 72, cy: 10, delay: 0.50, floatY: 3 },
  { id: 'aud', name: 'Auditorías',    val: '38',    tag: 'Programada', cx: 84, cy: 46, delay: 0.62, floatY: 3 },
  { id: 'cap', name: 'CAPA',          val: '98%',   tag: 'A TIEMPO',   cx: 28, cy: 86, delay: 0.74, floatY: 3 },
  { id: 'tra', name: 'Capacitación',  val: '94%',   tag: 'Activo',     cx: 72, cy: 86, delay: 0.86, floatY: 3 },
  { id: 'iso', name: 'ISO 13485',     val: 'Cert.', tag: 'Vigente',    cx: 16, cy: 46, delay: 0.98, floatY: 3 },
  { id: 'fda', name: 'FDA 21 CFR',    val: '100%',  tag: 'Vigente',    cx: 28, cy: 10, delay: 1.10, floatY: 3 },
]

const TAG_C: Record<string, { dot: string; text: string }> = {
  'Activo':     { dot: '#93c5fd', text: 'rgba(147,197,253,0.72)' },
  'Programada': { dot: '#60a5fa', text: 'rgba(96,165,250,0.62)'  },
  'A TIEMPO':   { dot: '#7dd3fc', text: 'rgba(125,211,252,0.72)' },
  'Vigente':    { dot: '#bfdbfe', text: 'rgba(191,219,254,0.68)' },
}

const RAILS = NODES.map(n => ({ id: n.id, d: `M 50,50 L ${n.cx},${n.cy}` }))
const PTCLS = NODES.map((n, i) => ({ sx: 50, sy: 50, ex: n.cx, ey: n.cy, phase: i * 480 }))

const SPARKS = [
  { cx: 7,  cy: 5,  r: 0.38, op: 0.22 }, { cx: 88, cy: 12, r: 0.34, op: 0.18 },
  { cx: 95, cy: 58, r: 0.40, op: 0.20 }, { cx: 80, cy: 93, r: 0.36, op: 0.16 },
  { cx: 28, cy: 97, r: 0.38, op: 0.19 }, { cx: 4,  cy: 62, r: 0.34, op: 0.17 },
  { cx: 20, cy: 5,  r: 0.32, op: 0.14 }, { cx: 58, cy: 3,  r: 0.36, op: 0.20 },
  { cx: 94, cy: 32, r: 0.32, op: 0.12 }, { cx: 42, cy: 94, r: 0.34, op: 0.16 },
]

const ORB_G = 'radial-gradient(circle at 36% 26%, #93c5fd 0%, #2563eb 26%, #1d4ed8 52%, #1e3a8a 80%, #0d2260 100%)'
const ORB_SHD = [
  'inset 0 1.5px 0 rgba(255,255,255,0.16)',
  'inset 0 -1.5px 0 rgba(0,0,0,0.32)',
  '0 8px 36px rgba(2,11,29,0.78)',
  '0 0 36px rgba(37,99,235,0.42)',
].join(', ')

// ─── Particle ─────────────────────────────────────────────────────────────────
function QMSParticle({ sx, sy, ex, ey, phase }: {
  sx: number; sy: number; ex: number; ey: number; phase: number
}) {
  const lRef = useRef<SVGCircleElement>(null)
  const tRef = useRef<SVGCircleElement>(null)

  useAnimationFrame((time) => {
    const P  = 2400
    const t  = ((time + phase) % P) / P
    const tt = (((time + phase - 280) % P) + P) % P / P
    const ix = (v: number) => sx + (ex - sx) * v
    const iy = (v: number) => sy + (ey - sy) * v
    const fo = (v: number, pk: number) =>
      v < 0.10 ? (v / 0.10) * pk : v > 0.88 ? ((1 - v) / 0.12) * pk : pk

    if (lRef.current) {
      lRef.current.setAttribute('cx',      String(ix(t)))
      lRef.current.setAttribute('cy',      String(iy(t)))
      lRef.current.setAttribute('opacity', String(fo(t, 0.40)))
    }
    if (tRef.current) {
      tRef.current.setAttribute('cx',      String(ix(tt)))
      tRef.current.setAttribute('cy',      String(iy(tt)))
      tRef.current.setAttribute('opacity', String(fo(tt, 0.18)))
    }
  })

  return (
    <>
      <circle ref={lRef} r="0.48" fill="#93c5fd" filter="url(#qms-pg)" cx={sx} cy={sy} opacity={0} />
      <circle ref={tRef} r="0.26" fill="#bfdbfe" filter="url(#qms-pg)" cx={sx} cy={sy} opacity={0} />
    </>
  )
}

// ─── Network Visualization ────────────────────────────────────────────────────
function QMSVisual({ inView }: { inView: boolean }) {
  return (
    <div style={{ position: 'relative', height: 440 }}>
      <div className="relative select-none"
        style={{
          position: 'absolute', top: 0, bottom: 0,
          left: '50%', transform: 'translateX(-50%)',
          width: 420,
        }}>

        <svg className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%', overflow: 'visible', zIndex: 1 }}
          viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="qms-glow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="1.0" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="qms-pg" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="0.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="qms-orbglow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="5"/>
            </filter>
            <filter id="qms-bloom" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="10"/>
            </filter>
            <filter id="qms-rail" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1.4" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {SPARKS.map((s, i) => (
            <motion.circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#93c5fd"
              animate={{ opacity: [s.op, s.op * 0.22, s.op] }}
              transition={{ duration: 3.4 + i * 0.55, repeat: Infinity, ease: 'easeInOut', delay: i * 0.44 }}
            />
          ))}

          <circle cx="50" cy="50" r="28" fill="rgba(37,99,235,0.28)" filter="url(#qms-bloom)" />
          <circle cx="50" cy="50" r="14" fill="rgba(96,165,250,0.26)" filter="url(#qms-orbglow)" />

          <motion.circle cx="50" cy="50" r="19"
            fill="none" stroke="rgba(96,165,250,0.18)" strokeWidth="0.28" strokeDasharray="2.2 7"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50px 50px' }}
          />
          <motion.circle cx="50" cy="50" r="34"
            fill="none" stroke="rgba(37,99,235,0.10)" strokeWidth="0.24" strokeDasharray="1.6 6.4"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50px 50px' }}
          />
          <motion.circle cx="50" cy="50" r="46"
            fill="none" stroke="rgba(37,99,235,0.05)" strokeWidth="0.18" strokeDasharray="0.8 9"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50px 50px' }}
          />

          {RAILS.map((rail, i) => (
            <motion.path key={`rg-${rail.id}`} d={rail.d}
              stroke="rgba(37,99,235,0.20)" strokeWidth="2.0" fill="none" strokeLinecap="round"
              filter="url(#qms-rail)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ delay: 0.45 + i * 0.09, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          {RAILS.map((rail, i) => (
            <motion.path key={`r-${rail.id}`} d={rail.d}
              stroke="rgba(147,197,253,0.28)" strokeWidth="0.36" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ delay: 0.45 + i * 0.09, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          {RAILS.map((rail, i) => (
            <motion.path key={`d-${rail.id}`} d={rail.d}
              stroke="rgba(191,219,254,0.38)" strokeWidth="0.46" fill="none" strokeLinecap="round"
              strokeDasharray="1.4 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1, strokeDashoffset: [0, -11.4] } : {}}
              transition={{
                pathLength:       { delay: 0.45 + i * 0.09, duration: 1.0, ease: [0.22, 1, 0.36, 1] },
                opacity:          { delay: 0.45 + i * 0.09, duration: 1.0 },
                strokeDashoffset: { delay: 1.3, duration: 2.0, repeat: Infinity, ease: 'linear', repeatType: 'loop' },
              }}
            />
          ))}

          {NODES.map(n => (
            <motion.circle key={`dot-${n.id}`} cx={n.cx} cy={n.cy} r="1.1"
              fill={TAG_C[n.tag].dot} filter="url(#qms-glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: n.delay + 0.55, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            />
          ))}
        </svg>

        {/* Centre matte orb */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5,
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.32, filter: 'blur(22px)' }}
            animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.1, delay: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div style={{
                position: 'absolute', inset: -22, borderRadius: '50%',
                border: '1px solid rgba(37,99,235,0.14)',
                boxShadow: '0 0 48px rgba(37,99,235,0.22), inset 0 0 48px rgba(37,99,235,0.06)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', inset: -10, borderRadius: '50%',
                border: '1px solid rgba(59,130,246,0.20)',
                boxShadow: '0 0 20px rgba(37,99,235,0.28)',
                pointerEvents: 'none',
              }} />

              <motion.div
                animate={{ scale: [1, 1.018, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 116, height: 116, borderRadius: '50%',
                  background: ORB_G, boxShadow: ORB_SHD,
                  overflow: 'hidden', position: 'relative',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 4,
                }}
              >
                <motion.div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.07) 48deg, transparent 96deg)',
                }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                />
                <div style={{
                  position: 'absolute', top: '7%', left: '10%',
                  width: '36%', height: '18%', borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(255,255,255,0.26) 0%, rgba(191,219,254,0.06) 55%, transparent 100%)',
                  filter: 'blur(2.5px)', pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '52%',
                  background: 'radial-gradient(ellipse at 50% 100%, rgba(2,11,29,0.58) 0%, transparent 66%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'relative', zIndex: 1,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                }}>
                  <ShieldCheck size={26} strokeWidth={1.2} style={{
                    color: 'rgba(255,255,255,0.92)',
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.70))',
                  }} />
                  <span style={{
                    fontSize: 7.5, fontWeight: 800, letterSpacing: '0.24em',
                    color: 'rgba(191,219,254,0.44)',
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  }}>QMS</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Node cards */}
        {NODES.map((node, i) => (
          <motion.div key={node.id}
            initial={{ opacity: 0, scale: 0.62, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ delay: node.delay, duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute',
              top:  `${node.cy - 10}%`,
              left: `${node.cx - 13}%`,
              zIndex: 6,
            }}
          >
            <motion.div
              animate={{ y: [0, -node.floatY, 0] }}
              transition={{ duration: 6 + i * 0.65, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
            >
              <motion.div style={{
                position: 'absolute', inset: -5, borderRadius: 15,
                border: `1px solid ${TAG_C[node.tag].dot}`,
                pointerEvents: 'none', opacity: 0,
              }}
                animate={{ scale: [1, 1.18], opacity: [0.38, 0] }}
                transition={{ duration: 2.8, delay: node.delay + 0.6 + i * 0.3, repeat: Infinity, ease: 'easeOut' }}
              />
              <div style={{
                position: 'relative',
                width: 104, padding: '11px 11px 11px 13px',
                background: 'linear-gradient(150deg, rgba(2,11,29,0.92) 0%, rgba(0,7,20,0.88) 100%)',
                border: `1px solid rgba(59,130,246,0.22)`,
                borderRadius: 12,
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                boxShadow: [
                  '0 8px 40px rgba(2,11,29,0.80)',
                  '0 0 24px rgba(37,99,235,0.14)',
                  'inset 0 1px 0 rgba(191,219,254,0.22)',
                  'inset 0 -1px 0 rgba(0,0,0,0.30)',
                ].join(', '),
              }}>
                <div style={{
                  position: 'absolute', left: 0, top: 10, bottom: 10,
                  width: 2.5, borderRadius: '0 2px 2px 0',
                  background: TAG_C[node.tag].dot,
                  boxShadow: `0 0 8px ${TAG_C[node.tag].dot}`,
                }} />
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginBottom: 7,
                }}>
                  <span style={{
                    fontSize: 7, fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: TAG_C[node.tag].text, lineHeight: 1,
                  }}>{node.tag}</span>
                  <motion.div style={{
                    width: 4.5, height: 4.5, borderRadius: '50%', flexShrink: 0,
                    background: TAG_C[node.tag].dot,
                    boxShadow: `0 0 7px ${TAG_C[node.tag].dot}, 0 0 14px ${TAG_C[node.tag].dot}`,
                  }}
                    animate={{ opacity: [1, 0.28, 1], scale: [1, 0.8, 1] }}
                    transition={{ duration: 2.6 + i * 0.28, repeat: Infinity, ease: 'easeInOut', delay: i * 0.55 }}
                  />
                </div>
                <div style={{
                  height: 1, marginBottom: 8,
                  background: `linear-gradient(90deg, ${TAG_C[node.tag].dot}30 0%, transparent 80%)`,
                }} />
                <div style={{
                  fontSize: 10.5, fontWeight: 700,
                  color: 'rgba(226,232,240,0.96)',
                  lineHeight: 1.2, marginBottom: 6,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  letterSpacing: '-0.01em',
                }}>{node.name}</div>
                <div style={{
                  fontSize: 15.5, fontWeight: 800,
                  color: '#dbeafe',
                  letterSpacing: '-0.03em', lineHeight: 1,
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  textShadow: '0 0 20px rgba(191,219,254,0.35)',
                }}>{node.val}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Particles */}
        <svg className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%', overflow: 'visible', zIndex: 8 }}
          viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {inView && PTCLS.map((p, i) => <QMSParticle key={i} {...p} />)}
        </svg>

      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function CalidadSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{
      position: 'relative', padding: 'clamp(60px,8vw,120px) 0 clamp(80px,10vw,140px)',
      overflow: 'hidden', background: '#020b1d',
    }}>

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.062) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 40% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 40% 50%, black 20%, transparent 100%)',
      }} />

      <div style={{
        position: 'absolute', top: '50%', left: '25%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0.06) 38%, transparent 68%)',
      }} />
      <div style={{
        position: 'absolute', top: -140, left: -140, pointerEvents: 'none',
        width: 640, height: 640,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 64%)',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, right: -80, pointerEvents: 'none',
        width: 420, height: 420,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.20) 30%, rgba(37,99,235,0.32) 50%, rgba(37,99,235,0.20) 70%, transparent)',
      }} />

      <div ref={ref} style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,4vw,40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 64 }}>

          {/* Visual — LEFT */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -24, filter: 'blur(12px)' }}
              animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%' }}
            >
              <QMSVisual inView={inView} />
            </motion.div>
            <motion.p
              style={{
                fontSize: 12, color: 'rgba(147,197,253,0.50)',
                textAlign: 'center', letterSpacing: '0.04em',
                fontStyle: 'italic', lineHeight: 1.5,
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Así se ve tu operación de calidad centralizada con un EQMS
            </motion.p>
          </div>

          {/* Text — RIGHT */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.28)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.10, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <motion.span className="absolute inset-0 rounded-full" style={{ background: '#60a5fa' }}
                  animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                />
                <span className="relative h-2 w-2 rounded-full" style={{ background: '#2563eb' }} />
              </span>
              <FileCheck size={12} style={{ color: '#93c5fd' }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: '#93c5fd', letterSpacing: '0.18em' }}>
                GESTIÓN DE CALIDAD
              </span>
            </motion.div>

            <h2 style={{ lineHeight: 1.06, marginBottom: 24 }}>
              <motion.span
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontSize: 'clamp(38px, 4.5vw, 64px)',
                  fontWeight: 900, color: '#f1f5f9',
                  letterSpacing: '-0.03em', display: 'block',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Calidad sin
              </motion.span>
              <motion.span
                style={{
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  fontSize: 'clamp(38px, 4.5vw, 64px)',
                  fontWeight: 900, letterSpacing: '-0.03em', display: 'block',
                  background: 'linear-gradient(128deg, #2563eb 0%, #60a5fa 50%, #bfdbfe 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                compromisos.
              </motion.span>
            </h2>

            <motion.div
              style={{
                height: 1, borderRadius: 9999, maxWidth: 260, marginBottom: 32,
                background: 'linear-gradient(90deg, #2563eb, #60a5fa, transparent)',
                transformOrigin: 'left',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              style={{
                fontSize: 'clamp(15px, 1.4vw, 17px)', color: '#94a3b8',
                lineHeight: 1.82, maxWidth: 420, marginBottom: 40,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              QMS de clase mundial para industrias donde los errores no son una opción. Control documental, auditorías, CAPA y capacitación — todo con trazabilidad completa y cumplimiento FDA, ISO y GxP.
            </motion.p>

            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a href="/software/gestion-de-calidad"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                  color: '#ffffff', padding: '14px 28px', borderRadius: 9999,
                  fontSize: 15, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 4px 28px rgba(37,99,235,0.44), inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                Ver Gestión de Calidad <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>
              <motion.a href="/contacto"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#93c5fd', border: '1.5px solid rgba(37,99,235,0.28)',
                  background: 'rgba(37,99,235,0.06)',
                  padding: '14px 24px', borderRadius: 9999,
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                }}
                whileHover={{ x: 5 } as never}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.52)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.28)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Solicitar demo <ChevronRight size={16} strokeWidth={2.5} />
              </motion.a>
            </motion.div>

            <motion.div
              style={{ display: 'flex', alignItems: 'center' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.70 }}
            >
              {[
                { val: 'FDA',    label: '21 CFR Part 11' },
                { val: 'ISO',    label: '9001 · 13485'   },
                { val: 'GxP',    label: 'GMP · GLP · GCP'},
              ].map((s, i) => (
                <div key={s.label}
                  style={i > 0 ? { paddingLeft: 28, marginLeft: 28, borderLeft: '1px solid rgba(37,99,235,0.16)' } : {}}>
                  <div style={{
                    fontFamily: 'var(--font-montserrat)', fontWeight: 800,
                    fontSize: 20, color: '#f1f5f9', lineHeight: 1, marginBottom: 4,
                  }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
