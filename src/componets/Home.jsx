import React, { useEffect, useState } from 'react'
import Navegacion from './Navegacion'
import Header from './Header'
import Ficha from './Ficha'
import Footer from './Footer'
// import {pizza} from '../pizzas'

const Home = () => {
    const [pizza, setPizza] = useState([]);

    const getPizza = async() =>{
      const respuesta = await fetch('http://localhost:5000/api/pizzas')
      const pizza = await respuesta.json();

      setPizza(pizza)
    }
    useEffect(()=>{
      getPizza()
      
    }, [])
    const [listaPizza, setListaPizza] = useState(pizza);
    const [carrito, setCarrito] = useState([]);
    
    const agregarCarrito = (id) => {
      const product = listaPizza.find((pizza)=> pizza.id === id)
      setCarrito([...carrito, product])
      console.log(carrito)
    }
    const eliminarCarrito =(id ) => {
      const indiceProducto = carrito.findIndex(pizza.id === id)
      setCarrito((estadoPrevio)=>{
        const nuevoCarrito = [...estadoPrevio]
        nuevoCarrito.splice(indiceProducto, 1)
        return nuevoCarrito
      })
    }
  return (
    <div>
        <Header></Header>
         <div className='divFicha'>
          {
            listaPizza.map((pizza) => <Ficha key={`home-${pizza.id}`} pizza={pizza} agregarCarrito={agregarCarrito}></Ficha>)
          }
          
        </div>
        
        <h2>Carrito</h2>
        <div className='divficha'>
          {
            carrito.map((pizza) => <Ficha key={`carrito-${pizza.id}`} pizza={pizza} agregarCarrito={eliminarCarrito}></Ficha>)
          }
        </div>
      <Footer></Footer>
      
    </div>
  )
}

export default Home