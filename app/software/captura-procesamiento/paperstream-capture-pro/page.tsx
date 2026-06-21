'use client'
import { FileText } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function PaperstreamCaptureProPage() {
  return (
    <DetailTemplate
      Icon={FileText}
      title="PaperStream Capture Pro"
      subtitle="Software de captura documental profesional con perfiles inteligentes y corrección automática."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Captura y Procesamiento', href: '/software/captura-procesamiento' },
        { label: 'PaperStream Capture Pro' },
      ]}
      description="PaperStream Capture Pro es la plataforma de captura documental que combina la simplicidad de uso con capacidades de nivel empresarial. Perfiles de trabajo configurables, corrección automática de imagen y soporte para más de 50 formatos de exportación hacen de este software el punto de partida ideal para cualquier proyecto de digitalización."
      features={[
        'Soporte para más de 50 formatos de exportación',
        'Perfiles de trabajo configurables por usuario y tipo de documento',
        'Corrección automática de imagen, rotación y recorte',
        'Separación automática de lotes por código de barras',
        'API REST para integración con sistemas externos',
        'Registro de auditoría de cada operación de captura',
      ]}
      stats={[
        { value: '50+', label: 'Formatos de exportación' },
        { value: '99.5%', label: 'Precisión de procesamiento' },
        { value: 'API REST', label: 'Integración con sistemas' },
      ]}
    />
  )
}
