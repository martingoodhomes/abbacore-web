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
  metadataBase: new URL('https://www.abba-core.com'),
  title: {
    template: '%s | AbbaCore',
    default:  'AbbaCore — Digitalización y Automatización Empresarial en Latinoamérica',
  },
  description:
    'Soluciones de captura documental, ECM, automatización de procesos y gestión de calidad (EQMS) para empresas en Latinoamérica. Distribuidores certificados Kodak Alaris, Epson, Ricoh, Brother, Laserfiche y MasterControl.',
  keywords: [
    'escáneres de documentos', 'digitalización documental', 'ECM', 'gestión de contenido empresarial',
    'automatización de procesos', 'gestión de calidad', 'EQMS', 'QMS', 'OCR', 'ICR', 'OMR',
    'Kodak Alaris', 'Epson', 'Ricoh', 'Brother', 'Laserfiche', 'MasterControl', 'DocuWare', 'Kintone',
    'Colombia', 'Latinoamérica', 'Bogotá', 'captura documental',
  ],
  authors:  [{ name: 'AbbaCore', url: 'https://www.abba-core.com' }],
  creator:  'AbbaCore',
  openGraph: {
    type:      'website',
    locale:    'es_CO',
    url:       'https://www.abba-core.com',
    siteName:  'AbbaCore',
    title:     'AbbaCore — Digitalización y Automatización Empresarial en Latinoamérica',
    description:
      'Soluciones de captura documental, ECM, automatización y EQMS para empresas en Latinoamérica. Partners certificados: Kodak, Epson, Ricoh, Brother, Laserfiche, MasterControl.',
    images: [{
      url:    '/opengraph-image.png',
      width:  1200,
      height: 630,
      alt:    'AbbaCore — Digitalización y Automatización Empresarial',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'AbbaCore — Digitalización y Automatización Empresarial',
    description: 'Captura documental, ECM, automatización y EQMS para empresas en Latinoamérica.',
    images:      ['/opengraph-image.png'],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      'max-video-preview':  -1,
      'max-image-preview': 'large',
      'max-snippet':        -1,
    },
  },
  alternates: {
    canonical: 'https://www.abba-core.com',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id':   'https://www.abba-core.com/#organization',
                name:    'AbbaCore',
                url:     'https://www.abba-core.com',
                logo: {
                  '@type': 'ImageObject',
                  url:     'https://www.abba-core.com/images/Logo 1.png',
                },
                contactPoint: [{
                  '@type':       'ContactPoint',
                  telephone:     '+57-316-538-3437',
                  contactType:   'sales',
                  email:         'info@abba-core.com',
                  areaServed:    ['CO', 'MX', 'PE', 'CL', 'AR', 'EC'],
                  availableLanguage: 'Spanish',
                }],
                address: {
                  '@type':           'PostalAddress',
                  addressLocality:   'Bogotá',
                  addressRegion:     'Bogotá D.C.',
                  addressCountry:    'CO',
                },
              },
              {
                '@type':     'WebSite',
                '@id':       'https://www.abba-core.com/#website',
                url:         'https://www.abba-core.com',
                name:        'AbbaCore',
                inLanguage:  'es',
                publisher:   { '@id': 'https://www.abba-core.com/#organization' },
              },
            ],
          }) }}
        />
      </body>
    </html>
  )
}
