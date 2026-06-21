'use client'
import { FileText } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function AutomatizacionDocumentalPage() {
  return (
    <DetailTemplate
      Icon={FileText}
      title="Automatización Documental"
      subtitle="Captura, clasifica y enruta documentos automáticamente sin intervención manual."
      breadcrumbs={[
        { label: 'Automatización', href: '/automatizacion' },
        { label: 'Procesos', href: '/automatizacion/procesos' },
        { label: 'Automatización Documental' },
      ]}
      description="La automatización documental de AbbaCore elimina el trabajo manual repetitivo de clasificación, extracción y distribución de documentos. Mediante reglas configurables e inteligencia artificial, cada documento que entra al sistema es identificado, enriquecido con metadatos y enviado al destino correcto en tiempo real, reduciendo el error humano a cero."
      features={[
        'Clasificación automática basada en contenido y reglas',
        'Extracción de datos clave sin configuración manual',
        'Enrutamiento inteligente a sistemas y usuarios destino',
        'Procesamiento en tiempo real de miles de documentos por hora',
        'Notificaciones automáticas a responsables de proceso',
        'Panel de monitoreo con métricas de throughput y errores',
      ]}
      stats={[
        { value: '85%', label: 'Reducción de trabajo manual' },
        { value: 'Tiempo real', label: 'Velocidad de procesamiento' },
        { value: '0 errores', label: 'Tasa de error en enrutamiento' },
      ]}
    />
  )
}
