import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import ListMatches from "./ListMatches";
import imgProfile from '../assets/img/profile.png'
import {FaEdit, FaTrash, FaBars} from 'react-icons/fa'

export const Match=()=>{
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
                                <div className='card-header d-flex gap-5'>                                      </div>
                                </div> 
                            </div>
                            <div className='card-body'>
                            <h1 className="text-start"><b>Match's</b></h1>
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