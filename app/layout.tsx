import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import ConditionalLayout from '@/components/ConditionalLayout'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sunstatedevworks.com'),
  title: {
    default: 'Sunstate DevWorks | Custom Web & Mobile Development — Gilbert, AZ',
    template: '%s | Sunstate DevWorks',
  },
  description: "Gilbert, Arizona's custom web development, iOS app, branding, and AI automation studio. Hand-coded sites. No templates. You own 100% of the code.",
  keywords: [
    'web development Gilbert AZ',
    'custom website design Phoenix',
    'mobile app development Arizona',
    'iOS app development Gilbert',
    'web developer Chandler AZ',
    'Next.js developer Arizona',
    'branding agency Gilbert AZ',
    'AI automation Arizona',
    'small business website Phoenix',
    'custom web design Mesa AZ',
  ],
  authors: [{ name: 'Sunstate DevWorks', url: 'https://www.sunstatedevworks.com' }],
  creator: 'Sunstate DevWorks',
  publisher: 'Sunstate DevWorks',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunstatedevworks.com',
    siteName: 'Sunstate DevWorks',
    title: 'Sunstate DevWorks | Custom Web & Mobile Development — Gilbert, AZ',
    description: "Gilbert, Arizona's custom web development, iOS app, branding, and AI automation studio. Hand-coded sites. No templates. You own 100% of the code.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sunstate DevWorks — Custom Web & Mobile Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunstate DevWorks | Custom Web & Mobile Development',
    description: 'Gilbert, AZ dev studio. Custom web, iOS apps, branding, AI automation. You own 100% of the code.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.sunstatedevworks.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: '', // paste your Google Search Console verification token here
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18140545756" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18140545756');
        `}</Script>
      </head>
      <body>
      <StructuredData />
      <ConditionalLayout>{children}</ConditionalLayout>
      </body>
      </html>
  )
}