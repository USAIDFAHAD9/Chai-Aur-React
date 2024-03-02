import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount((count) => count + 1)
  
  }
  const decreaseValue = () => {
    if (count > 0) setCount(count - 1)
  }
  return (
    <>
      <h1>chai aur react counter</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
