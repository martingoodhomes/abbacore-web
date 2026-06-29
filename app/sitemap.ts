import { MetadataRoute } from 'next'

const BASE = 'https://www.abba-core.com'
const NOW  = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                                        lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/productos/escaneres`,                               lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/software/gestion-de-contenido-empresarial`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/software/gestion-de-calidad`,                      lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/software/automatizacion-no-code`,                   lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/software/automatizacion-de-captura`,                lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/software/kitchen-display-systems`,                  lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/software`,                                          lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/productos`,                                         lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/crm-apps`,                                          lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/soluciones/ria`,                                    lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/nosotros`,                                          lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contacto`,                                          lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
