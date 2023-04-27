
import React from "react";
import "./dropdownmenu.scss";
import { MdAccountCircle, MdPadding } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Dropdownmenu = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-3 col-lg-3 min-vh-100 ">
          <div className="bg-dark p-2">
            <a className="d-flex text-decoration-none mt- align-items-center text-white" href="!#">
              <span className="fs-4 d-none d-sm-inline ">JOBINDER</span>
            </a>

            <ul className="nav nav-pills flex-column mt-4 text-start">
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white "
                  aria-current="true" 
                >
                  <MdAccountCircle size={50} color="white"/><span className="profile-pic1 fs-4 ms-3 d-none d-sm-inline" >
                  
                  Elizabeth Watson
                  ewatson@yahoo.com
                  
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white"
                  aria-current="true"
                  style={{fontSize: '24px' }}
                >
                 <MdAccountCircle size={50} color="white"/> <span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
                   Perfil
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="!#"
                  className="nav-link text-white"
                  style={{fontSize: '24px'}}
                >
                <BsSearch size={50} color="white"/>  <span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
                    Search
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white"
                  aria-current="true"
                  style={{fontSize: '24px'}}
                >
                  <span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    <FaSuitcase size={50} color="white" />
                    Mis Vacantes
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white"
                  aria-current="true"
                  style={{fontSize: '24px'}}
                >
                <IoLogOutOutline size={50} color="white"  /><span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdownmenu;
