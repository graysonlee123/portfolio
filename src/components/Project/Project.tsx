import ArrowLink from '@/components/ArrowLink'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import FloatingImage from '../FloatingImage'
import Link from '../Link'
import Text from '../Text'
import styles from './Project.module.css'

/**
 * Props for the Project component.
 */
type ProjectProps = {
  /**
   * Content displayed in the `h3` tag.
   */
  header: ReactNode

  /**
   * The href for the project.
   */
  href: string

  /**
   * Image data for the project.
   */
  image?: StaticImageData

  /**
   * Textual content displayed in the Text component.
   */
  summary?: ReactNode
}

/**
 * A component that renders a preview of a project.
 *
 * @param props Props for the Project component.
 * @returns Rendered Project component.
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
        <ArrowLink href={href}>View project</ArrowLink>
      </footer>
    </article>
  )
}
