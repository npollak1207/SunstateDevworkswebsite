'use client'
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type Dir = 'up' | 'down' | 'left' | 'right' | 'none'

const OFFSET: Record<Dir, [string, string]> = {
  up: ['0px', '32px'],
  down: ['0px', '-32px'],
  left: ['40px', '0px'],
  right: ['-40px', '0px'],
  none: ['0px', '0px'],
}

// One IntersectionObserver per threshold, shared by every <Reveal> on the page.
const observers = new Map<number, IntersectionObserver>()

function observe(el: Element, amount: number) {
  let io = observers.get(amount)
  if (!io) {
    io = new IntersectionObserver((entries, obs) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.setAttribute('data-shown', '')
        obs.unobserve(e.target)
      }
    }, { threshold: amount })
    observers.set(amount, io)
  }
  io.observe(el)
  return io
}

/**
 * Fades content up once it scrolls into view. The motion itself is CSS (.rv in
 * globals.css); this only flips data-shown, so the bundle stays tiny.
 * `now` plays the entrance on first paint instead (for above-the-fold content),
 * with no JS at all. Reduced motion is handled by the global CSS rule.
 */
export default function Reveal({
  children,
  as = 'div',
  dir = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.25,
  now = false,
  className,
  style,
}: {
  children: ReactNode
  as?: 'div' | 'span' | 'section' | 'li' | 'h2' | 'p'
  dir?: Dir
  delay?: number
  duration?: number
  amount?: number
  now?: boolean
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (now || !el) return
    if (typeof IntersectionObserver === 'undefined') { el.setAttribute('data-shown', ''); return }
    const io = observe(el, amount)
    return () => io.unobserve(el)
  }, [now, amount])

  const [x, y] = OFFSET[dir]
  const vars = { '--rv-x': x, '--rv-y': y, '--rv-d': `${delay}s`, '--rv-t': `${duration}s` } as CSSProperties
  const base = now ? 'rv-now' : 'rv'

  const Tag = as as 'div'
  return (
    <Tag ref={ref} className={className ? `${base} ${className}` : base} style={{ ...vars, ...style }}>
      {children}
    </Tag>
  )
}
