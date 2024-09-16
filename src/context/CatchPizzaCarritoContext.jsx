import { createContext, useEffect, useState } from "react";

export const CatchPizzaCarritoContext = createContext();

const CatchPizzaProvider = ({Children}) => {
    const [totalPizza, setTotalPizza] = useState(0);
    const [pizza, setIdPizza] = useState([]);

    const addtotalCarrito = (totalPizza)=>{
        setTotalPizza((prevpizza)=> prevpizza + totalPizza)
    }
    const addFichaCarrito = (pizza) =>{
        setIdPizza((prevPizza)=>[...prevPizza,pizza])
    }
    useEffect(()=>{
        addtotalCarrito();
        addFichaCarrito();
    },[totalPizza])
    
    return (
        <CatchPizzaCarritoContext.Provider value={{totalPizza, pizza, addtotalCarrito, addFichaCarrito}}>
            {Children}
        </CatchPizzaCarritoContext.Provider>
    )
}

export default CatchPizzaProvider;