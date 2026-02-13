interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
        <span className="text-emerald-600 dark:text-emerald-400">/</span> {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl md:mt-4">{subtitle}</p>
      )}
    </div>
  )
}
