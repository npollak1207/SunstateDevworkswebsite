import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'

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
    <CityTemplate
      city="Gilbert"
      region="East Valley"
      blurb="Sunstate DevWorks is a Gilbert-based studio building custom websites, mobile apps, branding and AI tools for East Valley businesses. Hand-coded, never templated, and 100% yours."
      reasons={[
        'Gilbert is our home base. We know the East Valley market, the neighborhoods, and the local business landscape firsthand.',
        'In-person meetings are easy. No timezone lag and no account-manager relay, so you talk directly to the people building your project.',
        'Gilbert is one of the fastest-growing cities in the country. We understand what it takes to stand out in a competitive, family-friendly market full of ambitious small businesses.',
        'We have helped Gilbert businesses from Agritopia to the SanTan Village district build digital infrastructure that matches their ambition.',
      ]}
    />
  )
}
