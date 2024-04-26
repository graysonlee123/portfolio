import classNames from 'classnames'
import { HTMLProps } from 'react'
import styles from './Container.module.css'

/**
 * The props for the Container component.
 */
type ContainerProps = {
  /**
   * The maximum size of the container.
   *
   * @default md
   */
  maxWidth?: 'sm' | 'md' | 'lg'
} & HTMLProps<HTMLDivElement>

/**
 * A layout utility component, used for restraining the maximum width of itself and therefore its children.
 *
 * @param props The props for the Container component.
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
