export const GADS_ID = 'AW-18140545756'

// Inline bootstrap rendered in <head> by the root layout: defines window.gtag
// right away so calls made before gtag.js arrives (e.g. /lp conversions) are
// queued in dataLayer and sent once it loads (see components/GoogleAds.tsx).
export const GTAG_BOOTSTRAP = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GADS_ID}');`
