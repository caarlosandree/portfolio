'use client'

import { Home, User, Briefcase, BookOpen, FolderKanban, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', icon: Home, key: 'home' as const },
  { href: '#about', icon: User, key: 'about' as const },
  { href: '#experience', icon: Briefcase, key: 'experience' as const },
  { href: '#courses', icon: BookOpen, key: 'courses' as const },
  { href: '#projects', icon: FolderKanban, key: 'projects' as const },
  { href: '#contact', icon: Mail, key: 'contact' as const },
] as const

export function MobileBottomNav() {
  const t = useTranslations('nav')

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border pb-[env(safe-area-inset-bottom)]"
      aria-label={t('brand')}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ href, icon: Icon, key }) => (
          <a
            key={href}
            href={href}
            className={cn(
              'flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] flex-1',
              'text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
            )}
            aria-label={t(key)}
          >
            <Icon className="h-5 w-5" aria-hidden />
            <span className="text-[10px] font-medium">{t(key)}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
