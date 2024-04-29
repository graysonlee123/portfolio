import classNames from 'classnames'
import { ReactNode } from 'react'
import Container from '../Container'
import Link from '../Link'
import Text from '../Text'
import styles from './Projects.module.css'

/**
 * Props for the Projects component.
 */
type ProjectsProps = {
  /**
   * Whether or not the projects are being viewed on the home page.
   *
   * @default false
   */
  home?: boolean

  /**
   * Intended for individual Project components.
   */
  children?: ReactNode
}

/**
 * A component that renders a grid of projects.
 *
 * @param props Props for the Projects component.
 * @returns Rendered Projects component.
 */
export default function Projects({ home = false, children }: ProjectsProps) {
  return (
    <section className={classNames(styles.section)}>
      <Container maxWidth="lg">
        <Text>
          {home ? (
            <>
              <h2>Projects</h2>
              <p style={{ maxWidth: '64ch' }}>
                I am almost always working on some kind of side project. That allows me to expand my
                knowledge about my field, and learn about things that I may not normally encounter.
                Plus, it&apos;s fun!
              </p>
            </>
          ) : (
            <>
              <h2>More projects</h2>
              <p style={{ maxWidth: '58ch' }}>
                If you enjoyed reading about this project, I encourage you to read about some of my
                other work, or{' '}
                <Link href="/contact" prism>
                  reach out to me
                </Link>
                if you&apos;d like to talk.
              </p>
            </>
          )}
        </Text>
        {children && <div className={styles.grid}>{children}</div>}
      </Container>
    </section>
  )
}
