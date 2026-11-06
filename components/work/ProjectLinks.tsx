import type { ProjectLink } from '@/lib/projects'

const LABELS: Record<ProjectLink['kind'], string> = {
  site: 'Visit site',
  appstore: 'View on the App Store',
  playstore: 'Get it on Google Play',
  play: 'Play in the browser',
  repo: 'View code',
}

function ExternalIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
}

function AppleIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.33-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.3-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.2z" /></svg>
}

function PlayIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4 2.8v18.4a.8.8 0 0 0 1.2.7l15.6-9.2a.8.8 0 0 0 0-1.4L5.2 2.1A.8.8 0 0 0 4 2.8z" /></svg>
}

function GitHubIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
}

const ICONS: Record<ProjectLink['kind'], () => React.ReactElement> = {
  site: ExternalIcon, appstore: AppleIcon, playstore: PlayIcon, play: PlayIcon, repo: GitHubIcon,
}

/** Outbound links for a project: live site, store listings, code. */
export default function ProjectLinks({ links, status, compact }: { links: ProjectLink[]; status?: string; compact?: boolean }) {
  const pad = compact ? '11px 18px' : '14px 22px'
  const fs = compact ? 12 : 13
  return (
    <>
      {links.map((l) => {
        const Icon = ICONS[l.kind]
        const primary = l.kind === 'appstore' || l.kind === 'playstore' || l.kind === 'play'
        return (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn ${primary && !compact ? 'btn-primary' : 'btn-ghost'}`} style={{ padding: pad, fontSize: fs, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {(l.kind === 'appstore' || l.kind === 'playstore' || l.kind === 'repo') && <Icon />}
            {l.label ?? LABELS[l.kind]}
            {(l.kind === 'site' || l.kind === 'play') && <Icon />}
          </a>
        )
      })}
      {status && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{status}</span>
      )}
    </>
  )
}
