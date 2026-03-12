import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'Sunstate Devworks — Web, Mobile & AI Development',
  description: 'Custom web development, mobile apps, branding, AI & automation from Gilbert, Arizona.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
