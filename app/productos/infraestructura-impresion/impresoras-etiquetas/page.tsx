'use client'
import { Tag } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function ImpresorasEtiquetasPage() {
  return (
    <DetailTemplate
      Icon={Tag}
      title="Impresoras de Etiquetas y QR"
      subtitle="Impresión precisa de etiquetas, códigos QR y códigos de barras para logística e inventarios."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Infraestructura de Impresión', href: '/productos/infraestructura-impresion' },
        { label: 'Impresoras de Etiquetas y QR' },
      ]}
      description="Las impresoras de etiquetas AbbaCore están diseñadas para entornos logísticos, de manufactura y de retail que requieren impresión precisa de etiquetas adhesivas, códigos QR, códigos de barras 1D/2D y etiquetas de cumplimiento normativo. Con velocidades industriales y compatibilidad con más de 20 tipos de materiales."
      features={[
        'Resolución de impresión de hasta 600 dpi',
        'Velocidad de impresión de hasta 150 mm/s',
        'Compatibilidad con más de 20 tipos de materiales',
        'Soporte para códigos QR, DataMatrix y Aztec',
        'Conectividad USB, Ethernet y Wi-Fi',
        'Software de diseño de etiquetas incluido',
      ]}
      stats={[
        { value: '600 dpi', label: 'Resolución de impresión' },
        { value: '150 mm/s', label: 'Velocidad máxima' },
        { value: '20+ tipos', label: 'Materiales compatibles' },
      ]}
    />
  )
}
