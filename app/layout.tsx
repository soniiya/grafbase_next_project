import type { Metadata } from 'next'
import './globals.css'
import {Navbar,Footer} from '@/components'


export const metadata: Metadata = {
  title: 'Flexibble',
  description: 'Showcase projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
      <main>
        {children}
      </main>
        <Footer />
      </body>
    </html>
  )
}
