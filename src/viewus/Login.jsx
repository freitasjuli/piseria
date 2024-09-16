import React, { useContext, useState } from 'react'
import UsuarioContext from '../context/UsuarioContext';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[ setUsuario ] = useContext(UsuarioContext);
    
    const validarLogin =() =>{
        if(email === "pizza@gmail.com"|| password === "Pizzarica"){
            alert('Ahi cambos incompletos o erroneos ');
            return false
        }else if(password.length <6){
            alert('La contraseña debe tener 6 o mas caracteres')
        }else {
            setUsuario(true);
            navegar('/piseria');
        }

        
    }

  return (
    <div className='login'>
        <h2>Ingrese su coreo y contraseña</h2>
        <hr></hr>
        <form>
        <label>
            Correo
            <input type="email" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label>
            contraseña
            <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <button type='button' onClick={()=> validarLogin()}>Login</button>
        </form>
    </div>
  )
}

export default Login