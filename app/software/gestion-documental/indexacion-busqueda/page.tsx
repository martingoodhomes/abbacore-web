'use client'
import { Search } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function IndexacionBusquedaPage() {
  return (
    <DetailTemplate
      Icon={Search}
      title="Indexación y Búsqueda"
      subtitle="Encuentra cualquier documento en segundos con búsqueda full-text y filtros inteligentes."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Gestión Documental', href: '/software/gestion-documental' },
        { label: 'Indexación y Búsqueda' },
      ]}
      description="El motor de indexación de AbbaCore analiza y cataloga automáticamente el contenido de cada documento en el momento de su ingreso al sistema. La búsqueda full-text permite localizar cualquier palabra, número o frase en toda la base documental en menos de un segundo, con filtros por fecha, tipo, autor, estado y metadatos personalizados."
      features={[
        'Indexación automática de contenido en el momento de ingreso',
        'Búsqueda full-text con soporte para operadores booleanos',
        'Filtros combinables por fecha, tipo, autor y estado',
        'Metadatos personalizados por categoría de documento',
        'Resultados clasificados por relevancia con vista previa',
        'Búsqueda fonética y tolerante a errores ortográficos',
      ]}
      stats={[
        { value: '<1 s', label: 'Tiempo de búsqueda' },
        { value: 'Full-text', label: 'Tipo de indexación' },
        { value: '99%+', label: 'Tasa de recuperación' },
      ]}
    />
  )
}
