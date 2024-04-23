import Header from '@/components/Header'
import classNames from 'classnames'
import Link from 'next/link'
import Container from '../Container'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

export default function Projects({ children, header, home }) {
  return (
    <section className={classNames(styles.section)}>
      <Container size="lg">
        <Header header={header}>
          {home ? (
            <p>
              I am almost always working on some kind of side project. That allows me to expand my
              knowledge about my field, and learn about things that I may not normally encounter.
              Plus, it&apos;s fun!
            </p>
          ) : (
            <p style={{ maxWidth: '58ch' }}>
              If you enjoyed reading about this project, I encourage you to read about some of my
              other work, or{' '}
              <Link className={utilStyles.textLink} href="/contact">
                reach out to me
              </Link>{' '}
              if you&apos;d like to talk.
            </p>
          )}
        </Header>
        {children ? <div className={styles.grid}>{children}</div> : ''}
      </Container>
    </section>
  )
}
