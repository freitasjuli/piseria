import React from 'react'

const Ficha = ({nombre,ingredientes,precio,imagen}) => {
    return ( 
        <div className='pizzaFicha'>
            <img src={imagen}></img>
            <h3>{nombre}</h3>
            <hr></hr>
            <h4>Ingredientes:</h4>
            <p>{ingredientes}</p>
            <hr></hr>
            <p>precio: ${precio}</p>
            <button>ver mas </button>
            <button>comprar</button>
        </div>
    );

}

export default Ficha;