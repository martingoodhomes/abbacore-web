'use client'
import { Star } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function PaperstreamCapturePremiumPage() {
  return (
    <DetailTemplate
      Icon={Star}
      title="PaperStream Capture Pro Premium"
      subtitle="La potencia máxima de captura documental con IA integrada y OCR de precisión clínica."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Captura y Procesamiento', href: '/software/captura-procesamiento' },
        { label: 'PaperStream Capture Pro Premium' },
      ]}
      description="PaperStream Capture Pro Premium eleva la captura documental al siguiente nivel con inteligencia artificial para clasificación automática de documentos, OCR mejorado con corrección semántica y procesamiento batch de alto rendimiento. Diseñado para organizaciones que procesan decenas de miles de documentos diariamente y necesitan precisión cercana al 100%."
      features={[
        'Clasificación automática de documentos con IA',
        'OCR mejorado con corrección semántica contextual',
        'Procesamiento batch a gran escala sin límite de volumen',
        'Reconocimiento de formularios y documentos estructurados',
        'Flujos de validación y revisión humana integrados',
        'Despliegue on-premise o en nube híbrida',
      ]}
      stats={[
        { value: 'IA + OCR', label: 'Motor de reconocimiento' },
        { value: '99.9%', label: 'Precisión de extracción' },
        { value: '<1 h', label: 'Tiempo de implementación' },
      ]}
    />
  )
}
