import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marlon Jerold - Software Developer',
  description: 'Portfolio of Marlon Jerold, Software Developer and DevSecOps',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 to-black text-white`}>
      {children}
      </body>
      </html>
  )
}

