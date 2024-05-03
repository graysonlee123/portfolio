import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import styles from './Text.module.css'

/**
 * Props for the Text component.
 */
type TextProps = {
  /**
   * Whether or not to apply `text-align: center` to the wrapper.
   *
   * Applies only on larger screens.
   *
   * @default false
   */
  center?: boolean
} & HTMLAttributes<HTMLDivElement>

/**
 * A component that renders text elements in a wrapper, for styling or grouping purposes.
 *
 * @param props Props for the Text component.
 * @returns Rendered Text component.
 */
export default function Text({ center = false, ...rest }: TextProps) {
  return <div className={classNames([styles.text], { [styles.center]: center })} {...rest} />
}
