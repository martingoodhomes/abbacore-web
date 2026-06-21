'use client'
import { Cpu } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function OcrExtraccionPage() {
  return (
    <DetailTemplate
      Icon={Cpu}
      title="OCR y Extracción Inteligente"
      subtitle="Convierte imágenes de documentos en datos estructurados listos para usar en tus sistemas."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Captura y Procesamiento', href: '/software/captura-procesamiento' },
        { label: 'OCR y Extracción Inteligente' },
      ]}
      description="El motor de OCR y extracción inteligente de AbbaCore transforma documentos escaneados, imágenes y PDFs en datos estructurados de alta precisión. Compatible con más de 50 idiomas, reconoce texto manuscrito, impreso y mixto con una precisión del 99.5% incluso en documentos de baja calidad o alta complejidad visual."
      features={[
        'Reconocimiento de texto impreso, manuscrito y mixto',
        'Soporte para más de 50 idiomas simultáneos',
        'Extracción de campos clave: fechas, montos, NIT, firmas',
        'Procesamiento en tiempo real inferior a 1 segundo por página',
        'Corrección automática de inclinación y distorsión',
        'Exportación a JSON, XML, CSV y bases de datos directas',
      ]}
      stats={[
        { value: '99.5%', label: 'Precisión de reconocimiento' },
        { value: '50+ idiomas', label: 'Soporte multilingüe' },
        { value: '<1 s', label: 'Tiempo de procesamiento' },
      ]}
    />
  )
}
