import { useEffect, useState } from "react"

function ReactCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log({count})
  }, [count])

  return (
    <div>
      Hello {count}
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
    </div>
  )
}

export { ReactCounter }
