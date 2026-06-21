import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import PageLoadAnimation from '@/components/PageLoadAnimation'
import WhatsAppButton from '@/components/WhatsAppButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AbbaCore - Donde la Tecnología Florece',
  description:
    'Nuestra infraestructura de alto rendimiento combina la precisión clínica con una arquitectura líquida para escalar tu empresa al siguiente nivel.',
  // Material Symbols variable font loaded via globals.css @import to avoid lint warning
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="light">
      <head />
      <body
        className={`${montserrat.variable} ${inter.variable} bg-surface font-body-md text-on-surface antialiased overflow-x-hidden`}
      >
        <PageLoadAnimation />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
