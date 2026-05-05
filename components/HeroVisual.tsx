'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────
   HeroVisual — Full animated hero right panel
   · Canvas particle mesh with mouse tracking
   · Live typing terminal with multi-file sequence
   · Floating metric cards that animate in
   · Build pipeline progress bar
   · Orbiting tech stack nodes
───────────────────────────────────────────────── */

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  /* ── Typing terminal state ── */
  const [termLines, setTermLines] = useState<{ text: string; color: string; done: boolean }[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [buildProgress, setBuildProgress] = useState(0)
  const [buildDone, setBuildDone] = useState(false)
  const [cardsVisible, setCardsVisible] = useState([false, false, false])

  /* ── Terminal script ── */
  const script = [
    { text: '$ npx create-sunstate-app my-project', color: '#7A8FA6', delay: 0 },
    { text: '✓ Scaffolding Next.js 15 + TypeScript', color: '#28C840', delay: 600 },
    { text: '✓ Connecting Supabase backend', color: '#28C840', delay: 400 },
    { text: '✓ Configuring Cloudflare CDN', color: '#28C840', delay: 350 },
    { text: '✓ Installing design system', color: '#28C840', delay: 300 },
    { text: '→ Building for production...', color: '#00D4C8', delay: 200 },
    { text: '✓ Lighthouse 100 · 0 errors · 1.2s', color: '#F4622A', delay: 800 },
    { text: '🚀 Your site is live. You own it.', color: '#F0EDE6', delay: 400 },
  ]

  useEffect(() => {
    let cancelled = false
    let lineIdx = 0
    let charIdx = 0
    let lineBuffer = ''
    let lineTimeout: ReturnType<typeof setTimeout>
    let charInterval: ReturnType<typeof setInterval>

    const typeNextLine = () => {
      if (cancelled || lineIdx >= script.length) return

      const line = script[lineIdx]
      lineBuffer = ''
      charIdx = 0

      charInterval = setInterval(() => {
        if (cancelled) return
        charIdx += 2
        lineBuffer = line.text.slice(0, charIdx)
        setCurrentLine(lineBuffer)

        if (charIdx >= line.text.length) {
          clearInterval(charInterval)
          const finalLine = { text: line.text, color: line.color, done: true }
          setTermLines(prev => [...prev.slice(-6), finalLine])
          setCurrentLine('')
          lineIdx++

          // Trigger progress bar at line 5
          if (lineIdx === 6) {
            let p = 0
            const prog = setInterval(() => {
              if (cancelled) { clearInterval(prog); return }
              p += 4
              setBuildProgress(Math.min(p, 100))
              if (p >= 100) {
                clearInterval(prog)
                setBuildDone(true)
              }
            }, 18)
          }

          // Show metric cards sequentially
          if (lineIdx >= script.length) {
            setTimeout(() => !cancelled && setCardsVisible([true, false, false]), 200)
            setTimeout(() => !cancelled && setCardsVisible([true, true, false]), 500)
            setTimeout(() => !cancelled && setCardsVisible([true, true, true]), 800)
            // Restart loop
            setTimeout(() => {
              if (!cancelled) {
                lineIdx = 0
                setTermLines([])
                setCurrentLine('')
                setBuildProgress(0)
                setBuildDone(false)
                setCardsVisible([false, false, false])
                typeNextLine()
              }
            }, 4500)
            return
          }

          lineTimeout = setTimeout(typeNextLine, line.delay + 80)
        }
      }, 22)
    }

    typeNextLine()

    return () => {
      cancelled = true
      clearInterval(charInterval)
      clearTimeout(lineTimeout)
    }
  }, [])

  /* ── Canvas particle mesh ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0, h = 0

    type Particle = {
      x: number; y: number
      vx: number; vy: number
      size: number; opacity: number
      hue: number
    }

    let particles: Particle[] = []

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      w = rect?.width || 540
      h = rect?.height || 600
      canvas.width = w
      canvas.height = h
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.4,
        opacity: Math.random() * 0.5 + 0.15,
        hue: Math.random() > 0.65 ? 174 : 16, // cyan or orange
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = particles[i].hue === 174
              ? `rgba(0,212,200,${alpha})`
              : `rgba(244,98,42,${alpha * 0.7})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Mouse influence lines
      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          const alpha = (1 - dist / 140) * 0.25
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(0,212,200,${alpha})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }

      // Draw particles
      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const boost = dist < 140 ? 1.8 : 1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * boost, 0, Math.PI * 2)
        const color = p.hue === 174
          ? `rgba(0,212,200,${p.opacity * boost})`
          : `rgba(244,98,42,${p.opacity * 0.7 * boost})`
        ctx.fillStyle = color
        ctx.fill()

        // Move
        p.x += p.vx
        p.y += p.vy

        // Mouse repel
        if (dist < 90) {
          p.x += (dx / dist) * 0.4
          p.y += (dy / dist) * 0.4
        }

        // Wrap
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  /* ── Mouse tracking ── */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [])

  const metrics = [
    { label: 'Lighthouse', value: '100', unit: '', color: '#28C840', borderColor: 'rgba(40,200,64,0.2)' },
    { label: 'Load Time', value: '< 1.2', unit: 's', color: '#00D4C8', borderColor: 'rgba(0,212,200,0.2)' },
    { label: 'Code Owned', value: '100', unit: '%', color: '#F4622A', borderColor: 'rgba(244,98,42,0.2)' },
  ]

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', minHeight: 560, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* ── Particle canvas ── */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />

      {/* ── Terminal window ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: 500,
        background: 'rgba(13,27,42,0.85)',
        border: '1px solid rgba(0,212,200,0.18)',
        borderRadius: 14,
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 48px 120px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,212,200,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
        animation: 'heroFloat 7s ease-in-out infinite',
      }}>
        {/* Chrome bar */}
        <div style={{ background: 'rgba(0,0,0,0.35)', padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 7, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840', display: 'block' }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(122,143,166,0.5)', letterSpacing: '0.04em' }}>sunstate-devworks — terminal</span>
          </div>
        </div>

        {/* Terminal body */}
        <div style={{ padding: '18px 20px', fontFamily: 'Space Mono, monospace', fontSize: 11, lineHeight: 1.95, minHeight: 210 }}>
          {termLines.map((line, i) => (
            <div key={i} style={{ color: line.color, opacity: 0.9, animation: 'termFadeIn 0.2s ease' }}>
              {line.text}
            </div>
          ))}
          {currentLine && (
            <div style={{ color: script[Math.min(termLines.length, script.length - 1)]?.color || '#F0EDE6' }}>
              {currentLine}
              <span style={{ display: 'inline-block', width: 7, height: 13, background: 'var(--cyan)', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 0.9s step-end infinite' }} />
            </div>
          )}
        </div>

        {/* Build progress bar */}
        <div style={{ padding: '0 20px 4px' }}>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.05)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 2,
              width: `${buildProgress}%`,
              background: buildDone
                ? 'linear-gradient(90deg, #00D4C8, #28C840)'
                : 'linear-gradient(90deg, var(--cyan), var(--orange))',
              transition: buildProgress === 0 ? 'none' : 'width 0.12s linear',
              boxShadow: buildProgress > 0 ? '0 0 8px rgba(0,212,200,0.5)' : 'none',
            }} />
          </div>
        </div>

        {/* Status bar */}
        <div style={{ padding: '10px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', display: 'block',
              background: buildDone ? '#28C840' : buildProgress > 0 ? '#FEBC2E' : 'rgba(122,143,166,0.3)',
              boxShadow: buildDone ? '0 0 7px #28C840' : buildProgress > 0 ? '0 0 7px #FEBC2E' : 'none',
              transition: 'all 0.4s ease',
            }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: buildDone ? '#28C840' : buildProgress > 0 ? '#FEBC2E' : 'rgba(122,143,166,0.4)', letterSpacing: '0.06em', transition: 'color 0.4s' }}>
              {buildDone ? 'DEPLOY COMPLETE' : buildProgress > 0 ? `BUILDING  ${buildProgress}%` : 'READY'}
            </span>
          </div>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(122,143,166,0.3)' }}>next@15 · node@22</span>
        </div>
      </div>

      {/* ── Floating metric cards ── */}
      {metrics.map((m, i) => {
        const positions = [
          { bottom: -10, left: -20 },
          { top: 20, right: -24 },
          { bottom: 70, right: -24 },
        ]
        const pos = positions[i]
        return (
          <div key={i} style={{
            position: 'absolute',
            ...pos,
            zIndex: 3,
            background: 'rgba(13,27,42,0.92)',
            border: `1px solid ${m.borderColor}`,
            borderRadius: 10,
            padding: '12px 16px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            animation: cardsVisible[i] ? `cardPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards, heroFloat ${5 + i * 1.5}s ease-in-out infinite ${i * 0.8}s` : 'none',
            opacity: cardsVisible[i] ? 1 : 0,
            transform: cardsVisible[i] ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.3s, transform 0.3s',
          }} className="hero-card-hide">
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(122,143,166,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{m.label}</p>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: m.color, lineHeight: 1, margin: 0 }}>
              {m.value}<span style={{ fontSize: 14, fontWeight: 400, color: 'rgba(122,143,166,0.6)' }}>{m.unit}</span>
            </p>
          </div>
        )
      })}

      {/* ── Orbiting tech nodes ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {[
          { label: 'Next.js', angle: 15, radius: 92, delay: '0s', color: 'rgba(0,212,200,0.7)' },
          { label: 'SwiftUI', angle: 155, radius: 88, delay: '0.5s', color: 'rgba(244,98,42,0.7)' },
          { label: 'Laravel', angle: 280, radius: 94, delay: '1s', color: 'rgba(0,212,200,0.6)' },
        ].map((node, i) => {
          const rad = (node.angle * Math.PI) / 180
          const cx = 50 + Math.cos(rad) * 38
          const cy = 50 + Math.sin(rad) * 38
          return (
            <div key={i} style={{
              position: 'absolute',
              left: `${cx}%`, top: `${cy}%`,
              transform: 'translate(-50%, -50%)',
              background: 'rgba(13,27,42,0.8)',
              border: `1px solid ${node.color.replace('0.7', '0.25')}`,
              borderRadius: 6,
              padding: '4px 8px',
              fontFamily: 'Space Mono, monospace',
              fontSize: 9,
              color: node.color,
              letterSpacing: '0.06em',
              backdropFilter: 'blur(8px)',
              animation: `nodePulse 3s ease-in-out infinite ${node.delay}`,
              whiteSpace: 'nowrap',
            }}>
              {node.label}
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes termFadeIn {
          from { opacity: 0; transform: translateX(-4px); }
          to { opacity: 0.9; transform: translateX(0); }
        }
        @keyframes cardPop {
          from { opacity: 0; transform: scale(0.75) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes nodePulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.95); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-card-hide {
          display: block;
        }
        @media (max-width: 768px) {
          .hero-card-hide { display: none !important; }
        }
      `}</style>
    </div>
  )
}
