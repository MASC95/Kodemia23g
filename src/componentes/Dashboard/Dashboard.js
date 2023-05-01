import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";

export const Dashboard=()=>{
    return(
        <>
          <div className='dashboard'>
            <SidebarRecruiter/>
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a></header>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className='card-header'>
                                <h1>Welcome back Jim</h1>
                            </div>
                            <div className='card-body'>
                                <p>Your account type is: Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Dashboard