import {React, useEffect, useState} from "react";
import ListVacancy from "./ListVacancy";
import {Link,Outlet,useParams} from 'react-router-dom'
import axios from "axios";
import './style.scss'
import { endpointsGral } from "../services/vacancy";

export const Vacancy=()=>{
    const [vacancyAll,setVacancyAll]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        const fetch=async()=>{
            const allVacancies=await axios.get(endpointsGral.vacancyURL)
            const datas=allVacancies.data['item']
            setVacancyAll(datas['docs'])
            console.log(datas['docs'])
        }
        fetch()
    },[])
 console.log(vacancyAll)
    return(
        <>        
          <div className='card-header d-flex gap-3'>
              <h1 className="text-start"><b>Vacantes</b></h1>
                 <div className="d-flex h-100  justify-content-around">
                   <Link to={`/Dashboard-Recruiter/vacancy-new`} className="text-light buttons btn btn-info btn-lg">
                     Agregar Nuevo
                      </Link>
                  </div> 
          </div>
          <div className='card-body'>
              <ListVacancy postdata={vacancyAll}/>
              <Outlet/>
          </div>
        </>
    )
}
export default Vacancy