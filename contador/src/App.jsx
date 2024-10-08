import { useState } from 'react'
import './App.css'

function App() {
  // Estado para controlar el valor del contador.
  const [count, setCount] = useState(0)

  // Funcion que incrementa en uno el contador.
  const incrementar = () => {
    setCount(count + 1)
  }
  // Funcion que decrementa en uno el contador.
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
