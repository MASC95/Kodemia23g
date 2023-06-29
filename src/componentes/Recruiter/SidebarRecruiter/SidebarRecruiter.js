import {Link} from 'react-router-dom'
import { FaUser,FaSuitcase, FaCheckDouble, FaSignOutAlt, FaHome, FaCode} from 'react-icons/fa';
import logo from '../assets/img/logo.png'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import useJob from '../../../hooks/useJob'

const SidebarRecruiter= () => {
  const navigate=useNavigate()
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, initDataCandidate, initDataRecrutier]= useJob();

  const logout=()=>{
    window.localStorage.setItem('accessToken','')
    setDataRecruiter(initDataRecrutier)
    setDataCandidate(initDataCandidate)
    navigate('/')
  }
 

  return (
    <>
    <div className="dashboard-nav">
        <header>
          <div className="brand-logo">
            <Link to={'index.html'} className="logo_Jobinder">
                  <img src={logo} className="logo_Jobinder" alt=""/>
              </Link>
          </div>
        </header>
        <nav className="dashboard-nav-list">
          <Link to={`/Dashboard-Recruiter/home`} className="dashboard-nav-item"><FaHome/> &nbsp;Home</Link>
          <Link to={`/Dashboard-Recruiter/profile`} className="dashboard-nav-item"><FaUser/> &nbsp;Perfil</Link>
          <Link to={`/Dashboard-Recruiter/softskill-addNew`} className="dashboard-nav-item"><FaCode/> &nbsp;Skills </Link>
          <Link to={`/Dashboard-Recruiter/vacancy`} className="dashboard-nav-item"><FaSuitcase/> &nbsp;Vacantes</Link>
          <Link to={`/Dashboard-Recruiter/match`} className="dashboard-nav-item"><FaCheckDouble/> &nbsp;Match </Link>
          <button type='button' onClick={logout} className="button-logout bg-black" style={{
                  border: "none",
                  background: "none",
                  color: "inherit",
                  padding: 0,
                  font: "inherit",
                  cursor: "pointer",
                  outline: "inherit",
                }}><FaSignOutAlt className='bg-black'/> &nbsp;Logout </button>
        </nav>
    </div>
    </>
  )
}

export default SidebarRecruiter

// https://codepen.io/corbpie/pen/LYNwGdE