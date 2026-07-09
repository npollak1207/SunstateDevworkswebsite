import type { Metadata } from 'next'
import CityTemplate from '@/components/CityTemplate'

export const metadata: Metadata = {
  title: 'Web Design Phoenix AZ',
  description: 'Custom web design and development in Phoenix, AZ. Hand-coded sites, apps, branding and AI built to rank. No templates, 100% code ownership.',
  keywords: ['web design Phoenix AZ', 'web developer Phoenix Arizona', 'custom website Phoenix AZ', 'Phoenix web design agency', 'small business website Phoenix', 'Next.js developer Phoenix', 'mobile app developer Phoenix AZ'],
  alternates: { canonical: 'https://sunstatedevworks.com/web-design-phoenix' },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-phoenix',
    title: 'Web Design Phoenix AZ | Sunstate DevWorks',
    description: 'Custom web design and development in Phoenix, AZ. Hand-coded sites, apps, branding and AI built to rank. No templates, 100% code ownership.',
  },
}

export default function Page() {
  return (
    <CityTemplate
      city="Phoenix"
      region="The Valley"
      blurb="Sunstate DevWorks builds custom websites, apps, branding and AI for Phoenix businesses. Hand-coded from scratch, built to rank, and 100% owned by you."
      reasons={[
        'Phoenix is the fifth-largest city in the country, and standing out online here takes more than a template. We build sites engineered to rank and convert.',
        'We are a short drive away in Gilbert, so Phoenix clients get a local partner, not an offshore ticket queue.',
        'From downtown startups to established firms in Midtown and along Camelback, we build digital products that hold their own against national competitors.',
        'Every site we ship is fast, accessible and SEO-ready, so Phoenix customers find you first.',
      ]}
    />
  )
}
