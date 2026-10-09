import { MetadataRoute } from 'next'

const BASE = 'https://sunstatedevworks.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: stamping every URL with the build time teaches Google to
  // ignore lastmod. Add real per-page dates here if they're ever tracked.
  return [
    {
      url: BASE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services/web-development`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/services/mobile-apps`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/services/branding`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/services/ai-automation`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/works`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/works/con-gusto`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    {
      url: `${BASE}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Location landing pages
    {
      url: `${BASE}/web-design-phoenix`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-scottsdale`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-chandler`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-mesa`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-tempe`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-gilbert`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/web-design-peoria`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-glendale`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-queen-creek`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-surprise`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-ahwatukee`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/web-design-paradise-valley`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
