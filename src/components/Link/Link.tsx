import classNames from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { HTMLProps } from 'react'
import styles from './Link.module.css'

/**
 * Props for the Link component.
 */
type LinkProps = {
  /**
   * Whether or not the link should change color with the user's mouse movement.
   *
   * @default false
   */
  prism?: boolean
} & NextLinkProps &
  HTMLProps<HTMLAnchorElement>

/**
 * A component used to strip links of their default styling. The links will inherit their color like any other text.
 *
 * @param props The props for the Link component.
 * @return A Next Link component, stripped of default styles.
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
