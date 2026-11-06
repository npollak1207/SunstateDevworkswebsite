import type { Metadata } from 'next'
import { openGraphBase } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Phoenix Web Design & App Projects',
  description: 'Web design, app and branding projects from Sunstate DevWorks for Phoenix, Gilbert, Tempe and Scottsdale businesses and beyond. See the work and the results.',
  alternates: { canonical: 'https://sunstatedevworks.com/works' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/works',
    title: 'Our Work | Sunstate DevWorks',
    description: 'Selected projects: native iOS and Android apps, custom websites, branding and SEO for Arizona businesses and beyond.',
  },
}

// The page is a client component, so its metadata lives here.
export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children
}
