import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import { cx } from '@/src/utils/index'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import siteMetadata from '../utils/siteMetadata'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display:"swap", variable:"--font-in" })
const manrope = Manrope({ subsets: ['latin'], display:"swap", variable:"--font-mr" })

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner], // Must be an absolute URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark")}>
        <Script>
          {`
            const localTheme = localStorage.getItem('theme');
            if (localTheme === 'dark' || ((localTheme === undefined) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            // const classList = document.documentElement.classList;
            // console.log('Body Script: ' + classList);
            `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
