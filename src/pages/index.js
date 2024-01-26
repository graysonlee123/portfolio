import Layout from '@/components/layout'
import Intro from '@/components/intro'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Project from '@/components/project'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Skills />
      <Projects header="Projects" home>
        <Project slug="phasmo" />
        <Project slug="embark" />
        <Project slug="precision" />
        <Project slug="work" />
      </Projects>
      <Contact />
    </Layout>
  )
}
