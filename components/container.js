import classNames from 'classnames'
import utilStyles from '/styles/utils.module.scss'

export default function Container({ children, className }) {
  return (
    <div className={classNames(utilStyles.containerLg, className)}>
      {children}
    </div>
  )
}
