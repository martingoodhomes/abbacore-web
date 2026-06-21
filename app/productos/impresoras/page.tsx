'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Printer, Receipt, Tag, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import ProductModal, { type ModalProduct } from '@/components/ProductModal'

interface Product extends ModalProduct {
  spec: string
}

interface Tab {
  id: string; label: string
  products: Product[]
  partners: { name: string; color: string }[]
  placeholder?: boolean
}

const EPSON   = { name: 'Epson',   color: '#2563eb' }
const RICOH   = { name: 'Ricoh',   color: '#A0153E' }
const LEXMARK = { name: 'Lexmark', color: '#E31837' }
const BROTHER = { name: 'Brother', color: '#0072CE' }

const tabs: Tab[] = [
  {
    id: 'heat-free', label: 'Inyección Heat Free',
    partners: [EPSON],
    products: [
      {
        name: 'Epson WorkForce AM-C400', brand: 'Epson', brandColor: '#2563eb',
        spec: '24 ppm Color · A4 · Sin calentamiento',
        image: '/products/printers/epson-am-c400.jpg',
        Icon: Printer,
        description: 'Multifuncional A4 de alto rendimiento con tecnología Heat-Free que elimina el calor de la impresión. Ahorra energía, imprime en frío y reduce el costo total de propiedad hasta un 50% vs. láser.',
        features: ['24 ppm color / negro · A4', 'Heat-Free Technology (sin precalentamiento)', 'ADF 50 hojas + escáner dúplex', 'Wi-Fi dual band + LAN', 'Bandeja 250 hojas', 'Ciclo mensual 40,000 páginas'],
      },
      {
        name: 'Epson WorkForce AM-C550', brand: 'Epson', brandColor: '#2563eb',
        spec: '34 ppm Color · A4 · Wi-Fi dual band',
        image: '/products/printers/epson-am-c550.jpg',
        Icon: Printer,
        description: 'Multifuncional A4 de 34 ppm con conectividad Wi-Fi dual band integrada. Mayor velocidad que el AM-C400 con la misma tecnología Heat-Free para bajo consumo y alta confiabilidad.',
        features: ['34 ppm color · A4', 'Heat-Free Technology', 'Wi-Fi dual band + LAN', 'ADF 50 hojas · Dúplex automático', 'Legal-size media support', 'Tóner de alta capacidad'],
      },
      {
        name: 'Epson WorkForce AM-C4000', brand: 'Epson', brandColor: '#2563eb',
        spec: '40 ppm Color · A3 · LAN integrada',
        image: '/products/printers/epson-am-c4000.jpg',
        Icon: Printer,
        description: 'Multifuncional A3 para grupos de trabajo con 40 ppm y LAN integrada. El equipo más compacto de su clase con menor consumo de energía que impresoras láser comparables.',
        features: ['40 ppm color · A3', 'Heat-Free Technology', 'LAN + Wi-Fi integrado', 'ADF 100 hojas · Dúplex', 'Bandeja 500 hojas', 'Ciclo mensual 80,000 páginas'],
      },
      {
        name: 'Epson WorkForce AM-C4000 Pro', brand: 'Epson', brandColor: '#2563eb',
        spec: '40 ppm Color · A3 · Bandeja 500 hojas',
        image: '/products/printers/epson-am-c4000pro.jpg',
        Icon: Printer,
        description: 'Versión Pro del AM-C4000 con bandeja de 500 hojas y capacidades de gestión avanzada de documentos. Para grupos de trabajo con alta demanda de papel y necesidades de administración de flota.',
        features: ['40 ppm color · A3', 'Bandeja estándar 500 hojas', 'Gestión avanzada de impresión', 'Heat-Free Technology', 'Panel táctil de 4.3"', 'Seguridad con autenticación de usuario'],
      },
      {
        name: 'Epson WorkForce AM-C5000', brand: 'Epson', brandColor: '#2563eb',
        spec: '50 ppm Color · A3 · ADF 200 hojas',
        image: '/products/printers/epson-am-c5000.jpg',
        Icon: Printer,
        description: 'Multifuncional A3 de 50 ppm con ADF de 200 hojas para digitalización masiva. La menor huella de su categoría con hasta 55% menos consumo energético vs. láser color.',
        features: ['50 ppm color · A3', 'ADF 200 hojas · Dúplex', 'Heat-Free Technology', 'LAN + Wi-Fi dual band', 'Ciclo mensual 100,000 páginas', 'Panel táctil 4.3" con NFC'],
      },
      {
        name: 'Epson EM-C5000 Pro', brand: 'Epson', brandColor: '#2563eb',
        spec: '50 ppm Color · A3 · Gestión avanzada',
        image: '/products/printers/epson-em-c5000pro.jpg',
        Icon: Printer,
        description: 'Versión enterprise del AM-C5000 con capacidades de gestión de flota avanzadas, seguridad mejorada y soporte para entornos IT corporativos. Para despliegues a gran escala.',
        features: ['50 ppm color · A3', 'Gestión de flota enterprise', 'Seguridad con cifrado de datos', 'Heat-Free Technology', 'Autenticación de usuario por tarjeta', 'Compatible con Epson Device Admin'],
      },
      {
        name: 'Epson WorkForce AM-C6000', brand: 'Epson', brandColor: '#2563eb',
        spec: '60 ppm Color · A3 · Ciclo 80,000 pág/mes',
        image: '/products/printers/epson-am-c6000.jpg',
        Icon: Printer,
        description: 'El multifuncional A3 más rápido de la línea AM con 60 ppm y ciclo de 80,000 páginas mensuales. Para departamentos de alto volumen con necesidades de impresión intensa y continua.',
        features: ['60 ppm color · A3', 'Ciclo mensual 80,000 páginas', 'Heat-Free Technology', 'ADF 200 hojas · Dúplex', 'LAN Gigabit + Wi-Fi', 'Bandeja hasta 550 hojas'],
      },
      {
        name: 'Epson Pro EM/F-C5390', brand: 'Epson', brandColor: '#2563eb',
        spec: '40 ppm Color · A3 · Enterprise ready',
        image: '/products/printers/epson-c5390.jpg',
        Icon: Printer,
        description: 'Multifuncional A3 enterprise con capacidades de seguridad y gestión de nivel corporativo. Diseñado para entornos IT exigentes con requisitos de cumplimiento y control de acceso.',
        features: ['40 ppm color · A3', 'Enterprise-ready security', 'IEEE 802.1X / IPSec / TLS', 'Heat-Free Technology', 'Gestión remota via web', 'Compatible con sistemas ECM'],
      },
    ],
  },
  {
    id: 'laser', label: 'Láser',
    partners: [BROTHER, RICOH, LEXMARK],
    products: [
      {
        name: 'Brother MFC-L6915DW', brand: 'Brother', brandColor: '#0072CE',
        spec: '52 ppm · Dúplex · Wi-Fi · A4',
        image: '/products/printers/brother-mfc-l6915dw.jpg',
        Icon: Printer,
        description: 'Multifuncional láser monocromático de alto rendimiento con 52 ppm, pantalla táctil de 5" y conectividad Wi-Fi, NFC y Ethernet. Diseñado para grupos de trabajo exigentes que requieren impresión, copia, escaneo y fax en un solo equipo.',
        features: ['52 ppm · A4 · Dúplex automático', 'ADF 50 hojas · Pantalla táctil 5"', 'Wi-Fi + NFC + Ethernet integrados', 'Bandeja de papel hasta 520 hojas', 'Ciclo mensual hasta 150,000 páginas', 'Compatible con Brother iPrint&Scan'],
      },
      {
        name: 'Brother HL-L9430CDN', brand: 'Brother', brandColor: '#0072CE',
        spec: '40 ppm · Color · Red · A4',
        image: '/products/printers/brother-hl-l9430cdn.jpg',
        Icon: Printer,
        description: 'Impresora láser color de alta velocidad con 40 ppm y red cableada Gigabit Ethernet. Calidad de impresión profesional a 600 dpi con tecnología de punto fino para documentos corporativos y materiales de marketing de alto impacto.',
        features: ['40 ppm color y monocromo · A4', 'Red Gigabit Ethernet integrada', 'Resolución 600 dpi (2400 x 600 simulados)', 'Bandeja estándar 250 hojas', 'Ciclo mensual hasta 150,000 páginas', 'Tóner de alta capacidad opcional'],
      },
      {
        name: 'Brother MFC-L9670CDN', brand: 'Brother', brandColor: '#0072CE',
        spec: '40 ppm · Color · MFP · Red',
        image: '/products/printers/brother-mfc-l9670cdn.jpg',
        Icon: Printer,
        description: 'Multifuncional láser color con 40 ppm, pantalla táctil de 5" y conectividad Ethernet Gigabit. Imprime, copia, escanea y envía fax a color con calidad profesional para departamentos de alto volumen.',
        features: ['40 ppm color y negro · A4', 'ADF dúplex 50 hojas · Pantalla 5"', 'Ethernet Gigabit + USB Host', 'Resolución hasta 2400 x 600 dpi', 'Bandeja hasta 800 hojas con expansión', 'Ciclo mensual hasta 150,000 páginas'],
      },
      {
        name: 'Brother MFC-L8970CDW', brand: 'Brother', brandColor: '#0072CE',
        spec: '40 ppm · Color · Wi-Fi · A4',
        image: '/products/printers/brother-mfc-l8970cdw.jpg',
        Icon: Printer,
        description: 'Multifuncional láser color inalámbrico con 40 ppm y conectividad Wi-Fi, NFC y Ethernet. Ideal para medianas empresas que necesitan productividad color con la flexibilidad de conectividad inalámbrica.',
        features: ['40 ppm color y negro · A4', 'Wi-Fi + NFC + Ethernet integrados', 'ADF dúplex 50 hojas · Pantalla táctil 5"', 'Bandeja estándar 250 hojas', 'Resolución 600 dpi color', 'Compatible Brother iPrint&Scan y AirPrint'],
      },
    ],
  },
  {
    id: 'pos', label: 'POS',
    partners: [EPSON],
    products: [
      {
        name: 'Epson TM-M50II', brand: 'Epson', brandColor: '#2563eb',
        spec: '250 mm/s · USB + Bluetooth · 80mm',
        image: '/products/printers/epson-tm-m50ii.jpg',
        Icon: Receipt,
        description: 'Impresora de recibos POS de alto rendimiento con 250 mm/s y conectividad múltiple. Diseño compacto y moderno para puntos de venta y hostelería de alto tráfico.',
        features: ['250 mm/s · Papel 80mm', 'USB + Bluetooth integrado', 'Cortador automático', 'Apertura de cajón de dinero', 'Compatible OmniLink para apps IoT', 'Ciclo diario de alto volumen'],
      },
      {
        name: 'Epson TM-M30II', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Compacta · Bluetooth + USB · 80mm',
        image: '/products/printers/epson-tm-m30ii.jpg',
        Icon: Receipt,
        description: 'Impresora de recibos compacta con diseño moderno para retail y hostelería. Conectividad Bluetooth y USB con soporte para múltiples interfaces en un formato reducido.',
        features: ['Diseño ultra compacto', 'Bluetooth + USB + Ethernet (opcional)', 'Papel 80mm · Cortador automático', 'Compatible con apps iOS y Android', 'Comunicación NFC para configuración rápida', 'Apertura de cajón integrada'],
      },
      {
        name: 'Epson TM-M30II-SL', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Sin ventilador · Ethernet · 80mm',
        image: '/products/printers/epson-tm-m30ii-sl.jpg',
        Icon: Receipt,
        description: 'Versión "Slim" del TM-M30II con soporte integrado para tablet. Diseño sin ventilador para ambientes sensibles al ruido, con conectividad Ethernet para entornos de red.',
        features: ['Sin ventilador (operación silenciosa)', 'Soporte de tablet integrado', 'Ethernet + USB', 'Papel 80mm · Cortador automático', 'Compatible OmniLink', 'Ideal para POS con tablet'],
      },
      {
        name: 'Epson Mobilink TM-P80II+', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Portátil · Wi-Fi + BT · 80mm',
        image: '/products/printers/epson-tm-p80ii-plus.jpg',
        Icon: Receipt,
        description: 'Impresora portátil 3" con cortador automático para servicio en mesa y delivery. Resistente al agua y polvo (IP54), con batería de 47 horas para jornadas completas.',
        features: ['Portátil · Papel 3" (80mm)', 'Wi-Fi + Bluetooth', 'Cortador automático', 'IP54 (agua y polvo)', 'Batería hasta 47 horas', 'Caída resistente hasta 1.9m'],
      },
      {
        name: 'Epson TM-P80II', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Portátil · Batería 8h · 80mm',
        image: '/products/printers/epson-tm-p80ii.jpg',
        Icon: Receipt,
        description: 'Impresora portátil 3" de alta velocidad para field service y retail móvil. Ganadora del Red Dot Design Award 2023, combina estética y funcionalidad en un formato ligero.',
        features: ['Portátil · 3" (80mm)', 'Wi-Fi + Bluetooth', 'Batería hasta 8 horas', 'Red Dot Design Award 2023', 'IP54 resistente', 'Compatible con OPOS / JavaPOS'],
      },
      {
        name: 'Epson TM-P60II', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Portátil · 100 mm/s · 58mm',
        image: '/products/printers/epson-tm-p60ii.jpg',
        Icon: Receipt,
        description: 'Impresora portátil ultracompacta de 58mm para aplicaciones de campo y recibos de boleto. El formato más pequeño de la línea Mobilink con conectividad Bluetooth.',
        features: ['Portátil · 58mm · 100 mm/s', 'Bluetooth integrado', 'Formato ultracompacto', 'Batería larga duración', 'Compatible iOS, Android, Windows', 'Ideal para inspectores y técnicos'],
      },
    ],
  },
  {
    id: 'etiquetas', label: 'Etiquetas',
    partners: [EPSON],
    products: [
      {
        name: 'Epson ColorWorks CW-C4000', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Color · 4 pulgadas · Alto contraste',
        image: '/products/printers/epson-cw-c4000.jpg',
        Icon: Tag,
        description: 'Impresora de etiquetas a color compacta con tecnología PrecisionCore. Imprime etiquetas de alta calidad a demanda con resolución hasta 1,200 dpi, eliminando el costo de etiquetas pre-impresas.',
        features: ['4 pulgadas · Color PrecisionCore', 'Resolución hasta 1,200 dpi', 'ZPL II® y SAP® compatible', 'Wi-Fi opcional', 'Velocidad hasta 4 etiquetas/seg', 'App iOS y Android'],
      },
      {
        name: 'Epson ColorWorks CW-C6000A', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Color · 4 pulgadas · Corte automático',
        image: '/products/printers/epson-cw-c6000a.jpg',
        Icon: Tag,
        description: 'Impresora de etiquetas color de 4" con cortador automático integrado. Ideal para producción de etiquetas de baja a media tiraje con corte automático al final de la etiqueta.',
        features: ['4 pulgadas · Cortador automático', 'Color de alta calidad', 'Resolución 1,200 dpi', 'Puerto USB + LAN', 'Velocidad hasta 119mm/seg', 'Papel: ancho hasta 4"'],
      },
      {
        name: 'Epson ColorWorks CW-C6500A', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Color · 8 pulgadas · Alta velocidad',
        image: '/products/printers/epson-cw-c6500a.jpg',
        Icon: Tag,
        description: 'Impresora de etiquetas color de alta velocidad con formato de 8". Para producción de etiquetas de mayor tamaño o etiquetado industrial donde se requiere mayor ancho y velocidad.',
        features: ['8 pulgadas · Alta velocidad', 'Cortador automático', 'Resolución 1,200 dpi color', 'USB + LAN', 'Para volúmenes medianos a altos', 'Soporte de papeles especiales'],
      },
      {
        name: 'Epson ColorWorks CW-C6000P', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Color · 4 pulgadas · Dispensador integrado',
        image: '/products/printers/epson-cw-c6000p.jpg',
        Icon: Tag,
        description: 'Impresora de etiquetas color de 4" con dispensador integrado para aplicación automática. El dispensador facilita el despegado de etiquetas y acelera el proceso de aplicación en línea de producción.',
        features: ['4 pulgadas · Dispensador integrado', 'Aplicación semiautomática de etiquetas', 'Color 1,200 dpi', 'USB + LAN', 'Eliminador de respaldo automático', 'Para líneas de embalaje y producción'],
      },
      {
        name: 'Epson ColorWorks CW-C6500P', brand: 'Epson', brandColor: '#2563eb',
        spec: 'Color · 8 pulgadas · Dispensador integrado',
        image: '/products/printers/epson-cw-c6500p.jpg',
        Icon: Tag,
        description: 'La versión de 8" con dispensador del ColorWorks CW-C6500. Para líneas industriales que requieren etiquetas de gran formato con aplicación automática en proceso de producción.',
        features: ['8 pulgadas · Dispensador integrado', 'Alta velocidad + formato grande', 'Color 1,200 dpi', 'USB + LAN', 'Eliminador de respaldo', 'Ideal para industria y logística'],
      },
    ],
  },
]

