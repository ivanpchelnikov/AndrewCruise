import type { ReactNode } from 'react'

interface SplitFeatureProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  image: string
  imageAlt?: string
  reverse?: boolean
  actions?: ReactNode
}

// Text + image two-column block used for "Reefworld Reimagined" and "Explore the Whitsundays"
export default function SplitFeature({
  id,
  title,
  subtitle,
  children,
  image,
  imageAlt = '',
  reverse = false,
  actions,
}: SplitFeatureProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 ${
          reverse ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-slate-brand md:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="label mt-3 text-slate-brand-light">{subtitle}</p>}
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-brand-light [&_a]:text-teal-brand [&_a]:underline-offset-2 hover:[&_a]:underline">
            {children}
          </div>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
