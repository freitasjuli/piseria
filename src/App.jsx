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
        <Ficha
          imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          nombre ="peperoni"
          ingredientes="peperoni, queso, pasta de tomate, bocadillo"
          precio="5000"
        ></Ficha>
        <Ficha
          imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          nombre ="española"
          ingredientes="mozarella, gorgonzola, parmesano, provolone"
          precio="10000"
        ></Ficha>
        <Ficha
          imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          nombre ="Napolitana"
          ingredientes="jamon, oregano, tomate"
          precio="15000"
        ></Ficha>
        
      </div>
    </>
  )
}

export default App
