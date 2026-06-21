'use client'
import { ScanLine } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function EscaneresEmpresarialesPage() {
  return (
    <DetailTemplate
      Icon={ScanLine}
      title="Escáneres Empresariales"
      subtitle="Velocidad, precisión y fiabilidad para el ritmo de trabajo corporativo más exigente."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Digitalización Documental', href: '/productos/digitalizacion-documental' },
        { label: 'Escáneres Empresariales' },
      ]}
      description="Nuestros escáneres empresariales combinan velocidad de captura de hasta 100 páginas por minuto con tecnología de corrección automática de imagen, detección de alimentación múltiple y compatibilidad nativa con PaperStream Capture Pro. Diseñados para departamentos con alto volumen documental que no pueden permitirse tiempo de inactividad."
      features={[
        'Velocidad de captura hasta 100 ppm en doble cara',
        'Detección automática de doble alimentación por ultrasonido',
        'Corrección inteligente de imagen en tiempo real',
        'Compatible con documentos de 50 g/m² a 413 g/m²',
        'Integración nativa con PaperStream Capture Pro',
        'Ciclo diario de hasta 10.000 páginas',
      ]}
      stats={[
        { value: '100 ppm', label: 'Velocidad de captura' },
        { value: '99.9%', label: 'Precisión de alimentación' },
        { value: '24/7', label: 'Disponibilidad operativa' },
      ]}
    />
  )
}
