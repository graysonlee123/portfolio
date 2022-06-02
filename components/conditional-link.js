import Link from 'next/link'
import utilStyles from '/styles/utils.module.scss'

export default ({ link, children }) =>
  link ? (
    <Link href={link}>
      <a className={utilStyles.linkReset}>{children}</a>
    </Link>
  ) : (
    children
  )
