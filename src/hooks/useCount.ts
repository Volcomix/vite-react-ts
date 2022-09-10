import { useState } from 'react'

const useCount = () => {
  const [count, setCount] = useState(0)

  return {
    count,
    increment: () => setCount((count) => count + 1),
  }
}

export default useCount
