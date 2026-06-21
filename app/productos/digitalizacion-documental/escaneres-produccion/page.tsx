'use client'
import { Layers } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function EscaneresProduccionPage() {
  return (
    <DetailTemplate
      Icon={Layers}
      title="Escáneres de Producción"
      subtitle="Volumen masivo, confiabilidad absoluta para centros de captura documental a gran escala."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Digitalización Documental', href: '/productos/digitalizacion-documental' },
        { label: 'Escáneres de Producción' },
      ]}
      description="Los escáneres de producción de AbbaCore están diseñados para operaciones de captura masiva donde el tiempo de inactividad no es una opción. Con capacidad de hasta 200 páginas por minuto y bandejas de hasta 500 hojas, mantienen el ritmo de los centros de digitalización más exigentes sin comprometer la calidad de imagen."
      features={[
        'Velocidad de hasta 200 ppm en modo dúplex',
        'Bandeja de entrada para 500 hojas estándar',
        'Sistema de limpieza automática del rodillo',
        'Detección y separación inteligente de lotes',
        'Ciclo diario superior a 30.000 páginas',
        'Panel de control táctil con perfiles de trabajo',
      ]}
      stats={[
        { value: '200 ppm', label: 'Velocidad máxima' },
        { value: '500 hojas', label: 'Capacidad de bandeja' },
        { value: '99.8%', label: 'Uptime garantizado' },
      ]}
    />
  )
}
