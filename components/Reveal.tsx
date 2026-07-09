'use client'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

type Dir = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Dir, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
}

/**
 * In-view reveal. Animates once when scrolled into view.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  as = 'div',
  dir = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.25,
  className,
  style,
}: {
  children: ReactNode
  as?: 'div' | 'span' | 'section' | 'li' | 'h2' | 'p'
  dir?: Dir
  delay?: number
  duration?: number
  amount?: number
  className?: string
  style?: React.CSSProperties
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div
  const from = reduce ? {} : offset[dir]

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduce ? 0.01 : duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Staggered container — children with StaggerItem animate in sequence.
 */
export function Stagger({
  children,
  className,
  style,
  gap = 0.08,
  amount = 0.2,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  gap?: number
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  dir = 'up',
  className,
  style,
}: {
  children: ReactNode
  dir?: Dir
  className?: string
  style?: React.CSSProperties
}) {
  const reduce = useReducedMotion()
  const from = reduce ? {} : offset[dir]
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, ...from },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: reduce ? 0.01 : 0.7, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  )
}
