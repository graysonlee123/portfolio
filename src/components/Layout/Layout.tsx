import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
  project?: String
  projects?: String[]
}

export default function Layout({ children, project, projects }: LayoutProps) {
  const router = useRouter()
  const is404 = router.route === '/404'
  const isContact = router.route === '/contact'
  const isHome = router.route === '/'

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
      <Hero project={project}>
        {(isHome && (
          <>
            <span>Hey, I&apos;m Grayson.</span>{' '}
            <span>
              Front-End <em>Developer</em>,
            </span>{' '}
            <span>nature lover, amateur traveler.</span>
          </>
        )) ||
          (isContact && <>Get in touch with me</>) ||
          // (project && (projectList[project].title || 'Title not found')) ||
          (is404 && (
            <>
              Page not found (<em>404</em>)
            </>
          ))}
      </Hero>
      <main>{children}</main>
      <Footer>
        {/* {projects ? (
          <Projects header="More projects" home={false}>
            {projects.map((project) => (
              <Project slug={project} key={project} />
            ))}
          </Projects>
        ) : null} */}
      </Footer>
    </>
  )
}
