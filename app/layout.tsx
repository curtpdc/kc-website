import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kayla Clark - Professional Model | DMV Based',
  description: 'Kayla Clark is a DMV-based professional model known for blending elegance, emotion, and intentional storytelling. Professional modeling services for fashion, editorial, commercial, and beauty photography.',
  keywords: ['model', 'modeling', 'DMV', 'Washington DC', 'photography', 'fashion', 'editorial', 'commercial', 'beauty', 'AF Talent Management'],
  authors: [{ name: 'Kayla Clark' }],
  openGraph: {
    title: 'Kayla Clark - Professional Model',
    description: 'DMV-based professional model crafting visual stories with intention.',
    url: 'https://kaylaclark.com',
    siteName: 'Kayla Clark Portfolio',
    images: [
      {
        url: 'https://kaylaclark.com/images/about/kayla-portrait.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayla Clark - Professional Model',
    description: 'DMV-based professional model crafting visual stories with intention.',
    images: ['https://kaylaclark.com/images/about/kayla-portrait.jpg'],
  },
  icons: {
    icon: [
      { url: '/images/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#2c2c2c',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-inter">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

