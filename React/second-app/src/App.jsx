import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/login'
import Dashboard from './Components/dashboard'
import Ref from './Components/Ref'

function App() {
  const [count, setCount] = useState(10)
  //let x = 2;

  const increment = () => {
    setCount(count + 1);
  }

  // useEffect(()=>{
  //   console.log('Called once')
  // },[])

  // useEffect(()=>{
  //   console.log('Called on dependency update')
  // },[count])

  // useEffect(()=>{
  //   console.log('Called every time');
  // })

  return (
    <>
      <div className='container border border-2' style={{backgroundColor:"red", color:'white'}}>
        <h1>Hello {count} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        
        <Login />
        {/* <Dashboard/> */}
        <Ref/>
      </div>
    </>
  )
}

export default App
