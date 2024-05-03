import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Project from '@/components/Project'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Intro from '@/components/Welcome'

import projectPicPhasmo from 'public/images/phasmo-screenshot-01.png'
import projectPicAxeOS from 'public/images/axeos-screenshot-01.png'
import projectPicPrecision from 'public/images/precision-screenshot-01.png'
import projectPicBagmart from 'public/images/bagmart-screenshot-01.png'

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
      <Projects home>
        <Project
          header="Phasmophobia Helper"
          href="/projects/phasmophobia-helper"
          image={projectPicPhasmo}
          summary={
            <p style={{ maxWidth: '44ch' }}>
              An online Next.js application tailored for players of the popular ghost hunting game,
              Phasmophobia.
            </p>
          }
        />
        <Project
          header="axeOS"
          href="/projects/axeos"
          image={projectPicAxeOS}
          summary={
            <p style={{ maxWidth: '56ch' }}>
              Built for an Axe Throwing company, a full-stack application composed of a Next.js
              front-end and a custom Node back-end.
            </p>
          }
        />
        <Project
          header="Bagmart"
          href="/projects/bagmart"
          image={projectPicBagmart}
          summary={
            <p style={{ maxWidth: '52ch' }}>
              A niche ecommerce project for a company named Bagmart. It features custom
              functionality and theming.
            </p>
          }
        />
        <Project
          header="Rebuilding Precision Creative"
          href="/projects/rebuilding-precision-creative"
          image={projectPicPrecision}
          summary={
            <p style={{ maxWidth: '52ch' }}>
              My thought process, workflow, and challenges I faced while recreating Precision
              Creative's website for from scratch.
            </p>
          }
        />
      </Projects>
      <Contact />
    </Layout>
  )
}
