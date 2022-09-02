import React from 'react'
import './NavBar.css'
import cohete from './cohete.png'
import CartWidgets from './CartWidgets'


const NavBar = (props) => {
  return (

<nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between '>
  <div className='container-fluid navBar'>
    <img src={cohete} className='cohete bg-light' alt='cohete'/>

    <div className="navbar-nav">
        <a className="nav-link boton btn btn-light mx-1" aria-current="page" href="/">Iniciar Sesión</a>
        <a className="nav-link boton btn btn-light mx-1" href="/">Registrarse</a>
      </div>    




    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup" >
      <div className="navbar-nav">
        <a className="nav-link boton2 btn btn-light text-end mx-1" aria-current="page" href="/">Home</a>
        <a className="nav-link boton2 btn btn-light text-end mx-1" href="/">PC</a>
        <a className="nav-link boton2 btn btn-light text-end mx-1" href="/">Xbox One</a>
        <a className="nav-link boton2 btn btn-light text-end mx-1" href="/">PS3</a>
        <a className="nav-link boton2 btn btn-light text-end active mx-1" href="/">PS4</a>
        <a className="nav-link boton2 btn btn-light text-end mx-1" href="/">Ps5</a>
        <CartWidgets/>
      </div>

    </div>

                     




    
  </div>
</nav>

  )
}

export default NavBar



