import React, { useState } from 'react'
import Navegacion from './Navegacion'
import Header from './Header'
import Ficha from './Ficha'
import Footer from './Footer'
import {pizza} from '../pizzas'

const Home = () => {
    const [listaPizza, setListaPizza] = useState(pizza);

    console.log(listaPizza);
  return (
    <div>
        <Navegacion></Navegacion>
        <Header></Header>
         <div className='divFicha'>
        {
          listaPizza.map((pizza) => <Ficha key={`home-${pizza.id}`} pizza={pizza}></Ficha>)
        }
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default Home