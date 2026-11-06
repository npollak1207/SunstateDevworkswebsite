import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyPage from '@/components/work/CaseStudyPage'
import { PROJECTS, getProject, type CaseStudy, type Project } from '@/lib/projects'
import { openGraphBase } from '@/lib/metadata'

type Params = { slug: string }

const withStudy = (p: Project | undefined): p is Project & { study: CaseStudy } => !!p?.study

// Projects without `study` (Con Gusto) have their own page under app/works.
export function generateStaticParams(): Params[] {
  return PROJECTS.filter((p) => p.study).map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!withStudy(p)) return {}
  const url = `https://sunstatedevworks.com/works/${p.slug}`
  const image = p.render.kind === 'web' || p.render.kind === 'browser' ? p.render.desktop : p.render.kind === 'app' ? p.render.screens[p.render.screens.length > 1 ? 1 : 0] : p.render.kind === 'landscape' ? p.render.src : null
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: url },
    openGraph: {
      ...openGraphBase,
      url,
      title: `${p.seo.title} | Sunstate DevWorks`,
      description: p.seo.description,
      ...(image ? { images: [{ url: image, alt: `${p.title} by Sunstate DevWorks` }] } : {}),
    },
  }
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!withStudy(p)) notFound()
  return <CaseStudyPage project={p} />
}
