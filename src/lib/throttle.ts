const throttle = (cb: () => void, wait: number = 100): (() => void) => {
  let time = Date.now()

  return function (...args) {
    if (time + wait - Date.now() < 0) {
      cb(...args)
      time = Date.now()
    }
  }
}

export default throttle
