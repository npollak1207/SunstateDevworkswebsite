export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://sunstatedevworks.com/#business',
        name: 'Sunstate DevWorks',
        alternateName: 'Sunstate Devworks',
        url: 'https://sunstatedevworks.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sunstatedevworks.com/logo.png',
          width: 400,
          height: 100,
        },
        image: 'https://sunstatedevworks.com/opengraph-image',
        description: 'Custom web design, iOS & Android app development, branding, and AI automation agency based in Gilbert, Arizona. Serving Phoenix, Scottsdale, Chandler, Mesa, Tempe, and all of the greater Phoenix metro area.',
        telephone: '(480) 793-9161',
        email: 'contact@sunstatedevworks.com',
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gilbert',
          addressRegion: 'AZ',
          postalCode: '85296',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.3528,
          longitude: -111.789,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Gilbert', sameAs: 'https://en.wikipedia.org/wiki/Gilbert,_Arizona' },
          { '@type': 'City', name: 'Phoenix', sameAs: 'https://en.wikipedia.org/wiki/Phoenix,_Arizona' },
          { '@type': 'City', name: 'Scottsdale', sameAs: 'https://en.wikipedia.org/wiki/Scottsdale,_Arizona' },
          { '@type': 'City', name: 'Chandler', sameAs: 'https://en.wikipedia.org/wiki/Chandler,_Arizona' },
          { '@type': 'City', name: 'Mesa', sameAs: 'https://en.wikipedia.org/wiki/Mesa,_Arizona' },
          { '@type': 'City', name: 'Tempe', sameAs: 'https://en.wikipedia.org/wiki/Tempe,_Arizona' },
          { '@type': 'City', name: 'Peoria', sameAs: 'https://en.wikipedia.org/wiki/Peoria,_Arizona' },
          { '@type': 'City', name: 'Glendale', sameAs: 'https://en.wikipedia.org/wiki/Glendale,_Arizona' },
          { '@type': 'City', name: 'Surprise', sameAs: 'https://en.wikipedia.org/wiki/Surprise,_Arizona' },
          { '@type': 'City', name: 'Queen Creek', sameAs: 'https://en.wikipedia.org/wiki/Queen_Creek,_Arizona' },
          { '@type': 'City', name: 'San Tan Valley' },
          { '@type': 'City', name: 'Ahwatukee' },
          { '@type': 'City', name: 'Paradise Valley', sameAs: 'https://en.wikipedia.org/wiki/Paradise_Valley,_Arizona' },
          { '@type': 'City', name: 'Fountain Hills' },
          { '@type': 'City', name: 'Apache Junction' },
          { '@type': 'AdministrativeArea', name: 'East Valley' },
          { '@type': 'AdministrativeArea', name: 'Greater Phoenix Metropolitan Area' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web Design & Development',
                description: 'Hand-coded websites and web applications built with Next.js. No templates, no WordPress. Fast, SEO-optimized, and 100% yours.',
                url: 'https://sunstatedevworks.com/services/web-development',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'iOS & Mobile App Development',
                description: 'Native iOS apps with SwiftUI and cross-platform apps with React Native. From MVP to App Store launch.',
                url: 'https://sunstatedevworks.com/services/mobile-apps',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Branding & Identity Design',
                description: 'Logo design, color systems, typography, and brand guides built in Figma. Identity that holds up everywhere.',
                url: 'https://sunstatedevworks.com/services/branding',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Integration & Business Automation',
                description: 'Custom AI chatbots, Claude & OpenAI integrations, n8n workflows, and business automation that multiplies output.',
                url: 'https://sunstatedevworks.com/services/ai-automation',
              },
            },
          ],
        },
        sameAs: [
          'https://www.instagram.com/sunstatedevworks',
          'https://www.linkedin.com/company/sunstatedevworks',
        ],
      },

      {
        '@type': 'WebSite',
        '@id': 'https://sunstatedevworks.com/#website',
        url: 'https://sunstatedevworks.com',
        name: 'Sunstate DevWorks',
        description: 'Phoenix-area custom web design, mobile apps, branding, and AI automation agency.',
        publisher: { '@id': 'https://sunstatedevworks.com/#business' },
      },
    ],
  }

  return <JsonLd data={schema} />
}

// Homepage-only entities. The FAQ is built from the same list the page renders,
// since Google ignores (or penalizes) FAQ markup that isn't visible on the page.
export function HomeStructuredData({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://sunstatedevworks.com/#webpage',
        url: 'https://sunstatedevworks.com',
        name: 'Sunstate DevWorks | Custom Web & Mobile Development, Phoenix AZ',
        description: 'Phoenix-area custom web design, iOS app development, branding & AI automation. Hand-coded, no templates, 100% code ownership.',
        isPartOf: { '@id': 'https://sunstatedevworks.com/#website' },
        about: { '@id': 'https://sunstatedevworks.com/#business' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sunstatedevworks.com/#faq',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return <JsonLd data={schema} />
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}