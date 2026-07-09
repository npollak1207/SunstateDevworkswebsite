import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Ahwatukee AZ',
  description: 'Web design, apps and AI in Ahwatukee, AZ. Hand-coded digital work for the Foothills community. No templates, you own everything.',
  keywords: ['web design Ahwatukee AZ', 'web developer Ahwatukee Arizona', 'custom website Ahwatukee AZ', 'Ahwatukee Foothills web design', 'small business web design Ahwatukee', 'Ahwatukee web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-ahwatukee' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-ahwatukee',
    title: 'Web Design Ahwatukee AZ | Sunstate DevWorks',
    description: 'Web design, apps and AI in Ahwatukee, AZ. Hand-coded digital work for the Foothills community. No templates, you own everything.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Ahwatukee"
      region="Phoenix · South Mountain"
      blurb="Web design, apps and AI for Ahwatukee businesses. Sunstate DevWorks builds hand-coded digital work for the Foothills community."
      reasons={[
        'Ahwatukee is a tight-knit Foothills community, and we build sites that connect with neighbors and local shoppers.',
        'We are close by in the East Valley, so Ahwatukee clients get local, personal service and direct access to the team.',
        'From professional services to local retail, we design fast sites tuned to rank in the searches that matter here.',
        'Hand-coded and template-free, so your Ahwatukee business stands apart from the cookie-cutter competition.',
      ]}
    />
  )
}
