'use client'
import { Cpu, Sparkles, ScanSearch, FolderOpen } from 'lucide-react'
import AppleLineupTemplate from '@/components/templates/AppleLineupTemplate'

const cards = [
  {
    Icon: Cpu,
    title: 'PaperStream Capture Pro',
    tagline: 'Captura inteligente sin errores.',
    href: '/software/captura-procesamiento/paperstream-capture-pro',
    bg: '#0d0f14',
    textLight: true,
  },
  {
    Icon: Sparkles,
    title: 'Capture Pro Premium',
    tagline: 'El poder de la automatización total.',
    href: '/software/captura-procesamiento/paperstream-capture-pro-premium',
    bg: '#001849',
    textLight: true,
  },
  {
    Icon: ScanSearch,
    title: 'OCR y Extracción Inteligente',
    tagline: 'Datos extraídos. Automáticamente.',
    href: '/software/captura-procesamiento/ocr-extraccion',
    bg: '#f0f4ff',
    textLight: false,
  },
  {
    Icon: FolderOpen,
    title: 'Gestión Documental ECM',
    tagline: 'Control total de tu información.',
    href: '/software/gestion-documental',
    bg: '#0d0f14',
    textLight: true,
  },
]

export default function SoftwarePage() {
  return (
    <AppleLineupTemplate
      heroTitle="Software"
      heroSubtitle="Plataformas inteligentes para capturar, gestionar y controlar el ciclo de vida de tus documentos."
      breadcrumbs={[{ label: 'Software' }]}
      sectionTitle="Explora nuestro software."
      cards={cards}
    />
  )
}
