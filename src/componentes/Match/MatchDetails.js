import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import Details from "./Details";
export const MatchDetails=()=>{
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
                                    <h1>Match's 'Nombre de la vacante'</h1>
                                      </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                                <Details/>
                            </div>
                            <div className="d-flex w-100 justify-content-end p-4">
                              <button type="button" class="btn btn-info">Panel de Reclutamiento</button>
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