import React from 'react'
import '../stylesheets/navbar.css'

const Navbar = () => {
  return (
    <header className='primary-header'>
        <nav className='navbar container'>
            <a href='#' className='logo'> JOBINDER </a>
            <ul>
                <li>
                    <a href='#' className='nav-link'>PERFIL</a>
                </li>
                <li>
                    <a href='#' className='nav-link'>BUSQUEDA</a>
                </li>
                <li>
                    <a href='#' className='nav-link'>MIS VACANTES</a>
                </li>
                <li>
                    <a href='#' className='nav-link'>CERRAR SESIÓN</a>
                </li>

            </ul>
            <button type="button" class="btn btn-primary">Primary</button>
        </nav>
    </header>
  )
}

export default Navbar