import ArrowLink from '@/components/ArrowLink'
import projectsList from 'lib/data/projects'
import FloatingImage from '../FloatingImage/FloatingImage'
import PlainLink from '../PlainLink/PlainLink'
import Text from '../Text'
import styles from './Project.module.css'

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
        <Text>
          <h3>
            <PlainLink href={href}>{title}</PlainLink>
          </h3>
          <p style={{ maxWidth: '52ch' }}>{desc}</p>
        </Text>
      </header>
      <footer className={styles.footer}>
        <ArrowLink href={href} label="View project" />
      </footer>
    </article>
  )
}
