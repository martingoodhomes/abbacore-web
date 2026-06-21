'use client'
import { Puzzle } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function AppsMedidaPage() {
  return (
    <DetailTemplate
      title="Apps a la Medida"
      subtitle="Crea aplicaciones empresariales personalizadas con Kintone, sin escribir una sola línea de código."
      breadcrumbs={[
        { label: 'CRM y Apps', href: '/crm-apps' },
        { label: 'Apps a la Medida' },
      ]}
      description="Con Kintone como plataforma de desarrollo no-code, AbbaCore construye aplicaciones empresariales completamente adaptadas a tus procesos. Reducimos el tiempo de implementación en un 80% frente al desarrollo tradicional."
      features={[
        'Desarrollo no-code con plataforma Kintone certificada',
        'Formularios, bases de datos y flujos de aprobación visuales',
        '80% menos tiempo de desarrollo vs. código tradicional',
        'Integración con escáneres, ECM y sistemas ERP/CRM',
        'Capacitación y soporte para equipos internos',
        'Evolución y mantenimiento continuo de las aplicaciones',
      ]}
      stats={[
        { value: '80%', label: 'Reducción en tiempo de desarrollo' },
        { value: '3x', label: 'Más rápido en implementación' },
        { value: '0', label: 'Líneas de código necesarias' },
      ]}
      Icon={Puzzle}
    />
  )
}
