import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navegacion from './componets/Navegacion'
import Header from './componets/Header'
import Ficha from './componets/Ficha'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegacion></Navegacion>
      <Header></Header>
      <div className='divFicha'>
        <Ficha></Ficha>
        <Ficha></Ficha>
        <Ficha></Ficha>
        
      </div>
    </>
  )
}

export default App
