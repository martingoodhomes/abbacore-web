'use client'
import { PenLine } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function PlottersPage() {
  return (
    <DetailTemplate
      Icon={PenLine}
      title="Plotters"
      subtitle="Impresión de gran formato para arquitectura, ingeniería y diseño con resolución profesional."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Infraestructura de Impresión', href: '/productos/infraestructura-impresion' },
        { label: 'Plotters' },
      ]}
      description="Los plotters AbbaCore ofrecen impresión de gran formato hasta tamaño A0 con resolución de hasta 2400 dpi para planos arquitectónicos, renders de ingeniería, mapas técnicos y material gráfico de gran escala. Sistema de mantenimiento automático de cabezales que garantiza calidad constante sin interrupciones de limpieza manual."
      features={[
        'Ancho de impresión máximo hasta A0 (841 mm)',
        'Resolución de hasta 2.400 × 1.200 dpi',
        'Velocidad de hasta 25 m²/hora en modo borrador',
        'Soporte para 8 cartuchos de tinta simultáneos',
        'Sistema de mantenimiento automático de cabezales',
        'Compatible con AutoCAD, Revit y Adobe PDF',
      ]}
      stats={[
        { value: 'A0', label: 'Tamaño máximo de impresión' },
        { value: '2.400 dpi', label: 'Resolución máxima' },
        { value: '25 m²/h', label: 'Velocidad en modo rápido' },
      ]}
    />
  )
}
