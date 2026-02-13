import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const THEME_STORAGE_KEY = 'portfolio-theme'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  cycleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      cycleTheme: () =>
        set((state) => ({
          theme: state.theme === 'system' ? 'light' : state.theme === 'light' ? 'dark' : 'system',
        })),
    }),
    { name: THEME_STORAGE_KEY }
  )
)
