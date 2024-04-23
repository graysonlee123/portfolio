import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Container.module.css'

type ContainerProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
}

export default function Container({ size = 'md', children, className }: ContainerProps) {
  return (
    <div className={classNames([styles.container, styles['container--' + size], className])}>
      {children}
    </div>
  )
}
