import { testimonials } from '../data/site'
import { useI18n } from '../i18n/LanguageContext'

function TripAdvisorMark() {
  return (
    <span className="inline-flex items-center gap-2 text-[#34e0a1]" aria-label="Trip Advisor">
      <svg viewBox="0 0 64 40" className="h-6 w-auto" fill="currentColor" aria-hidden="true">
        <circle cx="18" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="46" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="18" cy="24" r="4" />
        <circle cx="46" cy="24" r="4" />
        <path d="M6 12c8-8 44-8 52 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[11px] font-bold uppercase tracking-widest text-slate-brand">
        Tripadvisor
      </span>
    </span>
  )
}

export default function Testimonials() {
  const { s } = useI18n()
  return (
    <section className="bg-grey-brand py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col justify-between border-l-4 border-teal-brand bg-white p-8 shadow-sm md:p-10"
          >
            <blockquote className="font-display text-lg font-semibold uppercase leading-relaxed tracking-wide text-slate-brand md:text-xl">
              &ldquo;{s.testimonials.quotes[t.id]}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label text-slate-brand-light">{t.author}</p>
                {t.location && <p className="label mt-1 text-slate-brand-light/70">{t.location}</p>}
              </div>
              <TripAdvisorMark />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
