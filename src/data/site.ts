const IMG = 'https://cruisewhitsundays.imgix.net'

export const img = (path: string, params = 'fit=crop&w=1400&h=780&auto=format&q=70') =>
  `${IMG}/${path}?${params}`

export type HeroSlideId =
  | 'reefsleepOffer1'
  | 'gbrAdventure'
  | 'reefworldReimagined'
  | 'hamiltonFreestyle'
  | 'reefsleepOffer2'
  | 'reefBeachCombo'
  | 'reefsuitesStay'
  | 'whitehavenHalfDay'

export interface HeroSlide {
  id: HeroSlideId
  href: string
  image: string
}

export type NavItemId =
  | 'experiences'
  | 'reefworld'
  | 'resortConnections'
  | 'groups'
  | 'specialOffers'
  | 'whitsundays'
  | 'aboutUs'
  | 'gifts'

export interface NavItem {
  id: NavItemId
  href: string
  hasChildren: boolean
}

export type ExperienceId =
  | 'gbrFullDay'
  | 'camiraSailing'
  | 'whitehavenChillGrill'
  | 'whitehavenCruise'
  | 'reefsuites'
  | 'reefsleep'
  | 'whitehavenHamilton'
  | 'ultimateCombo'
  | 'daydreamIsland'
  | 'hamiltonFreestyle'
  | 'reefSailCombo'
  | 'reefExploreCombo'

export interface Experience {
  id: ExperienceId
  price: number
  image: string
}

export type TestimonialId = 'sunshine' | 'loveTravel' | 'rachel' | 'sab'

export interface Testimonial {
  id: TestimonialId
  author: string
  location?: string
}

export type InstagramId =
  | 'heartPontoon'
  | 'gbrAdventureSept'
  | 'whitehavenPov'
  | 'reefworldAppreciation'
  | 'fathersDay'
  | 'whitsundaysWaiting'
  | 'reefsleepReimagined'
  | 'reefsuitesGrandReopening'

export interface InstagramPost {
  id: InstagramId
  image: string
  likes: number
  comments: number
}

export type FooterColumnId = 'experiences' | 'aboutUs' | 'contactUs'

export interface FooterColumn {
  id: FooterColumnId
}

export const heroSlides: HeroSlide[] = [
  { id: 'reefsleepOffer1', href: '#special-offers', image: img('2026/08/750d42de-aa08-4970-91b8-19245ea923d0-e1788155374398.png') },
  { id: 'gbrAdventure', href: '#experiences', image: img('2026/03/CWS-Experiences-Great-Barrier-Reef-Adventure-275-scaled.jpg') },
  { id: 'reefworldReimagined', href: '#reefworld', image: img('2026/06/WEB_CW_ReefSuitesShoot_May24_259.png') },
  { id: 'hamiltonFreestyle', href: '#experiences', image: img('2026/04/14-e1780440347199.png') },
  { id: 'reefsleepOffer2', href: '#special-offers', image: img('2026/08/CWS-2026-Accommodation-Reefsleep-8-scaled-e1788156151611.jpg') },
  { id: 'reefBeachCombo', href: '#experiences', image: img('2026/08/WEB_CW_HeartPontoon_0726_054.jpg') },
  { id: 'reefsuitesStay', href: '#reefworld', image: img('2019/09/Reefsuite-Hero.jpg') },
  { id: 'whitehavenHalfDay', href: '#experiences', image: img('2026/04/WEBSITE-featured-image1920x1080-5.png') },
]

export const navItems: NavItem[] = [
  { id: 'experiences', href: '#experiences', hasChildren: true },
  { id: 'reefworld', href: '#reefworld', hasChildren: true },
  { id: 'resortConnections', href: '#resort-connections', hasChildren: true },
  { id: 'groups', href: '#groups', hasChildren: false },
  { id: 'specialOffers', href: '#special-offers', hasChildren: true },
  { id: 'whitsundays', href: '#whitsundays', hasChildren: true },
  { id: 'aboutUs', href: '#about', hasChildren: true },
  { id: 'gifts', href: '#gifts', hasChildren: true },
]

