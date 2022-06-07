import classNames from 'classnames'
import utilStyles from '/src/styles/utils.module.scss'

export function Container({ children, className }) {
  return (
    <div className={classNames(utilStyles.containerLg, className)}>
      {children}
    </div>
  )
}
