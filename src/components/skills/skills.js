import { Header } from '/src/components/header'
import classNames from 'classnames'
import { throttle } from '/src/scripts/throttle'
import style from './index.module.css'
import utilStyles from '/src/styles/utils.module.scss'

const skills = [
  {
    name: 'Javascript',
    color: '#101010',
    background: '#FFD600',
  },
  {
    name: 'Vue / Nuxt',
    color: '#455A64',
    background: '#81C784',
  },
  {
    name: 'React',
    color: '#4788C7',
    background: '#98CCFD',
  },
  {
    name: 'Sass',
    color: '#ffffff',
    background: '#F06292',
  },
  {
    name: 'PHP',
    color: '#484C89',
    background: '#777BB3',
  },
  {
    name: 'Git',
    color: '#ffffff',
    background: '#F4511E',
  },
  {
    name: 'CSS',
    color: '#ffffff',
    background: '#039BE5',
  },
  {
    name: 'HTML',
    color: '#ffffff',
    background: '#FF5722',
  },
  {
    name: 'Linux / CLI',
    color: '#51C55D',
    background: '#393E41',
  },
]

const blob = (
  <svg
    className={classNames(['blob', style.blob])}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="387"
    viewBox="0 0 1200 387"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      opacity="0.25"
      d="M0 277v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 302 1113 262.71 1200 329.47V277H0ZM1200 109.989V63.6993c-47.79-22.2001-103.59-32.1701-158-28.0001-70.36 5.37-136.33 33.31-206.8 37.5-73.84 4.36-147.54-16.88-218.2-35.26-69.27-18-138.3-24.88-209.4-13.08-36.15 6-69.85 17.84-104.45 29.34C210.51 84.9892 87 124.279 0 57.5192v52.4698h1200Z"
      fill="#fff"
    />
    <path
      opacity="0.5"
      d="M0 277v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 388.27 165 388 224.58 368.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V277H0ZM1200 109.989V94.1793c-13-21.11-27.64-41.05-47.69-56.24-51.72-39.22-117.31-38.95-176.89-19.5301-31.15 10.15-60.09 26.07-89.67 39.8-40.92 19-84.73 45.9998-130.83 49.6698-36.26 2.85-70.9-9.4198-98.6-31.5598-31.77-25.39-62.32-62-103.63-73-40.44-10.79-81.35 6.69-119.13 24.28s-75.16 39-116.92 43.05c-59.73 5.85-113.28-22.88-168.9-38.84-30.2-8.66-59-6.17-87.09 7.5-22.43 10.89-48 26.93-60.65 49.24v21.4398h1200Z"
      fill="#fff"
    />
    <path
      d="M1200 104.359c-149.93-53.3697-314.09-65.6897-475.83-36.9398-18.988 3.3737-37.631 7.6913-56.266 12.0072l-.005.0009-.003.0005c-23.563 5.4571-47.115 10.9114-71.336 14.4514-59 8.6298-112.48-12.24-165.56-35.4-58.93-25.71-117-43.73-182.2-38.49-86.53 7-172.4599 45.71-248.8 84.8098V282.63c149.93 53.37 314.09 65.69 475.83 36.94 18.99-3.374 37.635-7.692 56.272-12.008 23.564-5.457 47.116-10.912 71.338-14.452 59-8.63 112.48 12.24 165.56 35.4 58.93 25.71 117 43.73 182.2 38.49 86.53-7 172.46-45.71 248.8-84.81V104.359Z"
      fill="#fff"
    />
  </svg>
)

export function Skills() {
  /**
   * Calculates pill center and sizes the element.
   * @param {HTMLElement} el The pill to size.
   * @param {Object} mousePos The position of the cursor.
   * @param {Int} min The minimum distance.
   * @param {Int} max The maximum distance.
   */
  function sizePill(el, mousePos, min, max) {
    const bounds = el.getBoundingClientRect()
    const width = el.offsetWidth
    const height = el.offsetHeight

    const pos = {
      x: bounds.left + window.scrollX + width / 2,
      y: bounds.top + window.scrollY + height / 2,
    }

    const distance = Math.round(
      Math.sqrt(
        Math.pow(mousePos.x - pos.x, 2) + Math.pow(mousePos.y - pos.y, 2)
      )
    )

    const scale = getScale(distance, min, max)

    el.style.setProperty('transform', `scale(${scale})`)
  }

  /**
   * Grabs all pills and sizes them.
   * @param {Object} pos The position of the cursor.
   * @param {Int} min The minimum distance.
   * @param {Int} max The maximum distance.
   */
  function sizePills(pos, min, max) {
    const pills = document.querySelectorAll('.pill')
    pills.forEach((pill) => {
      sizePill(pill, pos, min, max)
    })
  }

  /**
   * Gets the value for sizing the pill.
   * @param {Int} distance The distance the cursor is from the pill center.
   * @param {Int} min The minimum distance.
   * @param {Int} max The maximum distance.
   * @returns {Float} The percentage calculated.
   */
  function getScale(distance, min, max) {
    let percentage

    if (distance < min) {
      percentage = 0
    } else if (distance > max) {
      percentage = 1
    } else {
      percentage = (distance - min) / (max - min)
    }

    return percentage * 0.1 + 0.9
  }

  /**
   * Handles mouse movement, including entering.
   * @param {MouseEvent} e The mouse event.
   */
  function handleMouseMove(e) {
    if (window.matchMedia('(hover: hover)').matches) {
      const min = 10
      const max = 300
      const pos = {
        x: e.pageX,
        y: e.pageY,
      }

      sizePills(pos, min, max)
    }
  }

  /**
   * Handles the mouse leave event.
   */
  function handleMouseLeave() {
    const pills = document.querySelectorAll('.pill')
    pills.forEach((pill) => {
      pill.style.removeProperty('transform')
    })
  }

  return (
    <section
      className={style.section}
      onMouseEnter={throttle(handleMouseMove)}
      onMouseMove={throttle(handleMouseMove)}
      onMouseLeave={throttle(handleMouseLeave)}
    >
      {blob}
      <div className={classNames(utilStyles.containerLg, style.text)}>
        <Header header="Skills" level="h2" center>
          <p>
            Throughout my career path, I have learned that am emphasis on
            fundamentals gives me the information I need in order to succeed at
            things like frameworks, libraries, and larger concepts.
          </p>
        </Header>
        <div className={style.skills}>
          {skills.map(({ name, color, background }) => (
            <span
              className={classNames(style.skill, 'pill')}
              style={{ color: color, backgroundColor: background }}
              key={name}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
