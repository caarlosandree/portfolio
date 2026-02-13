'use client'

import { CircleFlag } from 'react-circle-flags'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

const locales = [
  { code: 'pt' as const, label: 'PT', countryCode: 'br' },
  { code: 'en' as const, label: 'EN', countryCode: 'us' },
  { code: 'es' as const, label: 'ES', countryCode: 'es' },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale() as 'pt' | 'en' | 'es'
  const t = useTranslations('nav')

  const current = locales.find((l) => l.code === currentLocale) ?? locales[0]
  const currentIndex = locales.findIndex((l) => l.code === currentLocale)
  const nextIndex = (currentIndex + 1) % locales.length
  const nextLocale = locales[nextIndex]
  const nextLabel = nextLocale.label

  const cycleLocale = () => {
    router.replace(pathname, { locale: nextLocale.code })
  }

  const ariaLabel = t('switchLanguage', { lang: nextLabel })

  return (
    <button
      type="button"
      onClick={cycleLocale}
      className="min-h-[32px] min-w-[32px] rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:min-h-[44px] md:min-w-[44px] md:p-1"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <CircleFlag
        countryCode={current.countryCode}
        className="h-6 w-6 rounded-full object-cover md:h-7 md:w-7"
        aria-hidden
      />
    </button>
  )
}
