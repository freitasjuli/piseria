import React from 'react'

const Ficha = ({pizza, agregarCarrito}) => {
    return ( 
        <div className='pizzaFicha'>
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
            <button onClick={()=>agregarCarrito(pizza.id)}>comprar</button>
        </div>
        
    );

}

{/*Ficha.proptypes = {
    pizza: {
        img: prototype.string,
        name: prototype.string,
        ingredients: prototype.string,
        price: prototype.number,
        desc: prototype.string,
    }
} */}
export default Ficha;