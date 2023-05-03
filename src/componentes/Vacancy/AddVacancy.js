import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import PostVacancy from "./Forms/PostVacancy";
import Softskills from "../SoftSkills/SoftSkills";
import {FaBars} from 'react-icons/fa'
import imgProfile from '../assets/img/profile.png'

export const AddVacancy=()=>{
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
                                <div className='card-header'>
                                       {/* <div className="d-flex h-100  justify-content-around">
                                         <button type="submit" className="text-light buttons btn btn-info btn-lg"><FaPlus/> Agregar</button>
                                       </div>  */}
                                      </div>
                                </div> 
                            </div>
                            <div className='card-body '>
                            <h1  className="text-start"><b>Agregar Vacante</b></h1>

                                <PostVacancy/>
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
export default AddVacancy