'use client'
import { Network } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function IntegracionSistemasPage() {
  return (
    <DetailTemplate
      Icon={Network}
      title="Integración entre Sistemas"
      subtitle="Conecta tu ERP, CRM y plataformas de gestión en un ecosistema documental unificado."
      breadcrumbs={[
        { label: 'Automatización', href: '/automatizacion' },
        { label: 'Procesos', href: '/automatizacion/procesos' },
        { label: 'Integración entre Sistemas' },
      ]}
      description="La capa de integración de AbbaCore elimina los silos de información entre tus sistemas corporativos. Con conectores nativos para SAP, Oracle, Salesforce, Microsoft 365 y más de 50 plataformas empresariales, más una API REST robusta y webhooks configurables, garantizamos flujos de datos sincronizados en tiempo real con SLA del 99.9%."
      features={[
        'Conectores nativos para SAP, Oracle, Salesforce y más',
        'API REST documentada y versioned para integraciones custom',
        'Webhooks configurables para eventos en tiempo real',
        'Transformación de datos con mapeo visual de campos',
        'Monitoreo de integraciones con alertas de fallos',
        'SLA de disponibilidad del 99.9% por contrato',
      ]}
      stats={[
        { value: '50+', label: 'Conectores disponibles' },
        { value: 'Tiempo real', label: 'Sincronización de datos' },
        { value: '99.9% SLA', label: 'Disponibilidad garantizada' },
      ]}
    />
  )
}