function BrandPill({ brand, color }: { brand: string; color: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '3px 10px', borderRadius: 9999,
      background: `${color}1a`, border: `1px solid ${color}33`,
      fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
      color, textTransform: 'uppercase' as const,
      fontFamily: 'var(--font-montserrat)',
    }}>
      {brand}
    </span>
  )
}

function CardImage({ src, name, Icon }: { src?: string; name: string; Icon: React.ComponentType<any> }) { // eslint-disable-line
  const [err, setErr] = useState(false)
  return (
    <div style={{
      height: 148, borderRadius: '10px 10px 0 0',
      background: 'linear-gradient(160deg,#f0f4ff 0%,#e8f0fe 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', padding: '12px',
      borderBottom: '1px solid rgba(37,99,235,0.07)',
    }}>
      {src && !err ? (
        <img
          src={src} alt={name}
          onError={() => setErr(true)}
          style={{ maxWidth: '100%', maxHeight: 124, objectFit: 'contain', display: 'block' }}
        />
      ) : (
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.14)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={22} strokeWidth={1.7} style={{ color: '#2563eb' }} />
        </div>
      )}
    </div>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const Icon = product.Icon ?? Printer
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(37,99,235,0.12), inset 0 0 0 1px rgba(37,99,235,0.22)' }}
      transition={{ duration: 0.22 }}
      onClick={onClick}
      style={{
        background: '#ffffff', borderRadius: 14,
        border: '1px solid rgba(37,99,235,0.09)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        cursor: 'pointer', overflow: 'hidden',
      }}
    >
      <CardImage src={product.image} name={product.name} Icon={Icon} />

      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <BrandPill brand={product.brand} color={product.brandColor} />

        <h3 style={{
          fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700,
          color: '#0d0f14', lineHeight: 1.3,
        }}>
          {product.name}
        </h3>

        <p style={{ fontSize: 11.5, color: '#64748b', lineHeight: 1.55 }}>
          {product.spec}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: 10, borderTop: '1px solid rgba(37,99,235,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href="/contacto"
            onClick={e => e.stopPropagation()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: '#2563eb', textDecoration: 'none' }}
          >
            Cotizar →
          </Link>
          <span style={{ fontSize: 10.5, color: '#94a3b8', fontWeight: 600 }}>Ver detalles</span>
        </div>
      </div>
    </motion.div>
  )
}

const LIGHT_GRID: React.CSSProperties = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: [
    'linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '60px 60px',
}

export default function ImpresoresPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [selected, setSelected] = useState<Product | null>(null)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && tabs.some(t => t.id === hash)) setActiveTab(hash)
  }, [])

  const current = tabs.find(t => t.id === activeTab)!

  const switchTab = (id: string) => {
    setActiveTab(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Impresoras"
          subtitle="Tecnología de impresión para cada entorno: oficina, punto de venta, producción de etiquetas y documentos."
          breadcrumbs={[{ label: 'Productos', href: '/productos/escaneres' }, { label: 'Impresoras' }]}
        />

        <section style={{ position: 'relative', background: '#ffffff', overflow: 'hidden' }}>
          <div style={LIGHT_GRID} />

          {/* Tab bar */}
          <div style={{
            position: 'sticky', top: 80, zIndex: 40,
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(37,99,235,0.08)',
            boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
          }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 40px', display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  style={{
                    padding: '9px 20px', borderRadius: 9999, cursor: 'pointer',
                    fontSize: 13, fontWeight: 700, transition: 'all 0.2s',
                    fontFamily: 'var(--font-montserrat)',
                    background: activeTab === tab.id ? '#2563eb' : 'transparent',
                    color: activeTab === tab.id ? '#ffffff' : '#64748b',
                    border: activeTab === tab.id ? 'none' : '1px solid rgba(37,99,235,0.14)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 40px 80px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Partner strip */}
                <div style={{
                  background: '#020b1d', borderRadius: '0 0 16px 16px',
                  padding: '14px 24px', marginBottom: 40,
                  display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const,
                }}>
                  <span style={{
                    fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.30)',
                    fontFamily: 'var(--font-montserrat)',
                  }}>
                    Partners certificados
                  </span>
                  <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.10)' }} />
                  {current.partners.map(p => (
                    <span key={p.name} style={{
                      fontSize: 12, fontWeight: 800, letterSpacing: '0.06em',
                      color: p.color, fontFamily: 'var(--font-montserrat)', textTransform: 'uppercase' as const,
                    }}>
                      {p.name}
                    </span>
                  ))}
                </div>

                {current.placeholder ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.40 }}
                    style={{
                      textAlign: 'center', padding: '80px 40px',
                      background: '#f8faff', borderRadius: 20,
                      border: '1px solid rgba(37,99,235,0.09)',
                    }}
                  >
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}>
                      <Printer size={28} strokeWidth={1.5} style={{ color: '#2563eb' }} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: 22, fontWeight: 800, color: '#0d0f14', marginBottom: 10 }}>
                      Impresoras Láser
                    </h3>
                    <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.70, maxWidth: 420, margin: '0 auto 28px' }}>
                      Portafolio completo de impresoras láser Ricoh y Lexmark para oficinas, grupos de trabajo y producción documental. Consulta los modelos disponibles con nuestro equipo.
                    </p>
                    <Link
                      href="/contacto"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        color: '#ffffff', padding: '13px 28px', borderRadius: 9999,
                        fontSize: 14, fontWeight: 700, textDecoration: 'none',
                        boxShadow: '0 4px 20px rgba(37,99,235,0.28)',
                      }}
                    >
                      <MessageSquare size={15} strokeWidth={2} />
                      Consultar modelos disponibles
                    </Link>
                  </motion.div>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 14,
                  }}>
                    {current.products.map((p, i) => (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.40, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ProductCard product={p} onClick={() => setSelected(p)} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
