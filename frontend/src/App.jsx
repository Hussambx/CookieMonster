import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import Mainmenu from './components/Mainmenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <NavBar/>
    <Mainmenu/>
    </>
  )
}

export default App
