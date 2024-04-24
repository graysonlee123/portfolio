import Layout from '@/components/Layout'
import Intro from '@/components/Welcome'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Skills />
      <Projects header="Projects" home>
        <Project slug="embark" />
        <Project slug="precision" />
        <Project slug="articulate" />
        <Project slug="work" />
      </Projects>
      <Contact />
    </Layout>
  )
}
