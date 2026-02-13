'use client'

import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

const locales = [
  { code: 'pt' as const, label: 'PT' },
  { code: 'en' as const, label: 'EN' },
  { code: 'es' as const, label: 'ES' },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const t = useTranslations('nav')

  const handleLocaleChange = (locale: 'pt' | 'en' | 'es') => {
    router.replace(pathname, { locale })
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label={t('selectLanguage')}>
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleLocaleChange(code)}
          className={`min-h-[32px] min-w-[32px] px-2 py-1 text-sm font-medium rounded transition-colors ${
            currentLocale === code
              ? 'text-emerald-500 bg-emerald-500/15 dark:text-emerald-400 dark:bg-emerald-400/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          aria-current={currentLocale === code ? 'true' : undefined}
          aria-label={currentLocale === code ? t('languageActive', { lang: label }) : t('switchLanguage', { lang: label })}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
