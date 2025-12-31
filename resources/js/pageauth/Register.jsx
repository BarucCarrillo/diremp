import React, { useState, useEffect} from 'react'
import Config from '../Config';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

const Register = () => {

    const { getToken } = AuthUser();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); 
    const navigate = useNavigate();   

    useEffect(() =>{
        if(getToken()){
          navigate("/")
        }
      },[])

    const submitRegistro = async(e) => {
        e.preventDefault();

        Config.getRegister({name, email, password})
        .then(({data})=>{
            if(data.success){
                navigate("/login")
            }
        })
    }

  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-sm-4">
                <div className="card mt-5 mb-5">
                    <div className="card-body">
                        <h1 className='text-center fw-bolder'>REGISTRO</h1>
                        <input type="text" className='from-control mt-3 w-100' placeholder='Nombre: ' value={name} 
                        onChange={(e)=>setName(e.target.value)} required />
                        <input type="email" className='from-control mt-3 w-100' placeholder='Email: ' value={email} 
                        onChange={(e)=>setEmail(e.target.value)} required />
                        <input type="password" className='from-control mt-3 mb-3  w-100' placeholder='Contrasena: ' value={password} 
                        onChange={(e)=>setPassword(e.target.value)} required />

                        <button onClick={submitRegistro} className='btn btn-primary w-100'>Enviar</button>
                        <p><a href="#" className='small text-decoration-none mt-3'>Terminos y Condiciones</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register