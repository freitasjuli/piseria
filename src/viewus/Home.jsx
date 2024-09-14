import React, { useEffect, useState } from 'react'
import Navegacion from '../componets/Navegacion'
import Header from '../componets/Header'
import Ficha from '../componets/Ficha'
import Footer from '../componets/Footer'
// import {pizza} from '../pizzas'

const Home = () => {
    const [pizza, setPizza] = useState([]);

    const getPizzas = async() =>{
      const respuesta = await fetch('http://localhost:5000/api/pizzas')
      const pizzas = await respuesta.json();

      setPizza(pizzas)
    }
    useEffect(()=>{
      getPizzas()
      
    }, [])
    
    
  return (
    <div>
        <Header></Header>
         <div className='divFicha'>
          {
            pizza.map((tipo) => <Ficha key={`home-${tipo.id}`} pizza={tipo} ></Ficha>)
          }
        </div>
    </div>
  )
}

export default Home