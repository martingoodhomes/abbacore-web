'use client'
import { Archive } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function ArchivoDigitalPage() {
  return (
    <DetailTemplate
      Icon={Archive}
      title="Archivo Digital"
      subtitle="Almacenamiento seguro, estructurado y escalable para toda tu documentación empresarial."
      breadcrumbs={[
        { label: 'Software', href: '/software' },
        { label: 'Gestión Documental', href: '/software/gestion-documental' },
        { label: 'Archivo Digital' },
      ]}
      description="El sistema de Archivo Digital de AbbaCore provee almacenamiento empresarial con cifrado AES-256, estructura jerárquica ilimitada y disponibilidad garantizada del 99.99%. Cada documento queda versionado, respaldado automáticamente y accesible desde cualquier dispositivo autorizado, cumpliendo con los estándares de retención documental exigidos por la normativa colombiana."
      features={[
        'Cifrado AES-256 en tránsito y en reposo',
        'Estructura de carpetas ilimitada y personalizable',
        'Versionado automático de cada modificación',
        'Respaldo automático en múltiples ubicaciones',
        'Control de acceso granular por usuario y rol',
        'Cumplimiento con normativa de retención documental',
      ]}
      stats={[
        { value: '∞', label: 'Capacidad de almacenamiento' },
        { value: '99.99%', label: 'Disponibilidad garantizada' },
        { value: 'AES-256', label: 'Estándar de cifrado' },
      ]}
    />
  )
}
