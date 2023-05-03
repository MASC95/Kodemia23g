import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import ListVacancy from "./ListVacancy";
import {FaPlus, FaBars} from 'react-icons/fa'
import imgProfile from '../assets/img/profile.png'
import {Link} from 'react-router-dom'

export const Vacancy=()=>{
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
                                    <h1><b>Vacantes</b></h1>
                                       <div className="d-flex h-100  justify-content-around">
                                        <Link to={`/recruiter-vacancy/addNew`}>
                                         <button type="submit" className="text-light buttons btn btn-info btn-lg"> Agregar Nuevo</button>
                                        </Link>
                                       </div> 
                                 </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                                <ListVacancy/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Vacancy