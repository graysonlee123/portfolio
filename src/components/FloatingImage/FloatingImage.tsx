import classNames from 'classnames'
import throttle from 'lib/utils/throttle'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import styles from './FloatingImage.module.css'

type ImageWrapperProps = {
  linkProps?: LinkProps
  children?: ReactNode
}

function ImageWrapper({ linkProps, children }: ImageWrapperProps) {
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
   * Handles the mouse events and calculating angles.
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
        x: Math.round(calcAngle(min.x, max.x, angle.min, angle.max, pos.x) * 100) / 100,
        y: (-1 * Math.round(calcAngle(min.y, max.y, angle.min, angle.max, pos.y) * 100)) / 100,
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

  if (linkProps)
    return (
      <div className={styles.linkWrapper}>
        <Link
          className={styles.link}
          onMouseEnter={throttle(handleMouseMove)}
          onMouseMove={throttle(handleMouseMove)}
          onMouseLeave={throttle(handleMouseLeave)}
          {...linkProps}
        >
          {children}
        </Link>
      </div>
    )

  return children
}

type FloatingImageProps = {
  imageProps: ImageProps
  linkProps?: LinkProps
  className?: string
  rounded?: boolean
  shadow?: boolean
}

export default function FloatingImage({
  imageProps,
  linkProps,
  className,
  rounded = true,
  shadow = true,
}: FloatingImageProps) {
  return (
    <ImageWrapper linkProps={linkProps}>
      <div
        className={classNames({
          [styles.fill]: imageProps.fill,
          [styles.rounded]: rounded,
          [styles.shadow]: shadow,
          [className]: true,
        })}
      >
        <Image {...imageProps} />
      </div>
    </ImageWrapper>
  )
}
