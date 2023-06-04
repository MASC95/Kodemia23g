import {Link,useNavigate} from 'react-router-dom'
import './style.scss'
import logo from '../../Recruiter/assets/img/logo.png'
import {FaUser,FaSuitcase, FaSearch, FaSignOutAlt, FaHome} from 'react-icons/fa';
import useJob from '../../../hooks/useJob'
export const SidebarCandidate=()=>{
  const navigate =useNavigate()
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, initDataCandidate, initDataRecrutier]= useJob();
  const logout=(e)=>{
   window.localStorage.setItem('accessToken','');
   setDataCandidate(initDataCandidate)
   setDataRecruiter(initDataRecrutier)
   navigate('/')
  }

    return(
        <>
          <div className="dashboard-nav">
        <header>
          <div className="brand-logo">
            <Link to={'index.html'} className="logo_Jobinder">
                <img src={logo} className="logo_Jobinder" alt=""/>
            </Link>
            {/* <a className="logo_Jobinder" href="index.html"> </a> */}
          </div>
        </header>
        <nav className="dashboard-nav-list">
          <Link to={`/dashboard-candidato/home`} className="dashboard-nav-item"><FaHome/> &nbsp;Home</Link>
          <Link to={`/dashboard-candidato/profile`} className="dashboard-nav-item"><FaUser/> &nbsp;Perfil</Link>
          <Link to={`/dashboard-candidato/search`} className="dashboard-nav-item"><FaSearch/> &nbsp;Buscar</Link>
          <Link to={`/dashboard-candidato/app-vacancies`} className="dashboard-nav-item"><FaSuitcase/> &nbsp;Mis vacantes</Link>
          <button type='button' onClick={logout} className="button-logout" ><FaSignOutAlt/> &nbsp;Logout </button>        
          </nav>
        </div>
       </>
    )
}
export default SidebarCandidate