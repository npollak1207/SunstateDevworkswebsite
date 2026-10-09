import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'
import { CITY_CONTENT } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Web Design Ahwatukee AZ',
  description: 'Web design, apps and AI in Ahwatukee, AZ. Hand-coded digital work for the Foothills community. No templates, you own everything.',
  keywords: ['web design Ahwatukee AZ', 'web developer Ahwatukee Arizona', 'custom website Ahwatukee AZ', 'Ahwatukee Foothills web design', 'small business web design Ahwatukee', 'Ahwatukee web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-ahwatukee' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-ahwatukee',
    title: 'Web Design Ahwatukee AZ | Sunstate DevWorks',
    description: 'Web design, apps and AI in Ahwatukee, AZ. Hand-coded digital work for the Foothills community. No templates, you own everything.',
  },
}

export default function Page() {
  return (
    <CityTemplate content={CITY_CONTENT['ahwatukee']} />
  )
}
