import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navegacion from './componets/Navegacion'
import Header from './componets/Header'
import Ficha from './componets/Ficha'
import Footer from './componets/Footer'
import RegisterPage from './viewus/RegisterPage'
import Login from './viewus/Login'
import Home from './viewus/Home'
import Pizza from './viewus/Pizza'
import { Route, Routes } from 'react-router-dom'
import Page404 from './viewus/Page404'



function App() {
  return (
    <>
    <Navegacion></Navegacion>
      <Routes>
        <Route path='/piseria' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/profile' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/carrito' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/pizza' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/*' element={<Page404></Page404>}></Route>
      </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
