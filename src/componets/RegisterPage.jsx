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
    <div>
        <h1>Formulario de registro</h1>
        <form>
            <input type="email" onChange={(event)=>setEmail(event.target.value)}/>
            <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <input type="password"onChange={(event)=>setConfirmPassword(event.target.value)}/>
            <button Type="button" onClick={() => validarFormulario()}>Enviar </button>
        </form>
    </div>
  )
  
  
}

export default RegisterPage