import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Paradise Valley AZ',
  description: 'Premium branding and web design in Paradise Valley, AZ. Refined, hand-coded digital work for an elevated community. You own it all.',
  keywords: ['web design Paradise Valley AZ', 'luxury web design Paradise Valley', 'custom website Paradise Valley AZ', 'branding agency Paradise Valley', 'Paradise Valley web development', 'high-end web design Arizona'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-paradise-valley' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-paradise-valley',
    title: 'Web Design Paradise Valley AZ | Sunstate DevWorks',
    description: 'Premium branding and web design in Paradise Valley, AZ. Refined, hand-coded digital work for an elevated community. You own it all.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['paradise-valley']} />
  )
}
