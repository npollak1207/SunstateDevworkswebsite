export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.sunstatedevworks.com/#business',
        name: 'Sunstate DevWorks',
        url: 'https://www.sunstatedevworks.com',
        logo: 'https://www.sunstatedevworks.com/logo.png',
        image: 'https://www.sunstatedevworks.com/og-image.png',
        description: 'Custom web development, iOS app development, branding, and AI automation studio based in Gilbert, Arizona.',
        telephone: '',
        email: 'contact@sunstatedevworks.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gilbert',
          addressRegion: 'AZ',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.3528,
          longitude: -111.789,
        },
        areaServed: [
          { '@type': 'City', name: 'Gilbert', sameAs: 'https://en.wikipedia.org/wiki/Gilbert,_Arizona' },
          { '@type': 'City', name: 'Chandler' },
          { '@type': 'City', name: 'Mesa' },
          { '@type': 'City', name: 'Scottsdale' },
          { '@type': 'City', name: 'Tempe' },
          { '@type': 'City', name: 'Phoenix' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Development', url: 'https://www.sunstatedevworks.com/services/web-development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iOS & Mobile App Development', url: 'https://www.sunstatedevworks.com/services/mobile-apps' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Identity Design', url: 'https://www.sunstatedevworks.com/services/branding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Automation', url: 'https://www.sunstatedevworks.com/services/ai-automation' } },
          ],
        },
        sameAs: [
          'https://www.instagram.com/sunstatedevworks',
          'https://www.linkedin.com/company/sunstatedevworks',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.sunstatedevworks.com/#website',
        url: 'https://www.sunstatedevworks.com',
        name: 'Sunstate DevWorks',
        publisher: { '@id': 'https://www.sunstatedevworks.com/#business' },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://www.sunstatedevworks.com/works?q={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
