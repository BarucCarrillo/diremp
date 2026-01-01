import React from 'react'
import AuthUser from '../pageauth/AuthUser'
import Config from '../Config'

export default function Navbar() {

  const { getToken, getLogout, getRol } = AuthUser()

  const logoutUser = () => {
    Config.getLogout('/logout')
    .then(response=>{
      console.log(response)
      getLogout();
    })
  }

  const renderLinks = () => {
    if (getToken()){
      return(
        <>
        <li className='nav-item'>
            <a className="nav-link" href={`/${getRol()}`} >Administracion</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" href="#" onClick={getLogout}>Cerrar Sesion</a>
          </li>
        </>
      )
    } else {
      return(
        <>
          <li className='nav-item'>
            <a className="nav-link" href="/login" >Iniciar Sesion</a>
          </li>
        </>
      )
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Directorio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/categorias">Categorias</a>
        {renderLinks()}
      </div>
    </div>
  </div>
</nav>
  )
}
