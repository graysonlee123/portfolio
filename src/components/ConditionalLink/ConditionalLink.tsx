import Link from 'next/link'
import utilStyles from '/src/styles/utils.module.scss'

export default function ConditionalLink({ link, children }) {
  return link ? (
    <Link className={utilStyles.linkReset} href={link}>
      {children}
    </Link>
  ) : (
    children
  )
}
