import classNames from 'classnames'
import { HTMLProps } from 'react'
import Link from '../Link'
import { LinkProps } from '../Link/Link'
import styles from './ArrowLink.module.css'

const arrow = (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
    <path
      d="M6 0 4.9425 1.0575 9.1275 5.25H0v1.5h9.1275l-4.185 4.1925L6 12l6-6-6-6Z"
      fill="currentColor"
    />
  </svg>
)

/**
 * Props for the ArrowLink component.
 */
type ArrowLinkProps = {} & LinkProps & HTMLProps<HTMLAnchorElement>

/**
 * A component that renders a link with an arrow.
 *
 * @param props Props for the ArrowLink component.
 * @returns Rendered ArrowLink component.
 */
export default function ArrowLink({ href, className, children, ...props }: ArrowLinkProps) {
  return (
    <Link href={href} className={classNames([styles.link, className])} {...props}>
      {children}
      {arrow}
    </Link>
  )
}
