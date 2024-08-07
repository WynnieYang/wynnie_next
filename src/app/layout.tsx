import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wynnie_Yang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en" className='bg-[#778DA9]'></html>
    <html lang="en" className='bg-[#2C3E50]'>
      <head><link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/logo.png`} /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
