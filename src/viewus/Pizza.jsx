    import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
    
    const Pizza = () => {
      const {id} = useParams()

      const [pizza, setPizza] = useState({})
      const getPizza = async () =>{
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        const pizza = await res.json();
        setPizza(pizza);
      }
      useEffect(()=>{
        getPizza()
      }, [])
      return (
        <div className='pizzaFicha'>
          <img src={pizza.img}></img>
          <h1>{pizza.name} </h1>
          <p>{pizza.price} </p>
          <ul>
            {pizza.ingredients?.map((ingredient)=>{
              return <li key={ingredient}>{ingredient}</li>
            })}
          </ul>
          <p>{pizza.desc} </p>
        </div>
      )
    }
    
    export default Pizza