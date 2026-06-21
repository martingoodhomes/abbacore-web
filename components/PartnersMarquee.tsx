'use client'

const PARTNERS = ['Laserfiche', 'Ricoh', 'Kintone', 'Epson', 'Kodak', 'Asus']

/* Duplicate the list so the -50% translateX loop is seamless */
const TRACK = [...PARTNERS, ...PARTNERS]

export default function PartnersMarquee() {
  return (
    <section
      style={{
        background: '#001849',
        padding: '28px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="marquee-track">
        {TRACK.map((name, i) => (
          <div
            key={i}
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.62)',
                padding: '0 36px',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              }}
            >
              {name}
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.2)',
                fontSize: 18,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
