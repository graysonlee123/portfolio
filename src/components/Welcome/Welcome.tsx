import classNames from 'classnames'
import Container from '../Container'
import FloatingImage from '../FloatingImage'
import Text from '../Text'
import styles from './Welcome.module.css'

import hikingPic from 'public/images/hiking.jpg'
import laptopPic from 'public/images/laptop-01.jpg'

/**
 * A component that renders the Welcome section of the webstie.
 *
 * @returns Rendered Welcome component.
 */
export default function Welcome() {
  return (
    <section className={styles.section}>
      <Container maxWidth="lg">
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
          <Text>
            <p>
              I&apos;m a motivated and enthusiastic web developer who studied full-stack web
              development at Georgia Tech&apos;s Web Development Boot Camp.
            </p>
          </Text>
          <Text>
            <p>
              I enjoy learning techniques, methodologies, and best practices. That directly raises
              the standards I have for my work.
            </p>
          </Text>
          <Text>
            <p>
              I have created many projects throughout my career, during my free time, and in my
              studies. I&apos;ve wrote about a few of my favorites below.
            </p>
          </Text>
        </div>
      </Container>
    </section>
  )
}
