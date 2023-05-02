import React from "react";
import "./dropdownmenu.scss";
import { MdAccountCircle} from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Dropdownmenu = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-lg-3 min-vh-100 " style={{backgroundColor:'#498BA6'}}> 
          <div className="p-2" style={{backgroundColor:'#498BA6'}}>
            <a className="d-flex text-decoration-none mt- align-items-center text-white" href="!#">
              <span className="fs-4 d-none d-sm-inline ">JOBINDER</span>
            </a>

            <ul className="nav nav-pills flex-column mt-4 text-start d-flex">
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white "
                  aria-current="true" 
                  fontSize ='14px'
                >
                  <MdAccountCircle size={24} color="white"/><span className="profile-pic1 fs-4 ms-3 d-none d-sm-inline" >
                  <div className="mx-3">
                  Elizabeth Watson
                  ewatson@yahoo.com
                  </div>
                  </span>
                </a>
              </li>
              {/* insertar línea hr con mx-2 y  my-4 si se requiere separar*/}
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white"
                  aria-current="true"
                  style={{fontSize: '14px' }}
                >
                 <MdAccountCircle size={24} color="white"/> <span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
                   Perfil
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="!#"
                  className="nav-link text-white"
                  style={{fontSize: '14px'}}
                >
                <BsSearch size={24} color="white"/>  <span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
                    Search
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white"
                  aria-current="true"
                  style={{fontSize: '14px'}}
                >
                <FaSuitcase size={24} color="white"  /><span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
                    Mis Vacantes
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#!"
                  className="nav-link text-white"
                  aria-current="true"
                  style={{fontSize: '14px'}}
                >
                <IoLogOutOutline size={24} color="white"  /><span className="profile-pic fs-4 ms-3 d-none d-sm-inline">
                    
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