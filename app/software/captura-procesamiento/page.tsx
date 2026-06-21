'use client'
import { FileText, Star, Cpu } from 'lucide-react'
import CategoryTemplate from '@/components/templates/CategoryTemplate'

const cards = [
  {
    Icon: FileText,
    title: 'PaperStream Capture Pro',
    description: 'Software de captura profesional con perfiles inteligentes, corrección automática de imagen y exportación a múltiples formatos.',
    href: '/software/captura-procesamiento/paperstream-capture-pro',
  },
  {
    Icon: Star,
    title: 'PaperStream Capture Pro Premium',
    description: 'La versión más avanzada con IA integrada, OCR mejorado y capacidades de procesamiento batch a escala empresarial.',
    href: '/software/captura-procesamiento/paperstream-capture-pro-premium',
  },
  {
    Icon: Cpu,
    title: 'OCR y Extracción Inteligente',
    description: 'Convierte documentos escaneados en datos estructurados con reconocimiento óptico de caracteres y extracción de campos clave.',
    href: '/software/captura-procesamiento/ocr-extraccion',
  },
]

export default function CapturaProcesamientoPage() {
  return (
    <CategoryTemplate
      title="Captura y Procesamiento"
      subtitle="Software de captura documental con inteligencia artificial para transformar imágenes en datos accionables."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Captura y Procesamiento' },
      ]}
      cards={cards}
    />
  )
}
