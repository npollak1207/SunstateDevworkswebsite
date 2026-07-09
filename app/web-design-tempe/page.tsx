import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Tempe AZ',
  description: 'Web, branding and app development in Tempe, AZ. Bold, hand-coded digital work for the home of ASU. No templates, 100% code ownership.',
  keywords: ['web design Tempe AZ', 'web developer Tempe Arizona', 'custom website Tempe AZ', 'branding agency Tempe', 'Tempe web design', 'mobile app developer Tempe AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-tempe' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-tempe',
    title: 'Web Design Tempe AZ | Sunstate DevWorks',
    description: 'Web, branding and app development in Tempe, AZ. Bold, hand-coded digital work for the home of ASU. No templates, 100% code ownership.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Tempe"
      region="East Valley"
      blurb="Web, branding and app development for Tempe businesses. Sunstate DevWorks builds bold, hand-coded digital work for the home of ASU."
      reasons={[
        'Tempe moves fast, powered by ASU and a young, digital-first audience. We build sites and brands that resonate with them.',
        'From Mill Avenue storefronts to campus startups, we design work that feels current and performs under real traffic.',
        'We are right next door in Gilbert, so Tempe clients get in-person collaboration and a direct line to the team.',
        'Branding, web and mobile under one roof means your Tempe business shows up consistent everywhere it matters.',
      ]}
    />
  )
}
