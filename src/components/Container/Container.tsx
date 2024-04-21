import classNames from 'classnames'
import utilStyles from '/src/styles/utils.module.scss'
import { ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children?: ReactNode
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={classNames(utilStyles.containerLg, className)}>{children}</div>
}
