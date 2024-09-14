import { Children, createContext, useContext, useEffect, useState } from "react";

const CatchPizzaCarritoContext = createContext({Children});
const CatchPizzaProvider = () => {
    const [totalPizza, setTotalPizza] = useState(0);
    const [idPizza, setIdPizza] = useState([]);

    const addtotalCarrito = (totalPizza)=>{
        setTotalPizza((prevpizza)=> prevpizza + totalPizza)
    }
    const addFichaCarrito = (pizzaId) =>{
        setIdPizza((prevIDPizza)=>[...prevIDPizza,pizzaId])
    }
    useEffect(()=>{
        addtotalCarrito();
        addFichaCarrito();
    },[totalPizza])
    
    return (
        <CatchPizzaCarritoContext.Provider value={{totalPizza, addtotalCarrito, addFichaCarrito}}>
            {Children}
        </CatchPizzaCarritoContext.Provider>
    )
}

export const useCatchPizzaCarrito = () => {
    return (
        useContext(CatchPizzaCarritoContext)
    )
}

export default CatchPizzaProvider