import React, { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <button onClick={updateCount}>count : {count}</button>
}
