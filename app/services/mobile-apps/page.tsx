import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'

export const metadata: Metadata = {
  title: 'Mobile App Development',
  description: 'Native iOS and Android apps built with SwiftUI and React Native. From MVP to App Store, backend included. Gilbert and Phoenix, AZ.',
  alternates: { canonical: 'https://sunstatedevworks.com/services/mobile-apps' },
  openGraph: {
    url: 'https://sunstatedevworks.com/services/mobile-apps',
    title: 'Mobile App Development | Sunstate DevWorks',
    description: 'Native iOS and Android apps built with SwiftUI and React Native. From MVP to App Store, backend included.',
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '02',
        title: 'Mobile Apps',
        titleAccent: 'Apps',
        tagline: 'iOS · Android · React Native · SwiftUI',
        intro: 'Native iOS and Android apps built with SwiftUI and React Native. From a first MVP to App Store submission, with a real native feel and none of the web-app-in-a-shell shortcuts.',
        included: [
          'SwiftUI for iOS and React Native for cross-platform builds',
          'Biometric auth, push notifications and offline mode',
          'Full App Store and Google Play submission handled for you',
          'A Supabase or Laravel backend built in',
          'Analytics and crash reporting wired from day one',
          'You own the code, the store accounts and the data',
        ],
        approach: [
          { t: 'Native feel, always', d: 'We build to platform conventions so your app feels like it belongs on the device, not like a website in a wrapper.' },
          { t: 'MVP to scale', d: 'We ship a focused first version fast, then grow it deliberately as real users tell you what actually matters.' },
          { t: 'Backends included', d: 'Auth, data, payments and notifications are part of the build, so your app is a complete product and not just a screen.' },
        ],
        faqs: [
          { q: 'iOS, Android, or both?', a: 'Either or both. React Native lets us ship both platforms from one codebase, and we reach for SwiftUI when an iOS-first experience calls for it.' },
          { q: 'Do you handle App Store submission?', a: 'Yes. We manage the full submission process for the App Store and Google Play, including the review back-and-forth.' },
          { q: 'What about the backend?', a: 'Included. We build the API, database, auth and integrations your app needs, usually on Supabase or Laravel.' },
        ],
      }}
    />
  )
}
