import React, { useState } from "react";
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import { FaBars } from "react-icons/fa";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import { Outlet } from "react-router-dom";

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
                    
                    <div className="row profile-container d-flex w-100">
                        <div className={isVisibleSidebar? "col-sm-3 col-md-3 my-3": "col-sm-3 col-md-3 my-3"} style={{backgroundColor: 'blue'}}>
                            <button onClick={handleIsVisibleSidebar} className="btn btn-light menu-toggle"><FaBars/></button>
                        </div> 
                   
                    <div className={isVisibleSidebar?"col-sm-6 col-md-7 blankSpaceCenter": "col-sm-6 col-md-7 blankSpaceCenter"} style={{backgroundColor: 'red'}}>

                    </div>
                    <div className={isVisibleSidebar?"col-sm-3 col-md-auto image-container my-3 form-inline d-flex flex-nowrap": "col-sm-3 col-md-auto image-container my-3 form-inline d-flex flex-nowrap "} >
                        <p className="text-dark">Candidato</p>
                        <img style={isVisibleSidebar?{}:{width:'50px'}} src={imgProfile} alt="profile-pic"/>
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