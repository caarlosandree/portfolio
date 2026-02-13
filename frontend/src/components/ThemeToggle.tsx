'use client'

import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'
import { useTranslations } from 'next-intl'

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme)
  const toggleTheme = useThemeStore((s) => s.toggleTheme)
  const t = useTranslations('nav')

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="min-h-[32px] min-w-[32px] rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:min-h-[44px] md:min-w-[44px]"
      aria-label={isDark ? t('themeSwitchToLight') : t('themeSwitchToDark')}
    >
      {isDark ? (
        <Sun className="h-5 w-5 md:h-[22px] md:w-[22px]" aria-hidden />
      ) : (
        <Moon className="h-5 w-5 md:h-[22px] md:w-[22px]" aria-hidden />
      )}
    </button>
  )
}
