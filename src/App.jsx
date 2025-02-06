import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-nowrap">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </>
  )
}

export default App
