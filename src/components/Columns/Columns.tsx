import classNames from 'classnames'
import styles from './Columns.module.css'
import textStyles from '../Text/Text.module.css'

export default function Columns({ children }) {
  if (!children) return

  return <div className={classNames([styles.grid, textStyles.columns])}>{children}</div>
}
