import React from 'react';
import { FaHome, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.scss'
import logo from '../../Recruiter/assets/img/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="nav-container container-fluid justify-content-between">
        <div className="column-logo col-lg-3">
          <Link className="link-job navbar-brand me-2 mb-1 d-flex align-items-center" to="/">
            <img src={logo} alt='jobinder-logo'className='jobinder-logo' style={{width: "120px ", height: "45px" }} ></img>
          </Link>
        </div>

        <ul className="navbar-nav d-flex flex-row justify-content-end col-lg-3">
          <button type='button' className='loginB btn btn-primary d-none d-sm-block' style={{width: '200px', height: '42px' }}> Iniciar Sesión</button>
          <li className="nav-item-1 me-3 me-lg-1 mb-2">
            <Link className="nav-link d-none" to="/">
              <span className='home'><FaHome size={18} /></span>
              <span className="badge-home badge rounded-pill badge-notification bg-danger">1</span>
            </Link>
          </li>
          <li className="nav-item-2 me-3 me-lg-1 mb-2">
            <Link className="nav-link-2 d-none" to="/">
              <span className='bell'><FaBell size={18} /></span>
              <span className="badge-bell badge rounded-pill badge-notification bg-danger">12</span>
            </Link>
          </li>
          <li className="nav-item-3 me-3 me-lg-1 mb-2">
            <Link className="nav-link d-none" to="/">
              <span className='user'><FaUser size={18} /></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
