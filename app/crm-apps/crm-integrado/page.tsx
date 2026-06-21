'use client'
import { Users } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function CRMIntegradoPage() {
  return (
    <DetailTemplate
      title="CRM Integrado"
      subtitle="Gestiona el ciclo completo de tus relaciones comerciales desde una plataforma conectada a tu ecosistema documental."
      breadcrumbs={[
        { label: 'CRM y Apps', href: '/crm-apps' },
        { label: 'CRM Integrado' },
      ]}
      description="Nuestro CRM integrado conecta la gestión de clientes con los procesos documentales y de automatización de AbbaCore, creando un flujo de información continuo desde el primer contacto hasta la postventa."
      features={[
        'Gestión centralizada de contactos, cuentas y oportunidades',
        'Vinculación de documentos y expedientes a cada cliente',
        'Automatización de seguimientos y alertas comerciales',
        'Dashboards de ventas y métricas en tiempo real',
        'Integración nativa con ECM, ERP y Office 365',
        'Historial completo de interacciones y documentos',
      ]}
      stats={[
        { value: '360°', label: 'Visibilidad del cliente' },
        { value: '3x', label: 'Más rápido en seguimiento' },
        { value: '0', label: 'Silos de información' },
      ]}
      Icon={Users}
    />
  )
}
