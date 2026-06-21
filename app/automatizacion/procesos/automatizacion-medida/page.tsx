'use client'
import { Settings } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function AutomatizacionMedidaPage() {
  return (
    <DetailTemplate
      Icon={Settings}
      title="Automatización a la Medida"
      subtitle="Soluciones de automatización diseñadas exactamente para los procesos únicos de tu empresa."
      breadcrumbs={[
        { label: 'Automatización', href: '/automatizacion' },
        { label: 'Procesos', href: '/automatizacion/procesos' },
        { label: 'Automatización a la Medida' },
      ]}
      description="Cada empresa tiene procesos únicos que ningún producto estándar puede resolver completamente. El equipo de AbbaCore analiza, diseña e implementa soluciones de automatización personalizadas que se adaptan a tus flujos existentes, tecnologías actuales y objetivos de negocio específicos, con metodología ágil y ROI demostrable desde el primer sprint."
      features={[
        'Análisis de procesos actuales y mapeo de flujos',
        'Diseño de solución a medida con arquitectura escalable',
        'Desarrollo ágil con entregables incrementales',
        'Integración con sistemas y tecnologías existentes',
        'Capacitación y transferencia de conocimiento al equipo',
        'Soporte post-implementación y mejora continua',
      ]}
      stats={[
        { value: '100%', label: 'Adaptación a tu proceso' },
        { value: 'Ágil', label: 'Metodología de implementación' },
        { value: 'ROI garantizado', label: 'Retorno medible' },
      ]}
    />
  )
}
