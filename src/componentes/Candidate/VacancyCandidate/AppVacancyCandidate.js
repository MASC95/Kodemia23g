import React from "react";
import {FaBars} from 'react-icons/fa'
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import ListMyAppVacancy from "./ListMyAppVacancy";
//import ResponsiveTable from "./ResponsiveTable";
import VerticalListVacancy from './VerticalListVacancy'

//muestra mis vacantes
export const AppVacancyCandidate=()=>
{
    return(
        <>
          <div className='card-body'>
             <h1 className="text-start">Vacantes aplicadas</h1>
             
              <ListMyAppVacancy/> 
              <VerticalListVacancy/>
          </div>
            
        </>
    )
}
export default AppVacancyCandidate

{/* <VerticalTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/>
      <HorizonTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/>
      {showAlert && <AlertComponent />} */}