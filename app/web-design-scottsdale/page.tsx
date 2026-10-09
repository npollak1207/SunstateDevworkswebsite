import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Scottsdale AZ',
  description: 'Premium web design in Scottsdale, AZ. Hand-coded sites, apps and branding as polished as the city. No templates, you own everything.',
  keywords: ['web design Scottsdale AZ', 'web designer Scottsdale Arizona', 'luxury web design Scottsdale', 'custom website Scottsdale AZ', 'branding agency Scottsdale', 'Scottsdale web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-scottsdale' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-scottsdale',
    title: 'Web Design Scottsdale AZ | Sunstate DevWorks',
    description: 'Premium web design in Scottsdale, AZ. Hand-coded sites, apps and branding as polished as the city. No templates, you own everything.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['scottsdale']} />
  )
}
