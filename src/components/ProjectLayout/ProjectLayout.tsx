import { StaticImageData } from 'next/image'
import Container from '../Container'
import FloatingImage from '../FloatingImage/FloatingImage'
import Hero from '../Hero'
import Layout from '../Layout'
import ProjectDetails from '../ProjectDetails'
import { ProjectDetails as ProjectDetailsType } from '../ProjectDetails/ProjectDetails'
import Text from '../Text'

type Metadata = {
  title?: string
  intro?: string
  details?: ProjectDetailsType
}

type HeroImage = {
  src: StaticImageData
  alt: string
}

export default function ProjectLayout({
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
      <Container size="lg">
        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <FloatingImage
            imageProps={{
              src: heroImage.src,
              alt: heroImage.alt,
              priority: true,
            }}
          />
        </div>
        <Text style={{ marginBottom: 'var(--spacing-3xl)' }}>{children}</Text>
      </Container>
    </Layout>
  )
}
