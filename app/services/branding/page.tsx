import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'

export const metadata: Metadata = {
  title: 'Branding & Identity',
  description: 'Strategic branding and identity design: logo, color, typography and full brand guidelines. Built to make a small team look like the leader. Gilbert, AZ.',
  alternates: { canonical: 'https://sunstatedevworks.com/services/branding' },
  openGraph: {
    url: 'https://sunstatedevworks.com/services/branding',
    title: 'Branding & Identity | Sunstate DevWorks',
    description: 'Strategic branding and identity design: logo, color, typography and full brand guidelines. Built to make a small team look like the leader.',
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '03',
        title: 'Branding & Identity',
        titleAccent: 'Identity',
        tagline: 'Logo · Color · Type · Guidelines',
        intro: 'Identity that holds up everywhere, from digital to print to social. We start with strategy, not aesthetics, then build a system that makes a small team look like the category leader.',
        included: [
          'A primary logo plus every mark and format you need',
          'A complete color system in HEX, RGB and CMYK',
          'A typography pairing with clear usage rules',
          'A brand guidelines document plus all source files',
          'Social and marketing templates to launch with',
          'Full ownership of every file and asset',
        ],
        approach: [
          { t: 'Strategy first', d: 'We define what you stand for and who you are talking to before a single pixel moves, so the design has a reason to exist.' },
          { t: 'A system, not a logo', d: 'You get a flexible identity that stays consistent across a website, a business card, an app icon and a billboard.' },
          { t: 'Made to scale', d: 'Guidelines and source files keep your brand coherent as you grow, whoever picks up the work next.' },
        ],
        faqs: [
          { q: 'Is this just a logo?', a: 'No. A logo is one piece. You get a full identity system: color, typography, usage rules and the guidelines to keep it all consistent.' },
          { q: 'Do I get the source files?', a: 'Always. You receive every editable source file and format, so you are never locked out of your own brand.' },
          { q: 'Can you brand and build the site?', a: 'Yes, and it is where we shine. Branding and web under one roof means the identity and the website are perfectly in sync.' },
        ],
      }}
    />
  )
}
