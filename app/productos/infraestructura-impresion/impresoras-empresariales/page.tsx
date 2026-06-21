'use client'
import { Printer } from 'lucide-react'
import DetailTemplate from '@/components/templates/DetailTemplate'

export default function ImpresorasEmpresarialesPage() {
  return (
    <DetailTemplate
      Icon={Printer}
      title="Impresoras Empresariales"
      subtitle="Alto volumen, bajo costo por página y disponibilidad continua para entornos corporativos."
      breadcrumbs={[
        { label: 'Productos', href: '/productos' },
        { label: 'Infraestructura de Impresión', href: '/productos/infraestructura-impresion' },
        { label: 'Impresoras Empresariales' },
      ]}
      description="Las impresoras empresariales AbbaCore están optimizadas para departamentos y empresas con alta demanda de impresión diaria. Con velocidades de hasta 50 ppm, bandejas de gran capacidad y cartuchos de alto rendimiento, minimizan el costo por página mientras maximizan el tiempo activo de producción."
      features={[
        'Velocidad de impresión monocromo hasta 50 ppm',
        'Bandeja de papel de hasta 1.000 hojas',
        'Cartuchos de alto rendimiento hasta 30.000 páginas',
        'Ciclo mensual recomendado de 200.000 páginas',
        'Conexión en red Ethernet Gigabit y Wi-Fi',
        'Compatible con Google Cloud Print y AirPrint',
      ]}
      stats={[
        { value: '50 ppm', label: 'Velocidad de impresión' },
        { value: '1.000 hojas', label: 'Capacidad de bandeja' },
        { value: '99.5%', label: 'Uptime garantizado' },
      ]}
    />
  )
}
