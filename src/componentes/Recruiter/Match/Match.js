import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import ListMatches from "./ListMatches";
import imgProfile from '../assets/img/profile.png'
import {FaEdit, FaTrash, FaBars} from 'react-icons/fa'

export const Match=()=>{
    return(
        <>
         <div className='card-body'>
          <h1 className="text-start"><b>Match's</b></h1>
            <ListMatches/>
         </div>           
        </>
    )
}
export default Match