import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Glendale AZ',
  description: 'Web design and development in Glendale, AZ. Fast, hand-coded sites, apps and branding for the West Valley. No templates, 100% yours.',
  keywords: ['web design Glendale AZ', 'web developer Glendale Arizona', 'custom website Glendale AZ', 'West Valley web design', 'small business web design Glendale', 'Glendale web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-glendale' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-glendale',
    title: 'Web Design Glendale AZ | Sunstate DevWorks',
    description: 'Web design and development in Glendale, AZ. Fast, hand-coded sites, apps and branding for the West Valley. No templates, 100% yours.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['glendale']} />
  )
}
