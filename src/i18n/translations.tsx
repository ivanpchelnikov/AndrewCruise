import type { ReactNode } from 'react'
import type {
  ExperienceId,
  FooterColumnId,
  HeroSlideId,
  InstagramId,
  NavItemId,
  TestimonialId,
} from '../data/site'

export type Locale = 'en' | 'ru' | 'zh'

export interface LocaleInfo {
  code: Locale
  label: string
}

export const locales: LocaleInfo[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
]

export interface Strings {
  header: {
    utilityLinks: string[]
    search: string
    bookNow: string
    openMenu: string
    closeMenu: string
    toggleSection: (label: string) => string
  }
  nav: Record<NavItemId, { label: string; children: string[] }>
  hero: {
    slides: Record<HeroSlideId, { eyebrow: string; title: string; cta: string }>
    prevSlide: string
    nextSlide: string
    goToSlide: (n: number) => string
  }
  reefworld: {
    title: string
    subtitle: string
    discoverCta: string
    imageAlt: string
    greatBarrierReef: string
    reefworldName: string
    reefsleep: string
    reefsuites: string
    paragraph1: (link: ReactNode) => ReactNode
    paragraph2: (link: ReactNode) => ReactNode
    paragraph3: (reefsleepLink: ReactNode, reefsuitesLink: ReactNode) => ReactNode
    paragraph4: string
  }
  whitsundays: {
    title: string
    subtitle: string
    reefstaysCta: string
    experiencesCta: string
    resortConnectionsCta: string
    imageAlt: string
    airlieBeach: string
    resortConnections: string
    greatBarrierReef: string
    whitehavenBeach: string
    hamiltonIsland: string
    reefsleep: string
    reefsuites: string
    paragraph1: (airlieLink: ReactNode) => ReactNode
    paragraph2: (
      resortLink: ReactNode,
      gbrLink: ReactNode,
      whitehavenLink: ReactNode,
      hamiltonLink: ReactNode,
    ) => ReactNode
    paragraph3: (reefsleepLink: ReactNode, reefsuitesLink: ReactNode) => ReactNode
  }
  acknowledgement: { paragraph1: string; paragraph2: string }
  experiences: {
    heading: string
    prevAria: string
    nextAria: string
    viewAll: string
    priceFormat: (price: number) => string
    items: Record<ExperienceId, string>
  }
  testimonials: { quotes: Record<TestimonialId, string> }
  instagram: {
    handle: string
    postsCount: string
    postsLabel: string
    followersCount: string
    followersLabel: string
    loadMore: string
    captions: Record<InstagramId, string>
  }
  footer: {
    newsletterLabel: string
    emailSrLabel: string
    emailPlaceholder: string
    signup: string
    thanks: string
    addressName: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
    reservationsLabel: string
    copyright: (year: number) => string
    columns: Record<FooterColumnId, { heading: string; links: string[] }>
  }
  bookModal: {
    title: string
    subtitle: string
    close: string
    options: { resortConnections: string; experiences: string; both: string }
    orCall: string
  }
  languageSwitcher: { label: string }
}

