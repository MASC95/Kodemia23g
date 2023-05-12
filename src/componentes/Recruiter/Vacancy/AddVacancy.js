import React from "react";
import SidebarRecruiter from "../SidebarRecruiter/SidebarRecruiter";
import PostVacancy from "./Forms/PostVacancy";
import Softskills from "../SoftSkills/SoftSkills";
import {FaBars} from 'react-icons/fa'
import imgProfile from '../assets/img/profile.png'

export const AddVacancy=()=>{
    return(
        <>
          <div className='card-body '>
                            <h1  className="text-start"><b>Agregar Vacante</b></h1>

                                <PostVacancy/>
                                <Softskills/>
                            </div>
        </>
    )
}
export default AddVacancy