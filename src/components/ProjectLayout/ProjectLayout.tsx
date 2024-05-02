import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import Container from '../Container'
import FloatingImage from '../FloatingImage'
import Hero from '../Hero'
import Layout from '../Layout'
import ProjectDetails from '../ProjectDetails'
import Text from '../Text'

/**
 * Links used in the details of a project's frontmatter.
 */
type ProjectFrontmatterLinkDetail = {
  title: string
  url: string
}

/**
 * Details section of a project's frontmatter.
 */
type ProjectFrontmatterDetail = string[] | ProjectFrontmatterLinkDetail[]

/**
 * Details sections of a project's frontmatter.
 */
export type ProjectFrontmatterDetails = {
  techStack?: ProjectFrontmatterDetail
  links?: ProjectFrontmatterDetail
  other?: ProjectFrontmatterDetail
}

/**
 * A project's frontmatter.
 */
type ProjectFrontmatter = {
  /**
   * Title of the project.
   */
  title: string

  /**
   * Intro of the project.
   *
   * A project's intro should be a short paragraph about the project.
   */
  intro: string

  /**
   * Details about a project.
   *
   * Details include things like the tech stack used, relevant links, and more.
   */
  details: ProjectFrontmatterDetails
}

/**
 * A project's image data.
 *
 * Used for displaying the Hero image.
 */
type ProjectImage = {
  src: StaticImageData
  alt: string
}

/**
 * Data for a project.
 *
 * Assumes that frontmatter and image values are always present.
 */
type ProjectData = {
  frontmatter: ProjectFrontmatter
  image: ProjectImage
}

/**
 * Props for the ProjectLayout component.
 */
type ProjectLayoutProps = {
  /**
   * Data for the project.
   */
  data: ProjectData

  /**
   * Elements and components for the project's article.
   */
  children?: ReactNode
}

/**
 * A component that renders a project's layout.
 *
 * @param props Props for the ProjectLayout component.
 * @returns Renderd ProjectLayout component.
 */
export default function ProjectLayout({ data, children }: ProjectLayoutProps) {
  const { frontmatter, image } = data

  return (
    <Layout>
      <Hero header={frontmatter.title} body={frontmatter.intro} navigation={<Hero.Navigation />}>
        <ProjectDetails details={frontmatter.details} />
      </Hero>
      <Container maxWidth="lg">
        <div style={{ marginBottom: 'var(--spacing--3xl)' }}>
          <FloatingImage
            imageProps={{
              src: image.src,
              alt: image.alt,
              priority: true,
              quality: 85,
            }}
          />
        </div>
        <Text style={{ marginBottom: 'var(--spacing--3xl)' }}>{children}</Text>
      </Container>
    </Layout>
  )
}
