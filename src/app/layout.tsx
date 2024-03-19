import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Matheus Lima | FullStack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${montserrat.variable} ${roboto.variable} antialiased`}
      lang="en"
    >
      <body className="bg-gray-900">
        <div className="mx-auto min-h-screen w-full max-w-6xl px-8">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
