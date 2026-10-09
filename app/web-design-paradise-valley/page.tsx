import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'
import { openGraphBase } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Web Design Paradise Valley AZ',
  description: 'Premium branding and web design in Paradise Valley, AZ. Refined, hand-coded digital work for an elevated community. You own it all.',
  keywords: ['web design Paradise Valley AZ', 'luxury web design Paradise Valley', 'custom website Paradise Valley AZ', 'branding agency Paradise Valley', 'Paradise Valley web development', 'high-end web design Arizona'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-paradise-valley' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/web-design-paradise-valley',
    title: 'Web Design Paradise Valley AZ | Sunstate DevWorks',
    description: 'Premium branding and web design in Paradise Valley, AZ. Refined, hand-coded digital work for an elevated community. You own it all.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Paradise Valley"
      region="The Valley"
      blurb="Premium branding and web design for Paradise Valley businesses. Sunstate DevWorks builds refined, hand-coded digital work as elevated as the community it serves."
      reasons={[
        'Paradise Valley is one of the most affluent communities in Arizona, and its brands deserve digital work to match. We deliver that polish.',
        'Luxury real estate, resorts and high-end services need sites that feel exclusive and load instantly. Custom code makes that possible.',
        'We are a local Valley studio offering discreet, direct, in-person collaboration.',
        'From identity to a flawless website, everything is built in-house and owned entirely by you.',
      ]}
    />
  )
}
