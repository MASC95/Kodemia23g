import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import { FaBars} from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png'


export const Dashboard=()=>{
    return(
        <>
          <div className='dashboard'>
            <SidebarRecruiter/>
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'>
                    <div className="row profile-container">
                        <div className="col">
                            <a href="#!" className="menu-toggle"><FaBars/></a>
                        </div> 
                    <div className="col image-container">
                        <p>Sarah Jhonson</p>
                        <img src={imgProfile}/>
                    </div>
                    </div>
                </header>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className='card-header'>
                                <h1>BIENVENIDO A JOBINDER</h1>
                            </div>
                            <div className='card-body'>
                                <p> Sarah Jhonson </p>
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