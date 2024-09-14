import React from 'react'
import { useCatchPizzaCarrito } from '../context/CatchPizzaCarritoContext'

const Carrito = () => {
  const [idPizza] = useCatchPizzaCarrito()
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
      {
        idPizza.map((tipo) => <Ficha key={`carrito-${pizza.id}`} pizza={tipo}></Ficha>)
      }
    </div>
  )
   
}

export default Carrito