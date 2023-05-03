import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import PatchVancy from "./Forms/PatchVacancy";
import Softskills from "../SoftSkills/SoftSkills";
import {FaBars} from 'react-icons/fa'
import imgProfile from '../assets/img/profile.png'

export const EditVacancy=()=>{
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
                            <div className="row">
                               <div className="col">
                                <div className='card-header d-flex gap-5'>
                                      </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                               <h1>'Nombre de la vacante'</h1>
                                <PatchVancy/>
                                <Softskills/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default EditVacancy