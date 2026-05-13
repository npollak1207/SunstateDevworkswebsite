'use client'
import { useEffect, useState } from 'react'

const words = ['Web Apps.', 'Mobile Apps.', 'AI Tools.', 'Brands.', 'Real Products.']

export default function HeroTyping() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true) }, 1800)
      return () => clearTimeout(t)
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      }
    }
  }, [displayed, deleting, paused, wordIndex])

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span
        className="hero-typing-gradient"
        style={{
          backgroundImage: 'linear-gradient(90deg, #00D4C8 0%, #00D4C8 35%, #F4622A 65%, #00D4C8 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {displayed || ' '}
      </span>
      <span className="cursor" style={{ color: 'var(--cyan)' }}>|</span>
    </span>
  )
}
