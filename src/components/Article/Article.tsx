import { ReactNode } from 'react'
import Container from '../Container'
import styles from './Article.module.css'

type ArticleProps = {
  children?: ReactNode
}

export default function Article({ children }: ArticleProps) {
  return (
    <Container size="lg" className={styles.article}>
      {children}
    </Container>
  )
}
