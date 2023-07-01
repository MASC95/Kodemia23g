import React from 'react';
import { FaHome, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import './navbar.scss'
import logo from '../../Recruiter/assets/img/logo.png'
import CustomDropDown from './CustomDropDown/CustomDropDown';
const Navbar = () => {
  return (
    <div className='father-container'>
    <nav className="navbar navbar-expand-lg ">
      <div className="nav-container container-fluid justify-content-between">
        <div className="column-logo col-lg-3">
          <Link className="link-job navbar-brand me-2 mb-1 sd-flex align-items-center" to="/">
            <img src={logo} alt='jobinder-logo'className='jobinder-logo' style={{width: "120px ", height: "45px" }} ></img>
          </Link>
        </div>

        <CustomDropDown/>

        
      </div>
    </nav>
    </div>
  )
}

export default Navbar;
