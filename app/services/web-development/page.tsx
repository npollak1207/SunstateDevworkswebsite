import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'
import { openGraphBase } from '@/lib/metadata'

const description = 'Custom web development in Phoenix and Mesa, AZ. Hand-coded Next.js websites, web apps and e-commerce. No WordPress, no templates, and you own the code.'

export const metadata: Metadata = {
  title: 'Custom Web Development in Phoenix, AZ',
  description,
  alternates: { canonical: 'https://sunstatedevworks.com/services/web-development' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/services/web-development',
    title: 'Custom Web Development in Phoenix, AZ | Sunstate DevWorks',
    description,
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '01',
        slug: 'web-development',
        title: 'Web Development',
        heading: 'Custom web development',
        headingAccent: 'in Phoenix, AZ.',
        serviceType: 'Web design and development',
        tagline: 'Websites · Web Apps · E-Commerce',
        intro: 'Hand-coded, 100% custom websites and web applications for businesses across Phoenix and the East Valley. No WordPress, no templates, no bloat. Built to rank, built to last, and built to perform under real traffic.',
        overviewHeading: ['Websites that work as hard', 'as you do.'],
        overview: [
          'Most small-business websites in the Valley are built on WordPress themes or drag-and-drop builders. They look fine on launch day, then slow down with every plugin, break on updates and quietly lose rankings to faster competitors. We take the opposite approach: every page is written by hand in Next.js and React, so there is nothing extra to load and nothing to maintain that you did not ask for.',
          'That matters for search. Google ranks pages partly on how fast they load and how well they work on a phone, and a custom build lets us control both. Every site we ship comes with clean semantic markup, structured data, a sitemap and page-level metadata, so the technical SEO is done before your first visitor arrives.',
          'We build marketing sites for local service businesses, e-commerce stores with real checkout, and web apps with logins, dashboards and databases behind them. Most marketing sites ship in 3 to 5 weeks, and larger web apps or full redesigns typically run 6 to 10 weeks. Either way, you own the code, the domain and the hosting when we are done.',
        ],
        included: [
          'Next.js, React and TypeScript, a genuinely modern stack',
          'A Lighthouse 100 performance target on every build',
          'SEO architecture baked in from the first line of code',
          'Fully responsive and accessible down to the smallest phone',
          'A headless CMS when you want to edit content yourself',
          'You own 100% of the code and the hosting on delivery',
        ],
        useCasesHeading: ['What we build for', 'Phoenix businesses.'],
        useCases: [
          { t: 'Marketing websites', d: 'Fast, custom sites for contractors, medical practices, restaurants and professional services, with service pages, quote forms and click-to-call built for mobile.' },
          { t: 'Local SEO builds', d: 'Service-area and city pages, LocalBusiness structured data and a site structure that matches how your customers actually search.' },
          { t: 'E-commerce stores', d: 'Custom storefronts with a product catalog, inventory, Stripe checkout and an admin dashboard, without being boxed in by a template platform.' },
          { t: 'Web apps & portals', d: 'Customer portals, internal dashboards and booking systems with logins, databases and integrations into the tools you already use.' },
        ],
        approach: [
          { t: 'Engineered, not assembled', d: 'Every page is written by hand, so there is no plugin bloat slowing you down and nothing to break when an update ships.' },
          { t: 'Fast by default', d: 'Sub-second loads are the baseline. Speed is both a ranking factor and a conversion factor, so we treat it as non-negotiable.' },
          { t: 'Built to be found', d: 'Clean semantic markup, structured data and a real technical SEO foundation mean Google can read and rank your site.' },
        ],
        projects: ['zona', 'canyonSupply', 'cloak'],
        faqs: [
          { q: 'Do you build on WordPress?', a: 'No. Everything is hand-coded in Next.js and React, which is why our sites load faster, rank better and do not break on plugin updates.' },
          { q: 'How long does it take to build a website?', a: 'Most marketing sites ship in 3 to 5 weeks. Larger web apps or full redesigns typically run 6 to 10 weeks. You get a fixed timeline in the proposal before work starts.' },
          { q: 'Will my new website rank on Google?', a: 'Every site we build starts from a solid technical SEO foundation: fast load times, mobile-first layouts, structured data, clean URLs and a sitemap. Rankings also depend on your content, reviews and Google Business Profile, and we will tell you plainly what moves the needle in your market.' },
          { q: 'Can you redesign my existing website?', a: 'Yes. We rebuild outdated WordPress, Wix and Squarespace sites from scratch, carry over the content and URLs that already bring in traffic, and set up redirects so you keep your search history through the move.' },
          { q: 'Can I edit the content myself?', a: 'Yes. When you want to manage your own content, we wire in a modern headless CMS with a simple editor, so no developer is needed for day-to-day changes.' },
          { q: 'Do I own the site when it is done?', a: 'Completely. Every line of code, every asset and the hosting setup are handed to you on delivery, with no lock-in.' },
        ],
      }}
    />
  )
}
