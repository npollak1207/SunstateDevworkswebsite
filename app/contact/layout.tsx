import type { Metadata } from 'next'
import { openGraphBase } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Contact | Free Project Quote',
  description: 'Start a project with Sunstate DevWorks. Get a flat-rate quote for custom web design, mobile apps, branding or AI automation from our Gilbert, AZ studio. Call (480) 793-9161.',
  alternates: { canonical: 'https://sunstatedevworks.com/contact' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/contact',
    title: 'Contact | Sunstate DevWorks',
    description: 'Get a flat-rate quote for custom web design, mobile apps, branding or AI automation from our Gilbert, AZ studio.',
  },
}

// The page is a client component, so its metadata lives here.
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
