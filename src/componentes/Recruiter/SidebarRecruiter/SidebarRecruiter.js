import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import logo from '../assets/img/logo.png'
import { FaBars, FaUser,FaSuitcase, FaCheckDouble, FaSignOutAlt, FaHome} from 'react-icons/fa';
const SidebarRecruiter= () => {

  return (
    <>
    <div className="dashboard-nav">
        <header>
          <div href="#" className="brand-logo">
            <a className="logo_Jobinder" href="index.html">
                <img src={logo} className="logo_Jobinder" alt=""/>
            </a>
          </div>
        </header>
        <nav className="dashboard-nav-list">
          <Link to={`/dashboard-reclutador/home`}>
          <a href="#!" className="dashboard-nav-item"><FaHome/> &nbsp;Home </a>
          </Link>
          <Link to={`/welcome-recruiter/profile`}>
          <a href="#!" className="dashboard-nav-item"> <FaUser/> &nbsp;Perfil </a>
          </Link>
          <Link to={`/recruiter-vacancy`}>
          <a href="#!" className="dashboard-nav-item"><FaSuitcase/> &nbsp;Vacantes </a>
          </Link>
          <Link to={`/recruiter-listMatches`}>
          <a href="#!" className="dashboard-nav-item"><FaCheckDouble/> &nbsp;Match </a>
          </Link>
          <a href="#!" className="dashboard-nav-item"><FaSignOutAlt/> &nbsp;Logout </a>
        </nav>
    </div>
    </>
  )
}

export default SidebarRecruiter

// https://codepen.io/corbpie/pen/LYNwGdE