import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import Container from '../Container'
import FloatingImage from '../FloatingImage/FloatingImage'
import Hero from '../Hero'
import Layout from '../Layout'
import ProjectDetails from '../ProjectDetails'
import Text from '../Text'

/**
 * Links used in a project's frontmatter, under `details`.
 */
type ProjectFrontmatterLinkDetail = {
  title: string
  url: string
}

/**
 * The frontmatter's each individual detail about a project.
 */
type ProjectFrontmatterDetail = string[] | ProjectFrontmatterLinkDetail[]

/**
 * Found in a project's frontmatter, under `details`.
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
   * The title of the project.
   */
  title: string

  /**
   * The summary of the project.
   *
   * A project's summary should be a short sentence about the project.
   */
  summary: string

  /**
   * The intro of the project.
   *
   * A project's intro should be a short paragraph about the project.
   */
  intro: string

  /**
   * The details about a project.
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
 * The data for a project.
 *
 * Assumes that frontmatter and image values are always present.
 */
type ProjectData = {
  frontmatter: ProjectFrontmatter
  image: ProjectImage
}

/**
 * The props for the ProjectLayout component.
 */
type ProjectLayoutProps = {
  /**
   * The data for the project.
   */
  data: ProjectData

  /**
   * The elements and components for the project's article.
   */
  children?: ReactNode
}

/**
 * A component that displays the majority of the components and content for a project.
 *
 * @param props - The props for the ProjectLayout component.
 * @returns The layout for the project, including the hero, details, hero image, and content itself.
 */
export default function ProjectLayout({ data, children }: ProjectLayoutProps) {
  const { frontmatter, image } = data

  return (
    <Layout>
      <Hero header={frontmatter.title} body={frontmatter.intro} navigation={<Hero.Navigation />}>
        <ProjectDetails details={frontmatter.details} />
      </Hero>
      <Container size="lg">
        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <FloatingImage
            imageProps={{
              src: image.src,
              alt: image.alt,
              priority: true,
            }}
          />
        </div>
        <Text style={{ marginBottom: 'var(--spacing-3xl)' }}>{children}</Text>
      </Container>
    </Layout>
  )
}
