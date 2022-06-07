import Link from 'next/link'
import utilStyles from '/src/styles/utils.module.scss'

export function ConditionalLink({ link, children }) {
  return link ? (
    <Link href={link}>
      <a className={utilStyles.linkReset}>{children}</a>
    </Link>
  ) : (
    children
  )
}
