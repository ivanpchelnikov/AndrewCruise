import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SplitFeature from './components/SplitFeature'
import Experiences from './components/Experiences'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import BookModal from './components/BookModal'
import { img } from './data/site'
import { useI18n } from './i18n/LanguageContext'

const feature = 'fit=crop&w=1000&h=800&auto=format&q=70'

export default function App() {
  const { s } = useI18n()
  const [bookOpen, setBookOpen] = useState(false)
  const openBook = useCallback(() => setBookOpen(true), [])
  const closeBook = useCallback(() => setBookOpen(false), [])

  // Honour a section hash on first load (the browser resolves it before React renders)
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

  return (
    <>
      <Header onBook={openBook} />

      <main className="pt-[72px] lg:pt-[128px]">
        <Hero />

        <SplitFeature
          id="reefworld"
          title={s.reefworld.title}
          subtitle={s.reefworld.subtitle}
          image={img('2026/08/260728_CWS_day1_2910-scaled-e1785999120873.jpg', feature)}
          imageAlt={s.reefworld.imageAlt}
          actions={
            <a href="#" className="btn-outline">
              {s.reefworld.discoverCta}
            </a>
          }
        >
          <p>{s.reefworld.paragraph1(<a href="#">{s.reefworld.greatBarrierReef}</a>)}</p>
          <p>{s.reefworld.paragraph2(<a href="#">{s.reefworld.reefworldName}</a>)}</p>
          <p>
            {s.reefworld.paragraph3(
              <a href="#">{s.reefworld.reefsleep}</a>,
              <a href="#">{s.reefworld.reefsuites}</a>,
            )}
          </p>
          <p>{s.reefworld.paragraph4}</p>
        </SplitFeature>

        <div className="bg-grey-brand">
          <SplitFeature
            id="whitsundays"
            title={s.whitsundays.title}
            subtitle={s.whitsundays.subtitle}
            image={img('2026/04/1110-x-488px-6.png', feature)}
            imageAlt={s.whitsundays.imageAlt}
            actions={
              <>
                <a href="#reefworld" className="btn-outline">
                  {s.whitsundays.reefstaysCta}
                </a>
                <a href="#experiences" className="btn-outline">
                  {s.whitsundays.experiencesCta}
                </a>
                <a href="#resort-connections" className="btn-outline">
                  {s.whitsundays.resortConnectionsCta}
                </a>
              </>
            }
          >
            <p>{s.whitsundays.paragraph1(<a href="#">{s.whitsundays.airlieBeach}</a>)}</p>
            <p>
              {s.whitsundays.paragraph2(
                <a href="#resort-connections">{s.whitsundays.resortConnections}</a>,
                <a href="#">{s.whitsundays.greatBarrierReef}</a>,
                <a href="#">{s.whitsundays.whitehavenBeach}</a>,
                <a href="#">{s.whitsundays.hamiltonIsland}</a>,
              )}
            </p>
            <p>
              {s.whitsundays.paragraph3(
                <a href="#reefworld">{s.whitsundays.reefsleep}</a>,
                <a href="#reefworld">{s.whitsundays.reefsuites}</a>,
              )}
            </p>
          </SplitFeature>
        </div>

        <Experiences />

        {/* Acknowledgement of Country */}
        <section className="bg-grey-brand-2 py-14">
          <div className="mx-auto max-w-4xl px-6 text-center text-sm leading-relaxed text-slate-brand-light">
            <p>{s.acknowledgement.paragraph1}</p>
            <p className="mt-4">{s.acknowledgement.paragraph2}</p>
          </div>
        </section>

        <Testimonials />
        <Instagram />
      </main>

      <Footer />
      <BookModal open={bookOpen} onClose={closeBook} />
    </>
  )
}
