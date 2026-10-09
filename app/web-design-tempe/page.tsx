import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Tempe AZ',
  description: 'Web, branding and app development in Tempe, AZ. Bold, hand-coded digital work for the home of ASU. No templates, 100% code ownership.',
  keywords: ['web design Tempe AZ', 'web developer Tempe Arizona', 'custom website Tempe AZ', 'branding agency Tempe', 'Tempe web design', 'mobile app developer Tempe AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-tempe' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-tempe',
    title: 'Web Design Tempe AZ | Sunstate DevWorks',
    description: 'Web, branding and app development in Tempe, AZ. Bold, hand-coded digital work for the home of ASU. No templates, 100% code ownership.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['tempe']} />
  )
}
