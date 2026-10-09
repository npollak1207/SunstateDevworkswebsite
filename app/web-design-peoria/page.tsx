import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'

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
    <CityTemplate
      city="Peoria"
      region="West Valley"
      blurb="Custom web design and development for Peoria businesses. Sunstate DevWorks brings hand-coded, template-free sites to the West Valley."
      reasons={[
        'Peoria is one of the fastest-growing cities in the West Valley, and we help local businesses claim their spot online early.',
        'We build custom, not cookie-cutter, so your Peoria business does not look like every other site in town.',
        'Remote-friendly and responsive, we make working with a Valley studio effortless no matter where you are in Peoria.',
        'From the P83 entertainment district to family services, we build sites that rank and convert.',
      ]}
    />
  )
}
