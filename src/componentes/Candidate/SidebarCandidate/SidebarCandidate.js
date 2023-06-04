import React from "react";
import {Link,useNavigate} from 'react-router-dom'
import './style.scss'
import logo from '../../Recruiter/assets/img/logo.png'
import { FaBars, FaUser,FaSuitcase, FaSearch, FaSignOutAlt, FaHome} from 'react-icons/fa';
import useJob from '../../../hooks/useJob'
export const SidebarCandidate=()=>{
  const navigate =useNavigate()
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter]= useJob();

  const logout=(e)=>{
    localStorage.getItem('accessToken')
    const clear=localStorage.clear()
    // const clear=setDataRecruiter({})
    if(clear){
      navigate(`/login-candidato`)
    }
    // setDataRecruiter({})
  }

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
         <FaHome/> &nbsp;Home 
          </Link>
          <Link to={`/dashboard-candidato/profile`}>
         <FaUser/> &nbsp;Perfil 
          </Link>
          <Link to={`/dashboard-candidato/search`}>
           <FaSearch/> &nbsp;Buscar 
          </Link>
          <Link to={`/dashboard-candidato/app-vacancies`}>
          <FaSuitcase/> &nbsp;Mis vacantes 
          </Link>
          <button type='submit' onClick={logout} className="button-logout" ><FaSignOutAlt/> &nbsp;Logout </button>
        </nav>
    </div>
        </>
    )
}
export default SidebarCandidate