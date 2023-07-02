import {React, useEffect, useState} from "react";

import {Link} from 'react-router-dom'
import axios from "axios";
import './style.scss'
import { myId } from '../../lib/myLib'
import { endpointsGral } from "../services/vacancy";

import useJob from '../../../hooks/useJob'
import Swal from "sweetalert2";
import ListVacancies from "./ListVacancies";

export const Vacancy=()=>{
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()
  const [vacancyAll,setVacancyAll]=useState([])
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


    const fetch=async (page,perPage) =>{
      setLoading(true)
        /* const allVacancies=await axios.get(`http://localhost:4000/api/v1/jobVacancy?page=${page}&per_page=${perPage}&delay=1`)
        const datas=allVacancies.data
        setVacancyAll(datas)
        console.log('PAGINATION',datas.length)
        setTotalRows(datas.length)
        setLoading(false) */
         const allVacancies=await axios.get(`${endpointsGral.vacancyURL}?page=${page}&limit=${perPage}`)
         const datas=allVacancies.data['item']
         console.log('backend Response:..',datas);
         setVacancyAll(datas['docs'])
         console.log('PAGINATION',datas["totalDocs"])
         setTotalRows(datas["totalDocs"])
         setLoading(false)
    }
    useEffect(()=>{
        fetch(1,10)
    },[])
    console.log(vacancyAll)
    console.log(totalRows)

    useEffect(()=>{
        if(vacancyAll.length>0){
            console.log('vaListTem',vacancyAll)
            setVacancyAll([...vacancyAll])
        }
    },[])

    // pagination
    const handlePageChange = page => {
      fetch(page,perPage);
      setCurrentPage(page)
    };

    const handlePerRowsChange = async (newPerPage, page) => {
      fetch(page,newPerPage)
      setPerPage(newPerPage)
    };
    // pagination
  const handleDeleteSkill = (index) => {
    Swal.fire({
        title: 'Eliminar Vacante?',
        text: "Estas seguro de eliminar esta vacante?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(index)
              const deleteVacancy=vacancyAll[index]
              const id=deleteVacancy?._id
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer: ${dataRecruiter.accessToken}`;
                        
                axios.delete(`${endpointsGral.vacancyURL}${id}`)
                    .then(response => {
                        console.log(response);
                        const updateList= vacancyAll.filter((_,i)=>i!==index)
                        setVacancyAll(updateList)
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
          Swal.fire(
            'Eliminado!',
            'Vacante eliminada correctamente.',
            'success'
          )
        }
      })
  
      };
// ----------------------------------- table
  

    return(
        <>     
          <div className='row container_form_ForVacancy m-3'>
            <div className="content-principal">
              <h1 className="text-start">Vacantes</h1>
              <div className="">
                   <Link to={`/Dashboard-Recruiter/vacancy-new`} className="text-light buttons btn btn-info btn-lg text-decoration-none d-sm-block btn-sm h-100">
                     Crear vacante
                      </Link>
              </div>
            </div> 
          {/* </div> */}
          {/* <div className='card-body'> */}
          <div className="row softskills">
                <div className="col">
                <ListVacancies 
                vacancyAll={vacancyAll} 
                handleDeleteSkill={handleDeleteSkill}
                handlePageChange={handlePageChange}
                handlePerRowsChange={handlePerRowsChange}
                totalRows={totalRows}
                loading={loading}
                currentPage={currentPage}
                />
                </div>
            </div>
              {/* <ListVacancy postdata={vacancyAll}/>
              <Outlet/> */}
          </div>
        </>
    )
}
export default Vacancy