import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'amusing features',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <header
          style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            gap: '1rem',
          }}
        >
          <Link href="/">Главная</Link>
          <Link href="/about">О проекте</Link>
          <Link href="/bulletResolver">Bullet Resolver</Link>
        </header>
        <main style={{ padding: '1.5rem' }}>{children}</main>
      </body>
    </html>
  )
}
