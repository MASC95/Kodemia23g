import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import PostVacancy from "./Forms/PostVacancy";
import {FaPlus} from 'react-icons/fa'

export const AddVacancy=()=>{
    return(
        <>
        <div className='dashboard'>
            <SidebarRecruiter/>
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a></header>
                <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className="row">
                               <div className="col">
                                <div className='card-header d-flex gap-5'>
                                    <h1>Vacantes</h1>
                                       <div className="d-flex h-100  justify-content-around">
                                         <button type="submit" className="text-light buttons btn btn-info btn-lg"><FaPlus/> Agregar</button>
                                       </div> 
                                      </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                                <PostVacancy/>
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