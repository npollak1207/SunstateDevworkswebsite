import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Chandler AZ',
  description: 'Custom web design, apps and AI in Chandler, AZ. Hand-coded software for the East Valley tech corridor. No templates, 100% yours.',
  keywords: ['web design Chandler AZ', 'web developer Chandler Arizona', 'custom website Chandler AZ', 'web app development Chandler', 'Chandler software developer', 'mobile app developer Chandler AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-chandler' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-chandler',
    title: 'Web Design Chandler AZ | Sunstate DevWorks',
    description: 'Custom web design, apps and AI in Chandler, AZ. Hand-coded software for the East Valley tech corridor. No templates, 100% yours.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['chandler']} />
  )
}
