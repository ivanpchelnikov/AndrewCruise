import { useRef } from 'react'
import { experiences } from '../data/site'
import { useI18n } from '../i18n/LanguageContext'

function Arrow({ dir, onClick, label }: { dir: 'prev' | 'next'; onClick: () => void; label: string }) {
  const left = dir === 'prev'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-brand/30 bg-white p-3 text-slate-brand shadow transition hover:bg-teal-brand hover:text-white md:block ${
        left ? '-left-5' : '-right-5'
      }`}
      aria-label={label}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={left ? 'm15 6-6 6 6 6' : 'm9 6 6 6-6 6'} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default function Experiences() {
  const { s } = useI18n()
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' })
  }

  return (
    <section id="experiences" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-slate-brand md:text-4xl">
          {s.experiences.heading}
        </h2>

        <div className="relative mt-10">
          <Arrow dir="prev" onClick={() => scroll(-1)} label={s.experiences.prevAria} />
          <Arrow dir="next" onClick={() => scroll(1)} label={s.experiences.nextAria} />
          <ul
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {experiences.map((exp) => {
              const title = s.experiences.items[exp.id]
              return (
                <li
                  key={exp.id}
                  className="group w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[23.5%]"
                >
                  <a href="#" className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={exp.image}
                        alt={title}
                        loading="lazy"
                        className="aspect-[15/14] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                        <p className="font-display text-[13px] font-bold uppercase leading-snug tracking-wider text-white">
                          {title}
                        </p>
                      </div>
                    </div>
                    <p className="label mt-3 text-teal-brand">{s.experiences.priceFormat(exp.price)}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="btn-outline min-w-64">
            {s.experiences.viewAll}
          </a>
        </div>
      </div>
    </section>
  )
}
