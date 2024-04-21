/**
 * Limits how often a function can be called.
 */
export default function throttle(cb, wait = 100) {
  let time = Date.now()

  function throttler(...args) {
    if (time + wait - Date.now() < 0) {
      cb(...args)
      time = Date.now()
    }
  }

  return throttler
}
