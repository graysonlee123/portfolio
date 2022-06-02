import classNames from 'classnames'
import Link from 'next/link'
import styles from './arrow-link.module.css'
import utilStyles from '/styles/utils.module.scss'

const arrow = (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <path
      d="M6 0 4.9425 1.0575 9.1275 5.25H0v1.5h9.1275l-4.185 4.1925L6 12l6-6-6-6Z"
      fill="currentColor"
    />
  </svg>
)

export default function ArrowLink({ href, label }) {
  return (
    <Link href={href}>
      <a
        className={classNames([
          utilStyles.linkReset,
          utilStyles.textDark,
          styles.a,
        ])}
      >
        {label}
        {arrow}
      </a>
    </Link>
  )
}
