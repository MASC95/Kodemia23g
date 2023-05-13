import React from "react";
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import { FaBars } from "react-icons/fa";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import { Outlet } from "react-router-dom";

export const DashboardCandidate=()=>{
    return(
        <>
         <div className='dashboard'>
            <SidebarCandidate/>
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'>
                    <div className="row profile-container">
                        <div className="col">
                            <a href="#!" className="menu-toggle"><FaBars/></a>
                        </div> 
                    <div className="col image-container">
                        <p>Candidato</p>
                        <img src={imgProfile}/>
                    </div>
                    </div>
                </header>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            {/* <div className='card-header'>
                                <h1>BIENVENIDO A JOBINDER</h1>
                            </div> */}
                            <div className='card-body'>
                                {/* <p> Usuario Candidato </p> */}
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </>
    )
}
export default DashboardCandidate