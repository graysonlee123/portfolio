import styles from './Columns.module.css'

export default function Columns({ children }) {
  if (!children) return

  return <div className={styles.grid}>{children}</div>
}
