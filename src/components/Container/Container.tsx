import classNames from 'classnames'
import { HTMLProps } from 'react'
import styles from './Container.module.css'

/**
 * Props for the Container component.
 */
type ContainerProps = {
  /**
   * Maximum size of the container.
   *
   * @default md
   */
  maxWidth?: 'sm' | 'md' | 'lg'
} & HTMLProps<HTMLDivElement>

/**
 * A component that renders its content in a restricted-width container.
 *
 * @param props Props for the Container component.
 * @returns A div that has a restricted maximum width.
 */
export default function Container({ maxWidth = 'md', className, ...rest }: ContainerProps) {
  return (
    <div
      className={classNames([styles.container, styles['container--' + maxWidth], className])}
      {...rest}
    />
  )
}
