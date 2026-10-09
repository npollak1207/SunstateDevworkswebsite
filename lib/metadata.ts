// Next replaces (doesn't merge) a parent's openGraph when a page sets its own,
// so every page spreads this in to keep the share image and site identity.
export const openGraphBase = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: 'Sunstate DevWorks',
  images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Sunstate DevWorks: custom web, mobile apps, branding and AI from Gilbert, Arizona' }],
}
