import React, { useState } from "react";
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import { FaBars } from "react-icons/fa";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import { Link, Outlet } from "react-router-dom";

export const DashboardCandidate=()=>{
    const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);
    const handleIsVisibleSidebar = ()=>{
        setIsVisibleSidebar(prev=>!prev);
    }
    return(
        <>
         <div style={isVisibleSidebar?{}:{width:'100vw'}} className={isVisibleSidebar?'dashboard':''}>
            {isVisibleSidebar&& <SidebarCandidate/>}
            <div style={isVisibleSidebar?{}:{width:'100vw'}} className={isVisibleSidebar?'dashboard-app':''}>
                <header style={isVisibleSidebar?{}:{width:'100vw'}} className={isVisibleSidebar?'dashboard-toolbar': 'w-100 navbar border'}>
                    <div className="row profile-container">
                        <div className="col">
                            <button onClick={handleIsVisibleSidebar} className="btn btn-light menu-toggle"><FaBars/></button>
                        </div> 
                    <div className="col image-container">
                        <p>Candidato</p>
                        <img style={isVisibleSidebar?{}:{width:'50px'}} src={imgProfile}/>
                    </div>
                    </div>
                </header>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
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