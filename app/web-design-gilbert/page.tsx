import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Gilbert AZ',
  description: 'Custom web design in Gilbert, AZ. Hand-coded sites, mobile apps, branding and AI for East Valley businesses. No templates, you own the code.',
  keywords: ['web design Gilbert AZ', 'web designer Gilbert Arizona', 'custom website Gilbert AZ', 'website developer Gilbert AZ', 'small business web design Gilbert', 'East Valley web design', 'mobile app developer Gilbert AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-gilbert' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-gilbert',
    title: 'Web Design Gilbert AZ | Sunstate DevWorks',
    description: 'Custom web design in Gilbert, AZ. Hand-coded sites, mobile apps, branding and AI for East Valley businesses. No templates, you own the code.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['gilbert']} />
  )
}
