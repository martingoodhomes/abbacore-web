import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.abba-core.com/sitemap.xml',
    host:    'https://www.abba-core.com',
  }
}
