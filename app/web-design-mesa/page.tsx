import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Mesa AZ',
  description: 'Custom web design and development in Mesa, AZ. Hand-coded, fast, SEO-ready sites, apps and branding. No templates, you own the code.',
  keywords: ['web design Mesa AZ', 'web developer Mesa Arizona', 'custom website Mesa AZ', 'small business web design Mesa', 'East Valley web design', 'mobile app developer Mesa AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-mesa' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-mesa',
    title: 'Web Design Mesa AZ | Sunstate DevWorks',
    description: 'Custom web design and development in Mesa, AZ. Hand-coded, fast, SEO-ready sites, apps and branding. No templates, you own the code.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['mesa']} />
  )
}
