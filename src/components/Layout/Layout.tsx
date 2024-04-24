import Footer from '@/components/Footer'
import Project from '@/components/Project'
import Projects from '@/components/Projects'
import projectsData from 'lib/data/projects'
import Head from 'next/head'
import Script from 'next/script'
import { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
  projects?: (keyof typeof projectsData)[]
}

export default function Layout({ children, projects }: LayoutProps) {
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
      <Footer>
        {projects ? (
          <Projects header="More projects" home={false}>
            {projects.map((project) => (
              <Project slug={project} key={project} />
            ))}
          </Projects>
        ) : null}
      </Footer>
    </>
  )
}
