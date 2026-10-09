import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Surprise AZ',
  description: 'Custom web design in Surprise, AZ. Hand-coded, template-free sites, apps and branding for West Valley businesses. 100% code ownership.',
  keywords: ['web design Surprise AZ', 'web developer Surprise Arizona', 'custom website Surprise AZ', 'West Valley web design', 'small business web design Surprise', 'Surprise web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-surprise' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-surprise',
    title: 'Web Design Surprise AZ | Sunstate DevWorks',
    description: 'Custom web design in Surprise, AZ. Hand-coded, template-free sites, apps and branding for West Valley businesses. 100% code ownership.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['surprise']} />
  )
}
