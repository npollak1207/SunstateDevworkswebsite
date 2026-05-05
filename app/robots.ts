import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.sunstatedevworks.com/sitemap.xml',
    host: 'https://www.sunstatedevworks.com',
  }
}
