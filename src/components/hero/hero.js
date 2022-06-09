import Logo from '@/components/logo'
import Socials from '@/components/socials'
import classNames from 'classnames'
import projectList from '/src/data/projects'
import styles from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

const blob = (
  <svg
    className={classNames(['blob', 'blob--bottom'])}
    width="100%"
    height="110"
    viewBox="0 0 1200 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.25"
      d="M0 0V46.29C47.79 68.49 103.59 78.46 158 74.29C228.36 68.92 294.33 40.98 364.8 36.79C438.64 32.43 512.34 53.67 583 72.05C652.27 90.05 721.3 96.93 792.4 85.13C828.55 79.13 862.25 67.29 896.85 55.79C989.49 25 1113 -14.29 1200 52.47V0H0Z"
      fill="#fff"
    />
    <path
      opacity="0.5"
      d="M0 0V15.81C13 36.92 27.64 56.86 47.69 72.05C99.41 111.27 165 111 224.58 91.58C255.73 81.43 284.67 65.51 314.25 51.78C355.17 32.78 398.98 5.78 445.08 2.11C481.34 -0.74 515.98 11.53 543.68 33.67C575.45 59.06 606 95.67 647.31 106.67C687.75 117.46 728.66 99.98 766.44 82.39C804.22 64.8 841.6 43.39 883.36 39.34C943.09 33.49 996.64 62.22 1052.26 78.18C1082.46 86.84 1111.26 84.35 1139.35 70.68C1161.78 59.79 1187.35 43.75 1200 21.44V0H0Z"
      fill="#fff"
    />
    <path
      d="M0 0V5.63C149.93 59 314.09 71.32 475.83 42.57C518.83 34.93 560.06 22.45 603.44 16.11C662.44 7.48 715.92 28.35 769 51.51C827.93 77.22 886 95.24 951.2 90C1037.73 83 1123.66 44.29 1200 5.19V0H0Z"
      fill="#fff"
    />
  </svg>
)

export function Hero({ children, project }) {
  const currentProject = projectList[project]
  const showSocials = !project

  function renderItem(list) {
    return list.map((item) =>
      typeof item === 'object' ? (
        <p key={item.title}>
          <a
            className={classNames(utilStyles.textLink)}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </p>
      ) : (
        <p key={item}>{item}</p>
      )
    )
  }

  return (
    <header className={styles.section}>
      <div className={styles.stripe}>
        <div className={utilStyles.containerLg}>
          <Logo prism inline />
        </div>
      </div>
      {blob}
      <div className={classNames(styles.wrapper, utilStyles.containerLg)}>
        {showSocials ? <Socials /> : null}
        <h1
          className={classNames(
            styles.header,
            utilStyles.headerLouder,
            utilStyles.textDark
          )}
          style={{ marginTop: showSocials ? '2rem' : null }}
        >
          {children}
        </h1>
        {currentProject ? (
          <div className={styles.intro}>{currentProject.intro}</div>
        ) : null}
        {currentProject?.items ? (
          <div className={styles.table}>
            <div>
              <p className={classNames([utilStyles.textDark, styles.label])}>
                Tech stack
              </p>
              {renderItem(currentProject.items.techStack)}
            </div>
            <div>
              <p className={classNames([utilStyles.textDark, styles.label])}>
                Links
              </p>
              {renderItem(currentProject.items.links)}
            </div>
            <div>
              <p className={classNames([utilStyles.textDark, styles.label])}>
                Details
              </p>
              {renderItem(currentProject.items.details)}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}
