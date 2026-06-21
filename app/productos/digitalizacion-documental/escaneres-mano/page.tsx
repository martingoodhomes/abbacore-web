'use client'
import { Smartphone } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function EscaneresManoPage() {
  return (
    <DetailTemplate
      Icon={Smartphone}
      title="Escáneres de Mano"
      subtitle="Portabilidad y calidad profesional para captura documental en cualquier entorno."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Digitalización Documental', href: '/productos/digitalizacion-documental' },
        { label: 'Escáneres de Mano' },
      ]}
      description="Los escáneres de mano AbbaCore ofrecen la libertad de capturar documentos, libros, etiquetas y superficies irregulares sin necesidad de una mesa o superficie plana. Ligeros, ergonómicos y con autonomía de batería extendida, son la solución ideal para equipos móviles, visitas a clientes o entornos de almacén."
      features={[
        'Resolución óptica de hasta 600 dpi',
        'Peso inferior a 150 g con batería incluida',
        'Autonomía de batería de 8 horas continuas',
        'Conexión inalámbrica Wi-Fi y Bluetooth',
        'Compatible con superficies irregulares y encuadernadas',
        'Exportación directa a PDF, JPEG y TIFF',
      ]}
      stats={[
        { value: '150 g', label: 'Peso del dispositivo' },
        { value: '8 h', label: 'Autonomía de batería' },
        { value: '600 dpi', label: 'Resolución óptica' },
      ]}
    />
  )
}
