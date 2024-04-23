import ArrowLink from '@/components/ArrowLink'
import Header from '@/components/Header'
import projectsList from 'lib/data/projects'
import FloatingImage from '../FloatingImage/FloatingImage'
import styles from './index.module.css'

export default function Project({ slug }) {
  if (!projectsList[slug]) {
    console.error('`slug` is required for component "Projects"')
    return null
  }

  const { title, href, img, width, height, desc } = projectsList[slug]

  return (
    <article className={styles.article}>
      <FloatingImage
        className={styles.image}
        linkProps={{
          href,
        }}
        imageProps={{
          src: img,
          alt: title,
          width,
          height,
          sizes:
            '(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)',
        }}
      />
      <header>
        <Header header={title} element="h3" href={href} maxWidth="52ch">
          <p>{desc}</p>
        </Header>
      </header>
      <footer className={styles.footer}>
        <ArrowLink href={href} label="View project" />
      </footer>
    </article>
  )
}
