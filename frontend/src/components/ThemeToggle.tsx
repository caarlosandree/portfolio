'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'
import { useTranslations } from 'next-intl'

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme)
  const cycleTheme = useThemeStore((s) => s.cycleTheme)
  const t = useTranslations('nav')

  const ariaLabel =
    theme === 'system'
      ? t('themeSwitchToSystem')
      : theme === 'dark'
        ? t('themeSwitchToLight')
        : t('themeSwitchToDark')

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="min-h-[32px] min-w-[32px] rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:min-h-[44px] md:min-w-[44px]"
      aria-label={ariaLabel}
    >
      {theme === 'system' ? (
        <Monitor className="h-5 w-5 md:h-[22px] md:w-[22px]" aria-hidden />
      ) : theme === 'dark' ? (
        <Sun className="h-5 w-5 md:h-[22px] md:w-[22px]" aria-hidden />
      ) : (
        <Moon className="h-5 w-5 md:h-[22px] md:w-[22px]" aria-hidden />
      )}
    </button>
  )
}
