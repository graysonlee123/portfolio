/**
 * Limits how often a function can be called.
 * @param {Function} cb A function to throttle.
 * @param {Int} wait The time, in milliseconds, to throttle by.
 * @returns {Function} The wrapper function responsible for the waits.
 */
function throttle(cb, wait = 100) {
  let time = Date.now()

  return function (...args) {
    if (time + wait - Date.now() < 0) {
      cb(...args)
      time = Date.now()
    }
  }
}

/**
 * Shifts a hue value by a specified offset.
 * @param {Int} hueX The hue to offset.
 * @param {Int} offset The amount, in degrees, to offset.
 * @returns {Int}
 */
function shiftHue(hueX, offset) {
  let hueY = Math.abs(hueX + offset)
  const max = 360

  if (hueY > max) {
    hueY = hueY % max
  }

  return hueY
}

/**
 * Handles the mouse move event.
 * @param {HTMLMouseEvent} e The mouse move event.
 */
function handleMouseMove(e) {
  const posX = e.pageX
  const posY = e.pageY
  const windowHeight = window.innerHeight
  const windowWidth = window.outerWidth
  const screenY = window.scrollY
  const root = document.documentElement
  const hue = Math.floor((posX / windowWidth) * 360)
  const saturation =
    Math.floor(((posY - screenY) / windowHeight) * 100) * 0.6 + 20

  root.style.setProperty('--hue', hue)
  root.style.setProperty('--hue-offset-2', `${shiftHue(hue, 10)}`)
  root.style.setProperty('--hue-offset-3', `${shiftHue(hue, 20)}`)
  root.style.setProperty('--saturation', `${saturation}%`)
}

/**
 * Throttle the mouse move event.
 * @param {HTMLMouseEvent} e The mouse move event.
 */
const throttleMouseMove = throttle(handleMouseMove)

/**
 * Assign the mouse event listener.
 */
document.addEventListener('mousemove', throttleMouseMove)
