import { Layout } from '/src/components/layout'
import { Intro } from '/src/components/intro'
import { Skills } from '/src/components/skills'
import { Projects } from '/src/components/projects'
import { Project } from '/src/components/project'
import { Contact } from '/src/components/contact'

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
