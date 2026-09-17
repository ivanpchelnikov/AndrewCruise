import { useEffect } from 'react'
import { useI18n } from '../i18n/LanguageContext'

interface BookModalProps {
  open: boolean
  onClose: () => void
}

export default function BookModal({ open, onClose }: BookModalProps) {
  const { s } = useI18n()

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const options = [s.bookModal.options.resortConnections, s.bookModal.options.experiences, s.bookModal.options.both]

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-title"
    >
      <div
        className="relative w-full max-w-lg bg-white p-8 text-center md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-brand hover:text-teal-brand"
          aria-label={s.bookModal.close}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
        <h2 id="book-title" className="font-display text-2xl font-semibold uppercase tracking-wide text-slate-brand">
          {s.bookModal.title}
        </h2>
        <p className="mt-3 text-sm text-slate-brand-light">{s.bookModal.subtitle}</p>
        <div className="mt-8 flex flex-col gap-3">
          {options.map((o) => (
            <a key={o} href="#" className="btn-outline justify-between px-6 py-4 text-[12px]">
              {o}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
        <p className="label mt-8 text-slate-brand-light">
          {s.bookModal.orCall}{' '}
          <a href="tel:+61748467000" className="text-teal-brand">
            +61 7 4846 7000
          </a>
        </p>
      </div>
    </div>
  )
}
