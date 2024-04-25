import { ReactNode } from 'react'
import styles from './Text.module.css'

/**
 * Props for the Text component.
 */
type TextProps = {
  /**
   * The text elements or components to be wrapped by the Text component.
   */
  children?: ReactNode
}

/**
 * A component used to wrap text elements for styling or grouping purposes.
 *
 * @param props - The props for the Text component.
 * @returns A div element with the specified children inside, styled according to the CSS module `Text.module.css`.
 */
export default function Text({ children }: TextProps) {
  return <div className={styles.text}>{children}</div>
}
