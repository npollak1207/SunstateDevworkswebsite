import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Surprise AZ',
  description: 'Custom web design in Surprise, AZ. Hand-coded, template-free sites, apps and branding for West Valley businesses. 100% code ownership.',
  keywords: ['web design Surprise AZ', 'web developer Surprise Arizona', 'custom website Surprise AZ', 'West Valley web design', 'small business web design Surprise', 'Surprise web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-surprise' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-surprise',
    title: 'Web Design Surprise AZ | Sunstate DevWorks',
    description: 'Custom web design in Surprise, AZ. Hand-coded, template-free sites, apps and branding for West Valley businesses. 100% code ownership.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Surprise"
      region="West Valley"
      blurb="Custom web design and development for Surprise businesses. Sunstate DevWorks builds hand-coded, template-free sites for the West Valley."
      reasons={[
        'Surprise is growing fast, and we help local businesses build a digital presence that keeps pace with the city.',
        'We build custom sites engineered to rank in local search, so Surprise customers find you before your competitors.',
        'Responsive and remote-friendly, we make working with a Valley studio simple wherever you are in Surprise.',
        'Every project is fast, accessible and 100% yours to keep, with no platform lock-in.',
      ]}
    />
  )
}
