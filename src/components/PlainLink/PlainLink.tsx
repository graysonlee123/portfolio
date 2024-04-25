import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes } from 'react'
import styles from './PlainLink.module.css'

/**
 * Props for the PlainLink component.
 */
type PlainLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>

/**
 * A component used to strip links of their default styling, therefore inheriting their styles.
 *
 * @param props The props for the PlainLink component.
 * @return A Next Link component, stripped of default styles.
 */
export default function PlainLink({ href, className, ...props }: PlainLinkProps) {
  return <Link href={href} className={classNames([styles.link, className])} {...props} />
}