const card = 'fit=crop&w=600&h=560&auto=format&q=70'

export const experiences: Experience[] = [
  { id: 'gbrFullDay', price: 295, image: img('2026/03/CWS-2021-Experiences-Reefsleep-189-1-scaled.jpg', card) },
  { id: 'camiraSailing', price: 235, image: img('2019/03/Untitled-design-3-scaled.png', card) },
  { id: 'whitehavenChillGrill', price: 255, image: img('2019/11/Whitehaven-Beach-Hill-Inlet-Lookout-e1781160108821.jpg', card) },
  { id: 'whitehavenCruise', price: 139, image: img('2019/03/Whitehaven-Beach-Southern-Lookout.jpg', card) },
  { id: 'reefsuites', price: 1495, image: img('2019/09/WEB_CW_ReefSuitesShoot_May24_225-e1779343616963.jpg', card) },
  { id: 'reefsleep', price: 895, image: img('2019/03/260728_CWS_day2_3490-0408-scaled-e1785999381750.jpg', card) },
  { id: 'whitehavenHamilton', price: 220, image: img('2019/03/Hamilton-Island-Marina.jpg', card) },
  { id: 'ultimateCombo', price: 409, image: img('2019/03/WEBSITE-featured-image-sizing-scaled-e1777258258902.png', card) },
  { id: 'daydreamIsland', price: 169, image: img('2025/03/Website-.jpg', card) },
  { id: 'hamiltonFreestyle', price: 155, image: img('2019/03/Website-Hero.jpg', card) },
  { id: 'reefSailCombo', price: 495, image: img('2026/03/CWS-Experiences-Camira-60-with-sails-scaled-e1773122774171.jpg', card) },
  { id: 'reefExploreCombo', price: 295, image: img('2026/03/WEBSITE-featured-image-sizing-1-scaled.png', card) },
]

export const testimonials: Testimonial[] = [
  { id: 'sunshine', author: 'SunshineTWH, Trip Advisor' },
  { id: 'loveTravel', author: 'LoveTravelFoodWine, Trip Advisor', location: 'Lincoln, Nebraska' },
  { id: 'rachel', author: 'RachelP131, TripAdvisor', location: 'Island of Malta, Malta' },
  { id: 'sab', author: 'Sab5859, TripAdvisor', location: 'Banff, UK' },
]

const ig = 'fit=crop&w=400&h=400&auto=format&q=60'
export const instagramPosts: InstagramPost[] = [
  { id: 'heartPontoon', image: img('2026/08/WEB_CW_HeartPontoon_0726_054.jpg', ig), likes: 142, comments: 2 },
  { id: 'gbrAdventureSept', image: img('2026/03/CWS-Experiences-Great-Barrier-Reef-Adventure-275-scaled.jpg', ig), likes: 145, comments: 5 },
  { id: 'whitehavenPov', image: img('2019/11/Whitehaven-Beach-Hill-Inlet-Lookout-e1781160108821.jpg', ig), likes: 143, comments: 14 },
  { id: 'reefworldAppreciation', image: img('2026/06/WEB_CW_ReefSuitesShoot_May24_259.png', ig), likes: 134, comments: 4 },
  { id: 'fathersDay', image: img('2019/03/Website-Hero.jpg', ig), likes: 130, comments: 1 },
  { id: 'whitsundaysWaiting', image: img('2019/03/Whitehaven-Beach-Southern-Lookout.jpg', ig), likes: 384, comments: 5 },
  { id: 'reefsleepReimagined', image: img('2026/08/CWS-2026-Accommodation-Reefsleep-8-scaled-e1788156151611.jpg', ig), likes: 104, comments: 0 },
  { id: 'reefsuitesGrandReopening', image: img('2019/09/Reefsuite-Hero.jpg', ig), likes: 308, comments: 27 },
]

export const footerColumns: FooterColumn[] = [
  { id: 'experiences' },
  { id: 'aboutUs' },
  { id: 'contactUs' },
]
