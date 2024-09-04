import React from 'react'
import { Link } from 'react-router-dom';

const Navegacion = () => {
    const total = 25000;
    const token = false;
    return (
        <div className="header">
            <Link to="/piseria" className='logo'>!Pizzeria Mamma Mia¡</Link>
            <nav>
                <ul className="botones"> 
                    <li><Link to="/piseria">HOME</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout">logout</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/carrito">carrito</Link></li>
                    <li><Link to="/pizza">Pizza</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navegacion;