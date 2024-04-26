import classNames from 'classnames'
import throttle from 'lib/utils/throttle'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { MouseEvent, ReactNode } from 'react'
import styles from './FloatingImage.module.css'

/**
 * Props for the ImageWrapper component.
 */
type ImageWrapperProps = {
  /**
   * Props for the Link component.
   *
   * If falsey, no Link component will be output.
   */
  linkProps?: LinkProps

  /**
   * The children for the ImageWrapper component.
   *
   * Intended to be a FloatingImage component.
   */
  children?: ReactNode
}

/**
 * A component that renders a wrapper for the FloatingImage component, if `linkProps` are truthy.
 *
 * Contains the code for the interactive hovering effect which applies to linked images.
 *
 * @param props Props for the ImageWrapper component.
 * @returns Rendered ImageWrapper component.
 */
function ImageWrapper({ linkProps, children }: ImageWrapperProps) {
  /**
   * Calculates an angle based on one-dimension and current position.
   *
   * @param minPos Minimum position.
   * @param maxPos Maximum position.
   * @param minAng Minimum angle in degrees.
   * @param maxAng Maximum angle in degrees.
   * @param pos Current position.
   * @returns Calculated angle in degrees.
   */
  function calcAngle(minPos: number, maxPos: number, minAng: number, maxAng: number, pos: number) {
    return ((minAng - maxAng) / (minPos - maxPos)) * (pos - minPos) + minAng
  }

  /**
   * Handles the mouse events and calculating angles.
   *
   * @param e The event, either from `mouseenter` or `mousemove`.
   */
  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
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
   *
   * @param e The mouse event.
   */
  function handleMouseLeave(e: MouseEvent<HTMLAnchorElement>) {
    const target = e.currentTarget

    target.style.removeProperty('transform')
  }

  /**
   * Render wrapper if `linkProps` is truthy.
   */
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

  /**
   * Otherwise, just render its children.
   */
  return children
}

/**
 * Props for the FloatingImage component.
 */
type FloatingImageProps = {
  /**
   * Props for the Image component.
   */
  imageProps: ImageProps

  /**
   * Props passed to the Link component.
   */
  linkProps?: LinkProps

  /**
   * Additional classnames.
   */
  className?: string

  /**
   * Whether or not the image should have rounded corners.
   *
   * @default true
   */
  rounded?: boolean

  /**
   * Whether or not the image should have a shadow.
   *
   * @default true
   */
  shadow?: boolean
}

/**
 * A component that renders an image with default styling and, when passed `linkProps`, a hover effect.
 *
 * @param props Props for the FloatingImage component.
 * @returns Rendered FloatingImage component.
 */
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
