import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Preloader from '@/components/Preloader'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Aarav Desai | Front-End Developer | Designing Tomorrow\'s Web Today',
  description: 'Portfolio of Aarav Desai - A passionate front-end developer specializing in modern web technologies. Explore my projects, skills, and creative solutions.',
  keywords: ['front-end developer', 'React', 'Next.js', 'TypeScript', 'web developer', 'portfolio'],
  authors: [{ name: 'Aarav Desai' }],
  openGraph: {
    title: 'Aarav Desai | Front-End Developer',
    description: 'Designing Tomorrow\'s Web Today - Portfolio of Aarav Desai',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aarav Desai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarav Desai | Front-End Developer',
    description: 'Designing Tomorrow\'s Web Today - Portfolio of Aarav Desai',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