const en: Strings = {
  header: {
    utilityLinks: ['Agent Portal', 'Manage Booking', 'Commuter Member Portal'],
    search: 'Search',
    bookNow: 'Book Now',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleSection: (label) => `Toggle ${label}`,
  },
  nav: {
    experiences: {
      label: 'Experiences',
      children: [
        'Whitehaven Beach & Hill Inlet',
        'Great Barrier Reef Adventures',
        'Camira Sailing Adventure',
        'Island Escape Day Cruises',
        'Airlie Beach',
        'Brochures',
      ],
    },
    reefworld: { label: 'Reefworld', children: ['Reefsleep', 'Reefsuites'] },
    resortConnections: {
      label: 'Resort Connections',
      children: [
        'Timetable',
        'Fares',
        'Locations & Parking',
        'Luggage & Freight',
        'Special Assistance',
        'Commuter Member Portal',
        'Commuter Registration Page',
      ],
    },
    groups: { label: 'Groups & Events', children: [] },
    specialOffers: {
      label: 'Special Offers',
      children: ['Reefsleep Grand Opening Offer', 'Turtle Club', 'Newsletter sign-up'],
    },
    whitsundays: {
      label: 'The Whitsundays',
      children: [
        'Whitehaven Beach & Hill Inlet',
        'Great Barrier Reef',
        'Sailing Adventures',
        'Island Paradise',
        'Airlie Beach',
        'Blogs',
      ],
    },
    aboutUs: {
      label: 'About Us',
      children: [
        'Contact Us',
        'FAQs',
        'Careers',
        'Environmental Commitment',
        'Join the Travel Club',
        'Tourism Partners',
      ],
    },
    gifts: { label: 'Gifts', children: ['Gift Shop', 'Gift Voucher'] },
  },
  hero: {
    slides: {
      reefsleepOffer1: {
        eyebrow: 'Reefsleep Grand Reopening Offer',
        title: 'From $1,399 per couple',
        cta: 'Discover your stay',
      },
      gbrAdventure: {
        eyebrow: '20% off Great Barrier Reef',
        title: 'Full day adventure',
        cta: 'Plan your reef day',
      },
      reefworldReimagined: {
        eyebrow: 'Reefworld Reimagined',
        title: 'An exclusive overnight experience',
        cta: "See what's waiting",
      },
      hamiltonFreestyle: {
        eyebrow: '20% off Hamilton Island',
        title: 'Freestyle',
        cta: 'Step into island time',
      },
      reefsleepOffer2: {
        eyebrow: 'Reefsleep Grand Reopening Offer',
        title: 'From $1,399 per couple',
        cta: 'Meet the new Reefworld',
      },
      reefBeachCombo: {
        eyebrow: 'Ultimate Whitsundays Combo',
        title: 'Reef & Beach',
        cta: 'Take your time. See it all.',
      },
      reefsuitesStay: {
        eyebrow: "The Great Barrier Reef's most exclusive experience",
        title: 'A stay like no other',
        cta: 'A stay like no other',
      },
      whitehavenHalfDay: {
        eyebrow: '20% off Whitehaven Beach',
        title: 'Half day cruise',
        cta: 'Whitehaven is calling',
      },
    },
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
    goToSlide: (n) => `Go to slide ${n}`,
  },
  reefworld: {
    title: 'Reefworld Reimagined',
    subtitle: 'The most exclusive overnight experience on the Great Barrier Reef',
    discoverCta: 'Discover your Reefworld stay',
    imageAlt: 'Reefworld pontoon at Hardy Reef',
    greatBarrierReef: 'Great Barrier Reef',
    reefworldName: 'Reefworld',
    reefsleep: 'Reefsleep',
    reefsuites: 'Reefsuites',
    paragraph1: (link) => (
      <>Now open, a new era in exclusive overnight experiences has arrived in the heart of the {link}.</>
    ),
    paragraph2: (link) => (
      <>
        {link} has been reimagined as an exclusive overnight-only pontoon at Hardy Reef, offering a more intimate
        and immersive way to experience the reef from day to night.
      </>
    ),
    paragraph3: (reefsleepLink, reefsuitesLink) => (
      <>
        Sleep beneath the stars in {reefsleepLink} or below the surface in {reefsuitesLink}, Australia&rsquo;s
        first underwater accommodation.
      </>
    ),
    paragraph4:
      'With limited overnight guests, enhanced spaces, chef-prepared dining and more time to slow down and connect with the reef, this is one of the Whitsundays’ most unforgettable escapes.',
  },
  whitsundays: {
    title: 'Explore the Whitsundays',
    subtitle: 'About Cruise Whitsundays',
    reefstaysCta: 'Reefstays',
    experiencesCta: 'Experiences',
    resortConnectionsCta: 'Resort Connections',
    imageAlt: 'Whitsunday islands from the air',
    airlieBeach: 'Airlie Beach',
    resortConnections: 'Resort Connections',
    greatBarrierReef: 'Great Barrier Reef',
    whitehavenBeach: 'Whitehaven Beach',
    hamiltonIsland: 'Hamilton Island',
    reefsleep: 'Reefsleep',
    reefsuites: 'Reefsuites',
    paragraph1: (airlieLink) => (
      <>
        Based in {airlieLink}, we know how lucky we are to call the Whitsundays home and work hard to showcase the
        highlights of this incredible region to visitors from around the world.
      </>
    ),
    paragraph2: (resortLink, gbrLink, whitehavenLink, hamiltonLink) => (
      <>
        Our {resortLink}, day cruises and activities can take you to the {gbrLink}, iconic {whitehavenLink},
        must-see {hamiltonLink}, energetic Airlie Beach and the ocean and islands in between.
      </>
    ),
    paragraph3: (reefsleepLink, reefsuitesLink) => (
      <>
        We also offer {reefsleepLink} &ndash; a fabulous night under the stars on the outer Great Barrier Reef and
        Australia&rsquo;s first underwater accommodation, {reefsuitesLink}. Be prepared for an intimate experience
        that will stay with you forever.
      </>
    ),
  },
  acknowledgement: {
    paragraph1:
      'Journey Beyond and Cruise Whitsundays acknowledges Traditional Owners of Country throughout The Whitsundays and Australia and recognises the continuing connection to lands, waters and communities.',
    paragraph2:
      'We pay our respect to Aboriginal and Torres Strait Islander cultures; and to Elders past, present and emerging, and commit to building a brighter future together.',
  },
  experiences: {
    heading: 'Our Experiences',
    prevAria: 'Previous experiences',
    nextAria: 'Next experiences',
    viewAll: 'View All',
    priceFormat: (price) => `From $${price.toLocaleString('en-AU')} pp`,
    items: {
      gbrFullDay: 'Great Barrier Reef Full Day Adventure',
      camiraSailing: 'Camira Sailing Adventure',
      whitehavenChillGrill: 'Whitehaven Beach & Hill Inlet Chill & Grill',
      whitehavenCruise: 'Whitehaven Beach Morning or Afternoon Cruise',
      reefsuites: 'Reefsuites',
      reefsleep: 'Reefsleep',
      whitehavenHamilton: 'Whitehaven Beach & Hamilton Island Tour',
      ultimateCombo: 'Ultimate Whitsundays Combo',
      daydreamIsland: 'Daydream Island Escape',
      hamiltonFreestyle: 'Hamilton Island Freestyle',
      reefSailCombo: 'Reef & Sail – The Whitsunday Icons Combo',
      reefExploreCombo: 'Reef & Explore Combo',
    },
  },
  testimonials: {
    quotes: {
      sunshine:
        'Snorkeling the Great Barrier Reef was an amazing experience and Whitehaven Beach was beyond gorgeous!! If you are undecided, just book it! You will not be disappointed',
      loveTravel:
        'Sleeping under the stars and above the reef should be on your bucket list! Incredible experience. The overnight staff were all outstanding.',
      rachel: 'Awesome and very professional crew who made us feel very safe and well taken care of.',
      sab: 'The staff were truly excellent both while on the pontoon and the catamaran. We had a fantastic day at the reef and would recommend this trip.',
    },
  },
  instagram: {
    handle: 'cruisewhitsundays',
    postsCount: '1,702',
    postsLabel: 'posts',
    followersCount: '47,118',
    followersLabel: 'followers',
    loadMore: 'Load More',
    captions: {
      heartPontoon: 'The Whitsundays, just as nature intended.',
      gbrAdventureSept: 'September on the Great Barrier Reef',
      whitehavenPov: 'POV: you let us plan your camera roll',
      reefworldAppreciation: 'A little Reefworld appreciation',
      fathersDay: "Happy Father's Day to all the amazing dads",
      whitsundaysWaiting: 'A little reminder that the Whitsundays are waiting',
      reefsleepReimagined: 'A night on the Great Barrier Reef, reimagined.',
      reefsuitesGrandReopening: 'Ready to stay the night? Our Grand Reopening offer is live',
    },
  },
  footer: {
    newsletterLabel: 'Sign up to receive the latest news and offers',
    emailSrLabel: 'Email address',
    emailPlaceholder: 'Email address',
    signup: 'Signup',
    thanks: 'Thanks!',
    addressName: 'Cruise Whitsundays',
    addressLine1: '24 The Cove Road, Airlie Beach',
    addressLine2: '(Port of Airlie)',
    addressLine3: 'Queensland, Australia, 4802',
    reservationsLabel: 'Reservations',
    copyright: (year) => `© ${year} Journey Beyond`,
    columns: {
      experiences: {
        heading: 'Experiences',
        links: ['Accommodation', 'Resort Connections', 'Special Offers'],
      },
      aboutUs: {
        heading: 'About Us',
        links: ['Careers', 'Environmental Commitment', 'Terms & Conditions', 'Privacy Policy'],
      },
      contactUs: {
        heading: 'Contact Us',
        links: [
          'Manage Booking',
          'Agent Booking',
          'Commuter Member Portal',
          'Agent Experience Hub',
          'Media Portal',
        ],
      },
    },
  },
  bookModal: {
    title: 'Ready to book?',
    subtitle: 'Please select what you would like to book.',
    close: 'Close',
    options: { resortConnections: 'Resort Connections', experiences: 'Experiences', both: 'Both' },
    orCall: 'Or call',
  },
  languageSwitcher: { label: 'Change language' },
}

