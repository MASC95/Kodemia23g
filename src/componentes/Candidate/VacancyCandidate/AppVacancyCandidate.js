import React from "react";
import {FaBars} from 'react-icons/fa'
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import ListMyAppVacancy from "./ListMyAppVacancy";
export const AppVacancyCandidate=()=>
{
    return(
        <>
                        <div className='card-body'>
                           <h1 className="text-start">Vacantes aplicadas</h1>
                           {/* <ListMyAppVacancy/> */}
                        </div>
            
        </>
    )
}
export default AppVacancyCandidate