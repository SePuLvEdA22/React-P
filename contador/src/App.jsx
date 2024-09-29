import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  )

}

export default App
