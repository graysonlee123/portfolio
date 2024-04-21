import Image from 'next/image'
import classNames from 'classnames'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

import laptopPic from 'public/images/laptop-01.jpg'
import hikingPic from 'public/images/hiking.jpg'

export default function Hello() {
  return (
    <section className={styles.section}>
      <div className={classNames(utilStyles.containerLg, styles.grid)}>
        <div
          className={classNames(
            utilStyles.imgShadow,
            utilStyles.imgRound,
            styles.mediaCell,
            styles.mediaCellOne
          )}
        >
          <Image
            className={classNames([styles.image, styles.laptop])}
            src={laptopPic}
            alt="Photo of a laptop with code on its screen"
            sizes="(min-width: 91.125rem) 50.625rem, (min-width: 62rem) calc(((85vw - 6rem) / 3) * 2 + 3rem), 0rem"
            placeholder="blur"
            fill
            priority
          />
        </div>
        <div
          className={classNames(
            utilStyles.imgShadow,
            utilStyles.imgRound,
            styles.mediaCell,
            styles.mediaCellTwo
          )}
        >
          <Image
            className={classNames([styles.image, styles.hiking])}
            src={hikingPic}
            alt="A photo of me hiking at the Grand Canyon"
            sizes="(min-width: 91.125rem) 23.75rem, (min-width: 62rem) calc((85vw - 6rem) / 3), (min-width: 36rem) calc((85vw - 3rem) / 2), 85vw"
            placeholder="blur"
            fill
            priority
          />
        </div>
        <p>
          I&apos;m a motivated and enthusiastic web developer who studied full-stack web development
          at Georgia Tech&apos;s Web Development Boot Camp.
        </p>
        <p>
          I enjoy learning techniques, methodologies, and best practices. That directly raises the
          standards I have for my work.
        </p>
        <p>
          I have created many projects throughout my career, during my free time, and in my studies.
          I&apos;ve wrote about a few of my favorites below.
        </p>
      </div>
    </section>
  )
}
