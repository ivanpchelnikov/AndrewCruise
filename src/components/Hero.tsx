import { useEffect, useState } from 'react'
import { heroSlides } from '../data/site'
import { useI18n } from '../i18n/LanguageContext'

const INTERVAL = 6000

export default function Hero() {
  const { s } = useI18n()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  const go = (dir: number) => setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length)

  return (
    <section
      className="relative h-[80vh] max-h-[720px] min-h-[520px] w-full overflow-hidden bg-slate-brand"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {heroSlides.map((slide, i) => {
        const text = s.hero.slides[slide.id]
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
              <div
                key={`${i}-${index}`}
                className={`max-w-4xl ${i === index ? 'fade-up' : ''}`}
              >
                <p className="hero-title font-display text-[clamp(1.75rem,5.5vw,4rem)] font-extrabold uppercase leading-[1.05] tracking-wide">
                  {text.eyebrow}
                </p>
                <p className="hero-title mt-3 font-display text-[clamp(1.5rem,4.5vw,3.25rem)] font-medium uppercase leading-[1.1] tracking-wide">
                  {text.title}
                </p>
                <a href={slide.href} className="btn-outline-white mt-8">
                  {text.cta}
                </a>
              </div>
            </div>
          </div>
        )
      })}

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/60 p-3 text-white transition hover:bg-white hover:text-slate-brand md:block"
        aria-label={s.hero.prevSlide}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/60 p-3 text-white transition hover:bg-white hover:text-slate-brand md:block"
        aria-label={s.hero.nextSlide}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={s.hero.goToSlide(i + 1)}
          />
        ))}
      </div>
    </section>
  )
}
