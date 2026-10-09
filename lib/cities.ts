// Content for the /web-design-<city> landing pages. Each city gets its own
// intro, neighborhoods, industries and FAQ so the pages aren't near-duplicates
// of one another; CityTemplate renders whatever is here.

export type ProjectKey = 'zona' | 'cloak' | 'easyLandscape' | 'elsApp' | 'conGusto'

export type LocalProject = {
  title: string
  location: string
  kind: string
  desc: string
  href: string
  external: boolean
}

// Real client work, labeled with where the client actually is.
export const LOCAL_PROJECTS: Record<ProjectKey, LocalProject> = {
  zona: {
    title: 'Zona Pest Solutions',
    location: 'Scottsdale & Mesa',
    kind: 'Website · Local SEO',
    desc: 'A fast custom site and local SEO build for a pest-control company serving Scottsdale and Mesa, wired into their FieldRoutes customer portal and built around recurring monthly plans.',
    href: 'https://www.zonapestsolutions.com',
    external: true,
  },
  cloak: {
    title: 'Cloak Wraps',
    location: 'Tempe',
    kind: 'Website · Branding',
    desc: 'A full rebrand and premium site for a Tempe vehicle-wrap and PPF studio: cinematic hero video, animated service pages, a custom quote flow and a dedicated EV page.',
    href: 'https://www.cloakwraps.com',
    external: true,
  },
  easyLandscape: {
    title: 'Easy Landscape Solutions',
    location: 'Gilbert',
    kind: 'Website · Branding',
    desc: 'A rebrand and custom site for a Gilbert hardscape and turf company, with a hand-built before-and-after slider and a consultation form that accepts yard photos.',
    href: 'https://www.easylandscapesolutions.com',
    external: true,
  },
  elsApp: {
    title: 'ELS Business App',
    location: 'Gilbert',
    kind: 'iOS App · Web Dashboard',
    desc: 'One iOS app and web dashboard that replaced five separate tools for scheduling, invoicing, CRM and live per-job profit tracking. The owner says it saves about 20 hours a week.',
    href: 'https://apps.apple.com/us/app/easy-ls-business-app/id6755699624',
    external: true,
  },
  conGusto: {
    title: 'Con Gusto',
    location: 'Southern California',
    kind: 'iOS · Android · AI',
    desc: 'Native iOS and Android apps on a FastAPI and AWS backend that run renovation operations for Liberty Military Housing, used by about 350 people across 10k+ housing units.',
    href: '/works/con-gusto',
    external: false,
  },
}

export type CityContent = {
  city: string
  region: string
  slug: string
  blurb: string
  intro: string[]
  areas: string[]
  industries: { title: string; desc: string }[]
  reasons: string[]
  projects: ProjectKey[]
  faqs: { q: string; a: string }[]
}

const timelineFaq = (city: string) => ({
  q: `How long does it take to build a website for a ${city} business?`,
  a: 'Most marketing sites ship in 3 to 5 weeks. Larger web apps or full redesigns typically run 6 to 10 weeks. You get a fixed timeline in the proposal before work starts.',
})

const meetFaq = (city: string, extra = '') => ({
  q: `Can we meet in person in ${city}?`,
  a: `Yes. We are based in Gilbert and work across metro Phoenix, so we are happy to meet at your office or somewhere nearby in ${city}${extra}. Plenty of clients prefer video calls, and that works just as well.`,
})

