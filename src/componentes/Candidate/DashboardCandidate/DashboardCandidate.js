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
                <header style={isVisibleSidebar?{}:{width:'100vw', backgroundColor: '#E9EDF4'}} className={isVisibleSidebar?'dashboard-toolbar': 'w-100 navbar border'} >
                    
                    <div className="row profile-container w-100" >
                        <div className={isVisibleSidebar? "toggle col-sm-3 col-md-3 my-3": "col-sm-3 col-md-3 my-3"}  >
                            <button onClick={handleIsVisibleSidebar} className="btn btn-light menu-toggle"><FaBars/></button>
                        </div> 
                   
                    <div className={isVisibleSidebar?"col-sm-6 col-md-7 ": "col-sm-6 col-md-7 blankSpaceCenter"}>

                    </div>
                    <div className={isVisibleSidebar?"col-sm-3 col-md-auto image-container my-3 form-inline d-flex flex-nowrap": "col-sm-3 col-md-auto image-container my-3 form-inline d-flex flex-nowrap" }>
                        <p className="candidate-text text-dark d-flex justify-content-center align-items-center" style={{marginRight: '20px'}}>Candidato</p>
                        <img style={isVisibleSidebar?{}:{width:'50px' , borderRadius:'50%'}} src={imgProfile} alt="profile-pic" className="profile-pic"/>
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