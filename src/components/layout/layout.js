import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Project from '@/components/project'
import Footer from '@/components/footer'
import projectList from '/src/data/projects'

export function Layout({ children, project, projects }) {
  const router = useRouter()
  const is404 = router.route === '/404'
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
          (project && (projectList[project].title || 'Title not found')) ||
          (is404 && (
            <>
              Page not found (<em>404</em>)
            </>
          ))}
      </Hero>
      <main>{children}</main>
      <Footer>
        {projects ? (
          <Projects header="More projects">
            {projects.map((project) => (
              <Project slug={project} key={project} />
            ))}
          </Projects>
        ) : null}
      </Footer>
    </>
  )
}