export const CITY_CONTENT: Record<string, CityContent> = {
  gilbert: {
    city: 'Gilbert',
    region: 'East Valley',
    slug: 'web-design-gilbert',
    blurb: 'Sunstate DevWorks is a Gilbert-based studio building custom websites, mobile apps, branding and AI tools for East Valley businesses. Hand-coded, never templated, and 100% yours.',
    intro: [
      'Gilbert is our home base. It has grown from a farm town into one of the largest towns in the country, and most of its businesses are owner-run: contractors, landscapers, dental and medical practices, fitness studios and the restaurants around the Heritage District.',
      'Those businesses mostly win work through local search and word of mouth. A Gilbert site has to load fast on a phone, show up when someone searches for a service near them, and make it easy to call or book. That is what we build, and we build it a few minutes from your door.',
    ],
    areas: ['Heritage District', 'Agritopia', 'SanTan Village', 'Val Vista Lakes', 'Power Ranch', 'Morrison Ranch', 'Seville'],
    industries: [
      { title: 'Home services & trades', desc: 'Landscaping, pest control, HVAC, pool and remodeling companies that need service-area pages, quote forms and reviews up front.' },
      { title: 'Healthcare & dental', desc: 'Practices that need clear service pages, online booking and a site patients trust, without a bloated template.' },
      { title: 'Restaurants & retail', desc: 'Heritage District and SanTan Village businesses that need menus, hours and directions that are easy to find on mobile.' },
    ],
    reasons: [
      'Gilbert is our home base. We know the East Valley market, the neighborhoods, and the local business landscape firsthand.',
      'In-person meetings are easy. No timezone lag and no account-manager relay, so you talk directly to the people building your project.',
      'Gilbert is one of the fastest-growing cities in the country. We understand what it takes to stand out in a competitive, family-friendly market full of ambitious small businesses.',
      'We have helped Gilbert businesses from Agritopia to the SanTan Village district build digital infrastructure that matches their ambition.',
    ],
    projects: ['easyLandscape', 'elsApp'],
    faqs: [
      meetFaq('Gilbert', ', since it is our home turf'),
      timelineFaq('Gilbert'),
      { q: 'Can you help a Gilbert service business show up in local search?', a: 'Yes. We structure the site around the services you offer and the areas you cover, add LocalBusiness structured data, and make sure your site and Google Business Profile tell Google the same story. Our Gilbert landscaping client went from a dated site to a fast custom one built this way.' },
    ],
  },

  phoenix: {
    city: 'Phoenix',
    region: 'The Valley',
    slug: 'web-design-phoenix',
    blurb: 'Sunstate DevWorks builds custom websites, apps, branding and AI for Phoenix businesses. Hand-coded from scratch, built to rank, and 100% owned by you.',
    intro: [
      'Phoenix is the fifth-largest city in the country and the most competitive search market in Arizona. Law firms on the Camelback Corridor, contractors in Deer Valley and restaurants on Roosevelt Row are all competing for the same few spots on page one.',
      'In a market this crowded, a template site blends in. We build custom sites that load fast, are structured for the specific searches your customers make, and look like they belong to a serious company. When you need more than a website, we build the app or internal tool too.',
    ],
    areas: ['Downtown Phoenix', 'Roosevelt Row', 'Arcadia', 'Camelback Corridor', 'North Central', 'Desert Ridge', 'Deer Valley'],
    industries: [
      { title: 'Professional services', desc: 'Law, accounting, finance and consulting firms that need credibility, clear practice-area pages and strong lead capture.' },
      { title: 'Construction & trades', desc: 'Contractors and service companies covering a huge metro that need city-by-city service pages and fast quote requests.' },
      { title: 'Restaurants & hospitality', desc: 'Downtown and Arcadia spots that need menus, reservations and a look that matches the room.' },
    ],
    reasons: [
      'Phoenix is the fifth-largest city in the country, and standing out online here takes more than a template. We build sites engineered to rank and convert.',
      'We are a short drive away in Gilbert, so Phoenix clients get a local partner, not an offshore ticket queue.',
      'From downtown startups to established firms in Midtown and along Camelback, we build digital products that hold their own against national competitors.',
      'Every site we ship is fast, accessible and SEO-ready, so Phoenix customers find you first.',
    ],
    projects: ['zona', 'cloak'],
    faqs: [
      meetFaq('Phoenix'),
      timelineFaq('Phoenix'),
      { q: 'Phoenix is a crowded market. How do you help a site stand out in search?', a: 'Speed, structure and specificity. We build pages that load fast on mobile, target the exact services and neighborhoods you cover instead of one generic page, and add structured data so Google understands your business. Then we keep the design distinct so visitors remember you.' },
    ],
  },

  scottsdale: {
    city: 'Scottsdale',
    region: 'The Valley',
    slug: 'web-design-scottsdale',
    blurb: 'Premium web design and development for Scottsdale businesses. Sunstate DevWorks builds hand-coded sites, apps and brands as polished as the city they serve.',
    intro: [
      'Scottsdale runs on hospitality, wellness, real estate and high-end retail. Customers here compare you against resorts in Old Town and boutiques at Kierland, so a site that looks cheap or loads slowly costs you the sale.',
      'We design Scottsdale sites to feel premium and still load instantly: restrained design, real photography, smooth motion and clean code instead of heavy page builders. We also handle the practical side, like booking, lead capture and local SEO, so the site earns its keep.',
    ],
    areas: ['Old Town', 'Scottsdale Waterfront', 'Kierland', 'McCormick Ranch', 'Gainey Ranch', 'DC Ranch', 'North Scottsdale'],
    industries: [
      { title: 'Med-spas & wellness', desc: 'Aesthetics, wellness and fitness brands that need a refined look, treatment pages and online booking.' },
      { title: 'Real estate & home', desc: 'Agents, builders and design studios that need listings, portfolios and imagery that load fast at full quality.' },
      { title: 'Hospitality & dining', desc: 'Restaurants, venues and event businesses where the site sets expectations before the first visit.' },
    ],
    reasons: [
      'Scottsdale expects premium. We design and build digital work that matches the standard of Old Town, the waterfront and North Scottsdale.',
      'Luxury, hospitality and professional brands need sites that feel expensive and load instantly. That is exactly what custom code delivers.',
      'We are local to the Valley, so Scottsdale clients get direct access and in-person meetings whenever they want them.',
      'From med-spas to real estate to fine dining, we have built brands that command attention in a crowded, high-end market.',
    ],
    projects: ['zona', 'cloak'],
    faqs: [
      meetFaq('Scottsdale'),
      timelineFaq('Scottsdale'),
      { q: 'Can a site feel high-end without being slow?', a: 'Yes, and that is the main reason to go custom. Template and page-builder sites get their polish from heavy plugins and scripts. We hand-code the design, optimize every image and keep scripts minimal, so the site feels premium and still loads in about a second.' },
    ],
  },

  chandler: {
    city: 'Chandler',
    region: 'East Valley',
    slug: 'web-design-chandler',
    blurb: 'Custom web design, apps and AI for Chandler businesses. Sunstate DevWorks is a Gilbert-based studio serving the tech corridor of the East Valley.',
    intro: [
      'Chandler is the tech center of the East Valley. Intel’s Ocotillo campus and the Price Road Corridor bring semiconductor, software and engineering companies, and a growing number of B2B startups and service firms have grown up around them.',
      'Many Chandler projects go beyond a marketing site: a customer portal, an internal dashboard, a field-service app or an AI tool that automates a manual process. We build those end to end, from the backend to the native app, alongside fast marketing sites for downtown Chandler shops and restaurants.',
    ],
    areas: ['Downtown Chandler', 'Price Road Corridor', 'Ocotillo', 'Fulton Ranch', 'Chandler Fashion Center area', 'Sun Groves'],
    industries: [
      { title: 'Tech & B2B', desc: 'Software, engineering and manufacturing suppliers that need technical credibility, product pages and real lead pipelines.' },
      { title: 'Internal tools & SaaS', desc: 'Dashboards, portals and workflow apps that replace spreadsheets and disconnected tools.' },
      { title: 'Downtown businesses', desc: 'Restaurants and retail around Downtown Chandler that need a fast mobile site and clear booking or ordering.' },
    ],
    reasons: [
      'Chandler is the Valley tech hub, home to Intel and a wave of ambitious startups. We speak the language of technical founders.',
      'We build web apps and custom software, not just marketing sites, so growing Chandler companies never outgrow their tools.',
      'Right next door in Gilbert, we offer in-person meetings and a direct line to the developers building your project.',
      'From downtown Chandler retail to enterprise SaaS, we ship products that scale with the businesses behind them.',
    ],
    projects: ['elsApp', 'conGusto'],
    faqs: [
      meetFaq('Chandler', ', just across the line from Gilbert'),
      timelineFaq('Chandler'),
      { q: 'Do you build web apps and internal tools, not just marketing sites?', a: 'Yes. Much of our work is software: native iOS and Android apps, web dashboards and AI-powered tools. We built a platform that runs renovation operations across more than 10,000 military housing units, and a business app that replaced five tools for an East Valley service company.' },
    ],
  },

  mesa: {
    city: 'Mesa',
    region: 'East Valley',
    slug: 'web-design-mesa',
    blurb: 'Web design and development for Mesa businesses. Sunstate DevWorks builds hand-coded sites, apps and branding for Arizona\'s third-largest city.',
    intro: [
      'Mesa is the third-largest city in Arizona, and it is spread out: downtown and the Mesa Arts Center on the west side, Dobson Ranch to the southwest, Red Mountain and Las Sendas to the northeast, and the Eastmark and Gateway airport area growing fast to the southeast.',
      'For a Mesa business, that means customers search by part of town as much as by city. We build sites that target the areas you actually serve, load fast on phones, and make it easy to call or request a quote. We already do this for a pest-control company ranking across Mesa and Scottsdale.',
    ],
    areas: ['Downtown Mesa', 'Dobson Ranch', 'Red Mountain', 'Las Sendas', 'Eastmark', 'Falcon Field', 'Gateway'],
    industries: [
      { title: 'Home services', desc: 'Pest control, landscaping, roofing and HVAC companies covering a big service area that need area pages and quote forms.' },
      { title: 'Aviation & industry', desc: 'Businesses around Falcon Field and Phoenix-Mesa Gateway that need clear capability pages and B2B lead capture.' },
      { title: 'Downtown & arts', desc: 'Restaurants, studios and shops near the Mesa Arts Center that need personality and an easy mobile experience.' },
    ],
    reasons: [
      'Mesa is the third-largest city in Arizona with a huge, diverse small-business base. We help local shops and services stand out online.',
      'We are minutes away in Gilbert, so Mesa clients get a genuinely local team, not a remote vendor.',
      'From the downtown Mesa arts district to the growing east side, we build sites tuned to rank in local search.',
      'Every project is hand-coded and fast, so your Mesa customers get a great experience on any device.',
    ],
    projects: ['zona', 'easyLandscape'],
    faqs: [
      meetFaq('Mesa'),
      timelineFaq('Mesa'),
      { q: 'Mesa is huge. Can you help us rank in the parts of town we serve?', a: 'Yes. Instead of one generic page, we build pages around the services you offer and the areas you cover, like east Mesa, Red Mountain or Dobson Ranch, and keep them fast and useful so they rank. Our Mesa and Scottsdale pest-control client uses exactly this approach.' },
    ],
  },

  tempe: {
    city: 'Tempe',
    region: 'East Valley',
    slug: 'web-design-tempe',
    blurb: 'Web, branding and app development for Tempe businesses. Sunstate DevWorks builds bold, hand-coded digital work for the home of ASU.',
    intro: [
      'Tempe mixes ASU, a startup scene and dense retail and nightlife along Mill Avenue and Tempe Town Lake. Customers here are young, on their phones and quick to judge a brand by its website.',
      'We have built in Tempe already: a full rebrand and premium site for Cloak Wraps, a vehicle-wrap and PPF studio. Tempe brands should look sharp, load fast and turn visits into booked appointments or quote requests, and that is how we build them.',
    ],
    areas: ['Mill Avenue District', 'Tempe Town Lake', 'ASU area', 'Tempe Marketplace', 'Kyrene', 'South Tempe'],
    industries: [
      { title: 'Automotive & specialty', desc: 'Wrap, detailing, tint and custom shops that sell on visuals and need quote flows that capture details up front.' },
      { title: 'Startups', desc: 'Early-stage teams near ASU that need a launch site, an MVP app or a brand that looks bigger than the team.' },
      { title: 'Food, drink & nightlife', desc: 'Mill Avenue and lakefront businesses that need menus, events and a brand with personality.' },
    ],
    reasons: [
      'Tempe moves fast, powered by ASU and a young, digital-first audience. We build sites and brands that resonate with them.',
      'From Mill Avenue storefronts to campus startups, we design work that feels current and performs under real traffic.',
      'We are right next door in Gilbert, so Tempe clients get in-person collaboration and a direct line to the team.',
      'Branding, web and mobile under one roof means your Tempe business shows up consistent everywhere it matters.',
    ],
    projects: ['cloak', 'zona'],
    faqs: [
      meetFaq('Tempe'),
      timelineFaq('Tempe'),
      { q: 'Do you work with early-stage startups near ASU?', a: 'Yes. We build launch sites, brand identities and MVP apps, and we hand over all the code so you are not locked into us as you grow. We will tell you honestly what to build now and what can wait until you have users.' },
    ],
  },

  peoria: {
    city: 'Peoria',
    region: 'West Valley',
    slug: 'web-design-peoria',
    blurb: 'Custom web design and development for Peoria businesses. Sunstate DevWorks brings hand-coded, template-free sites to the West Valley.',
    intro: [
      'Peoria stretches from Old Town Peoria north to Vistancia and Lake Pleasant, with the P83 entertainment district and the Peoria Sports Complex, spring-training home of the Padres and Mariners, in between. Much of its business base is family-owned service companies, healthcare practices and recreation businesses.',
      'West Valley customers search locally and on their phones. We build Peoria sites that load fast, rank for the areas you serve and make it easy to call, book or get a quote. That beats a slow template site that looks like every competitor’s.',
    ],
    areas: ['Old Town Peoria', 'P83 District', 'Vistancia', 'Lake Pleasant', 'Fletcher Heights', 'Westwing'],
    industries: [
      { title: 'Home services', desc: 'Contractors and service companies covering the West Valley that need area pages, reviews and quote forms.' },
      { title: 'Healthcare & family', desc: 'Dental, medical, therapy and childcare businesses where trust and easy booking matter most.' },
      { title: 'Recreation & dining', desc: 'Businesses around Lake Pleasant and P83 that lean on seasonal traffic and visitors searching on mobile.' },
    ],
    reasons: [
      'Peoria is one of the fastest-growing cities in the West Valley, and we help local businesses claim their spot online early.',
      'We build custom, not cookie-cutter, so your Peoria business does not look like every other site in town.',
      'Remote-friendly and responsive, we make working with a Valley studio effortless no matter where you are in Peoria.',
      'From the P83 entertainment district to family services, we build sites that rank and convert.',
    ],
    projects: ['zona', 'cloak'],
    faqs: [
      meetFaq('Peoria', ', or keep it on video since we are across the Valley in Gilbert'),
      timelineFaq('Peoria'),
      { q: 'You are in Gilbert. Do you really work with West Valley businesses?', a: 'Yes. Most of a web project happens over video calls and shared links, so distance does not slow anything down, and we will drive out for kickoff or a review when it helps. We build the site to rank in Peoria and the West Valley, not the East Valley.' },
    ],
  },

  glendale: {
    city: 'Glendale',
    region: 'West Valley',
    slug: 'web-design-glendale',
    blurb: 'Web design and development for Glendale businesses. Sunstate DevWorks builds fast, hand-coded sites, apps and branding for the West Valley.',
    intro: [
      'Glendale hosts some of the biggest events in the state at State Farm Stadium and Desert Diamond Arena, which keeps Westgate busy with restaurants, hotels and retail. Away from the stadium, historic downtown Glendale, Catlin Court and Arrowhead are full of long-standing local businesses.',
      'Event traffic and local regulars want different things. Visitors need hours, directions and a reason to pick you tonight, while regulars need booking, ordering or a quote. We build Glendale sites that handle both and load fast on a phone in a crowded parking lot.',
    ],
    areas: ['Westgate', 'Historic Downtown Glendale', 'Catlin Court', 'Arrowhead Ranch', 'Midwestern University area', 'Bellair'],
    industries: [
      { title: 'Hospitality & events', desc: 'Restaurants, bars and hotels near Westgate that need to win visitors searching on game day.' },
      { title: 'Local retail', desc: 'Downtown and Catlin Court shops that need a site with personality and easy directions.' },
      { title: 'Healthcare & services', desc: 'Practices and service businesses that need trust, clear services and simple booking.' },
    ],
    reasons: [
      'Glendale is home to major sports and entertainment venues, and we build brands ready for that kind of spotlight.',
      'From Westgate businesses to neighborhood services, we design sites tuned for local search and real conversions.',
      'We are a Valley studio with direct access and no runaround, so Glendale clients always reach the people doing the work.',
      'Every site is hand-coded and lightning-fast, which means better rankings and happier Glendale customers.',
    ],
    projects: ['cloak', 'zona'],
    faqs: [
      meetFaq('Glendale', ', or keep it on video since we are across the Valley in Gilbert'),
      timelineFaq('Glendale'),
      { q: 'Can you help a restaurant or bar near Westgate get found on event days?', a: 'Yes. We make the details visitors search for, like hours, menu, location and parking, fast and easy to find on mobile, and we add structured data so Google can show them directly. We also make sure your site and Google Business Profile match.' },
    ],
  },

  'queen-creek': {
    city: 'Queen Creek',
    region: 'Southeast Valley',
    slug: 'web-design-queen-creek',
    blurb: 'Web design, apps and branding for Queen Creek businesses. Sunstate DevWorks is a neighboring Gilbert studio building custom digital work for the Southeast Valley.',
    intro: [
      'Queen Creek has gone from farm country to one of the fastest-growing towns in Arizona while keeping its agritourism roots at places like Schnepf Farms and the Queen Creek Olive Mill. New neighborhoods keep bringing new families, and with them a wave of new local businesses.',
      'Many Queen Creek businesses are new or recently expanded and need a first real website, or a brand to go with it. We are next door in Gilbert, so we can set you up with a site that ranks locally, a brand that looks established, and room to grow.',
    ],
    areas: ['Downtown Queen Creek', 'Queen Creek Marketplace', 'Encanterra area', 'Hastings Farms', 'Harvest', 'San Tan Valley'],
    industries: [
      { title: 'New-home trades', desc: 'Landscaping, pools, solar, flooring and finishing companies serving the wave of new construction.' },
      { title: 'Agritourism & events', desc: 'Farms, venues and seasonal attractions that need event pages, ticketing links and great photos.' },
      { title: 'Family services', desc: 'Childcare, tutoring, fitness and healthcare businesses serving young families.' },
    ],
    reasons: [
      'Queen Creek is booming, and getting online early with a standout site is a real competitive edge. We make that happen.',
      'We are just up the road in Gilbert, so Queen Creek clients get a true local partner and easy in-person meetings.',
      'From agritourism and events to trades and retail, we build sites tuned to how Queen Creek customers actually search.',
      'Hand-coded, fast and fully owned by you, with no templates and no lock-in.',
    ],
    projects: ['easyLandscape', 'elsApp'],
    faqs: [
      meetFaq('Queen Creek', ', a short drive from our Gilbert base'),
      timelineFaq('Queen Creek'),
      { q: 'We are a new business. Do you do branding as well as the website?', a: 'Yes. We can design your logo, colors, typography and brand guidelines and then build the site on top of them, so everything matches from day one. We did exactly that for a Gilbert landscaping company.' },
    ],
  },

  surprise: {
    city: 'Surprise',
    region: 'West Valley',
    slug: 'web-design-surprise',
    blurb: 'Custom web design and development for Surprise businesses. Sunstate DevWorks builds hand-coded, template-free sites for the West Valley.',
    intro: [
      'Surprise anchors the Northwest Valley. Surprise Stadium hosts spring training for the Royals and Rangers, Sun City Grand sits inside city limits, and Sun City and Sun City West are next door, so a big share of local customers are retirees and seasonal residents.',
      'That shapes how a site should work: larger readable text, simple navigation, a phone number that is easy to tap and clear information about who you are. We build Surprise and Sun City sites around how these customers actually search and buy, and keep them fast on any device.',
    ],
    areas: ['Original Town Site', 'Surprise Stadium area', 'Sun City Grand', 'Marley Park', 'Sun City', 'Sun City West'],
    industries: [
      { title: 'Senior & healthcare', desc: 'Medical, home care, hearing, mobility and senior-living businesses where clarity and trust come first.' },
      { title: 'Home services', desc: 'Contractors, HVAC, pool and handyman companies covering Surprise and the Sun Cities.' },
      { title: 'Recreation & seasonal', desc: 'Golf, sports and hospitality businesses that peak with spring training and snowbird season.' },
    ],
    reasons: [
      'Surprise is growing fast, and we help local businesses build a digital presence that keeps pace with the city.',
      'We build custom sites engineered to rank in local search, so Surprise customers find you before your competitors.',
      'Responsive and remote-friendly, we make working with a Valley studio simple wherever you are in Surprise.',
      'Every project is fast, accessible and 100% yours to keep, with no platform lock-in.',
    ],
    projects: ['zona', 'easyLandscape'],
    faqs: [
      { q: 'Do you build websites for businesses in Sun City and Sun City West?', a: 'Yes. We work with businesses across Surprise, Sun City, Sun City West and the rest of the Northwest Valley. We build sites to be easy to read and use for older customers, and we target searches in each community you serve.' },
      meetFaq('Surprise', ', or keep it on video since we are across the Valley in Gilbert'),
      timelineFaq('Surprise'),
    ],
  },

  ahwatukee: {
    city: 'Ahwatukee',
    region: 'Phoenix · South Mountain',
    slug: 'web-design-ahwatukee',
    blurb: 'Web design, apps and AI for Ahwatukee businesses. Sunstate DevWorks builds hand-coded digital work for the Foothills community.',
    intro: [
      'Ahwatukee Foothills is part of Phoenix but works like its own town, tucked between South Mountain and the I-10 with Tempe and Chandler next door. It is home to many professionals, consultants and owner-run practices, plus the local shops and services that serve the neighborhoods.',
      'Ahwatukee customers search for "Ahwatukee," not "Phoenix," so ranking depends on a site that speaks to the community directly. We build sites that target Ahwatukee search, load fast and make it easy to book, and we are a short drive away in Gilbert.',
    ],
    areas: ['Ahwatukee Foothills', 'Mountain Park Ranch', 'Club West', 'The Foothills', 'Lakewood', 'Warner Ranch'],
    industries: [
      { title: 'Professional practices', desc: 'Consultants, advisors, attorneys and accountants who need credibility and a simple way to book a call.' },
      { title: 'Health & wellness', desc: 'Dental, medical, therapy and fitness businesses serving Foothills families.' },
      { title: 'Neighborhood services', desc: 'Home services, tutoring and retail that rely on Ahwatukee word of mouth and local search.' },
    ],
    reasons: [
      'Ahwatukee is a tight-knit Foothills community, and we build sites that connect with neighbors and local shoppers.',
      'We are close by in the East Valley, so Ahwatukee clients get local, personal service and direct access to the team.',
      'From professional services to local retail, we design fast sites tuned to rank in the searches that matter here.',
      'Hand-coded and template-free, so your Ahwatukee business stands apart from the cookie-cutter competition.',
    ],
    projects: ['cloak', 'easyLandscape'],
    faqs: [
      meetFaq('Ahwatukee'),
      timelineFaq('Ahwatukee'),
      { q: 'Ahwatukee is part of Phoenix. Should my site target Phoenix or Ahwatukee?', a: 'Both, deliberately. Local customers often search with "Ahwatukee" in the query, so the pages that matter most should name the community and the neighborhoods you serve. Broader Phoenix terms come second, on pages built for them.' },
    ],
  },

  'paradise-valley': {
    city: 'Paradise Valley',
    region: 'The Valley',
    slug: 'web-design-paradise-valley',
    blurb: 'Premium branding and web design for Paradise Valley businesses. Sunstate DevWorks builds refined, hand-coded digital work as elevated as the community it serves.',
    intro: [
      'Paradise Valley is one of the most exclusive towns in Arizona: mostly residential, set between Camelback and Mummy Mountain, with resorts like Sanctuary on Camelback and the Camelback Inn. Its businesses, and the businesses that serve its residents, work with clients who expect discretion and polish.',
      'For that audience, the website is the first meeting. We design Paradise Valley brands and sites with restraint: considered typography, real photography and fast, quiet interactions that make you look established and trustworthy.',
    ],
    areas: ['Camelback Mountain area', 'Mummy Mountain', 'Lincoln Drive corridor', 'Tatum Boulevard', 'Cheney Estates'],
    industries: [
      { title: 'Luxury real estate', desc: 'Agents, custom builders and architects whose portfolios need to load fast at full quality.' },
      { title: 'Wealth & advisory', desc: 'Wealth managers, family offices, attorneys and concierge firms where trust and discretion are the product.' },
      { title: 'Private practice', desc: 'Concierge medicine, aesthetics and design studios serving high-expectation clients.' },
    ],
    reasons: [
      'Paradise Valley is one of the most affluent communities in Arizona, and its brands deserve digital work to match. We deliver that polish.',
      'Luxury real estate, resorts and high-end services need sites that feel exclusive and load instantly. Custom code makes that possible.',
      'We are a local Valley studio offering discreet, direct, in-person collaboration.',
      'From identity to a flawless website, everything is built in-house and owned entirely by you.',
    ],
    projects: ['cloak', 'zona'],
    faqs: [
      meetFaq('Paradise Valley'),
      timelineFaq('Paradise Valley'),
      { q: 'Do you handle brand identity as well as the website?', a: 'Yes. We design the full identity, including logo, typography, color and guidelines, and then build the site on it, so everything feels consistent. Premium audiences notice when those do not match.' },
    ],
  },
}
