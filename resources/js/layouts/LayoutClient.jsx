import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutClient = () => {
  const {getRole} = AuthUser()
  const navigate = useNavigate()

  useEffect(() =>{
    if(getRole!="client"){
      navigate("/")
    }
  },[])
  return (
    <div>
      <h1>CLIENTE</h1>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutClient