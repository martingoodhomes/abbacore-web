'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScanLine } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import ProductModal, { type ModalProduct } from '@/components/ProductModal'

interface Product extends ModalProduct {
  spec: string
}

const KODAK   = { name: 'Kodak Alaris', color: '#CC0000' }
const EPSON   = { name: 'Epson',        color: '#2563eb' }
const RICOH   = { name: 'Ricoh',        color: '#A0153E' }
const BROTHER = { name: 'Brother',      color: '#0072CE' }

const tabs = [
  {
    id: 'portatiles', label: 'Portátiles',
    partners: [KODAK, EPSON],
    products: [
      {
        name: 'Kodak Alaris ScanMate i940', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '20 ppm · Dúplex · A4 · USB',
        image: '/products/scanners/kodak-i940.jpg',
        Icon: ScanLine,
        description: 'Escáner personal compacto ScanMate i940 diseñado para digitalización ágil en el escritorio. Duplex automático, resolución óptica de 600 dpi y captura en color a velocidad constante. Ideal para usuarios individuales y pequeñas oficinas.',
        features: ['20 ppm (mono y color) a 300 dpi', 'ADF 20 hojas · Formato A4', 'Escaneo dúplex automático', 'Resolución óptica 600 dpi', 'Conectividad USB 2.0', 'Software Kodak Capture Pro incluido'],
      },
      {
        name: 'Epson ES-60W', brand: 'Epson', brandColor: '#2563eb',
        spec: '25 ppm · Wi-Fi integrado · Ultra portátil',
        image: '/products/scanners/epson-es-60w.jpg',
        Icon: ScanLine,
        description: 'El escáner portátil inalámbrico más ligero y compacto de su clase. Escanea documentos directamente a PC, Mac o dispositivos móviles vía Wi-Fi — sin cables, sin escritorio fijo.',
        features: ['25 ppm · Wi-Fi integrado', 'Peso 0.3 kg · ultra portátil', 'Batería recargable o alimentación USB', 'OCR automático con Nuance', 'Compatible iOS, Android, PC y Mac', 'Epson ScanSmart Software incluido'],
      },
    ],
  },
  {
    id: 'grupo-de-trabajo', label: 'Grupo de Trabajo',
    partners: [KODAK, RICOH, EPSON, BROTHER],
    products: [
      {
        name: 'Kodak Alaris S2070', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '70 ppm / 140 ipm · A4 · ADF 80 hojas',
        image: '/products/scanners/kodak-s2070.webp',
        Icon: ScanLine,
        description: 'Escáner departamental de alta velocidad para grupos de trabajo exigentes. Active Feed Technology maneja hojas mixtas, delgadas o arrugadas sin atascos. Diseño de carga frontal para escritorios reducidos.',
        features: ['70 ppm / 140 ipm a 300 dpi', 'ADF 80 hojas · A4 · Dúplex', 'Active Feed Technology', 'Ciclo diario 10,000 páginas', 'Detección ultrasónica de doble alimentación', 'Software PaperStream IP 2.0'],
      },
      {
        name: 'Kodak Alaris S2080W', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '80 ppm / 160 ipm · Wi-Fi · A4',
        image: '/products/scanners/kodak-s2080w.webp',
        Icon: ScanLine,
        description: 'El escáner departamental inalámbrico más rápido de su clase con 80 ppm. Conectividad Wi-Fi dual band para escanear directamente a la nube o dispositivos móviles sin cables.',
        features: ['80 ppm / 160 ipm · Wi-Fi dual band', 'ADF 80 hojas · Formato A4', 'NFC para escaneo desde móvil', 'Smart Touch con 7 destinos', 'Diseño compacto de carga frontal', 'Integración con nube (SharePoint, Google Drive)'],
      },
      {
        name: 'Kodak Alaris S2060W', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '60 ppm / 120 ipm · Wi-Fi · A4',
        image: '/products/scanners/kodak-s2060w.webp',
        Icon: ScanLine,
        description: 'Escáner inalámbrico de 60 ppm para grupos de trabajo medianos. Combina velocidad, conectividad Wi-Fi y un formato compacto de 167 mm de ancho que ocupa mínimo espacio.',
        features: ['60 ppm / 120 ipm', 'Wi-Fi integrado · ADF 80 hojas', 'Solo 167 mm de ancho', 'Smart Touch — escaneo con un botón', 'Active Feed Technology', 'Escaneo directo a nube'],
      },
      {
        name: 'Ricoh fi-8040', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '40 ppm / 80 ipm · Dual CIS · A4',
        image: '/products/scanners/ricoh-fi-8040.jpg',
        Icon: ScanLine,
        description: 'Escáner colaborativo con DirectScan — escanea directamente a email, carpeta de red o nube sin necesitar un PC conectado. Ideal para recepciones, ventanillas y espacios compartidos.',
        features: ['40 ppm / 80 ipm · Dual CIS', 'DirectScan — escaneo sin PC', 'Pantalla táctil 4.3" integrada', 'ADF 50 hojas · A4', 'SharePoint / OneDrive / Google Drive', 'Ciclo diario 6,000 páginas'],
      },
      {
        name: 'Ricoh fi-8150', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '50 ppm / 100 ipm · Dual CIS · A4',
        image: '/products/scanners/ricoh-fi-8150.jpg',
        Icon: ScanLine,
        description: 'Escáner de grupo de trabajo con tecnología Clear Image Capture para imágenes perfectas incluso con papel delgado o delicado. Alta confiabilidad para cargas sostenidas.',
        features: ['50 ppm / 100 ipm · Dual CIS', 'ADF 100 hojas · A4', 'Clear Image Capture (CIC)', 'Detección ultrasónica de doble alimentación', 'USB 3.2 Gen 1', 'PaperStream Capture incluido'],
      },
      {
        name: 'Ricoh fi-8170', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '70 ppm / 140 ipm · Dual CIS · A4',
        image: '/products/scanners/ricoh-fi-8170.jpg',
        Icon: ScanLine,
        description: 'Escáner compacto de alta velocidad para flujos de trabajo exigentes. La tecnología CIC garantiza imágenes nítidas con papel mixto o de baja calidad a 70 ppm.',
        features: ['70 ppm / 140 ipm', 'Dual CIS · ADF 100 hojas', 'Clear Image Capture', 'Detección inteligente de rotura de papel', 'USB 3.2 Gen 1', 'Ciclo 10,000 páginas/día'],
      },
      {
        name: 'Ricoh fi-8190', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '90 ppm / 180 ipm · Dual CIS · A4',
        image: '/products/scanners/ricoh-fi-8190.jpg',
        Icon: ScanLine,
        description: 'El escáner A4 más rápido de Ricoh para grupos de trabajo de alto volumen. Con 90 ppm y ADF de 100 hojas, mantiene el ritmo de los departamentos más productivos.',
        features: ['90 ppm / 180 ipm · Dual CIS', 'ADF 100 hojas · A4', 'Clear Image Capture', 'Ciclo 6,000+ páginas/día', 'Categoría de mayor velocidad en segmento', 'USB 3.2 + LAN'],
      },
      {
        name: 'Ricoh fi-8270', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '70 ppm / 140 ipm · A3 · Dual CIS',
        image: '/products/scanners/ricoh-fi-8270.jpg',
        Icon: ScanLine,
        description: 'Escáner A3 versátil con cama plana integrada para documentos de gran formato, libros encuadernados y documentos de identidad. Combina ADF y cama plana en un equipo compacto.',
        features: ['70 ppm / 140 ipm · A3', 'Cama plana A3 integrada', 'Dual CIS · ADF 100 hojas', 'Escaneo de pasaportes y tarjetas', 'Clear Image Capture', 'Resolución hasta 600 dpi'],
      },
      {
        name: 'Epson DS-530', brand: 'Epson', brandColor: '#2563eb',
        spec: '35 ppm / 70 ipm · ADF 50 hojas · A4',
        image: '/products/scanners/epson-ds-530.jpg',
        Icon: ScanLine,
        description: 'Escáner dúplex de color para la digitalización eficiente de documentos de oficina. Velocidad de 35 ppm con ADF de 50 hojas y soporte para tarjetas de plástico.',
        features: ['35 ppm / 70 ipm · A4', 'ADF 50 hojas · Dúplex automático', 'Resolución óptica 600 dpi', 'USB 3.0', 'Epson ScanSmart Software', 'Escaneo de tarjetas y documentos de ID'],
      },
      {
        name: 'Epson DS-870', brand: 'Epson', brandColor: '#2563eb',
        spec: '65 ppm / 130 ipm · ADF 100 hojas · A4',
        image: '/products/scanners/epson-ds-870.jpg',
        Icon: ScanLine,
        description: 'Escáner de grupo de trabajo de alta velocidad para digitalización masiva. ADF de 100 hojas, 65 ppm y LAN integrada para compartir en red sin PC dedicada.',
        features: ['65 ppm / 130 ipm · A4', 'ADF 100 hojas', 'LAN integrada · USB 3.0', 'Ciclo diario 10,000 páginas', 'Compatible TWAIN/ISIS/WIA', 'Resolución óptica 600 dpi'],
      },
      {
        name: 'Epson DS-970', brand: 'Epson', brandColor: '#2563eb',
        spec: '85 ppm / 170 ipm · ADF 100 hojas · A4',
        image: '/products/scanners/epson-ds-970.jpg',
        Icon: ScanLine,
        description: 'El escáner más rápido de la serie DS con 85 ppm. Para departamentos que exigen máximo rendimiento en digitalización documental con la calidad de imagen Epson.',
        features: ['85 ppm / 170 ipm · A4', 'ADF 100 hojas · Dúplex', 'Resolución 600 dpi óptico', 'LAN + USB 3.0', 'Soporte papel hasta 220 g/m²', 'Ciclo diario 10,000 páginas'],
      },
      {
        name: 'Epson DS-800WN', brand: 'Epson', brandColor: '#2563eb',
        spec: '65 ppm · LAN integrada · A3',
        image: '/products/scanners/epson-ds-800wn.jpg',
        Icon: ScanLine,
        description: 'Escáner A3 de red para grupos de trabajo que manejan formatos grandes. Conectividad LAN integrada para compartir el escáner en red y escanear directamente a carpetas compartidas.',
        features: ['65 ppm · Formato A3', 'LAN integrada (sin PC dedicada)', 'Ciclo diario 10,000 páginas', 'Resolución 600 dpi', 'Dúplex automático', 'Compatible con TWAIN/ISIS'],
      },
      {
        name: 'Brother ADS-4300N', brand: 'Brother', brandColor: '#0072CE',
        spec: '40 ppm / 80 ipm · LAN · ADF 50 hojas',
        image: '/products/scanners/brother-ads-4300n.jpg',
        Icon: ScanLine,
        description: 'Escáner de red cableado de alta velocidad para grupos de trabajo. Con 40 ppm, ADF de 50 hojas y conectividad LAN, escanea directamente a SharePoint, OneDrive, FTP y más — sin PC dedicada.',
        features: ['40 ppm / 80 ipm · Dúplex automático', 'ADF 50 hojas · Formato A4', 'LAN integrada (sin PC dedicada)', 'Escaneo directo a nube y carpetas de red', 'Resolución óptica 600 dpi', 'Ciclo diario 5,000 páginas'],
      },
      {
        name: 'Brother ADS-4700W', brand: 'Brother', brandColor: '#0072CE',
        spec: '40 ppm / 80 ipm · Wi-Fi · Pantalla táctil',
        image: '/products/scanners/brother-ads-4700w.jpg',
        Icon: ScanLine,
        description: 'Escáner inalámbrico con pantalla táctil a color de 3.5" para operación autónoma. Escanea a email, SharePoint, OneDrive, FTP y más — vía Wi-Fi, sin depender de un PC.',
        features: ['40 ppm / 80 ipm · Dúplex automático', 'Wi-Fi + LAN + USB · ADF 50 hojas', 'Pantalla táctil LCD 3.5" a color', 'Escaneo directo a nube, USB y correo', 'Resolución óptica 600 dpi', 'Ciclo diario 5,000 páginas'],
      },
      {
        name: 'Brother ADS-4900W', brand: 'Brother', brandColor: '#0072CE',
        spec: '60 ppm / 120 ipm · Wi-Fi · ADF 80 hojas',
        image: '/products/scanners/brother-ads-4900w.jpg',
        Icon: ScanLine,
        description: 'El escáner de grupo de trabajo más potente de Brother. Con 60 ppm, ADF de 80 hojas, pantalla táctil de 4.5" y conectividad completa, es la solución ideal para departamentos de alto volumen.',
        features: ['60 ppm / 120 ipm · Dúplex automático', 'ADF 80 hojas · Formato A4', 'Wi-Fi + LAN + USB · Pantalla táctil 4.5"', 'NFC para escaneo desde móvil', 'Resolución óptica 600 dpi', 'Ciclo diario 9,000 páginas'],
      },
    ],
  },
  {
    id: 'produccion', label: 'Producción',
    partners: [KODAK, RICOH],
    products: [
      {
        name: 'Kodak Alaris S3100', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '100 ppm / 200 ipm · A3 · Uso 24h',
        image: '/products/scanners/kodak-s3100.webp',
        Icon: ScanLine,
        description: 'Escáner de producción de ciclo continuo para operaciones 24/7. Maneja hasta 150,000 páginas/día con total confiabilidad gracias a su tecnología de alimentación industrial.',
        features: ['100 ppm / 200 ipm · A3', 'ADF 500 hojas', 'Uso 24/7 continuo', 'Ciclo diario 150,000 páginas', 'Active Feed Technology industrial', 'Integración con plataformas de captura BPO'],
      },
      {
        name: 'Kodak Alaris S3120 MAX', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '120 ppm / 240 ipm · A3 · Ciclo continuo',
        image: '/products/scanners/kodak-s3120-max.webp',
        Icon: ScanLine,
        description: 'El escáner de producción más compacto a 120 ppm. Combina rendimiento máximo con un diseño reducido que permite instalarlo en espacios donde los escáneres de producción tradicionales no caben.',
        features: ['120 ppm / 240 ipm · A3', 'ADF 500 hojas', 'Ciclo continuo 24/7', 'Diseño compacto para producción', 'Alimentación de tarjetas de plástico', 'Active Feed Technology'],
      },
      {
        name: 'Kodak Alaris S3140 MAX', brand: 'Kodak Alaris', brandColor: '#CC0000',
        spec: '140 ppm / 280 ipm · A3 · Alto volumen',
        image: '/products/scanners/kodak-s3140-max.webp',
        Icon: ScanLine,
        description: 'El escáner departamental más rápido de Kodak con 140 ppm. Para entornos de producción BPO y centros de digitalización donde la velocidad es el factor crítico.',
        features: ['140 ppm / 280 ipm · A3', 'ADF 500 hojas', 'Ciclo 24/7 · Alto volumen', 'Technology de alimentación activa avanzada', 'Manejo de documentos mixtos', 'Integración con workflows BPO'],
      },
      {
        name: 'Ricoh fi-7700', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '100 ppm / 200 ipm · A3 · ADF 200 hojas',
        image: '/products/scanners/ricoh-fi-7700.jpg',
        Icon: ScanLine,
        description: 'Escáner de producción versátil con ADF de 200 hojas y soporte A3. Escaneo dúplex a 100 ppm con doble CIS para imágenes perfectas en ambas caras.',
        features: ['100 ppm / 200 ipm · A3', 'ADF 200 hojas · Dual CIS', 'Ciclo 30,000+ páginas/día', 'USB 3.0 + LAN', 'Detección de código de barras', 'Manejo de formularios multipage'],
      },
      {
        name: 'Ricoh fi-7600', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '100 ppm / 200 ipm · A3 · LAN integrada',
        image: '/products/scanners/ricoh-fi-7600.jpg',
        Icon: ScanLine,
        description: 'Escáner de producción A3 con LAN integrada para centrales de digitalización en red. Escaneo directo a servidor de archivos sin PC dedicada a 100 ppm.',
        features: ['100 ppm / 200 ipm · A3', 'LAN integrada (sin PC dedicada)', 'ADF 300 hojas · Dual CIS', 'Escaneo a carpeta de red, FTP, email', 'Ciclo 30,000+ páginas/día', 'Manejo de formularios con código de barras'],
      },
      {
        name: 'Ricoh fi-8820', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '130 ppm / 260 ipm · A3 · Producción continua',
        image: '/products/scanners/ricoh-fi-8820.png',
        Icon: ScanLine,
        description: 'Escáner de línea de producción continua con 130 ppm para entornos BPO y centros de procesamiento masivo. Disponibilidad 24/7 con sistemas avanzados de control de imagen.',
        features: ['130 ppm / 260 ipm · A3', 'Producción continua 24/7', 'ADF 300 hojas', 'Control avanzado de imagen', 'Compatible PaperStream Capture Pro', 'Ciclo 30,000+ páginas/día'],
      },
      {
        name: 'Ricoh fi-8930', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '130 ppm / 260 ipm · A3 · LAN integrada',
        image: '/products/scanners/ricoh-fi-8930.png',
        Icon: ScanLine,
        description: 'Escáner de producción con conectividad LAN integrada para digitalización en red a 130 ppm. Combina velocidad de producción con integración directa en workflows de red.',
        features: ['130 ppm / 260 ipm · A3', 'LAN integrada para red', 'ADF 300 hojas', 'Clear Image Capture', 'Compatible PaperStream Capture Pro', 'Gestión remota via navegador'],
      },
      {
        name: 'Ricoh fi-8950', brand: 'Ricoh', brandColor: '#A0153E',
        spec: '150 ppm / 300 ipm · A3 · Línea de producción',
        image: '/products/scanners/ricoh-fi-8950.png',
        Icon: ScanLine,
        description: 'El escáner de producción de mayor velocidad de Ricoh con 150 ppm. Para líneas de digitalización de altísimo volumen donde ningún equipo convencional alcanza el rendimiento requerido.',
        features: ['150 ppm / 300 ipm · A3', 'ADF 300 hojas', 'Línea de producción continua', 'Control avanzado de alimentación', 'Mayor velocidad del segmento Ricoh', 'Ciclo 30,000+ páginas/día'],
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
      overflow: 'hidden', padding: '12px', marginBottom: 0,
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
      <CardImage src={product.image} name={product.name} Icon={product.Icon ?? ScanLine} />

      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <BrandPill brand={product.brand} color={product.brandColor} />

        <h3 style={{
          fontFamily: 'var(--font-montserrat)', fontSize: 14, fontWeight: 700,
          color: '#0d0f14', lineHeight: 1.3, letterSpacing: '-0.01em',
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

export default function EscanerPage() {
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
          title="Escáneres"
          subtitle="Nuestros escáneres digitalizan cualquier volumen: desde el trabajo móvil hasta la línea de producción de alto rendimiento."
          breadcrumbs={[{ label: 'Productos', href: '/productos/escaneres' }, { label: 'Escáneres' }]}
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
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 40px', display: 'flex', gap: 8 }}>
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
                      color: p.color, fontFamily: 'var(--font-montserrat)',
                      textTransform: 'uppercase' as const,
                    }}>
                      {p.name}
                    </span>
                  ))}
                </div>

                {/* Grid */}
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
