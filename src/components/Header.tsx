import { useEffect, useState } from 'react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { navItems } from '../data/site'
import { useI18n } from '../i18n/LanguageContext'

export default function Header({ onBook }: { onBook: () => void }) {
  const { s } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar — collapses away once the page is scrolled */}
      <div
        className={`bg-slate-brand text-white transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0' : 'max-h-24'
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <ul className="hidden items-center gap-8 lg:flex">
            {s.header.utilityLinks.map((l) => (
              <li key={l}>
                <a href="#" className="label hover:text-teal-brand">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <Logo className="lg:absolute lg:left-1/2 lg:-translate-x-1/2" />
          <div className="hidden items-center gap-8 lg:flex">
            <a href="tel:+61748467000" className="label hover:text-teal-brand">
              +61 7 4846 7000
            </a>
            <button type="button" className="label flex items-center gap-2 hover:text-teal-brand">
              {s.header.search}
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            aria-label={s.header.openMenu}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`hidden lg:block transition-colors duration-300 ${
          scrolled ? 'bg-slate-brand shadow-lg' : 'bg-slate-brand/90 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className={`transition-all duration-300 ${scrolled ? 'w-auto opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            <Logo />
          </div>
          <nav className="flex flex-1 items-center justify-end">
            <ul className="flex items-center">
              {navItems.map((item, i) => {
                const nav = s.nav[item.id]
                return (
                  <li
                    key={item.id}
                    className="group relative"
                    onMouseEnter={() => setOpenIndex(i)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <a
                      href={item.href}
                      className={`label block max-w-[7.5rem] px-4 py-5 text-center leading-tight text-white transition-shadow ${
                        openIndex === i ? 'shadow-[inset_0_-4px_0_0_#fff]' : ''
                      }`}
                    >
                      {nav.label}
                    </a>
                    {item.hasChildren && (
                      <div
                        className={`absolute left-0 top-full w-56 bg-slate-brand transition-all duration-200 ${
                          openIndex === i ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                        }`}
                      >
                        {nav.children.map((c) => (
                          <a
                            key={c}
                            href="#"
                            className="label block px-4 py-4 text-center font-normal leading-snug text-white transition-colors hover:bg-slate-brand-light hover:text-teal-brand"
                          >
                            {c}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
            <button type="button" onClick={onBook} className="btn-teal ml-4 py-5">
              {s.header.bookNow}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-slate-brand text-white transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Logo />
          <button type="button" onClick={() => setMobileOpen(false)} aria-label={s.header.closeMenu}>
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="h-[calc(100vh-5rem)] overflow-y-auto px-6 pb-10">
          <ul className="divide-y divide-white/10">
            {navItems.map((item, i) => {
              const nav = s.nav[item.id]
              return (
                <li key={item.id}>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="label block py-4 text-[13px]"
                    >
                      {nav.label}
                    </a>
                    {item.hasChildren && (
                      <button
                        type="button"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="p-2"
                        aria-label={s.header.toggleSection(nav.label)}
                      >
                        <svg
                          className={`h-4 w-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.hasChildren && openIndex === i && (
                    <ul className="pb-3 pl-4">
                      {nav.children.map((c) => (
                        <li key={c}>
                          <a href="#" className="block py-2 text-sm text-white/80">
                            {c}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
          <div className="mt-6 space-y-3">
            {s.header.utilityLinks.map((l) => (
              <a key={l} href="#" className="label block text-white/70">
                {l}
              </a>
            ))}
            <a href="tel:+61748467000" className="label block text-white/70">
              +61 7 4846 7000
            </a>
          </div>
          <LanguageSwitcher className="mt-6" />
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              onBook()
            }}
            className="btn-teal mt-8 w-full"
          >
            {s.header.bookNow}
          </button>
        </nav>
      </div>

      {/* Mobile sticky book button */}
      <button
        type="button"
        onClick={onBook}
        className="btn-teal fixed bottom-0 inset-x-0 z-40 py-4 lg:hidden"
      >
        {s.header.bookNow}
      </button>
    </header>
  )
}
