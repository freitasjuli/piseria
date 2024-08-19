import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navegacion from './componets/Navegacion'
import Header from './componets/Header'
import Ficha from './componets/Ficha'
import Footer from './componets/Footer'
import RegisterPage from './componets/RegisterPage'
import Login from './componets/Login'
import Home from './componets/Home'



function App() {
  return (
    <>  
    <Home></Home>
    <RegisterPage></RegisterPage>
    <Login></Login>
    </>
  )
}

export default App
