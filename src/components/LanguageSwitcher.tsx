import { useI18n, locales } from '../i18n/LanguageContext'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, s } = useI18n()

  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label={s.languageSwitcher.label}>
      {locales.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={`label px-2 py-1 transition-colors ${
            locale === l.code ? 'text-teal-brand' : 'text-white/70 hover:text-white'
          }`}
        >
          {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
