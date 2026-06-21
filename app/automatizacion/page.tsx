'use client'
import { FileText, GitBranch, Network, Wrench } from 'lucide-react'
import AppleLineupTemplate from '@/components/templates/AppleLineupTemplate'

const cards = [
  {
    Icon: FileText,
    title: 'Automatización Documental',
    tagline: 'Documentos que se procesan solos.',
    href: '/automatizacion/procesos/automatizacion-documental',
    bg: '#0d0f14',
    textLight: true,
  },
  {
    Icon: GitBranch,
    title: 'Flujos de Aprobación',
    tagline: 'Decisiones ágiles. Sin cuellos de botella.',
    href: '/automatizacion/procesos/flujos-aprobacion',
    bg: '#1d2d44',
    textLight: true,
  },
  {
    Icon: Network,
    title: 'Integración entre Sistemas',
    tagline: 'Conecta todo. Sin fricciones.',
    href: '/automatizacion/procesos/integracion-sistemas',
    bg: '#eff6ff',
    textLight: false,
  },
  {
    Icon: Wrench,
    title: 'Automatización a la Medida',
    tagline: 'Soluciones únicas para tu operación.',
    href: '/automatizacion/procesos/automatizacion-medida',
    bg: '#0050cb',
    textLight: true,
  },
]

export default function AutomatizacionPage() {
  return (
    <AppleLineupTemplate
      heroTitle="Automatización"
      heroSubtitle="Convierte procesos manuales en flujos inteligentes que operan solos, con precisión y sin errores."
      breadcrumbs={[{ label: 'Automatización' }]}
      sectionTitle="Explora la automatización."
      cards={cards}
    />
  )
}
