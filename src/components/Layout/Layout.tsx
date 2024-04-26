import Footer from '@/components/Footer'
import Head from 'next/head'
import Script from 'next/script'
import { ReactNode } from 'react'

/**
 * Props for the Layout component.
 */
type LayoutProps = {
  /**
   * Content rendered in the `main` tag.
   */
  children?: ReactNode
}

/**
 * A component that renders `head` metadata, site scripts, the main content, and the Footer component.
 *
 * @param props Props for the Layout component.
 * @returns Rendered Layout component.
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Grayson Gantek</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="You will find a little bit about me, some of my favorite projects, and a way to get in touch. You can also find me on LinkedIn, Twitter, and GitHub. I encourage you to contribute to one of my open-source projects!"
        />
        <meta name="author" content="Grayson Gantek" />
        <meta name="rating" content="General" />
      </Head>
      <Script src="/js/main.js" strategy="lazyOnload" />
      <main>{children}</main>
      <Footer />
    </>
  )
}
