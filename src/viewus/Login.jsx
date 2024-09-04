import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const validarLogin =() =>{
        if(email === ""|| password === ""){
            alert('Ahi cambos incompletos');
            return false
        }

        if(password.length <6){
            alert('La contraseña debe tener 6 o mas caracteres')
        }

        alert('ingreso completado')
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