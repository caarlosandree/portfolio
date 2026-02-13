import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from 'next/font/google'

export const metadata: Metadata = {
  applicationName: "Carlos André Sabino Portfolio",
  title: {
    default: "Carlos André Sabino - Portfolio",
    template: "%s | Carlos André Sabino",
  },
  description: "Portfólio interativo e moderno de Carlos André Sabino - Desenvolvedor Full-Stack Senior e CTO.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};
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
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark = t === 'dark' || (t === 'system' && systemDark);
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
