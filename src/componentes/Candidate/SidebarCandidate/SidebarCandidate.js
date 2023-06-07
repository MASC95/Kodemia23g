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
          <Link to={`/dashboard-candidato/home`}>
            <div className='mb-3'>
         <FaHome/> &nbsp;Home 
         </div>
          </Link>
          <Link to={`/dashboard-candidato/profile`}>
            <div className='mb-3'>
         <FaUser /> &nbsp;Perfil 
         </div>
          </Link>
          <Link to={`/dashboard-candidato/search`}>
            <div className='mb-3'>
           <FaSearch/> &nbsp;Buscar 
           </div>
          </Link>
          <Link to={`/dashboard-candidato/app-vacancies`}>
            <div className='mb-3'>
          <FaSuitcase/> &nbsp;Mis vacantes 
          </div>
          </Link>
          <div className='mb-3'>
          <button type='submit' onClick={logout} className="button-logout" ><FaSignOutAlt /> &nbsp;Logout </button> </div>
        </nav>
    </div>
        </>
    )
}
export default SidebarCandidate