import { StaticImageData } from 'next/image'
import Article from './Article'
import FloatingImage from './FloatingImage/FloatingImage'
import Hero from './Hero'
import Layout from './Layout'
import ProjectDetails from './ProjectDetails'
import { ProjectDetails as ProjectDetailsType } from './ProjectDetails/ProjectDetails'

type Metadata = {
  title?: string
  intro?: string
  details?: ProjectDetailsType
}

type HeroImage = {
  src: StaticImageData
  alt: string
}

export default function MdxLayout({
  metadata,
  heroImage,
  children,
}: {
  metadata: Metadata
  heroImage?: HeroImage
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Hero header={metadata.title} body={metadata.intro} navigation={<Hero.Navigation />}>
        <ProjectDetails details={metadata.details} />
      </Hero>
      <Article>
        <FloatingImage imageProps={{ src: heroImage.src, alt: heroImage.alt, priority: true }} />
        {children}
      </Article>
    </Layout>
  )
}
