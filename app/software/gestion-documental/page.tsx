'use client'
import { Archive, Search, GitBranch } from 'lucide-react'
import CategoryTemplate from '@/components/templates/CategoryTemplate'

const cards = [
  {
    Icon: Archive,
    title: 'Archivo Digital',
    description: 'Almacenamiento seguro, estructurado y escalable para todos tus documentos digitales con cifrado de nivel bancario.',
    href: '/software/gestion-documental/archivo-digital',
  },
  {
    Icon: Search,
    title: 'Indexación y Búsqueda',
    description: 'Encuentra cualquier documento en segundos con búsqueda full-text, filtros inteligentes y metadatos personalizados.',
    href: '/software/gestion-documental/indexacion-busqueda',
  },
  {
    Icon: GitBranch,
    title: 'Control y Trazabilidad',
    description: 'Auditoría completa de cada acción sobre cada documento. Trazabilidad legal y compliance automático.',
    href: '/software/gestion-documental/control-trazabilidad',
  },
]

export default function GestionDocumentalPage() {
  return (
    <CategoryTemplate
      title="Gestión Documental"
      subtitle="Control total del ciclo de vida de tus documentos: desde el ingreso hasta el archivo definitivo."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Gestión Documental' },
      ]}
      cards={cards}
    />
  )
}
