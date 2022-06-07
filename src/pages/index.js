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
      <Projects home>
        <Project slug="precision" />
        <Project slug="articulate" />
      </Projects>
      <Contact />
    </Layout>
  )
}
