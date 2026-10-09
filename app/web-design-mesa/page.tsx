import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'

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
    <CityTemplate
      city="Mesa"
      region="East Valley"
      blurb="Web design and development for Mesa businesses. Sunstate DevWorks builds hand-coded sites, apps and branding for Arizona's third-largest city."
      reasons={[
        'Mesa is the third-largest city in Arizona with a huge, diverse small-business base. We help local shops and services stand out online.',
        'We are minutes away in Gilbert, so Mesa clients get a genuinely local team, not a remote vendor.',
        'From the downtown Mesa arts district to the growing east side, we build sites tuned to rank in local search.',
        'Every project is hand-coded and fast, so your Mesa customers get a great experience on any device.',
      ]}
    />
  )
}
