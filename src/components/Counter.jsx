import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleDecrease() {
    setCount(prev => prev - 1)
  }

  function handleIncrease() {
    setCount(next => next + 1)
  }
  return (
    <section className="counter-wrapper">
      <h2>Counter</h2>
      <div className="counter">
        <button onClick={handleDecrease}>-</button>

        <span className="count">{count}</span>

        <button onClick={handleIncrease}>+</button>
      </div>
    </section>
  )
}
