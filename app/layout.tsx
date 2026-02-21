import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Pinyon_Script } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/Navbar'
import localFont from 'next/font/local'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/FloatingCTA'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  variable: '--font-signature',
  display: 'swap',
  weight: '400',
})

const beautyLuxury = localFont({
  src: '../public/fonts/BeautyLuxury-Regular.otf',
  variable: '--font-luxury',
  display: 'swap',
})

const edline = localFont({
  src: '../public/fonts/Edline.otf',
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Melbee Glow N Sculp | Luxury Spray Tans in Riverside, CA',
  description: 'Melbee Glow N Sculp offers premium custom spray tans, bridal tanning, and body sculpting services in Riverside, Orangecrest, and Woodcrest. Book your glow today.',
  keywords: ['Spray Tan Riverside', 'Custom Tan', 'Bridal Spray Tan', 'Body Sculpting', 'Orangecrest', 'Woodcrest', 'Melbee Glow'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        'min-h-screen bg-ivory font-sans antialiased flex flex-col',
        cormorant.variable,
        inter.variable,
        pinyon.variable,
        beautyLuxury.variable,
        edline.variable
      )}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  )
}
