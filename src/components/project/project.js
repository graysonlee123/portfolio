import Image from 'next/image'
import Link from 'next/link'
import { Header } from '/src/components/header'
import { ArrowLink } from '/src/components/arrow-link'
import classNames from 'classnames'
import projectsList from '/src/data/projects'
import { throttle } from '/src/scripts/throttle'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

export function Project({ slug }) {
  if (!projectsList[slug]) {
    console.error('`slug` is required for component "Projects"')
    return null
  }

  const { title, href, img, desc } = projectsList[slug]

  /**
   * Calculates an angle based on one-dimension and current position.
   * @param {Int} minPos The minimum position.
   * @param {Int} maxPos The maximum position.
   * @param {Int} minAng The minimum angle in degrees.
   * @param {Int} maxAng The maximum angle in degrees.
   * @param {Int} pos The current position.
   * @returns {Int} The calculated angle in degrees.
   */
  function calcAngle(minPos, maxPos, minAng, maxAng, pos) {
    return ((minAng - maxAng) / (minPos - maxPos)) * (pos - minPos) + minAng
  }

  /**
   * Handles the mose events and calculating angles.
   * @param {MouseEvent} e The event, either from `mouseenter` or `mousemove`
   */
  function handleMouseMove(e) {
    if (window.matchMedia('(hover: hover)').matches) {
      const target = e.currentTarget

      const bounds = target.getBoundingClientRect()
      const width = target.offsetWidth
      const height = target.offsetHeight

      const offset = {
        x: bounds.left + window.scrollX,
        y: bounds.top + window.scrollY,
      }

      const pos = {
        x: e.pageX - offset.x - width / 2,
        y: e.pageY - offset.y - height / 2,
      }

      const min = {
        x: -width / 2,
        y: -height / 2,
      }

      const max = {
        x: width / 2,
        y: height / 2,
      }

      const angle = {
        min: -2.5,
        max: 2.5,
      }

      const newAngle = {
        x:
          Math.round(
            calcAngle(min.x, max.x, angle.min, angle.max, pos.x) * 100
          ) / 100,
        y:
          (-1 *
            Math.round(
              calcAngle(min.y, max.y, angle.min, angle.max, pos.y) * 100
            )) /
          100,
      }

      target.style.setProperty(
        'transform',
        `rotateX(${newAngle.y}deg) rotateY(${newAngle.x}deg) scale(1.025)`
      )
    }
  }

  /**
   * Handle the mouse leaving.
   * @param {MouseEvent} e The mouse event.
   */
  function handleMouseLeave(e) {
    const target = e.currentTarget

    target.style.removeProperty('transform')
  }

  return (
    <article className={styles.article}>
      <div className={styles.imageWrap}>
        <Link href={href}>
          <a
            className={classNames(utilStyles.imgMockup, styles.imageLink)}
            onMouseEnter={throttle(handleMouseMove)}
            onMouseMove={throttle(handleMouseMove)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={img}
              width={526}
              height={282}
              alt={title}
              sizes="(min-width: 91.125rem) 34.75rem, (min-width: 48rem) calc(((85vw - (85vw / 10)) / 2) - 2px), calc(85vw - 2px)"
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <header>
        <Header header={title} level="h3" href={href}>
          <p>{desc}</p>
        </Header>
      </header>
      <footer className={styles.footer}>
        <ArrowLink href={href} label="View project" />
      </footer>
    </article>
  )
}