const ru: Strings = {
  header: {
    utilityLinks: ['Портал агента', 'Управление бронированием', 'Портал участника перевозок'],
    search: 'Поиск',
    bookNow: 'Забронировать',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    toggleSection: (label) => `Показать раздел «${label}»`,
  },
  nav: {
    experiences: {
      label: 'Развлечения',
      children: [
        'Пляж Уайтхейвен и Хилл-Инлет',
        'Приключения на Большом Барьерном рифе',
        'Парусное приключение Camira',
        'Однодневные круизы Island Escape',
        'Эрли-Бич',
        'Брошюры',
      ],
    },
    reefworld: { label: 'Reefworld', children: ['Reefsleep', 'Reefsuites'] },
    resortConnections: {
      label: 'Курортные трансферы',
      children: [
        'Расписание',
        'Тарифы',
        'Места отправления и парковка',
        'Багаж и грузоперевозки',
        'Особая помощь',
        'Портал постоянного пассажира',
        'Регистрация постоянного пассажира',
      ],
    },
    groups: { label: 'Группы и мероприятия', children: [] },
    specialOffers: {
      label: 'Специальные предложения',
      children: ['Открытие Reefsleep', 'Клуб Turtle Club', 'Подписка на новости'],
    },
    whitsundays: {
      label: 'Уитсандей',
      children: [
        'Пляж Уайтхейвен и Хилл-Инлет',
        'Большой Барьерный риф',
        'Морские приключения',
        'Райские острова',
        'Эрли-Бич',
        'Блог',
      ],
    },
    aboutUs: {
      label: 'О нас',
      children: [
        'Связаться с нами',
        'Частые вопросы',
        'Карьера',
        'Забота об экологии',
        'Клуб путешественников',
        'Партнёрам по туризму',
      ],
    },
    gifts: { label: 'Подарки', children: ['Магазин подарков', 'Подарочный сертификат'] },
  },
  hero: {
    slides: {
      reefsleepOffer1: {
        eyebrow: 'Reefsleep: предложение к открытию',
        title: 'От $1399 за пару',
        cta: 'Узнать о проживании',
      },
      gbrAdventure: {
        eyebrow: 'Скидка 20% на Большой Барьерный риф',
        title: 'Приключение на весь день',
        cta: 'Спланировать день на рифе',
      },
      reefworldReimagined: {
        eyebrow: 'Reefworld: новая концепция',
        title: 'Эксклюзивный отдых с ночёвкой',
        cta: 'Узнать, что вас ждёт',
      },
      hamiltonFreestyle: {
        eyebrow: 'Скидка 20% на остров Гамильтон',
        title: 'Freestyle',
        cta: 'Окунитесь в островной ритм',
      },
      reefsleepOffer2: {
        eyebrow: 'Reefsleep: предложение к открытию',
        title: 'От $1399 за пару',
        cta: 'Познакомьтесь с новым Reefworld',
      },
      reefBeachCombo: {
        eyebrow: 'Комбо «Всё включено» по Уитсандей',
        title: 'Риф и пляж',
        cta: 'Не спешите — увидьте всё',
      },
      reefsuitesStay: {
        eyebrow: 'Самый эксклюзивный отдых на Большом Барьерном рифе',
        title: 'Проживание, каких больше нет',
        cta: 'Проживание, каких больше нет',
      },
      whitehavenHalfDay: {
        eyebrow: 'Скидка 20% на пляж Уайтхейвен',
        title: 'Круиз на полдня',
        cta: 'Уайтхейвен зовёт',
      },
    },
    prevSlide: 'Предыдущий слайд',
    nextSlide: 'Следующий слайд',
    goToSlide: (n) => `Перейти к слайду ${n}`,
  },
  reefworld: {
    title: 'Reefworld: новая концепция',
    subtitle: 'Самый эксклюзивный отдых с ночёвкой на Большом Барьерном рифе',
    discoverCta: 'Узнать о проживании в Reefworld',
    imageAlt: 'Понтон Reefworld на рифе Харди',
    greatBarrierReef: 'Большого Барьерного рифа',
    reefworldName: 'Reefworld',
    reefsleep: 'Reefsleep',
    reefsuites: 'Reefsuites',
    paragraph1: (link) => <>Открыта новая эра эксклюзивного отдыха с ночёвкой в самом сердце {link}.</>,
    paragraph2: (link) => (
      <>
        {link} переосмыслён как эксклюзивный понтон только для ночного проживания на рифе Харди — более камерный и
        глубокий способ прочувствовать риф от рассвета до заката.
      </>
    ),
    paragraph3: (reefsleepLink, reefsuitesLink) => (
      <>
        Спите под звёздами в {reefsleepLink} или под водой в {reefsuitesLink} — первом в Австралии подводном
        номере.
      </>
    ),
    paragraph4:
      'Ограниченное число гостей на ночь, улучшенные пространства, ужины от шеф-повара и больше времени, чтобы замедлиться и почувствовать риф, — это одно из самых незабываемых впечатлений Уитсандей.',
  },
  whitsundays: {
    title: 'Исследуйте Уитсандей',
    subtitle: 'О компании Cruise Whitsundays',
    reefstaysCta: 'Отдых на рифе',
    experiencesCta: 'Развлечения',
    resortConnectionsCta: 'Курортные трансферы',
    imageAlt: 'Острова Уитсандей с высоты птичьего полёта',
    airlieBeach: 'Эрли-Бич',
    resortConnections: 'Курортные трансферы',
    greatBarrierReef: 'Большому Барьерному рифу',
    whitehavenBeach: 'легендарному пляжу Уайтхейвен',
    hamiltonIsland: 'популярному острову Гамильтон',
    reefsleep: 'Reefsleep',
    reefsuites: 'Reefsuites',
    paragraph1: (airlieLink) => (
      <>
        Мы базируемся в {airlieLink} и знаем, как нам повезло называть Уитсандей своим домом. Мы стараемся показать
        гостям со всего мира лучшее, что есть в этом удивительном регионе.
      </>
    ),
    paragraph2: (resortLink, gbrLink, whitehavenLink, hamiltonLink) => (
      <>
        Наши {resortLink}, однодневные круизы и развлечения доставят вас к {gbrLink}, к {whitehavenLink}, на{' '}
        {hamiltonLink}, в оживлённый Эрли-Бич и на острова между ними.
      </>
    ),
    paragraph3: (reefsleepLink, reefsuitesLink) => (
      <>
        Мы также предлагаем {reefsleepLink} — незабываемую ночь под звёздами на внешнем Большом Барьерном рифе и{' '}
        {reefsuitesLink}, первый в Австралии подводный номер. Это по-настоящему камерный опыт, который запомнится
        навсегда.
      </>
    ),
  },
  acknowledgement: {
    paragraph1:
      'Journey Beyond и Cruise Whitsundays признают традиционных владельцев земель на всей территории Уитсандей и Австралии и чтят их неразрывную связь с землёй, водами и общинами.',
    paragraph2:
      'Мы выражаем уважение культурам аборигенов и жителей островов Торресова пролива, а также старейшинам прошлого, настоящего и будущего и стремимся вместе строить светлое будущее.',
  },
  experiences: {
    heading: 'Наши развлечения',
    prevAria: 'Предыдущие развлечения',
    nextAria: 'Следующие развлечения',
    viewAll: 'Смотреть все',
    priceFormat: (price) => `От $${price.toLocaleString('ru-RU')} с человека`,
    items: {
      gbrFullDay: 'Большой Барьерный риф — приключение на весь день',
      camiraSailing: 'Парусное приключение Camira',
      whitehavenChillGrill: 'Уайтхейвен и Хилл-Инлет: отдых и барбекю',
      whitehavenCruise: 'Уайтхейвен — утренний или дневной круиз',
      reefsuites: 'Reefsuites',
      reefsleep: 'Reefsleep',
      whitehavenHamilton: 'Уайтхейвен и остров Гамильтон',
      ultimateCombo: 'Комбо «Всё включено» по Уитсандей',
      daydreamIsland: 'Отдых на острове Дэйдрим',
      hamiltonFreestyle: 'Остров Гамильтон Freestyle',
      reefSailCombo: 'Риф и паруса — символы Уитсандей',
      reefExploreCombo: 'Риф и остров: комбо-приключение',
    },
  },
  testimonials: {
    quotes: {
      sunshine:
        'Снорклинг на Большом Барьерном рифе был потрясающим опытом, а пляж Уайтхейвен — просто великолепен!! Если сомневаетесь, просто бронируйте! Вы не будете разочарованы',
      loveTravel:
        'Спать под звёздами прямо над рифом должно быть в списке желаний каждого! Невероятные впечатления. Ночная команда была на высоте.',
      rachel: 'Отличная и очень профессиональная команда, благодаря которой мы чувствовали себя в полной безопасности.',
      sab: 'Персонал был превосходен и на понтоне, и на катамаране. У нас был замечательный день на рифе, всем рекомендуем эту поездку.',
    },
  },
  instagram: {
    handle: 'cruisewhitsundays',
    postsCount: '1702',
    postsLabel: 'публикаций',
    followersCount: '47 118',
    followersLabel: 'подписчиков',
    loadMore: 'Показать ещё',
    captions: {
      heartPontoon: 'Уитсандей — именно такими их задумала природа.',
      gbrAdventureSept: 'Сентябрь на Большом Барьерном рифе',
      whitehavenPov: 'POV: доверьте нам вашу ленту в соцсетях',
      reefworldAppreciation: 'Немного любви к Reefworld',
      fathersDay: 'С Днём отца всех замечательных пап',
      whitsundaysWaiting: 'Небольшое напоминание: Уитсандей вас ждёт',
      reefsleepReimagined: 'Ночь на Большом Барьерном рифе, переосмысленная заново.',
      reefsuitesGrandReopening: 'Готовы остаться на ночь? Предложение к открытию уже действует',
    },
  },
  footer: {
    newsletterLabel: 'Подпишитесь на последние новости и предложения',
    emailSrLabel: 'Адрес электронной почты',
    emailPlaceholder: 'Адрес электронной почты',
    signup: 'Подписаться',
    thanks: 'Спасибо!',
    addressName: 'Cruise Whitsundays',
    addressLine1: '24 The Cove Road, Airlie Beach',
    addressLine2: '(порт Эрли)',
    addressLine3: 'Квинсленд, Австралия, 4802',
    reservationsLabel: 'Бронирование',
    copyright: (year) => `© ${year} Journey Beyond`,
    columns: {
      experiences: {
        heading: 'Развлечения',
        links: ['Проживание', 'Курортные трансферы', 'Специальные предложения'],
      },
      aboutUs: {
        heading: 'О нас',
        links: ['Карьера', 'Забота об экологии', 'Условия использования', 'Политика конфиденциальности'],
      },
      contactUs: {
        heading: 'Связаться с нами',
        links: [
          'Управление бронированием',
          'Бронирование для агентов',
          'Портал участника перевозок',
          'Портал для агентов',
          'Пресс-центр',
        ],
      },
    },
  },
  bookModal: {
    title: 'Готовы забронировать?',
    subtitle: 'Пожалуйста, выберите, что вы хотите забронировать.',
    close: 'Закрыть',
    options: { resortConnections: 'Курортные трансферы', experiences: 'Развлечения', both: 'Оба варианта' },
    orCall: 'Или позвоните',
  },
  languageSwitcher: { label: 'Изменить язык' },
}

