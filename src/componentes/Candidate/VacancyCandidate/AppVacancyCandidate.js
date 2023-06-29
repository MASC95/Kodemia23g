import React from "react";
import {FaBars} from 'react-icons/fa'
import SidebarCandidate from "../SidebarCandidate/SidebarCandidate";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import ListMyAppVacancy from "./ListMyAppVacancy";
//import ResponsiveTable from "./ResponsiveTable";
import VerticalListVacancy from './VerticalListVacancy'
import Example from "./Example";

//muestra mis vacantes
export const AppVacancyCandidate=()=>

{
 
    return(
        <>
          <div className='card-body'>
             <h1 className="text-center  my-5" style={{color:'#498ba6', textShadow: '0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)', fontFamily: 'Poppins, sans-serif, Verdana, Geneva, Tahoma' }} >Vacantes aplicadas</h1>
             
              <ListMyAppVacancy/> 
              {/* <VerticalListVacancy/> */}
          </div>
            
        </>
    )
}
export default AppVacancyCandidate

/* <VerticalTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/>
      <HorizonTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/>
      {showAlert && <AlertComponent />} */