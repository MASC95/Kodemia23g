import React from "react";
import {Link} from 'react-router-dom'
import './style.scss'
import logo from '../../Recruiter/assets/img/logo.png'
import { FaBars, FaUser,FaSuitcase, FaSearch, FaSignOutAlt, FaHome} from 'react-icons/fa';

export const SidebarCandidate=()=>{
    return(
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
          <Link to={`/dashboard-candidato/home`}>
          <a href="#!" className="dashboard-nav-item"><FaHome/> &nbsp;Home </a>
          </Link>
          <Link to={`/dashboard-candidato/profile`}>
          <a href="#!" className="dashboard-nav-item"> <FaUser/> &nbsp;Perfil </a>
          </Link>
          <Link to={`/dashboard-candidato/search`}>
          <a href="#!" className="dashboard-nav-item"> <FaSearch/> &nbsp;Buscar </a>
          </Link>
          <Link to={`/dashboard-candidato/app-vacancies`}>
          <a href="#!" className="dashboard-nav-item"><FaSuitcase/> &nbsp;Mis vacantes </a>
          </Link>
          <a href="#!" className="dashboard-nav-item"><FaSignOutAlt/> &nbsp;Logout </a>
        </nav>
    </div>
        </>
    )
}
export default SidebarCandidate