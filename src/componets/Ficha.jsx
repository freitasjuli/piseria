import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Ficha = (pizza) => {
    const navegar = useNavigate();
    const {totalPizza, addtotalCarrito, addFichaCarrito}= useContext(CatchPizzaCarritoContext); 
    const verPizza = () => {
        navegar(`/pizza/${pizza.id}`);
    }
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
            <button onClick={verPizza}>detalles </button>
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