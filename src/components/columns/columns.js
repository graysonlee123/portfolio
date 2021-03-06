import classNames from 'classnames'
import styles from './index.module.css'

export function Columns({ children }) {
  if (!children) return

  return <div className={classNames(styles.grid)}>{children}</div>
}
