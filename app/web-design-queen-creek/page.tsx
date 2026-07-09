import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Queen Creek AZ',
  description: 'Custom web design in Queen Creek, AZ. Hand-coded sites, apps and branding for the fast-growing Southeast Valley. No templates, you own the code.',
  keywords: ['web design Queen Creek AZ', 'web developer Queen Creek Arizona', 'custom website Queen Creek AZ', 'Southeast Valley web design', 'small business web design Queen Creek', 'Queen Creek web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-queen-creek' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-queen-creek',
    title: 'Web Design Queen Creek AZ | Sunstate DevWorks',
    description: 'Custom web design in Queen Creek, AZ. Hand-coded sites, apps and branding for the fast-growing Southeast Valley. No templates, you own the code.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Queen Creek"
      region="Southeast Valley"
      blurb="Web design, apps and branding for Queen Creek businesses. Sunstate DevWorks is a neighboring Gilbert studio building custom digital work for the Southeast Valley."
      reasons={[
        'Queen Creek is booming, and getting online early with a standout site is a real competitive edge. We make that happen.',
        'We are just up the road in Gilbert, so Queen Creek clients get a true local partner and easy in-person meetings.',
        'From agritourism and events to trades and retail, we build sites tuned to how Queen Creek customers actually search.',
        'Hand-coded, fast and fully owned by you, with no templates and no lock-in.',
      ]}
    />
  )
}
