import Link from 'next/link'
import Header from '@/components/header'
import classNames from 'classnames'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

export function Projects({ children, header, home }) {
  return (
    <section className={classNames(styles.section)}>
      <div className={classNames(utilStyles.containerLg)}>
        <Header header={header} level="h2">
          {home ? (
            <p>
              I am almost always working on some kind of side project. That
              allows me to expand my knowledge about my field, and learn about
              things that I may not normally encounter. Plus, it&apos;s fun!
            </p>
          ) : (
            <p style={{ maxWidth: '58ch' }}>
              If you enjoyed reading about this project, I encourage you to read
              about some of my other work, or{' '}
              <Link href="/contact">
                <a className={utilStyles.textLink}>reach out to me</a>
              </Link>{' '}
              if you'd like to talk.
            </p>
          )}
        </Header>
        {children ? <div className={styles.grid}>{children}</div> : ''}
      </div>
    </section>
  )
}
