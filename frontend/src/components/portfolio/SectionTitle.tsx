interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6 md:mb-12">
      <h2 className="text-xl font-bold text-foreground md:text-3xl lg:text-4xl">
        <span className="text-emerald-600 dark:text-emerald-400">/</span> {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-2xl text-sm md:mt-4 md:text-base">{subtitle}</p>
      )}
    </div>
  )
}
