import { useState, type FormEvent } from 'react'
import Logo from './Logo'
import { footerColumns } from '../data/site'
import { useI18n } from '../i18n/LanguageContext'

const socials = [
  { label: '@Cruise.Whitsunday', name: 'Facebook', href: 'https://www.facebook.com/Cruise.Whitsunday', icon: 'M14 8h2.5V4.5H14c-2.5 0-4 1.6-4 4V11H7.5v3.5H10V21h3.5v-6.5H16l.5-3.5h-3V8.8c0-.5.3-.8.5-.8z' },
  { label: '@cruisewhitsundays', name: 'Instagram', href: 'https://instagram.com/cruisewhitsundays/', icon: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' },
  { label: '@cruisewhitsundays', name: 'YouTube', href: 'https://www.youtube.com/channel/UC_5P9fud-Tx0itnyYZGFbpQ', icon: 'M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z' },
]

export default function Footer() {
  const { s } = useI18n()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <footer className="bg-slate-brand text-white">
      {/* Newsletter + socials */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="label text-white/90">{s.footer.newsletterLabel}</p>
            <form onSubmit={submit} className="mt-4 flex max-w-xl">
              <label htmlFor="newsletter-email" className="sr-only">
                {s.footer.emailSrLabel}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={s.footer.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-teal-brand focus:outline-none"
              />
              <button type="submit" className="btn-teal">
                {sent ? s.footer.thanks : s.footer.signup}
              </button>
            </form>
          </div>
          <ul className="flex flex-wrap gap-8 lg:justify-end">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label flex items-center gap-3 text-white/80 hover:text-teal-brand"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                  <span className="sr-only">{social.name}</span>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-white/70">
            <p className="label text-white">{s.footer.addressName}</p>
            <p>{s.footer.addressLine1}</p>
            <p>{s.footer.addressLine2}</p>
            <p>{s.footer.addressLine3}</p>
            <p className="pt-2">
              {s.footer.reservationsLabel}{' '}
              <a href="tel:+61748467000" className="text-white hover:text-teal-brand">
                +617 4846 7000
              </a>
            </p>
          </address>
        </div>
        {footerColumns.map((col) => {
          const column = s.footer.columns[col.id]
          return (
            <div key={col.id}>
              <p className="label text-white">{column.heading}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-teal-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-white/60">
          <p>{s.footer.copyright(new Date().getFullYear())}</p>
          <p className="font-display font-bold uppercase tracking-[0.3em] text-white/80">Journey Beyond</p>
        </div>
      </div>
    </footer>
  )
}
