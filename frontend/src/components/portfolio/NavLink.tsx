import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
  className?: string
}

export function NavLink({
  href,
  children,
  onClick,
  active = false,
  className,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 md:min-h-0 md:min-w-0',
        active ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </a>
  )
}
