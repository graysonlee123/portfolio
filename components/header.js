import ConditionalLink from './conditional-link'
import classNames from 'classnames'
import styles from './header.module.css'
import utilStyles from '/styles/utils.module.scss'

export default function Header({
  children,
  className,
  header,
  level,
  href,
  center,
  maxWidth,
}) {
  const safeLevel = level ? level.toLowerCase().trim() : ''
  const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const HeaderLevel = headingLevels.includes(safeLevel) ? safeLevel : 'p'

  return (
    <div
      className={classNames({
        [styles.center]: center,
        [className]: className,
      })}
    >
      <HeaderLevel
        className={classNames(utilStyles.headerLoud, utilStyles.textDark)}
      >
        <ConditionalLink link={href}>{header}</ConditionalLink>
      </HeaderLevel>
      {children ? (
        <div
          className={classNames(styles.body)}
          style={{ maxWidth: maxWidth ? maxWidth : null }}
        >
          {children}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
