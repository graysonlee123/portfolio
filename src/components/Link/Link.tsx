import classNames from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { HTMLProps } from 'react'
import styles from './Link.module.css'

/**
 * Props for the Link component.
 */
export type LinkProps = {
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
 * The component will automatically add relevant "new tab" attributes if the link is determined to be external.
 *
 * @param props Props for the Link component.
 * @return Rendered Link component.
 */
export default function Link({ href, target, rel, className, prism = false, ...props }: LinkProps) {
  const isExternal = href && href.startsWith('http')

  return (
    <NextLink
      href={href}
      target={target || (isExternal ? '_blank' : undefined)}
      rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      className={classNames([styles.link, { [styles.prism]: prism }, className])}
      {...props}
    />
  )
}
