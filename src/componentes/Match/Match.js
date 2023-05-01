import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import ListMatches from "./ListMatches";
import {FaEdit, FaTrash} from 'react-icons/fa'

export const Match=()=>{
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
                                    <h1>Match's</h1>
                                      </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                                <ListMatches/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    
        </>
    )
}
export default Match