'use client'

import { useLocale } from 'next-intl'
import { useEffect } from 'react'

export function SetLocaleAttr() {
  const locale = useLocale()

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale
  }, [locale])

  return null
}
