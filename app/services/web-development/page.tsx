import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'
import { openGraphBase } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Web Development',
  description: 'Hand-coded custom websites and web apps on Next.js. No WordPress, no templates. Built to rank and load in under a second. Phoenix and Gilbert, AZ.',
  alternates: { canonical: 'https://sunstatedevworks.com/services/web-development' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/services/web-development',
    title: 'Web Development | Sunstate DevWorks',
    description: 'Hand-coded custom websites and web apps on Next.js. No WordPress, no templates. Built to rank and load in under a second.',
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '01',
        title: 'Web Development',
        titleAccent: 'Development',
        tagline: 'Websites · Web Apps · E-Commerce',
        intro: 'Hand-coded, 100% custom websites and web applications. No WordPress, no templates, no bloat. Built to rank, built to last, and built to perform under real traffic.',
        included: [
          'Next.js, React and TypeScript, a genuinely modern stack',
          'A Lighthouse 100 performance target on every build',
          'SEO architecture baked in from the first line of code',
          'Fully responsive and accessible down to the smallest phone',
          'A headless CMS when you want to edit content yourself',
          'You own 100% of the code and the hosting on delivery',
        ],
        approach: [
          { t: 'Engineered, not assembled', d: 'Every page is written by hand, so there is no plugin bloat slowing you down and nothing to break when an update ships.' },
          { t: 'Fast by default', d: 'Sub-second loads are the baseline. Speed is both a ranking factor and a conversion factor, so we treat it as non-negotiable.' },
          { t: 'Built to be found', d: 'Clean semantic markup, structured data and a real technical SEO foundation mean Google can read and rank your site.' },
        ],
        faqs: [
          { q: 'Do you build on WordPress?', a: 'No. Everything is hand-coded in Next.js and React, which is why our sites load faster, rank better and do not break on plugin updates.' },
          { q: 'Can I edit the content myself?', a: 'Yes. When you want to manage your own content, we wire in a modern headless CMS with a simple editor, so no developer is needed for day-to-day changes.' },
          { q: 'Do I own the site when it is done?', a: 'Completely. Every line of code, every asset and the hosting setup are handed to you on delivery, with no lock-in.' },
        ],
      }}
    />
  )
}
