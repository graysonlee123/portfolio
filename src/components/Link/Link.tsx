import classNames from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { HTMLProps } from 'react'
import styles from './Link.module.css'

/**
 * Props for the Link component.
 */
type LinkProps = {
  /**
   * Whether or not the link should change color with the site's Prism effect.
   *
   * @default false
   */
  prism?: boolean
} & NextLinkProps &
  HTMLProps<HTMLAnchorElement>

/**
 * A component that renders a plainly styled link.
 *
 * @param props Props for the Link component.
 * @return Rendered Link component.
 */
export default function Link({ prism = false, href, className, ...props }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={classNames([styles.link, { [styles.prism]: prism }, className])}
      {...props}
    />
  )
}
