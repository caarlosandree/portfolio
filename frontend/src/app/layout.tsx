import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const themeScript = `
(function(){
  try {
    var raw = localStorage.getItem('portfolio-theme');
    var isDark;
    if (raw) {
      var data = JSON.parse(raw);
      var t = data.state && data.state.theme;
      isDark = t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('portfolio-theme', JSON.stringify({ state: { theme: isDark ? 'dark' : 'light' }, version: 0 }));
    }
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {
    document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
