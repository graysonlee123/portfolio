import classNames from 'classnames'
import Image from 'next/image'
import styles from './intro.module.css'
import utilStyles from '/styles/utils.module.scss'

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={classNames(utilStyles.containerLg, styles.grid)}>
        <div
          className={classNames(
            utilStyles.imgShadow,
            utilStyles.imgRound,
            styles.photo1
          )}
        >
          <Image
            src="/images/laptop-01.jpg"
            alt="Photo of a laptop with code on its screen"
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 91.125rem) 50.625rem, (min-width: 62rem) calc(((85vw - 6rem) / 3) * 2 + 3rem), 0rem"
            priority
          />
        </div>
        <div
          className={classNames(
            utilStyles.imgShadow,
            utilStyles.imgRound,
            styles.photo2
          )}
        >
          <Image
            src="/images/hiking.jpg"
            alt="Me hiking at the Grand Canyon"
            layout="fill"
            objectFit="cover"
            objectPosition="30% 50%"
            sizes="(min-width: 91.125rem) 23.75rem, (min-width: 62rem) calc((85vw - 6rem) / 3), (min-width: 36rem) calc((85vw - 3rem) / 2), 85vw"
            priority
          />
        </div>
        <p>
          I'm a motivated and enthusiastic 24-year-old who studied full-stack
          web development at Georgia Tech's Web Development Bootcamp.
        </p>
        <p>
          Throughout my journey as a developer, I enjoy learning techniques,
          best practices, and new ideas. That directly raises my standards for
          my work.
        </p>
        <p>
          I have created many bullet-proof projects for my career, during my
          freetime, and in my studies. I've wrote about a few of my favorites,
          found below.
        </p>
      </div>
    </section>
  )
}
