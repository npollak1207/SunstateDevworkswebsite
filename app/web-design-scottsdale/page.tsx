import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Scottsdale AZ',
  description: 'Premium web design in Scottsdale, AZ. Hand-coded sites, apps and branding as polished as the city. No templates, you own everything.',
  keywords: ['web design Scottsdale AZ', 'web designer Scottsdale Arizona', 'luxury web design Scottsdale', 'custom website Scottsdale AZ', 'branding agency Scottsdale', 'Scottsdale web development'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-scottsdale' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-scottsdale',
    title: 'Web Design Scottsdale AZ | Sunstate DevWorks',
    description: 'Premium web design in Scottsdale, AZ. Hand-coded sites, apps and branding as polished as the city. No templates, you own everything.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Scottsdale"
      region="The Valley"
      blurb="Premium web design and development for Scottsdale businesses. Sunstate DevWorks builds hand-coded sites, apps and brands as polished as the city they serve."
      reasons={[
        'Scottsdale expects premium. We design and build digital work that matches the standard of Old Town, the waterfront and North Scottsdale.',
        'Luxury, hospitality and professional brands need sites that feel expensive and load instantly. That is exactly what custom code delivers.',
        'We are local to the Valley, so Scottsdale clients get direct access and in-person meetings whenever they want them.',
        'From med-spas to real estate to fine dining, we have built brands that command attention in a crowded, high-end market.',
      ]}
    />
  )
}
