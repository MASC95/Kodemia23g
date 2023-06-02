import React from "react";
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import DetailsProfile from "./DetailsProfile";
import imgProfile from '../assets/img/profile.png'
export const Candidate=()=>{
    return(
        <>
        <div className='card-body'>
        <h1  className="text-start">Perfil Profesional</h1>
           <DetailsProfile/>
        </div>
                       
        </>
    )
}

export default Candidate