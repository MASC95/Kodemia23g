import React from 'react';
import { FaHome, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-container container-fluid justify-content-between">
        <div className="col-lg-3 logo">
          <a className=" navbar-brand me-2 mb-1 d-flex align-items-center" href="!#">
            <a className='jobinder' height="20" loading="lazy" style={{marginTop: "2px", fontFamily: "EB Garamond"}} />JOBINDER <a/>
          </a>
        </div>
        <div className="col-lg-6 my-auto search-bar-div">
          <form className="form-search nput-group w-auto my-auto d-none d-sm-flex">
            <div className="input-group-prepend">
              <button className="input-group-text border-0 d-none d-lg-flex"><FaSearch /></button>
            </div>
            <input autoComplete="off" type="search" className="form-control rounded" placeholder="Buscar" />
          </form>
          <button className="input-group-text border-0 d-lg-none"><FaSearch /></button>
        </div>

        <ul className="navbar-nav d-flex flex-row justify-content-end col-lg-3">
            <button type='button' className='inicio btn btn-primary' style={{width: '200px', height: '38px' }}> Iniciar Sesión</button>
          <li className="nav-item me-3 me-lg-1 mb-2">
            <a className="nav-link d-none" href="!#">
              <span><FaHome size={18} /></span>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1 mb-2">
            <a className="nav-link d-none" href="!#">
              <span><FaBell size={18} /></span>
              <span className="badge rounded-pill badge-notification bg-danger">12</span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1 mb-2">
            <a className="nav-link d-none" href="!#">
              <span><FaUser size={18} /></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
