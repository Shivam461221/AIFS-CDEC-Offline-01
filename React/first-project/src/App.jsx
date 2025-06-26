import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './first'

function App() {
  const [count, setCount] = useState(0)
  let x = 10;
  let name = 'Yash'

  const increment = ()=>{
    setCount(count+1);
  }

  return (
    <>
      <h1>Hello {count} </h1>
      <button onClick={increment}>Increment</button>
      <First/>
    </>
  )
}

export default App
