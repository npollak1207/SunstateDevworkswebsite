import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Glendale AZ',
  description: 'Web design and development in Glendale, AZ. Fast, hand-coded sites, apps and branding for the West Valley. No templates, 100% yours.',
  keywords: ['web design Glendale AZ', 'web developer Glendale Arizona', 'custom website Glendale AZ', 'West Valley web design', 'small business web design Glendale', 'Glendale web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-glendale' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-glendale',
    title: 'Web Design Glendale AZ | Sunstate DevWorks',
    description: 'Web design and development in Glendale, AZ. Fast, hand-coded sites, apps and branding for the West Valley. No templates, 100% yours.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Glendale"
      region="West Valley"
      blurb="Web design and development for Glendale businesses. Sunstate DevWorks builds fast, hand-coded sites, apps and branding for the West Valley."
      reasons={[
        'Glendale is home to major sports and entertainment venues, and we build brands ready for that kind of spotlight.',
        'From Westgate businesses to neighborhood services, we design sites tuned for local search and real conversions.',
        'We are a Valley studio with direct access and no runaround, so Glendale clients always reach the people doing the work.',
        'Every site is hand-coded and lightning-fast, which means better rankings and happier Glendale customers.',
      ]}
    />
  )
}
