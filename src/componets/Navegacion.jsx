import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import UsuarioContext from '../context/UsuarioContext';

const Navegacion = () => {
    const total = 25000;
    const token = false;
    const {totalPizza} = useContext(CatchPizzaCarritoContext)
    const setAtiveClass = ({isActive}) => isActive ? 'active': 'notActive';
    const[ setUsuario ] = useContext(UsuarioContext);
    return (
        <div className="header">
            <Link to="/piseria" className='logo'>!Pizzeria Mamma Mia¡</Link>
            <nav>
                <ul className="botones"> 
                    <li><NavLink to="/piseria" className={setAtiveClass}>HOME</NavLink></li>
                    <li><NavLink to="/profile" className={setAtiveClass} >Profile</NavLink></li>
                    <li><NavLink to="/piseria" className={setAtiveClass} onClick={()=>setUsuario(false)}>logout</NavLink></li>
                    <li><NavLink to="/register" className={setAtiveClass}>Register</NavLink></li>
                    <li><NavLink to="/carrito" className={setAtiveClass}>carrito</NavLink></li>
                    <li>Valor de las Pizzas {totalPizza} </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navegacion;