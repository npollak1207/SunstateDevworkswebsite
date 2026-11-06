import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'
import { openGraphBase } from '@/lib/metadata'

const description = 'Branding and logo design in Phoenix and Gilbert, AZ. Strategy, logo, color, typography and full brand guidelines, built to make a small team look like the leader.'

export const metadata: Metadata = {
  title: 'Branding & Logo Design in Phoenix, AZ',
  description,
  alternates: { canonical: 'https://sunstatedevworks.com/services/branding' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/services/branding',
    title: 'Branding & Logo Design in Phoenix, AZ | Sunstate DevWorks',
    description,
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '03',
        slug: 'branding',
        title: 'Branding & Identity',
        heading: 'Branding & logo design',
        headingAccent: 'in Phoenix, AZ.',
        serviceType: 'Branding and identity design',
        tagline: 'Logo · Color · Type · Guidelines',
        intro: 'Identity that holds up everywhere, from your website to your trucks, uniforms and social feeds. We start with strategy, not aesthetics, then build a system that makes a small Arizona team look like the category leader.',
        overviewHeading: ['More than', 'a logo.'],
        overview: [
          'A logo on its own does not make a brand. What makes a business look established is consistency: the same colors, type and tone on the website, the vehicle wrap, the invoice and the Instagram post. We design that system, document it, and hand you the files so anyone you work with can apply it correctly.',
          'Because we also build websites and apps, every identity is designed to work on screens from day one: marks that read at small sizes, colors that pass accessibility contrast, and type that renders well on a phone. When you brand and build with us, the site launches looking exactly like the brand guide.',
          'We have rebranded Valley businesses including Cloak Wraps in Tempe and Easy Landscape Solutions in Gilbert, and built the brand system for DWGS, a renovation contractor serving military housing and multifamily portfolios nationwide.',
        ],
        included: [
          'A primary logo plus every mark and format you need',
          'A complete color system in HEX, RGB and CMYK',
          'A typography pairing with clear usage rules',
          'A brand guidelines document plus all source files',
          'Social and marketing templates to launch with',
          'Full ownership of every file and asset',
        ],
        useCasesHeading: ['When it is time', 'to rebrand.'],
        useCases: [
          { t: 'New businesses', d: 'A professional identity from day one, so you look established before your first customer walks in.' },
          { t: 'Outgrown brands', d: 'Companies whose look no longer matches the quality of their work or the customers they want to win.' },
          { t: 'Rebrand + new website', d: 'A refreshed identity and a custom site designed together and launched together, so everything lines up.' },
          { t: 'Growing teams', d: 'Guidelines, templates and source files that keep a growing team, and every vendor you hire, on brand.' },
        ],
        approach: [
          { t: 'Strategy first', d: 'We define what you stand for and who you are talking to before a single pixel moves, so the design has a reason to exist.' },
          { t: 'A system, not a logo', d: 'You get a flexible identity that stays consistent across a website, a business card, an app icon and a billboard.' },
          { t: 'Made to scale', d: 'Guidelines and source files keep your brand coherent as you grow, whoever picks up the work next.' },
        ],
        projects: ['cloak', 'easyLandscape', 'dwgs'],
        faqs: [
          { q: 'Is this just a logo?', a: 'No. A logo is one piece. You get a full identity system: color, typography, usage rules and the guidelines to keep it all consistent.' },
          { q: 'Can you refresh my logo without starting over?', a: 'Yes. If your current logo has recognition worth keeping, we can refine it rather than replace it, then build the color, type and guidelines around it.' },
          { q: 'How long does a branding project take?', a: 'It depends on scope. A logo refresh moves faster than a full identity system with guidelines and templates. You get a fixed timeline in the written proposal before work starts.' },
          { q: 'What do I receive at the end?', a: 'A primary logo and its variations, a color palette with HEX, RGB and CMYK values, typography rules, a brand guidelines document, launch templates, and every editable source file.' },
          { q: 'Do I get the source files?', a: 'Always. You receive every editable source file and format, so you are never locked out of your own brand.' },
          { q: 'Can you brand and build the site?', a: 'Yes, and it is where we shine. Branding and web under one roof means the identity and the website are perfectly in sync.' },
        ],
      }}
    />
  )
}
