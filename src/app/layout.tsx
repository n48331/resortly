import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
        color="#DE6737"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
      />
        {children}</body>
    </html>
  )
}
