import { PROJECTS, caseStudyHref } from '@/lib/projects'
import { CITIES, PHONE_DISPLAY } from '@/components/editorial'

// /llms.txt (https://llmstxt.org): a plain-Markdown guide to the site for AI
// agents and LLMs. Built from the same project and city data as the pages, so
// it never drifts out of date.
export const dynamic = 'force-static'

const SITE = 'https://sunstatedevworks.com'

const SERVICES = [
  { href: '/services/web-development', title: 'Web Development', desc: 'Hand-coded websites and web apps on Next.js. No WordPress or page builders; the client owns all of the code.' },
  { href: '/services/mobile-apps', title: 'Mobile Apps', desc: 'Native iOS and Android apps (SwiftUI, React Native), from MVP to the App Store and Google Play.' },
  { href: '/services/branding', title: 'Branding & Identity', desc: 'Logos, color systems, typography and brand guidelines.' },
  { href: '/services/ai-automation', title: 'AI & Automation', desc: 'Custom AI tools, chatbots and workflow automation.' },
]

const oneLine = (s: string) => s.replace(/\s+/g, ' ').trim()

export function GET() {
  const body = `# Sunstate Devworks

> Sunstate Devworks is a design and engineering studio in Mesa, Arizona, serving Gilbert, Phoenix, Scottsdale, Chandler, Tempe and the rest of metro Phoenix (and clients nationwide). It designs and builds custom websites, iOS and Android apps, brands, and AI automation for small and mid-sized businesses.

- Everything is custom-built; clients own 100% of the code, design and data, with no lock-in.
- Typical timelines: marketing sites in 3 to 5 weeks; larger web apps 6 to 10 weeks. Scope and timeline are agreed in writing before work starts.
- New inquiries get a same-business-day reply and a free 30-minute discovery call.

## Services

- [All services](${SITE}/services): Overview of what the studio offers and how projects run.
${SERVICES.map((s) => `- [${s.title}](${SITE}${s.href}): ${s.desc}`).join('\n')}

## Work

- [All work](${SITE}/works): Every client project, with case studies.
${PROJECTS.map((p) => `- [${p.title}](${SITE}${caseStudyHref(p)}): ${oneLine(p.summary)}`).join('\n')}

## Contact

- [Contact form](${SITE}/contact): Send a project inquiry (name, email, phone, company, service, budget range, timeline and a project description).
- Phone: ${PHONE_DISPLAY}
- Email: contact@sunstatedevworks.com

## Optional

- [About the studio](${SITE}/about): Who the studio is and how it works.
${CITIES.map((c) => `- [Web design in ${c.name}, AZ](${SITE}/${c.slug}): Local page for ${c.name} businesses.`).join('\n')}
- [Privacy policy](${SITE}/privacy)
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
