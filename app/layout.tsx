import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import ConditionalLayout from '@/components/ConditionalLayout'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://sunstatedevworks.com'),
  title: {
    default: 'Sunstate DevWorks | Custom Web & Mobile Development â€” Phoenix, AZ',
    template: '%s | Sunstate DevWorks â€” Phoenix Web Design',
  },
  description: "Phoenix-area custom web design, iOS app development, branding & AI automation. Hand-coded, no templates, 100% code ownership. Serving Gilbert, Scottsdale, Chandler, Mesa, Tempe & all of metro Phoenix.",
  keywords: [
    // Core service + city combos
    'web design Phoenix AZ',
    'web design Gilbert AZ',
    'web design Scottsdale AZ',
    'web design Chandler AZ',
    'web design Mesa AZ',
    'web design Tempe AZ',
    'web design Peoria AZ',
    'web design Glendale AZ',
    'web design Queen Creek AZ',
    'web design Surprise AZ',
    'web design Paradise Valley AZ',
    'web design Ahwatukee AZ',
    // Web development variants
    'custom website design Phoenix Arizona',
    'custom web development Gilbert AZ',
    'website developer Phoenix AZ',
    'web developer Chandler AZ',
    'Next.js developer Arizona',
    'small business website Phoenix AZ',
    'small business website Gilbert AZ',
    'affordable web design Phoenix AZ',
    // Mobile
    'mobile app development Phoenix AZ',
    'iOS app development Gilbert AZ',
    'iOS app developer Arizona',
    'mobile app developer Phoenix',
    'React Native developer Arizona',
    // Branding
    'branding agency Phoenix AZ',
    'branding agency Gilbert AZ',
    'logo design Phoenix Arizona',
    'brand identity design Scottsdale',
    // AI
    'AI automation Phoenix AZ',
    'AI integration Gilbert AZ',
    'business automation Arizona',
    'chatbot development Phoenix',
    // Agency / general
    'web design agency Phoenix AZ',
    'digital agency Gilbert Arizona',
    'East Valley web design agency',
    'no WordPress custom code Arizona',
    'hand coded website Phoenix',
  ],
  authors: [{ name: 'Sunstate DevWorks', url: 'https://sunstatedevworks.com' }],
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
    url: 'https://sunstatedevworks.com',
    siteName: 'Sunstate DevWorks',
    title: 'Sunstate DevWorks | Custom Web & Mobile Development â€” Phoenix, AZ',
    description: "Phoenix-area custom web design, iOS apps, branding & AI automation. Hand-coded, no templates, 100% yours. Serving Gilbert, Scottsdale, Chandler, Mesa, Tempe & all of metro Phoenix.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sunstate DevWorks â€” Custom Web & Mobile Development, Phoenix AZ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunstate DevWorks | Phoenix Web Design & Mobile Apps',
    description: 'Phoenix-area dev studio. Custom web, iOS apps, branding, AI automation. Gilbert, Scottsdale, Chandler, Mesa & beyond. You own 100% of the code.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://sunstatedevworks.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'is2iqI8ep5uW2w9elE6ctKxK6N-Y2m_mFfcvngJIpQM',
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