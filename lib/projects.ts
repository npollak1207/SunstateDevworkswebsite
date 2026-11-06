// Every project on /works, and the content for its /works/<slug> case study.
// Images live in public/work/<slug>/ and are real screenshots of the shipped
// product (captured from the live site, or the app's own screens).

export type Tag = 'Web' | 'iOS' | 'Android' | 'Web App' | 'AI' | 'Branding' | 'SEO' | 'E-Commerce' | 'Game' | 'IT'
export type Metric = { value: string; label: string }
export type Testimonial = { name: string; role: string; body: string; initials: string }
export type ProjectLink = { kind: 'site' | 'appstore' | 'playstore' | 'play' | 'repo'; href: string; label?: string }
export type Shot = { src: string; title: string; caption: string; device: 'desktop' | 'mobile' | 'landscape'; w?: number; h?: number; bare?: boolean }
export type DiagramLane = { label: string; nodes: { title: string; sub?: string }[] }

export type ProjectRender =
  | { kind: 'web'; desktop: string; mobile: string; url?: string }
  | { kind: 'browser'; desktop: string; url?: string; w?: number; h?: number }
  | { kind: 'app'; screens: [string] | [string, string, string]; w?: number; h?: number; bare?: boolean }
  | { kind: 'diagram'; label: string; lanes: DiagramLane[] }
  | { kind: 'landscape'; src: string; w: number; h: number }

export type CaseStudy = {
  headline: [string, string] // [lead, serif accent]
  sub: string
  challengeHeading: [string, string]
  challenge: string[]
  roleHeading: [string, string]
  role: string[]
  builtHeading: [string, string]
  built: { t: string; d: string }[]
  gallery: Shot[]
  galleryNote?: string
  resultsHeading: [string, string]
  results: string[]
  /** Situation → action → result stories, for work that can't be screenshotted. */
  notes?: { t: string; situation: string; action: string; result: string }[]
  /** Replaces the default line under the stack heading. */
  stackNote?: string
}

export type Project = {
  slug: string
  title: string
  client: string
  location: string
  year: string
  cat: string
  tags: Tag[]
  tech: string[]
  links: ProjectLink[]
  status?: string
  summary: string
  highlight: string
  metrics: Metric[]
  testimonial?: Testimonial
  featured?: boolean
  render: ProjectRender
  seo: { title: string; description: string }
  /** Omitted when the project has a hand-built page at app/works/<slug>. */
  study?: CaseStudy
}

export { PROJECTS } from './projects-data'
import { PROJECTS } from './projects-data'

export const caseStudyHref = (p: Project) => `/works/${p.slug}`
export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)

/** The next project in list order, wrapping around, for the case-study footer. */
export function nextProject(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  return PROJECTS[(i + 1) % PROJECTS.length]
}
