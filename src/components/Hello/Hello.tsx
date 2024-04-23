import classNames from 'classnames'
import Container from '../Container'
import styles from './Hello.module.css'

import hikingPic from 'public/images/hiking.jpg'
import laptopPic from 'public/images/laptop-01.jpg'
import FloatingImage from '../FloatingImage/FloatingImage'

export default function Hello() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={classNames([styles.grid])}>
          <FloatingImage
            className={styles.imageOne}
            imageProps={{
              src: laptopPic,
              alt: 'Photo of a laptop with code on its screen',
              sizes:
                '(min-width: 91.125rem) 50.625rem, (min-width: 62rem) calc(((85vw - 6rem) / 3) * 2 + 3rem), 0rem',
              placeholder: 'blur',
              fill: true,
              priority: true,
            }}
          />
          <FloatingImage
            className={styles.imageTwo}
            imageProps={{
              src: hikingPic,
              alt: 'A photo of me hiking at the Grand Canyon',
              sizes:
                '(min-width: 91.125rem) 23.75rem, (min-width: 62rem) calc((85vw - 6rem) / 3), (min-width: 36rem) calc((85vw - 3rem) / 2), 85vw',
              placeholder: 'blur',
              fill: true,
              priority: true,
            }}
          />
          <p>
            I&apos;m a motivated and enthusiastic web developer who studied full-stack web
            development at Georgia Tech&apos;s Web Development Boot Camp.
          </p>
          <p>
            I enjoy learning techniques, methodologies, and best practices. That directly raises the
            standards I have for my work.
          </p>
          <p>
            I have created many projects throughout my career, during my free time, and in my
            studies. I&apos;ve wrote about a few of my favorites below.
          </p>
        </div>
      </Container>
    </section>
  )
}
