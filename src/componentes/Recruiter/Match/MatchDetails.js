import React from "react";
import {FaBars} from 'react-icons/fa'
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import Details from "./Details";
import imgProfile from '../assets/img/profile.png'
import Header from "../Dashboard/Header";
export const MatchDetails=()=>{
    return(
        <>
         <div className='dashboard'>
            <SidebarRecruiter/>
            <div className='dashboard-app'>
                <Header/>
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
                                <h1 className="text-start">Match's 'Nombre de la vacante'</h1>
                                <Details/>
                            </div>
                            <div className="d-flex w-100 justify-content-end p-4">
                              <button type="button" class="btn btn-info text-light">Panel de Reclutamiento</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default MatchDetails