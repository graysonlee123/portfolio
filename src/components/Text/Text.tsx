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
 * A component used to wrap text elements for styling or grouping purposes.
 *
 * @param props - The props for the Text component.
 * @returns A div element with the specified children inside, styled according to the CSS module `Text.module.css`.
 */
export default function Text({ center = false, ...rest }: TextProps) {
  return <div className={classNames([styles.text], { [styles.center]: center })} {...rest} />
}
