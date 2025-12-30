import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'

const LayoutAdmin = () => {
  const {getRole} = AuthUser()
  const navigate = useNavigate()

  useEffect(() =>{
    if(getRole!="admin"){
      navigate("/")
    }
  },[])

  return (
    <div>
      <h1>ADMIN</h1>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutAdmin