'use client'
import { ScanLine, Layers, Smartphone } from 'lucide-react'
import CategoryTemplate from '@/components/templates/CategoryTemplate'

const cards = [
  {
    Icon: ScanLine,
    title: 'Escáneres Empresariales',
    description: 'Captura documentos a alta velocidad con calidad de imagen impecable. Ideales para entornos de trabajo exigentes.',
    href: '/productos/digitalizacion-documental/escaneres-empresariales',
  },
  {
    Icon: Layers,
    title: 'Escáneres de Producción',
    description: 'Volumen extremo, máxima confiabilidad. Diseñados para operaciones de captura masiva sin interrupciones.',
    href: '/productos/digitalizacion-documental/escaneres-produccion',
  },
  {
    Icon: Smartphone,
    title: 'Escáneres de Mano',
    description: 'Portabilidad sin sacrificar calidad. Captura documentos y códigos desde cualquier lugar.',
    href: '/productos/digitalizacion-documental/escaneres-mano',
  },
]

export default function DigitalizacionDocumentalPage() {
  return (
    <CategoryTemplate
      title="Digitalización Documental"
      subtitle="Escáneres de alta velocidad y precisión para cada escala de operación empresarial."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Digitalización Documental' },
      ]}
      cards={cards}
    />
  )
}
