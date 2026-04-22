import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brothers Bakery',
  description: 'Artisanal breads, pastries & cakes made with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
