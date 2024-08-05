import React from 'react'

const Navegacion = () => {
    const total = 25000;
    const token = false;
    return (
        <div className="header">
            <a href="#" className='logo'>!Pizzeria Mamma Mia¡</a>
            <nav>
                <ul className="botones"> 
                    <li ><a href="#">home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">logout</a></li>
                    <li><a href="#">login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">total</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navegacion;