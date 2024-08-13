import React, { useState } from 'react'

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conFirmPassword, setConfirmPassword] = useState("")

  const validarFormulario = ()=>{
  
    if(email === "" || password === "" || conFirmPassword === ""){
      alert("Faltan campos ");
      return false; 
    }

    if(password.length < 6 ){
      alert('La contraseña deve ser de 6 o mas caracteres');
      return false;
    }
    
    if (password !== conFirmPassword){
      alert('la contraseñas no son iguales');
      return false;
    }

    alert('datos enviados')
  }   

  return (
    <div className='divformulario'>
        <h1>Formulario de registro</h1>
        <hr></hr>
        <form >
            <label>
              Correo electronico
              <input type="email" onChange={(event)=>setEmail(event.target.value)}/>
            </label>
            <label>
              contreaseña
              <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
            </label>
            <label>
              Repita la contraseña 
              <input type="password"onChange={(event)=>setConfirmPassword(event.target.value)}/>
            </label>
            <button Type="button" onClick={() => validarFormulario()}>Enviar </button>
        </form>
    </div>
  )
  
  
}

export default RegisterPage