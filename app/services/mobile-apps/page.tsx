import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'
import { openGraphBase } from '@/lib/metadata'

const description = 'iOS and Android app development in Phoenix and Gilbert, AZ. Native SwiftUI and React Native apps with the backend included, from MVP to App Store launch.'

export const metadata: Metadata = {
  title: 'Mobile App Development in Phoenix, AZ',
  description,
  alternates: { canonical: 'https://sunstatedevworks.com/services/mobile-apps' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/services/mobile-apps',
    title: 'Mobile App Development in Phoenix, AZ | Sunstate DevWorks',
    description,
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '02',
        slug: 'mobile-apps',
        title: 'Mobile Apps',
        heading: 'Mobile app development',
        headingAccent: 'in Phoenix, AZ.',
        serviceType: 'Mobile app development',
        tagline: 'iOS · Android · React Native · SwiftUI',
        intro: 'Native iOS and Android apps for Arizona businesses and startups, built with SwiftUI and React Native. From a first MVP to App Store submission, with a real native feel and none of the web-app-in-a-shell shortcuts.',
        overviewHeading: ['An app is a product,', 'not just screens.'],
        overview: [
          'A good mobile app is more than an interface. It needs accounts and sign-in, a database, push notifications, payments, an admin side for your team and a plan for getting through App Store review. Plenty of agencies design the screens and leave the rest to you. We build the whole product: the iOS and Android apps, the backend they run on, and the web dashboard that usually goes with them.',
          'We choose the stack to fit the job. SwiftUI gives the most native iOS experience when an iPhone app is the priority. React Native and Expo let us ship iOS and Android from one codebase when you need both platforms without maintaining two separate apps.',
          'Our apps are in daily use. Easy Landscape Solutions in Gilbert runs leads, estimates, e-signatures, scheduling, customer texting and expenses from the iOS app we built, which replaced five separate apps. Con Gusto runs renovation operations for Liberty Military Housing on native iOS and Android apps used by about 350 people.',
        ],
        included: [
          'SwiftUI for iOS and React Native for cross-platform builds',
          'Biometric auth, push notifications and offline mode',
          'Full App Store and Google Play submission handled for you',
          'A Supabase or Laravel backend built in',
          'Analytics and crash reporting wired from day one',
          'You own the code, the store accounts and the data',
        ],
        useCasesHeading: ['Apps for teams, customers', 'and startups.'],
        useCases: [
          { t: 'Field service & operations', d: 'Scheduling, job tracking, photos, invoicing and time tracking for crews in the field, synced live with the office.' },
          { t: 'Customer-facing apps', d: 'Booking, ordering, loyalty and account apps that give your customers a reason to keep you on their home screen.' },
          { t: 'Startup MVPs', d: 'A focused first version that gets in front of real users quickly, on a foundation that can grow instead of being thrown away.' },
          { t: 'Companion web dashboards', d: 'Admin panels and web apps on the same backend as your mobile app, so your team and your customers see the same data.' },
        ],
        approach: [
          { t: 'Native feel, always', d: 'We build to platform conventions so your app feels like it belongs on the device, not like a website in a wrapper.' },
          { t: 'MVP to scale', d: 'We ship a focused first version fast, then grow it deliberately as real users tell you what actually matters.' },
          { t: 'Backends included', d: 'Auth, data, payments and notifications are part of the build, so your app is a complete product and not just a screen.' },
        ],
        projects: ['elsApp', 'conGusto', 'mystical'],
        faqs: [
          { q: 'iOS, Android, or both?', a: 'Either or both. React Native lets us ship both platforms from one codebase, and we reach for SwiftUI when an iOS-first experience calls for it.' },
          { q: 'How long does it take to build an app?', a: 'It depends on scope. A focused MVP moves much faster than a full platform with payments, user roles and a web dashboard. After the discovery call you get a written scope with a fixed timeline, so you know the launch date before we start.' },
          { q: 'Do you handle App Store submission?', a: 'Yes. We manage the full submission process for the App Store and Google Play, including the review back-and-forth.' },
          { q: 'What about the backend?', a: 'Included. We build the API, database, auth and integrations your app needs, usually on Supabase or Laravel.' },
          { q: 'Do you work with startups?', a: 'Yes. We help founders go from an idea to a launched MVP. Because you own the code and the store accounts, you can raise, hire or bring development in-house later without starting over.' },
          { q: 'Do you only build apps for Arizona businesses?', a: 'No. We are based in Gilbert and meet with clients across metro Phoenix in person, and we work with clients elsewhere over video. Con Gusto, for example, runs operations in Southern California.' },
        ],
      }}
    />
  )
}
