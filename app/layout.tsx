import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const monts = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leguiya',
  description: 'Professional Landing page for artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  )
}
