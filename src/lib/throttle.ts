/**
 * Throttle a function to only be called once every `wait` milliseconds.
 *
 * @param cb Function to throttle.
 * @param wait Time to wait before calling the function again.
 *
 * @returns A function that will call the cb function only once every `wait` milliseconds.
 */
const throttle = <T extends unknown[]>(
  cb: (...args: T) => void,
  wait: number = 100,
): ((...args: T) => void) => {
  let time = Date.now();

  return function (...args) {
    if (time + wait - Date.now() < 0) {
      cb(...args);
      time = Date.now();
    }
  };
};

export default throttle;
