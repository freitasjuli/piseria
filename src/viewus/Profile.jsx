import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import UsuarioContext from '../context/UsuarioContext'

const Profile = () => {
    const {usuario} = useContext(UsuarioContext);
    const [datosUsuario, setDatosUsuario] = useState({});
    
    useEffect( () => {
        const getData = async () => {
            const res = await fetch('http://localhost:5000/api/auth/me', {
                headers: {
                    "Authorization":  `Bearer ${usuario}` , 
                },
            }); 
            const data = await res.json();
            setDatosUsuario (data);
        }

        getData();
        
    }, [])

    if (!datosUsuario.email)
        return (
        <div>
            <h2>Cargando datos</h2>
        </div>
        )
  return (
    <div>
        <h1>este es el perfil del usuario </h1>
        <p>Email:</p>
        <span> {datosUsuario.email} </span>
    </div>

  )
}

export default Profile