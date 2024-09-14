import React from 'react'
import { useCatchPizzaCarrito } from '../context/CatchPizzaCarritoContext';

const Ficha = (pizza) => {
    const { addtotalCarrito } = useCatchPizzaCarrito()
    const { addFichaCarrito } = useCatchPizzaCarrito()
    return ( 
        <div className='pizzaFicha' key={`ficha-${pizza.id}`}>
            <img src={pizza.img}></img>
            <h3>{pizza.name}</h3>
            <p>{pizza.desc}</p>
            <hr></hr>
            <h4>Ingredientes:</h4>
            <ul>
                {
                    pizza.ingredients.map((ingrediente) => <li>{ingrediente}</li>)
                }
            </ul>
            <hr></hr>
            <p>precio: ${pizza.price}</p>
            <button onClick={()=>{addtotalCarrito(pizza.price), addFichaCarrito(pizza)}}>comprar</button>
        </div>
        
    );

}

// Ficha.proptypes = {
//     pizza: {
//         img: prototype.string,
//         name: prototype.string,
//         ingredients: prototype.string,
//         price: prototype.number,
//         desc: prototype.string,
//     }
// }
export default Ficha;