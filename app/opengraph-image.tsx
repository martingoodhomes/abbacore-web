import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'AbbaCore — Digitalización y Automatización Empresarial en Latinoamérica'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'flex-end',
          padding: '72px 80px',
          background: 'linear-gradient(140deg, #020b1d 0%, #0c1f56 55%, #1a3a8a 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        {/* Top-left glow */}
        <div style={{
          position: 'absolute', top: -120, left: -120, display: 'flex',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 60%)',
        }} />

        {/* Bottom-right accent */}
        <div style={{
          position: 'absolute', bottom: -80, right: -80, display: 'flex',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 65%)',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Brand pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 28,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#3b82f6', display: 'flex',
            }} />
            <span style={{
              fontSize: 13, color: '#93c5fd',
              letterSpacing: '0.22em', fontWeight: 700,
            }}>
              ABBACORE · LATINOAMÉRICA
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span style={{
              fontSize: 72, fontWeight: 900, color: '#ffffff',
              lineHeight: 1.05, letterSpacing: '-0.03em',
            }}>
              Digitalización
            </span>
            <span style={{
              fontSize: 72, fontWeight: 900, color: '#ffffff',
              lineHeight: 1.05, letterSpacing: '-0.03em',
            }}>
              y Automatización
            </span>
            <span style={{
              fontSize: 72, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em',
              color: '#60a5fa',
            }}>
              Empresarial.
            </span>
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 22, color: '#94a3b8',
            marginTop: 24, display: 'flex',
            letterSpacing: '-0.01em',
          }}>
            Captura · ECM · Automatización · EQMS
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            {['abba-core.com', 'info@abba-core.com'].map(tag => (
              <div key={tag} style={{
                fontSize: 13, color: '#64748b',
                padding: '6px 18px', borderRadius: 999,
                border: '1px solid rgba(37,99,235,0.35)',
                background: 'rgba(37,99,235,0.10)',
                display: 'flex',
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
