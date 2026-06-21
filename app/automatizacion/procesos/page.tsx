'use client'
import { FileText, CheckSquare, Network, Settings } from 'lucide-react'
import CategoryTemplate from '@/components/templates/CategoryTemplate'

const cards = [
  {
    Icon: FileText,
    title: 'Automatización Documental',
    description: 'Captura, clasifica y enruta documentos automáticamente sin intervención humana, reduciendo errores al mínimo.',
    href: '/automatizacion/procesos/automatizacion-documental',
  },
  {
    Icon: CheckSquare,
    title: 'Flujos de Aprobación',
    description: 'Diseña y gestiona flujos de aprobación multi-nivel con notificaciones automáticas y tiempos de respuesta garantizados.',
    href: '/automatizacion/procesos/flujos-aprobacion',
  },
  {
    Icon: Network,
    title: 'Integración entre Sistemas',
    description: 'Conecta tu ERP, CRM y plataformas de gestión con conectores nativos y API robusta para flujos unificados.',
    href: '/automatizacion/procesos/integracion-sistemas',
  },
  {
    Icon: Settings,
    title: 'Automatización a la Medida',
    description: 'Desarrollamos soluciones de automatización personalizadas adaptadas exactamente a tus procesos y necesidades.',
    href: '/automatizacion/procesos/automatizacion-medida',
  },
]

export default function ProcesosPage() {
  return (
    <CategoryTemplate
      title="Automatización de Procesos"
      subtitle="Transforma flujos manuales en operaciones inteligentes que trabajan solas, a cualquier escala."
      breadcrumbs={[
        { label: 'Automatización', href: '/automatizacion' },
        { label: 'Procesos' },
      ]}
      cards={cards}
    />
  )
}
