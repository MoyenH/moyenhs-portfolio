import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Moyen H. | AI & Cybersecurity',
  description: 'CS Student at UITS | AI & Cybersecurity Enthusiast from Bangladesh — building at the intersection of artificial intelligence and security.',
  openGraph: {
    title: 'Moyen H. — AI & Cybersecurity',
    description: 'CS Student heading to Malta. Building at the intersection of AI and security.',
    url: 'https://moyenhs.dev',
    siteName: 'moyenhs.dev',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
