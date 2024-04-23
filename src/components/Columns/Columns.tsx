import classNames from 'classnames'
import styles from './Columns.module.css'

export default function Columns({ children }) {
  if (!children) return

  return <div className={classNames(styles.grid)}>{children}</div>
}
