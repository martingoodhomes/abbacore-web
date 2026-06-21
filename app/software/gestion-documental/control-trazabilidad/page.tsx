'use client'
import { GitBranch } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function ControlTrazabilidadPage() {
  return (
    <DetailTemplate
      Icon={GitBranch}
      title="Control y Trazabilidad"
      subtitle="Auditoría completa y trazabilidad legal de cada acción sobre cada documento de tu organización."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Gestión Documental', href: '/software/gestion-documental' },
        { label: 'Control y Trazabilidad' },
      ]}
      description="El módulo de Control y Trazabilidad de AbbaCore registra automáticamente cada interacción con cada documento: quién lo vio, cuándo lo modificó, qué cambios realizó y desde qué dispositivo. Esta bitácora inmutable garantiza el cumplimiento de auditorías regulatorias, litigios legales y certificaciones de calidad como ISO 9001."
      features={[
        'Bitácora inmutable de todas las acciones sobre documentos',
        'Registro de usuario, fecha, hora y dispositivo de acceso',
        'Alertas automáticas ante accesos o modificaciones no autorizadas',
        'Reportes de auditoría exportables para entes de control',
        'Integración con sistemas SIEM corporativos',
        'Cumplimiento con ISO 9001 y normativas de protección de datos',
      ]}
      stats={[
        { value: '100%', label: 'Cobertura de auditoría' },
        { value: 'Tiempo real', label: 'Registro de eventos' },
        { value: 'Auditoría legal', label: 'Cumplimiento normativo' },
      ]}
    />
  )
}
