import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CatchPizzaCarritoContext } from './context/CatchPizzaCarritoContext.jsx'
import {UsuarioContext} from './context/UsuarioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UsuarioContext.provider>
        <CatchPizzaCarritoContext.Provider> 
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </CatchPizzaCarritoContext.Provider>
    </UsuarioContext.provider>
)
