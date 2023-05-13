import {React, useEffect, useState} from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import ListVacancy from "./ListVacancy";
import {FaPlus, FaBars} from 'react-icons/fa'
import imgProfile from '../assets/img/profile.png'
import {Link,Outlet,useParams} from 'react-router-dom'
import { endpoints } from "../services/endpoints";
import axios from "axios";


export const Vacancy=()=>{
 
    return(
        <>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className="row">
                               <div className="col">
                                <div className='card-header d-flex gap-5'>
                                    <h1 className="text-start"><b>Vacantes</b></h1>
                                       <div className="d-flex h-100  justify-content-around">
                                        <Link to={`/Dashboard-Recruiter/vacancy-new`}>
                                         <button type="submit" className="text-light buttons btn btn-info btn-lg"> Agregar Nuevo</button>
                                        </Link>
                                       </div> 
                                 </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                                <ListVacancy/>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
       
        </>
    )
}
export default Vacancy