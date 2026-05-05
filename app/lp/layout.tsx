import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sunstate DevWorks — Custom Digital Engineering · Gilbert, AZ',
    description:
        'Hand-coded custom websites, mobile apps, and AI tools for Arizona businesses. No templates. No bloat. You own 100% of the code. Based in Gilbert, AZ.',
}

export default function LpLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>{children}</body>
        </html>
    )
}