import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { locales, strings, type Locale, type Strings } from './translations'

const STORAGE_KEY = 'cw-lang'

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'ru'
}

function detectInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // localStorage unavailable (e.g. private browsing) — fall through to browser detection
  }
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  s: Strings
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore
    }
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, s: strings[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}

export { locales }
export type { Locale }
