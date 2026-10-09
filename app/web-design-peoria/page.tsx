import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Peoria AZ',
  description: 'Custom web design in Peoria, AZ. Hand-coded, template-free sites, apps and branding for West Valley businesses. You own everything.',
  keywords: ['web design Peoria AZ', 'web developer Peoria Arizona', 'custom website Peoria AZ', 'West Valley web design', 'small business web design Peoria', 'Peoria web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-peoria' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-peoria',
    title: 'Web Design Peoria AZ | Sunstate DevWorks',
    description: 'Custom web design in Peoria, AZ. Hand-coded, template-free sites, apps and branding for West Valley businesses. You own everything.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['peoria']} />
  )
}
