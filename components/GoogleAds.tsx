'use client'
import { useEffect } from 'react'
import { GADS_ID } from '@/lib/gtag'

const INTERACTIONS = ['pointerdown', 'keydown', 'touchstart', 'scroll', 'mousemove'] as const

let loaded = false

/**
 * Loads the Google Ads tag (gtag.js) without costing page speed.
 *
 * gtag.js is ~170 KB of script and sets third-party cookies, so for ordinary
 * visits it waits for the first sign of a real person (scroll, tap, key, mouse
 * move). Visits that come from an ad click (gclid / gbraid / wbraid in the URL)
 * and the paid landing page (/lp) load it immediately so the click is captured
 * for conversion attribution before any client-side navigation drops the URL
 * params.
 */
export default function GoogleAds() {
  useEffect(() => {
    const load = () => {
      if (loaded) return
      loaded = true
      INTERACTIONS.forEach((e) => window.removeEventListener(e, load))
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`
      document.head.appendChild(s)
    }

    const fromAd = /[?&](gclid|gbraid|wbraid)=/.test(window.location.search) || window.location.pathname.startsWith('/lp')
    if (fromAd) { load(); return }

    INTERACTIONS.forEach((e) => window.addEventListener(e, load, { passive: true }))
    return () => INTERACTIONS.forEach((e) => window.removeEventListener(e, load))
  }, [])

  return null
}
