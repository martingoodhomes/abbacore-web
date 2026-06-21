'use client'
import { Copy } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function MultifuncionalesPage() {
  return (
    <DetailTemplate
      Icon={Copy}
      title="Multifuncionales"
      subtitle="Imprime, escanea, copia y envía desde un solo equipo conectado a toda tu organización."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Infraestructura de Impresión', href: '/productos/infraestructura-impresion' },
        { label: 'Multifuncionales' },
      ]}
      description="Las multifuncionales AbbaCore son el centro neurálgico de la oficina moderna. Combinan impresión a color de alta velocidad, escáner dúplex automático, copiadora y sistema de fax digital en un único equipo conectado a tu red corporativa mediante Wi-Fi 6. Administración centralizada desde panel web con reportes de uso en tiempo real."
      features={[
        'Velocidad de impresión de hasta 45 ppm en color',
        'Escáner dúplex automático integrado',
        'Conectividad Wi-Fi 6 y Ethernet Gigabit',
        'Panel táctil de 10 pulgadas con interfaz personalizable',
        'Bandeja de papel de hasta 550 hojas',
        'Administración remota centralizada vía web',
      ]}
      stats={[
        { value: '45 ppm', label: 'Velocidad de impresión' },
        { value: '550 hojas', label: 'Capacidad de bandeja' },
        { value: 'Wi-Fi 6', label: 'Conectividad' },
      ]}
    />
  )
}
