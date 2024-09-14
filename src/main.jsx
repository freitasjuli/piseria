import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CatchPizzaProvider from './context/CatchPizzaCarritoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CatchPizzaProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </CatchPizzaProvider>
  ,
)
