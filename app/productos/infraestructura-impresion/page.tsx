'use client'
import { Copy, Printer, Tag, PenLine } from 'lucide-react'
import CategoryTemplate from '@/components/templates/CategoryTemplate'

const cards = [
  {
    Icon: Copy,
    title: 'Multifuncionales',
    description: 'Imprime, escanea, copia y envía desde un solo equipo. La columna vertebral de cualquier oficina moderna.',
    href: '/productos/infraestructura-impresion/multifuncionales',
  },
  {
    Icon: Printer,
    title: 'Impresoras Empresariales',
    description: 'Alto volumen, bajo costo por página. Construidas para resistir la demanda diaria corporativa.',
    href: '/productos/infraestructura-impresion/impresoras-empresariales',
  },
  {
    Icon: Tag,
    title: 'Impresoras de Etiquetas y QR',
    description: 'Impresión de etiquetas, códigos QR y códigos de barras con precisión y velocidad industrial.',
    href: '/productos/infraestructura-impresion/impresoras-etiquetas',
  },
  {
    Icon: PenLine,
    title: 'Plotters',
    description: 'Impresión de gran formato para planos, renders y documentos técnicos con resolución ultra nítida.',
    href: '/productos/infraestructura-impresion/plotters',
  },
]

export default function InfraestructuraImpresionPage() {
  return (
    <CategoryTemplate
      title="Infraestructura de Impresión"
      subtitle="Equipos de impresión para cada necesidad corporativa, desde la oficina hasta la planta de producción."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Infraestructura de Impresión' },
      ]}
      cards={cards}
    />
  )
}
