import { createContext, useState } from "react";

export const UsuarioContext = createContext();

import React from 'react'

const UsuarioContext = ({children}) => {
    const [usuario, setUsuario] = useState(false);
  return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}

export default UsuarioContext