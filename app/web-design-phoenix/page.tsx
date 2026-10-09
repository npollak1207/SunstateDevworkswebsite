import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Phoenix AZ',
  description: 'Custom web design and development in Phoenix, AZ. Hand-coded sites, apps, branding and AI built to rank. No templates, 100% code ownership.',
  keywords: ['web design Phoenix AZ', 'web developer Phoenix Arizona', 'custom website Phoenix AZ', 'Phoenix web design agency', 'small business website Phoenix', 'Next.js developer Phoenix', 'mobile app developer Phoenix AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-phoenix' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-phoenix',
    title: 'Web Design Phoenix AZ | Sunstate DevWorks',
    description: 'Custom web design and development in Phoenix, AZ. Hand-coded sites, apps, branding and AI built to rank. No templates, 100% code ownership.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['phoenix']} />
  )
}
