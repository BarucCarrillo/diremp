import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
import Config from '../Config';
import axios from 'axios';

const Login = () => {

  const { getToken, setToken } = AuthUser();
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); 
    const navigate = useNavigate();   
  
    const submitLogin = async(e) => {
        e.preventDefault();

      await axios.get('/sanctum/csrf-cookie').then((response) => {
        Config.getLogin({email, password})
        .then(({data})=>{
            if(data.success){
              console.log(data)
              const role = data.user.roles[0].name

                setToken(
                  data.user,
                  data.token,
                  role
                )
              
                if (role === 'admin'){
                  navigate('/admin')
                } else {
                  navigate('/client')
                }
            }else{
              console.log(data.message)
            }
        })
      })
    }

  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-sm-4">
                <div className="card mt-5 mb-5">
                    <div className="card-body">
                        <h1 className='text-center fw-bolder'>INICIAR SESION</h1>
                    
                        <input type="email" className='from-control mt-3 w-100' placeholder='Email: ' value={email} 
                        onChange={(e)=>setEmail(e.target.value)} required />
                        <input type="password" className='from-control mt-3 mb-3  w-100' placeholder='Contrasena: ' value={password} 
                        onChange={(e)=>setPassword(e.target.value)} required />

                        <button onClick={submitLogin} className='btn btn-primary w-100'>Enviar</button>
                        <p className='text-center mt-3'>{message}</p>
                        <hr />
                        <p className='text-center'>Primera vez.. Registrate!!!</p>
                        <a href="/register" className='btn btn-primary w-80'>Registro</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login