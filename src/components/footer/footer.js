import { Logo } from '/src/components/logo'
import { Socials } from '/src/components/socials'
import classNames from 'classnames'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

const blob = (
  <svg
    className={classNames(['blob', styles.blob])}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="110"
    viewBox="0 0 1200 110"
  >
    <path
      opacity="0.25"
      d="M1200 109.989V63.6993c-47.79-22.2-103.59-32.1701-158-28.0001-70.36 5.37-136.33 33.31-206.8 37.5-73.84 4.36-147.54-16.88-218.2-35.26-69.27-18-138.3-24.88-209.4-13.08-36.15 6-69.85 17.84-104.45 29.34C210.51 84.9892 87 124.279 0 57.5192v52.4698h1200Z"
      fill="#fff"
    />
    <path
      opacity="0.5"
      d="M1200 109.989V94.1793c-13-21.11-27.64-41.05-47.69-56.24-51.72-39.22-117.31-38.95-176.89-19.5301-31.15 10.15-60.09 26.07-89.67 39.8-40.92 19-84.73 45.9998-130.83 49.6698-36.26 2.85-70.9-9.4198-98.6-31.5598-31.77-25.39-62.32-62-103.63-73-40.44-10.79-81.35 6.69-119.13 24.28s-75.16 39-116.92 43.05c-59.73 5.85-113.28-22.88-168.9-38.84-30.2-8.66-59-6.17-87.09 7.5-22.43 10.89-48 26.93-60.65 49.24v21.4398h1200Z"
      fill="#fff"
    />
    <path
      d="M1200 109.989v-5.63c-149.93-53.3698-314.09-65.6898-475.83-36.9398-43 7.64-84.23 20.12-127.61 26.46-59 8.6298-112.48-12.24-165.56-35.4-58.93-25.71-117-43.73-182.2-38.49-86.53 7-172.46 45.71-248.8 84.8098v5.19h1200Z"
      fill="#fff"
    />
  </svg>
)

export function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      {blob}
      <div className={styles.wrapper}>
        <div className={utilStyles.containerLg}>
          {children}
          <div
            className={classNames({
              [styles.flex]: true,
              [styles.hasChildren]: children,
            })}
          >
            <Logo prism inline />
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  )
}
