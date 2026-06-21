'use client'
import { CheckSquare } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function FlujosAprobacionPage() {
  return (
    <DetailTemplate
      Icon={CheckSquare}
      title="Flujos de Aprobación"
      subtitle="Diseña y gestiona flujos de aprobación multi-nivel con tiempos de respuesta garantizados."
      breadcrumbs={[
        { label: 'Automatización', href: '/automatizacion' },
        { label: 'Procesos', href: '/automatizacion/procesos' },
        { label: 'Flujos de Aprobación' },
      ]}
      description="Los flujos de aprobación de AbbaCore permiten diseñar visualmente circuitos de validación multi-nivel para contratos, facturas, solicitudes y cualquier documento que requiera aprobación formal. Cada aprobador recibe notificación inmediata, puede revisar el documento desde cualquier dispositivo y dejar evidencia digital con validez legal."
      features={[
        'Diseño visual de flujos de aprobación multi-nivel',
        'Notificaciones automáticas por correo y plataforma',
        'Aprobación desde dispositivos móviles y web',
        'Firma electrónica con validez legal integrada',
        'Escalamiento automático ante tiempos de respuesta vencidos',
        'Evidencia digital inmutable de cada decisión',
      ]}
      stats={[
        { value: '5×', label: 'Reducción en tiempo de aprobación' },
        { value: 'Multi-nivel', label: 'Profundidad de flujos' },
        { value: 'Legal', label: 'Validez de firmas digitales' },
      ]}
    />
  )
}
