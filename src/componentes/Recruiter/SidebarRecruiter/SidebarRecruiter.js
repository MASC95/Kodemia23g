import {React,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaUser,FaSuitcase, FaCheckDouble, FaSignOutAlt, FaHome} from 'react-icons/fa';
import logo from '../assets/img/logo.png'
import './style.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { endpoints } from '../services/endpoints';

const SidebarRecruiter= () => {
  const [profileInformation,setProfileInformation]=useState([])
  const [isLoading,setLoading]=useState(true)
  const params=useParams();
  const {id}=params
  console.log(id)
  useEffect(()=>{
      const fetchData=async()=>{
          try {
              const endpointURL= `${endpoints.getByUser}/${id}`;
              const result= await axios.get(endpointURL)
              setProfileInformation(result.data)
              console.log(result.data[0])
          } catch (error) {
              console.log(error)
          } finally{
              setLoading(false)
          }         
      };
      fetchData()
  },[id]);
  console.log(profileInformation)

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
          {/* <Link to={`/dashboard-reclutador/home`}>
======= */}
          <Link to={`/Dashboard-Recruiter/${id}`}>
          <a href="#!" className="dashboard-nav-item"><FaHome/> &nbsp;Home </a>
          </Link>
          <Link to={`/Dashboard-Recruiter/${id}/profile`}>
          <a href="#!" className="dashboard-nav-item"> <FaUser/> &nbsp;Perfil </a>
          </Link>
          <Link to={`/Dashboard-Recruiter/${id}/vacancy`}>
          <a href="#!" className="dashboard-nav-item"><FaSuitcase/> &nbsp;Vacantes </a>
          </Link>
          <Link to={`/Dashboard-Recruiter/${id}/match`}>
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