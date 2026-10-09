import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Queen Creek AZ',
  description: 'Custom web design in Queen Creek, AZ. Hand-coded sites, apps and branding for the fast-growing Southeast Valley. No templates, you own the code.',
  keywords: ['web design Queen Creek AZ', 'web developer Queen Creek Arizona', 'custom website Queen Creek AZ', 'Southeast Valley web design', 'small business web design Queen Creek', 'Queen Creek web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-queen-creek' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-queen-creek',
    title: 'Web Design Queen Creek AZ | Sunstate DevWorks',
    description: 'Custom web design in Queen Creek, AZ. Hand-coded sites, apps and branding for the fast-growing Southeast Valley. No templates, you own the code.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['queen-creek']} />
  )
}
