import classNames from 'classnames'
import styles from './PrismLink.module.css'

interface PrismLink extends React.ComponentPropsWithoutRef<'a'> {}

export default function PrismLink({ ...props }: PrismLink) {
  return <a className={classNames([styles.link, props.className])} {...props} />
}
