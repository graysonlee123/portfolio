import classNames from 'classnames'
import Link from '../Link'
import styles from './Logo.module.css'

/**
 * Props for the Logo component.
 */
type LogoProps = {
  /**
   * Whether or not the logo should match the site's Prism effect.
   *
   * @default true
   */
  prism?: boolean
}

/**
 * A component that renders my logo, linked to the home page.
 *
 * @param props Props for the Logo component.
 * @returns Rendered Logo component.
 */
export default function Logo({ prism = true }: LogoProps) {
  return (
    <Link
      className={classNames({
        [styles.prism]: prism,
      })}
      href="/"
      aria-label="Go to home"
    >
      <svg
        className={styles.svg}
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 7.365a9.242 9.242 0 0 1 6.543 2.708l23.46 23.376c3.6 3.423 3.605 9.65 0 13.073-1.797 1.393-24.544 25.562-26.458 25.464a9.239 9.239 0 0 1-7.089 0c-1.825.213-24.7-24.173-26.403-25.454-3.6-3.425-3.605-9.652 0-13.075l23.405-23.384A9.23 9.23 0 0 1 40 7.365ZM40 0a16.633 16.633 0 0 0-11.741 4.861L4.836 28.262c-6.445 6.161-6.451 17.313 0 23.482C8.52 54.83 29.234 77.75 33.648 78.736a16.644 16.644 0 0 0 12.722 0c4.29-.876 25.226-24.026 28.794-26.992 6.446-6.158 6.45-17.319 0-23.477L51.757 4.864A16.61 16.61 0 0 0 40 0Zm8.548 60.175L60.26 48.464A11.964 11.964 0 0 0 63.773 40c.093-10.541-13.049-15.99-20.441-8.477l-5.862 5.873c-1.546 1.336-1.616 3.919-.14 5.334 1.41 1.478 3.996 1.42 5.337-.122l5.88-5.782a4.723 4.723 0 0 1 3.253-1.3c4.045-.083 6.136 5 3.253 7.818l-11.72 11.712a4.704 4.704 0 0 1-6.523 0L25.099 43.344a4.6 4.6 0 0 1 0-6.518L42.68 19.261c2.13-2.18.426-6.188-2.63-6.159a3.694 3.694 0 0 0-2.567.947L19.884 31.617c-4.629 4.468-4.631 12.47 0 16.938 2.677 2.294 12.263 13.343 15.608 14.318 4.369 1.867 9.752.795 13.067-2.606l-.01-.092Z"
          fill="#000"
        />
      </svg>
    </Link>
  )
}
