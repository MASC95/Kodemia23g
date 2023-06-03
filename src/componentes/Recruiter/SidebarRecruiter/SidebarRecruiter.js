import {React,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaUser,FaSuitcase, FaCheckDouble, FaSignOutAlt, FaHome} from 'react-icons/fa';
import logo from '../assets/img/logo.png'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { endpoints } from '../services/endpoints';
import useJob from '../../../hooks/useJob'

const SidebarRecruiter= () => {
  const navigate=useNavigate()
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter]= useJob();
  // useEffect(()=>{
  //     console.log(dataRecruiter)
  // },[dataRecruiter])
  const logout=()=>{
    // localStorage.getItem('accessToken')
    // const clear=localStorage.clear()
    const clear=setDataRecruiter({})
    if(clear){
      navigate(`/login-recruiter`)
    }
    // setDataRecruiter({})
  }
 

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
          <Link to={`/Dashboard-Recruiter/home`}>
          <a href="#!" className="dashboard-nav-item"><FaHome/> &nbsp;Home </a>
          </Link>
          <Link to={`/Dashboard-Recruiter/profile`}>
          <a href="#!" className="dashboard-nav-item"> <FaUser/> &nbsp;Perfil </a>
          </Link>
          <Link to={`/Dashboard-Recruiter/vacancy`}>
          <a href="#!" className="dashboard-nav-item"><FaSuitcase/> &nbsp;Vacantes </a>
          </Link>
          <Link to={`/Dashboard-Recruiter/match`}>
          <a href="#!" className="dashboard-nav-item"><FaCheckDouble/> &nbsp;Match </a>
          </Link>
          <button type='button' onClick={logout} className="button-logout" ><FaSignOutAlt/> &nbsp;Logout </button>
        </nav>
    </div>
    </>
  )
}

export default SidebarRecruiter

// https://codepen.io/corbpie/pen/LYNwGdE