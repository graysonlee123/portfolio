import ArrowLink from '@/components/ArrowLink'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import FloatingImage from '../FloatingImage'
import Link from '../Link'
import Text from '../Text'
import styles from './Project.module.css'

/**
 * The props for the Project component.
 */
type ProjectProps = {
  /**
   * The header/title for the project.
   */
  header: ReactNode

  /**
   * The href for the project.
   */
  href: string

  /**
   * The imported image data for the project.
   */
  image?: StaticImageData

  /**
   * The summary for the project.
   *
   * Intended to be typography elements that end up in the Text component, such as p tags.
   */
  summary?: ReactNode
}

/**
 * A component that renders images and elements linked to a project.
 *
 * @param props The props for the Project component.
 * @returns A group of elements including an image, header, summary, and button.
 */
export default function Project({ header, href, image, summary }: ProjectProps) {
  return (
    <article className={styles.article}>
      {image && (
        <FloatingImage
          className={styles.image}
          linkProps={{
            href,
          }}
          imageProps={{
            src: image,
            alt: 'Project image preview',
            quality: 85,
            sizes:
              '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)',
          }}
        />
      )}
      <header>
        <Text style={{ marginBottom: '1rem' }}>
          <h3>
            <Link href={href}>{header}</Link>
          </h3>
          {summary}
        </Text>
      </header>
      <footer className={styles.footer}>
        <ArrowLink href={href} label="View project" />
      </footer>
    </article>
  )
}
