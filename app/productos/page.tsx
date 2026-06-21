'use client'
import { ScanLine, Printer, Monitor } from 'lucide-react'
import AppleLineupTemplate from '@/components/templates/AppleLineupTemplate'

const cards = [
  {
    Icon: ScanLine,
    title: 'Escáneres',
    tagline: 'Alta velocidad. Máxima precisión.',
    href: '/productos/escaneres',
    bg: '#0d0f14',
    textLight: true,
    dots: [
      { label: 'Portátiles',        color: '#2563eb' },
      { label: 'Grupo de Trabajo',  color: '#60a5fa' },
      { label: 'Producción',        color: '#93c5fd' },
    ],
  },
  {
    Icon: Printer,
    title: 'Impresoras',
    tagline: 'Heat Free · Láser · POS · Etiquetas.',
    href: '/productos/impresoras',
    bg: '#eff6ff',
    textLight: false,
    dots: [
      { label: 'Heat Free', color: '#1d4ed8' },
      { label: 'Láser',     color: '#2563eb' },
      { label: 'POS',       color: '#60a5fa' },
      { label: 'Etiquetas', color: '#93c5fd' },
    ],
  },
  {
    Icon: Printer,
    title: 'Impresoras Láser',
    tagline: 'Brother · Ricoh · Lexmark.',
    href: '/productos/impresoras#laser',
    bg: '#0072CE',
    textLight: true,
    dots: [
      { label: 'Color',       color: '#ffffff' },
      { label: 'Monocromo',   color: 'rgba(255,255,255,0.65)' },
      { label: 'MFP',         color: 'rgba(255,255,255,0.40)' },
    ],
  },
  {
    Icon: Monitor,
    title: 'Equipos de Cómputo',
    tagline: 'Portafolio Asus empresarial.',
    href: '/productos/equipos-de-computo',
    bg: '#0f172a',
    textLight: true,
    dots: [
      { label: 'Laptops',     color: '#2563eb' },
      { label: 'Desktops',    color: '#60a5fa' },
      { label: 'Workstation', color: '#93c5fd' },
    ],
  },
  {
    Icon: ScanLine,
    title: 'Digitalización Documental',
    tagline: 'Soluciones integradas de captura.',
    href: '/productos/digitalizacion-documental',
    bg: '#1e3a8a',
    textLight: true,
    dots: [
      { label: 'OCR',        color: '#60a5fa' },
      { label: 'Clasificación', color: '#93c5fd' },
      { label: 'Extracción', color: 'rgba(147,197,253,0.55)' },
    ],
  },
  {
    Icon: Printer,
    title: 'Infraestructura de Impresión',
    tagline: 'Gestión centralizada de flotas.',
    href: '/productos/infraestructura-impresion',
    bg: '#f0f9ff',
    textLight: false,
    dots: [
      { label: 'Multifuncionales', color: '#1d4ed8' },
      { label: 'Empresariales',    color: '#2563eb' },
      { label: 'Plotters',         color: '#93c5fd' },
    ],
  },
]

export default function ProductosPage() {
  return (
    <AppleLineupTemplate
      heroTitle="Productos"
      heroSubtitle="Hardware de alto rendimiento diseñado para transformar la operación documental de tu empresa."
      breadcrumbs={[{ label: 'Productos' }]}
      sectionTitle="Explora nuestros productos."
      cards={cards}
    />
  )
}