const zh: Strings = {
  header: {
    utilityLinks: ['代理门户', '管理预订', '通勤会员门户'],
    search: '搜索',
    bookNow: '立即预订',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    toggleSection: (label) => `展开${label}`,
  },
  nav: {
    experiences: {
      label: '体验活动',
      children: [
        '白思文海滩与山丘湾',
        '大堡礁探险',
        'Camira 帆船之旅',
        '海岛一日游',
        '艾尔利海滩',
        '宣传册',
      ],
    },
    reefworld: { label: 'Reefworld', children: ['Reefsleep', 'Reefsuites'] },
    resortConnections: {
      label: '度假村接驳',
      children: [
        '时刻表',
        '票价',
        '出发地点与停车',
        '行李与货运',
        '特殊协助',
        '通勤会员门户',
        '通勤会员注册',
      ],
    },
    groups: { label: '团体与活动', children: [] },
    specialOffers: {
      label: '特别优惠',
      children: ['Reefsleep 盛大开幕优惠', 'Turtle Club 会员俱乐部', '订阅新闻'],
    },
    whitsundays: {
      label: '圣灵群岛',
      children: [
        '白思文海滩与山丘湾',
        '大堡礁',
        '帆船探险',
        '海岛天堂',
        '艾尔利海滩',
        '博客',
      ],
    },
    aboutUs: {
      label: '关于我们',
      children: [
        '联系我们',
        '常见问题',
        '招聘信息',
        '环境承诺',
        '加入旅行俱乐部',
        '旅游合作伙伴',
      ],
    },
    gifts: { label: '礼品', children: ['礼品商店', '礼品券'] },
  },
  hero: {
    slides: {
      reefsleepOffer1: {
        eyebrow: 'Reefsleep 盛大重启优惠',
        title: '每对情侣 $1,399 起',
        cta: '了解入住详情',
      },
      gbrAdventure: {
        eyebrow: '大堡礁八折优惠',
        title: '全天探险之旅',
        cta: '规划您的海礁之旅',
      },
      reefworldReimagined: {
        eyebrow: 'Reefworld 全新演绎',
        title: '独家过夜体验',
        cta: '一探究竟',
      },
      hamiltonFreestyle: {
        eyebrow: '汉密尔顿岛八折优惠',
        title: 'Freestyle 自由行',
        cta: '开启海岛时光',
      },
      reefsleepOffer2: {
        eyebrow: 'Reefsleep 盛大重启优惠',
        title: '每对情侣 $1,399 起',
        cta: '认识全新的 Reefworld',
      },
      reefBeachCombo: {
        eyebrow: '圣灵群岛终极套餐',
        title: '海礁与海滩',
        cta: '慢慢欣赏，尽览全景',
      },
      reefsuitesStay: {
        eyebrow: '大堡礁最尊享的体验',
        title: '无与伦比的住宿体验',
        cta: '无与伦比的住宿体验',
      },
      whitehavenHalfDay: {
        eyebrow: '白思文海滩八折优惠',
        title: '半日巡游',
        cta: '白思文海滩在等你',
      },
    },
    prevSlide: '上一张',
    nextSlide: '下一张',
    goToSlide: (n) => `转到第 ${n} 张幻灯片`,
  },
  reefworld: {
    title: 'Reefworld 全新演绎',
    subtitle: '大堡礁最尊享的过夜体验',
    discoverCta: '了解 Reefworld 住宿',
    imageAlt: '哈迪礁的 Reefworld 浮台',
    greatBarrierReef: '大堡礁',
    reefworldName: 'Reefworld',
    reefsleep: 'Reefsleep',
    reefsuites: 'Reefsuites',
    paragraph1: (link) => <>全新开放，一个专属过夜体验的新时代已在{link}的中心地带到来。</>,
    paragraph2: (link) => (
      <>
        {link} 已被重新打造为哈迪礁上一个仅供过夜的专属浮台，让您以更私密、更沉浸的方式，从白天到夜晚体验大堡礁。
      </>
    ),
    paragraph3: (reefsleepLink, reefsuitesLink) => (
      <>
        在{reefsleepLink}于星空下入眠，或潜入{reefsuitesLink}——澳大利亚首个水下客房，探索水面之下的世界。
      </>
    ),
    paragraph4:
      '有限的过夜名额、更宽敞的空间、主厨精心制作的餐点，以及更多放慢脚步、贴近海礁的时光——这是圣灵群岛最难忘的度假体验之一。',
  },
  whitsundays: {
    title: '探索圣灵群岛',
    subtitle: '关于 Cruise Whitsundays',
    reefstaysCta: '海礁度假',
    experiencesCta: '体验活动',
    resortConnectionsCta: '度假村接驳',
    imageAlt: '俯瞰圣灵群岛',
    airlieBeach: '艾尔利海滩',
    resortConnections: '度假村接驳',
    greatBarrierReef: '大堡礁',
    whitehavenBeach: '白思文海滩',
    hamiltonIsland: '汉密尔顿岛',
    reefsleep: 'Reefsleep',
    reefsuites: 'Reefsuites',
    paragraph1: (airlieLink) => (
      <>
        我们扎根于{airlieLink}，深知能以圣灵群岛为家是何等幸运，并致力于向世界各地的游客展示这片非凡地区的精华。
      </>
    ),
    paragraph2: (resortLink, gbrLink, whitehavenLink, hamiltonLink) => (
      <>
        我们的{resortLink}、一日巡游及各类活动，能带您前往{gbrLink}、标志性的{whitehavenLink}、备受欢迎的
        {hamiltonLink}、充满活力的艾尔利海滩，以及沿途的海洋与岛屿。
      </>
    ),
    paragraph3: (reefsleepLink, reefsuitesLink) => (
      <>
        我们还提供{reefsleepLink}——在大堡礁外礁星空下度过美妙一夜，以及澳大利亚首个水下客房{reefsuitesLink}。这将是一段令您终生难忘的私密体验。
      </>
    ),
  },
  acknowledgement: {
    paragraph1:
      'Journey Beyond 与 Cruise Whitsundays 谨此致敬圣灵群岛及澳大利亚各地的传统土地拥有者，并承认他们与土地、水域和社区之间延续不断的联系。',
    paragraph2:
      '我们向澳大利亚原住民及托雷斯海峡岛民的文化，以及历代、当代与未来的长老们致以敬意，并承诺携手共建更美好的未来。',
  },
  experiences: {
    heading: '精彩体验',
    prevAria: '上一组体验',
    nextAria: '下一组体验',
    viewAll: '查看全部',
    priceFormat: (price) => `$${price.toLocaleString('zh-CN')} 起/人`,
    items: {
      gbrFullDay: '大堡礁全天探险之旅',
      camiraSailing: 'Camira 帆船探险之旅',
      whitehavenChillGrill: '白思文海滩与山丘湾休闲烧烤之旅',
      whitehavenCruise: '白思文海滩上午或下午巡游',
      reefsuites: 'Reefsuites',
      reefsleep: 'Reefsleep',
      whitehavenHamilton: '白思文海滩与汉密尔顿岛之旅',
      ultimateCombo: '圣灵群岛终极套餐',
      daydreamIsland: '白日梦岛度假之旅',
      hamiltonFreestyle: '汉密尔顿岛 Freestyle 自由行',
      reefSailCombo: '海礁与风帆——圣灵群岛经典组合',
      reefExploreCombo: '海礁探索组合',
    },
  },
  testimonials: {
    quotes: {
      sunshine:
        '在大堡礁浮潜是一次绝妙的体验，白思文海滩美得令人惊叹！！如果你还在犹豫，直接预订就对了！你绝不会失望',
      loveTravel:
        '在海礁上方的星空下入眠，绝对应该列入你的必做清单！难以置信的体验。夜间工作人员个个都很出色。',
      rachel: '船员非常出色且专业，让我们感到十分安全，也受到了周到的照顾。',
      sab: '无论是在浮台上还是双体船上，工作人员都非常出色。我们在海礁度过了美妙的一天，强烈推荐这次旅程。',
    },
  },
  instagram: {
    handle: 'cruisewhitsundays',
    postsCount: '1,702',
    postsLabel: '帖子',
    followersCount: '47,118',
    followersLabel: '粉丝',
    loadMore: '加载更多',
    captions: {
      heartPontoon: '圣灵群岛，正如大自然本来的模样。',
      gbrAdventureSept: '九月的大堡礁',
      whitehavenPov: 'POV：把你的相册交给我们来策划',
      reefworldAppreciation: '为 Reefworld 打 call',
      fathersDay: '祝所有了不起的爸爸们父亲节快乐',
      whitsundaysWaiting: '温馨提醒：圣灵群岛正等着你',
      reefsleepReimagined: '重新演绎的大堡礁之夜。',
      reefsuitesGrandReopening: '准备好留宿一晚了吗？盛大开幕优惠火热进行中',
    },
  },
  footer: {
    newsletterLabel: '订阅以获取最新资讯与优惠',
    emailSrLabel: '电子邮箱地址',
    emailPlaceholder: '电子邮箱地址',
    signup: '订阅',
    thanks: '感谢您！',
    addressName: 'Cruise Whitsundays',
    addressLine1: '24 The Cove Road, Airlie Beach',
    addressLine2: '（艾尔利港）',
    addressLine3: '澳大利亚昆士兰州 4802',
    reservationsLabel: '预订',
    copyright: (year) => `© ${year} Journey Beyond`,
    columns: {
      experiences: {
        heading: '体验活动',
        links: ['住宿', '度假村接驳', '特别优惠'],
      },
      aboutUs: {
        heading: '关于我们',
        links: ['招聘信息', '环境承诺', '条款与条件', '隐私政策'],
      },
      contactUs: {
        heading: '联系我们',
        links: [
          '管理预订',
          '代理预订',
          '通勤会员门户',
          '代理体验中心',
          '媒体专区',
        ],
      },
    },
  },
  bookModal: {
    title: '准备好预订了吗？',
    subtitle: '请选择您想要预订的项目。',
    close: '关闭',
    options: { resortConnections: '度假村接驳', experiences: '体验活动', both: '两者都要' },
    orCall: '或致电',
  },
  languageSwitcher: { label: '切换语言' },
}

export const strings: Record<Locale, Strings> = { en, ru, zh }
