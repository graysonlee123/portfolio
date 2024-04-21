import ConditionalLink from '@/components/ConditionalLink'
import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

type HeaderProps = {
  className?: string
  header?: string
  element?: string
  href?: string
  center?: boolean
  maxWidth?: string | number
  children?: ReactNode
}

export default function Header({
  className,
  header,
  element = 'h2',
  href,
  center,
  maxWidth,
  children,
}: HeaderProps) {
  const HeadingTag = element as keyof JSX.IntrinsicElements

  return (
    <div
      className={classNames({
        [styles.center]: center,
        [className]: className,
      })}
    >
      <HeadingTag className={classNames(utilStyles.headerLoud, utilStyles.textDark)}>
        <ConditionalLink link={href}>{header}</ConditionalLink>
      </HeadingTag>
      {children ? (
        <div className={classNames(styles.body)} style={{ maxWidth: maxWidth ? maxWidth : null }}>
          {children}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
