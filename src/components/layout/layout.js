import Head from 'next/head'
import Script from 'next/script'
import { Hero } from '/src/components/hero'
import { Projects } from '/src/components/projects'
import { Project } from '/src/components/project'
import { Footer } from '/src/components/footer'
import projectList from '/src/data/projects'

export function Layout({ children, project, projects }) {
  return (
    <>
      <Head>
        <title>Grayson Gantek</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Hero project={project}>
        {!project ? (
          <>
            <span>Hey, I'm Grayson.</span>{' '}
            <span>
              Front-End <em>Developer</em>,
            </span>{' '}
            <span>nature lover, amature traveler.</span>
          </>
        ) : (
          projectList[project].title || 'Title not found'
        )}
      </Hero>
      <main>{children}</main>
      <Footer>
        {projects ? (
          <Projects>
            {projects.map((project) => (
              <Project slug={project} key={project} />
            ))}
          </Projects>
        ) : null}
      </Footer>
    </>
  )
}
