'use client'

import { Globe } from 'lucide-react'
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
  const currentLocale = useLocale() as 'pt' | 'en' | 'es'
  const t = useTranslations('nav')

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
      className="min-h-[32px] min-w-[32px] rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:min-h-[44px] md:min-w-[44px]"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <Globe className="h-5 w-5 md:h-[22px] md:w-[22px]" aria-hidden />
    </button>
  )
}
