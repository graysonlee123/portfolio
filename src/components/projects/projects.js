import Header from '@/components/header'
import classNames from 'classnames'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

export function Projects({ children, header = 'More projects', home }) {
  return (
    <section className={classNames(styles.section)}>
      <div className={classNames(utilStyles.containerLg)}>
        <Header header={header} level="h2">
          {home ? (
            <p>
              In addition to my day job, I am almost always working on some kind
              of side project. That allows me to expand my knowledge about my
              field, and learn about things that I may not normally encounter.
              Plus, it&apos;s fun!
            </p>
          ) : (
            <p style={{ maxWidth: '48ch' }}>
              If you enjoyed reading about this project, I encourage you to read
              about some of my other work.
            </p>
          )}
        </Header>
        {children ? <div className={styles.grid}>{children}</div> : ''}
      </div>
    </section>
  )
}
