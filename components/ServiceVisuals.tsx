'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   VISUAL 01 — Web Dev: Live typing code editor
   with syntax highlighting + build progress
───────────────────────────────────────────── */
export function WebDevVisual() {
  const lines = [
    { tokens: [{ t: 'export default ', c: '#F4622A' }, { t: 'function ', c: '#00D4C8' }, { t: 'Page', c: '#F0EDE6' }, { t: '() {', c: '#7A8FA6' }] },
    { tokens: [{ t: '  return (', c: '#7A8FA6' }] },
    { tokens: [{ t: '    ', c: '' }, { t: '<main', c: '#00D4C8' }, { t: ' className', c: '#F4622A' }, { t: '=', c: '#7A8FA6' }, { t: '"yours"', c: '#28C840' }, { t: '>', c: '#00D4C8' }] },
    { tokens: [{ t: '      ', c: '' }, { t: '<Hero', c: '#00D4C8' }, { t: ' built', c: '#F4622A' }, { t: '=', c: '#7A8FA6' }, { t: '"custom"', c: '#28C840' }, { t: ' />', c: '#00D4C8' }] },
    { tokens: [{ t: '      ', c: '' }, { t: '<Stack', c: '#00D4C8' }, { t: ' templates', c: '#F4622A' }, { t: '=', c: '#7A8FA6' }, { t: '"none"', c: '#28C840' }, { t: ' />', c: '#00D4C8' }] },
    { tokens: [{ t: '      ', c: '' }, { t: '<Speed', c: '#00D4C8' }, { t: ' score', c: '#F4622A' }, { t: '=', c: '#7A8FA6' }, { t: '{100}', c: '#F4622A' }, { t: ' />', c: '#00D4C8' }] },
    { tokens: [{ t: '    ', c: '' }, { t: '</main>', c: '#00D4C8' }] },
    { tokens: [{ t: '  )', c: '#7A8FA6' }] },
    { tokens: [{ t: '}', c: '#F0EDE6' }] },
  ]

  const [visibleChars, setVisibleChars] = useState(0)
  const [buildState, setBuildState] = useState<'idle' | 'building' | 'done'>('idle')
  const [score, setScore] = useState(0)
  const totalChars = lines.reduce((acc, l) => acc + l.tokens.reduce((a, t) => a + t.t.length, 0), 0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const restartRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startSequence = () => {
    setVisibleChars(0)
    setBuildState('idle')
    setScore(0)

    let chars = 0
    timerRef.current = setInterval(() => {
      chars += 3
      setVisibleChars(chars)
      if (chars >= totalChars) {
        if (timerRef.current) clearInterval(timerRef.current)
        setTimeout(() => setBuildState('building'), 200)
        let s = 0
        const scoreTimer = setInterval(() => {
          s += 7
          setScore(Math.min(s, 100))
          if (s >= 100) {
            clearInterval(scoreTimer)
            setBuildState('done')
            restartRef.current = setTimeout(startSequence, 3000)
          }
        }, 30)
      }
    }, 30)
  }

  useEffect(() => {
    startSequence()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (restartRef.current) clearTimeout(restartRef.current)
    }
  }, [])

  // Render chars up to visibleChars
  let charCount = 0
  const renderedLines = lines.map((line, li) => {
    const renderedTokens = line.tokens.map((token, ti) => {
      const start = charCount
      charCount += token.t.length
      const slice = token.t.slice(0, Math.max(0, visibleChars - start))
      return <span key={ti} style={{ color: token.c || 'inherit' }}>{slice}</span>
    })
    return (
      <div key={li} style={{ display: 'flex', alignItems: 'center', minHeight: 22 }}>
        <span style={{ color: 'rgba(122,143,166,0.3)', fontSize: 9, minWidth: 18, userSelect: 'none', fontFamily: 'Space Mono, monospace' }}>{li + 1}</span>
        <span>{renderedTokens}</span>
        {li === lines.findIndex((_, i) => {
          let c = 0
          for (let j = 0; j <= i; j++) c += lines[j].tokens.reduce((a, t) => a + t.t.length, 0)
          return c > visibleChars && c - lines[i].tokens.reduce((a, t) => a + t.t.length, 0) <= visibleChars
        }) && <span style={{ display: 'inline-block', width: 2, height: 14, background: 'var(--cyan)', marginLeft: 1, animation: 'blink 1s step-end infinite' }} />}
      </div>
    )
  })

  return (
    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 8, overflow: 'hidden', fontFamily: 'Space Mono, monospace', fontSize: 11 }}>
      {/* Window chrome */}
      <div style={{ background: 'rgba(0,0,0,0.4)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ color: 'rgba(122,143,166,0.6)', fontSize: 9, marginLeft: 6 }}>page.tsx</span>
      </div>
      {/* Code */}
      <div style={{ padding: '12px 10px', lineHeight: 1.9, fontSize: 11 }}>{renderedLines}</div>
      {/* Status bar */}
      <div style={{ padding: '6px 12px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: buildState === 'done' ? '#28C840' : buildState === 'building' ? '#FEBC2E' : 'rgba(122,143,166,0.4)', display: 'inline-block', boxShadow: buildState === 'done' ? '0 0 5px #28C840' : 'none', transition: 'all 0.3s' }} />
          <span style={{ color: buildState === 'done' ? '#28C840' : 'rgba(122,143,166,0.6)', fontSize: 9, letterSpacing: '0.06em', transition: 'color 0.3s' }}>
            {buildState === 'done' ? 'BUILD SUCCESSFUL' : buildState === 'building' ? 'COMPILING...' : 'EDITING'}
          </span>
        </div>
        {buildState !== 'idle' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 9, color: 'rgba(122,143,166,0.6)' }}>LIGHTHOUSE</span>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: score === 100 ? '#28C840' : '#FEBC2E', transition: 'color 0.3s' }}>{score}</span>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   VISUAL 02 — Mobile: Animated screen with
   live data loading, skeleton → content
───────────────────────────────────────────── */
export function MobileVisual() {
  const [phase, setPhase] = useState<'skeleton' | 'loaded' | 'interact'>('skeleton')
  const [activeTab, setActiveTab] = useState(0)
  const [notif, setNotif] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('loaded'), 1200)
    const t2 = setTimeout(() => { setPhase('interact'); setNotif(true) }, 2600)
    const t3 = setTimeout(() => setNotif(false), 4000)
    const restart = setTimeout(() => {
      setPhase('skeleton')
      setActiveTab(0)
      setTimeout(() => {
        const r1 = setTimeout(() => setPhase('loaded'), 1200)
        const r2 = setTimeout(() => { setPhase('interact'); setNotif(true) }, 2600)
        const r3 = setTimeout(() => setNotif(false), 4000)
        return () => { clearTimeout(r1); clearTimeout(r2); clearTimeout(r3) }
      }, 100)
    }, 6000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(restart) }
  }, [])

  const items = [
    { label: 'Job #1042', status: 'Active', statusColor: '#28C840', val: '$3,200' },
    { label: 'Job #1041', status: 'Review', statusColor: '#FEBC2E', val: '$1,800' },
    { label: 'Job #1040', status: 'Done', statusColor: '#00D4C8', val: '$4,500' },
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 160 }}>
        {/* Push notification */}
        <div style={{
          position: 'absolute', top: -40, left: -20, right: -20,
          background: 'rgba(19,34,53,0.95)', border: '1px solid rgba(0,212,200,0.25)',
          borderRadius: 10, padding: '8px 12px',
          transform: notif ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)',
          opacity: notif ? 1 : 0,
          transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 20, height: 20, borderRadius: 5, background: 'rgba(0,212,200,0.2)', border: '1px solid rgba(0,212,200,0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)' }} />
            </div>
            <div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 9, color: 'var(--off-white)', margin: 0 }}>New job assigned</p>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'var(--text-muted)', margin: 0 }}>Job #1043 · just now</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div style={{ background: 'var(--navy-mid)', border: '1.5px solid rgba(0,212,200,0.15)', borderRadius: 28, padding: '12px 8px', boxShadow: '0 32px 64px rgba(0,0,0,0.5)' }}>
          {/* Notch */}
          <div style={{ width: 56, height: 16, background: 'var(--navy)', borderRadius: 8, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
            <div style={{ width: 10, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Screen */}
          <div style={{ background: 'var(--navy)', borderRadius: 16, overflow: 'hidden', minHeight: 220 }}>
            {/* Status bar */}
            <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>9:41</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {[3,2.5,2].map((h, i) => <div key={i} style={{ width: 3, height: h * 3, background: 'rgba(255,255,255,0.35)', borderRadius: 1 }} />)}
              </div>
            </div>

            {/* Header */}
            <div style={{ padding: '4px 10px 10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {phase === 'skeleton' ? (
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 3, width: 80, animation: 'shimmer 1.5s ease-in-out infinite' }} />
                ) : (
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, color: 'var(--off-white)', animation: 'fadeIn 0.4s ease' }}>Con Gusto</span>
                )}
                <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(244,98,42,0.15)', border: '1px solid rgba(244,98,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 8, height: 1, background: 'var(--orange)', borderRadius: 1 }} />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', margin: '0 10px 10px', background: 'rgba(255,255,255,0.04)', borderRadius: 6 }}>
              {['Jobs', 'Map', 'Me'].map((t, i) => (
                <div key={i} onClick={() => phase !== 'skeleton' && setActiveTab(i)} style={{ flex: 1, padding: '5px 0', textAlign: 'center', borderRadius: 5, background: activeTab === i && phase !== 'skeleton' ? 'rgba(0,212,200,0.12)' : 'transparent', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: activeTab === i && phase !== 'skeleton' ? 'var(--cyan)' : 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div style={{ padding: '0 10px 10px' }}>
              {items.map((item, i) => (
                <div key={i} style={{ background: 'var(--navy-mid)', borderRadius: 8, padding: '7px 9px', marginBottom: 5, overflow: 'hidden', position: 'relative' }}>
                  {phase === 'skeleton' ? (
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <div style={{ width: 22, height: 22, borderRadius: 5, background: 'rgba(255,255,255,0.06)', animation: 'shimmer 1.5s ease-in-out infinite', flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 2, width: '65%', marginBottom: 4, animation: 'shimmer 1.5s ease-in-out infinite' }} />
                        <div style={{ height: 4, background: 'rgba(255,255,255,0.04)', borderRadius: 2, width: '40%', animation: 'shimmer 1.5s ease-in-out infinite' }} />
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'fadeIn 0.4s ease' }}>
                      <div>
                        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 9, color: 'var(--off-white)', margin: 0, marginBottom: 2 }}>{item.label}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <div style={{ width: 4, height: 4, borderRadius: '50%', background: item.statusColor }} />
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 7, color: item.statusColor, letterSpacing: '0.04em' }}>{item.status}</span>
                        </div>
                      </div>
                      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, color: 'var(--off-white)' }}>{item.val}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8px 10px' }}>
              {[
                <svg key="a" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
                <svg key="b" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                <svg key="c" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
              ].map((icon, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center', color: i === 0 ? 'var(--cyan)' : 'rgba(255,255,255,0.2)' }}>{icon}</div>
              ))}
            </div>
          </div>
          {/* Home bar */}
          <div style={{ width: 44, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '8px auto 0' }} />
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   VISUAL 03 — Branding: Animated logo builder
   cycling through design directions
───────────────────────────────────────────── */
export function BrandingVisual() {
  const directions = [
    {
      name: 'Direction A',
      palette: ['#0D1B2A', '#00D4C8', '#F0EDE6', '#1E3349'],
      displayName: 'Technic',
      font: 'Syne',
      weight: 800,
      tagline: 'Build. Ship. Own.',
      accentIdx: 1,
    },
    {
      name: 'Direction B',
      palette: ['#1A0A00', '#F4622A', '#FFF5EE', '#2D1500'],
      displayName: 'Forge',
      font: 'Space Mono',
      weight: 700,
      tagline: 'Raw · Real · Fast',
      accentIdx: 1,
    },
    {
      name: 'Direction C',
      palette: ['#080D12', '#B8FFD6', '#E8F4FF', '#0F1A24'],
      displayName: 'Lumen',
      font: 'DM Sans',
      weight: 300,
      tagline: 'Clarity in every pixel',
      accentIdx: 1,
    },
  ]

  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [approved, setApproved] = useState(false)

  useEffect(() => {
    const cycle = () => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % directions.length)
        setApproved(false)
        setTransitioning(false)
      }, 350)
    }
    const t = setInterval(cycle, 2800)
    return () => clearInterval(t)
  }, [])

  const d = directions[current]

  return (
    <div style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.3s ease' }}>
      {/* Mockup card */}
      <div style={{ background: d.palette[0], borderRadius: 10, padding: '20px', border: `1px solid ${d.palette[1]}22`, transition: 'all 0.5s ease', overflow: 'hidden', position: 'relative' }}>
        {/* Grid dots */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${d.palette[1]}15 1px, transparent 1px)`, backgroundSize: '16px 16px', pointerEvents: 'none' }} />

        {/* Logo mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, position: 'relative' }}>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: d.palette[1], display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.5s ease' }}>
            <span style={{ fontFamily: `${d.font}, sans-serif`, fontWeight: d.weight, fontSize: 14, color: d.palette[0] }}>S</span>
          </div>
          <div>
            <p style={{ fontFamily: `${d.font}, sans-serif`, fontWeight: d.weight, fontSize: 16, color: d.palette[2], margin: 0, lineHeight: 1 }}>{d.displayName}</p>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: d.palette[1], margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>{d.tagline}</p>
          </div>
        </div>

        {/* Color swatches */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
          {d.palette.map((c, i) => (
            <div key={i} style={{ flex: 1, height: 20, borderRadius: 4, background: c, border: '1px solid rgba(255,255,255,0.08)', transition: 'background 0.5s ease' }} />
          ))}
        </div>

        {/* Typography preview */}
        <div style={{ background: `${d.palette[3]}`, borderRadius: 6, padding: '8px 10px', border: `1px solid ${d.palette[1]}18` }}>
          <p style={{ fontFamily: `${d.font}, sans-serif`, fontWeight: d.weight, fontSize: 16, color: d.palette[2], margin: 0, marginBottom: 2, transition: 'all 0.4s ease' }}>Aa</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, color: `${d.palette[2]}80`, margin: 0 }}>Body text · {d.font}</p>
        </div>
      </div>

      {/* Direction label */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {directions.map((_, i) => (
            <div key={i} style={{ width: i === current ? 16 : 5, height: 5, borderRadius: 3, background: i === current ? 'var(--cyan)' : 'rgba(122,143,166,0.25)', transition: 'all 0.35s ease' }} />
          ))}
        </div>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{d.name}</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   VISUAL 04 — AI: Animated pipeline with
   live token streaming + node pulses
───────────────────────────────────────────── */
export function AIVisual() {
  const [activeNode, setActiveNode] = useState(-1)
  const [streamText, setStreamText] = useState('')
  const [pipelineComplete, setPipelineComplete] = useState(false)

  const nodes = [
    { label: 'TRIGGER', sub: 'Form submitted', color: 'var(--orange)', glow: 'rgba(244,98,42,0.3)' },
    { label: 'AI CLASSIFY', sub: 'Claude API call', color: 'var(--cyan)', glow: 'rgba(0,212,200,0.3)' },
    { label: 'CRM UPDATE', sub: 'HubSpot record', color: 'var(--orange)', glow: 'rgba(244,98,42,0.3)' },
    { label: 'NOTIFY', sub: 'Slack → team', color: 'var(--cyan)', glow: 'rgba(0,212,200,0.3)' },
    { label: 'EMAIL', sub: 'Personalized reply', color: 'var(--orange)', glow: 'rgba(244,98,42,0.3)' },
  ]

  const streamWords = ['Qualified', ' lead', ' detected.', '\n', 'Budget:', ' $15k+', '\n', 'Priority:', ' High ✓']

  useEffect(() => {
    let nodeIdx = 0
    let wordIdx = 0
    let streaming = false
    const intervals: ReturnType<typeof setTimeout>[] = []

    const runPipeline = () => {
      setActiveNode(-1)
      setStreamText('')
      setPipelineComplete(false)
      nodeIdx = 0
      wordIdx = 0
      streaming = false

      const step = () => {
        if (nodeIdx >= nodes.length) {
          setPipelineComplete(true)
          intervals.push(setTimeout(runPipeline, 2800))
          return
        }
        setActiveNode(nodeIdx)

        if (nodeIdx === 1 && !streaming) {
          streaming = true
          setStreamText('')
          wordIdx = 0
          const streamInterval = setInterval(() => {
            if (wordIdx < streamWords.length) {
              setStreamText(prev => prev + streamWords[wordIdx])
              wordIdx++
            } else {
              clearInterval(streamInterval)
              nodeIdx++
              intervals.push(setTimeout(step, 600))
            }
          }, 180)
          intervals.push(setTimeout(() => clearInterval(streamInterval), 5000))
        } else {
          nodeIdx++
          intervals.push(setTimeout(step, 700))
        }
      }

      intervals.push(setTimeout(step, 400))
    }

    runPipeline()
    return () => intervals.forEach(clearTimeout)
  }, [])

  return (
    <div>
      {/* Pipeline nodes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {nodes.map((node, i) => {
          const isActive = activeNode === i
          const isDone = activeNode > i || pipelineComplete
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: 10 }}>
              {/* Connector track */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 20 }}>
                <div style={{
                  width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                  background: isDone ? node.color : isActive ? node.color : 'rgba(122,143,166,0.15)',
                  border: `1.5px solid ${isDone || isActive ? node.color : 'rgba(122,143,166,0.2)'}`,
                  boxShadow: isActive ? `0 0 10px ${node.glow}` : 'none',
                  transition: 'all 0.4s ease',
                  transform: isActive ? 'scale(1.25)' : 'scale(1)',
                  marginTop: 14,
                }} />
                {i < nodes.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: isDone ? node.color : 'rgba(122,143,166,0.12)', transition: 'background 0.4s ease', minHeight: 12, opacity: isDone ? 0.5 : 1 }} />
                )}
              </div>

              {/* Node card */}
              <div style={{
                flex: 1,
                background: isActive ? `rgba(${node.color === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.06)` : 'var(--navy)',
                border: `1px solid ${isActive ? (node.color === 'var(--cyan)' ? 'rgba(0,212,200,0.25)' : 'rgba(244,98,42,0.25)') : isDone ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)'}`,
                borderRadius: 7,
                padding: '8px 12px',
                marginBottom: 4,
                marginTop: 8,
                transition: 'all 0.35s ease',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: isDone || isActive ? node.color : 'rgba(122,143,166,0.4)', letterSpacing: '0.08em', transition: 'color 0.3s' }}>{node.label}</span>
                    {(isDone || isActive) && (
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)', margin: 0, marginTop: 1, animation: 'fadeIn 0.3s ease' }}>{node.sub}</p>
                    )}
                  </div>
                  {isDone && !isActive && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={node.color} strokeWidth="2.5" style={{ animation: 'fadeIn 0.3s ease' }}><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                  {isActive && (
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[0, 1, 2].map(j => (
                        <div key={j} style={{ width: 3, height: 3, borderRadius: '50%', background: node.color, animation: `dotPulse 1.2s ease-in-out ${j * 0.2}s infinite` }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* AI streaming output */}
                {i === 1 && isActive && streamText && (
                  <div style={{ marginTop: 8, padding: '6px 8px', background: 'rgba(0,0,0,0.2)', borderRadius: 5, fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--cyan)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                    {streamText}<span style={{ display: 'inline-block', width: 5, height: 9, background: 'var(--cyan)', marginLeft: 1, animation: 'blink 0.8s step-end infinite', verticalAlign: 'middle' }} />
                  </div>
                )}
                {i === 1 && (isDone || pipelineComplete) && streamText && (
                  <div style={{ marginTop: 8, padding: '6px 8px', background: 'rgba(0,0,0,0.2)', borderRadius: 5, fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(0,212,200,0.7)', lineHeight: 1.8, whiteSpace: 'pre-wrap', animation: 'fadeIn 0.3s ease' }}>
                    {streamText}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Status bar */}
      <div style={{
        marginTop: 6,
        padding: '6px 12px',
        background: pipelineComplete ? 'rgba(40,200,64,0.06)' : 'rgba(0,0,0,0.15)',
        border: `1px solid ${pipelineComplete ? 'rgba(40,200,64,0.2)' : 'rgba(255,255,255,0.04)'}`,
        borderRadius: 6,
        display: 'flex', alignItems: 'center', gap: 6,
        transition: 'all 0.4s ease',
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: pipelineComplete ? '#28C840' : activeNode >= 0 ? 'var(--orange)' : 'rgba(122,143,166,0.3)', boxShadow: pipelineComplete ? '0 0 6px #28C840' : activeNode >= 0 ? '0 0 6px rgba(244,98,42,0.5)' : 'none', transition: 'all 0.4s ease' }} />
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: pipelineComplete ? '#28C840' : activeNode >= 0 ? 'var(--orange)' : 'rgba(122,143,166,0.4)', letterSpacing: '0.06em', transition: 'color 0.4s' }}>
          {pipelineComplete ? 'PIPELINE COMPLETE · 0 errors · 1.4s' : activeNode >= 0 ? `RUNNING · step ${activeNode + 1}/${nodes.length}` : 'WAITING FOR TRIGGER'}
        </span>
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
