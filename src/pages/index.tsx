import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Project from '@/components/Project'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Intro from '@/components/Welcome'

export default function Home() {
  return (
    <Layout>
      <Hero
        header={
          <>
            <span>Hey, I&apos;m Grayson.</span>{' '}
            <span>
              Front-End <em>Developer</em>,
            </span>{' '}
            <span>nature lover, amateur traveler.</span>
          </>
        }
        navigation={<Hero.Navigation />}
        socials={<Hero.Socials />}
      />
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
