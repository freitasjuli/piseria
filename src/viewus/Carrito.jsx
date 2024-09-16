import React, { useContext } from 'react'

const Carrito = () => {
  const [pizza] = useContext(CatchPizzaCarritoContext);
  
  return (
    <div>
      {
        pizza.map((tipo) => <Ficha key={`carrito-${pizza.id}`} pizza={tipo}></Ficha>)
      }
    </div>
  )
   
}

export default Carrito