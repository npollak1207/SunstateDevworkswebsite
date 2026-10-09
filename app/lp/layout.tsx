import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: { absolute: 'Sunstate DevWorks — Custom Web, App & AI Development · Gilbert, AZ' },
    description:
        'Hand-coded custom websites, mobile apps, and AI tools for Arizona businesses. Free quote, reply in 2 hours. No templates, no bloat — you own 100% of the code. Based in Gilbert, AZ.',
    // Paid-traffic page that duplicates the homepage pitch; keep it out of the index.
    robots: { index: false, follow: true },
    alternates: { canonical: 'https://sunstatedevworks.com/lp' },
}

// Note: the root layout (app/layout.tsx) provides <html>, <body>, fonts (via
// globals.css) and the Google Ads base tag. This nested layout only sets
// LP-specific metadata and passes children through.
export default function LpLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
