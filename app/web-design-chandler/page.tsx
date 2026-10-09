import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'

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
    <CityTemplate
      city="Chandler"
      region="East Valley"
      blurb="Custom web design, apps and AI for Chandler businesses. Sunstate DevWorks is a Gilbert-based studio serving the tech corridor of the East Valley."
      reasons={[
        'Chandler is the Valley tech hub, home to Intel and a wave of ambitious startups. We speak the language of technical founders.',
        'We build web apps and custom software, not just marketing sites, so growing Chandler companies never outgrow their tools.',
        'Right next door in Gilbert, we offer in-person meetings and a direct line to the developers building your project.',
        'From downtown Chandler retail to enterprise SaaS, we ship products that scale with the businesses behind them.',
      ]}
    />
  )
}
