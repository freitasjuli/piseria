import React, { useContext, useState } from 'react'
import UsuarioContext from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate;
    const[ setUsuario ] = useContext(UsuarioContext); 
    
    const handleSubmit = async (e) =>{

        e.preventDefault();
        try{
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    "content-Type":"application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });
            const data = await res.json();

            if(data.token){
                setUsuario(data.token)
                localStorage.setItem('token', data.token);
                navigate('/profile');
            }else{
                alert('Erroren usuario o contraseña')
            }
        }catch {error} {
            console.lgo(error);
        }
    }

  return (
    <div className='login'>
        <h2>Ingrese su coreo y contraseña</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
        <label>
            Correo
            <input type="email" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label>
            contraseña
            <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login