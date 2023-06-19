import React from "react";
import {FaBars} from 'react-icons/fa'
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import ListBuscar from "./ListBuscar";
export const Buscar=()=>{
 
    return(
        <>
         <div className='card-body'>
                           <h1 className="text-center my-5 " style={{color:'#498BA6'}}>Vacantes</h1>
                           <ListBuscar/>
                        </div>
        </>
    )
}
export default Buscar