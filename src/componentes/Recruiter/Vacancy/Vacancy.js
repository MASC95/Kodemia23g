import {React, useEffect, useState} from "react";
// import ListVacancy from "./ListVacancy";
import {Link} from 'react-router-dom'
import axios from "axios";
import './style.scss'
import { myId } from '../../lib/myLib'
import { endpointsGral } from "../services/vacancy";
import {FaEdit, FaTrash} from 'react-icons/fa'
import swal from "sweetalert";
import useJob from '../../../hooks/useJob'

export const Vacancy=()=>{
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()
    const [vacancyAll,setVacancyAll]=useState([])


    const fetch=async()=>{
        const allVacancies=await axios.get(endpointsGral.vacancyURL)
        const datas=allVacancies.data['item']
        setVacancyAll(datas['docs'])
        console.log(datas['docs'])
    }
    useEffect(()=>{
        fetch()
    },[])
    console.log(vacancyAll)

    useEffect(()=>{
        if(vacancyAll.length>0){
            console.log('vaListTem',vacancyAll)
            setVacancyAll([...vacancyAll])
        }
    },[])


  const handleDeleteSkill = (index) => {
    const deleteVacancy=vacancyAll[index]
    console.log(deleteVacancy)
      
          axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer: ${dataRecruiter.accessToken}`;
              
          axios
            .delete(`${endpointsGral.vacancyURL}${deleteVacancy._id}`)
            .then(response => {
              console.log(response);
              const updateList= vacancyAll.filter((_,i)=>i!==index)
              setVacancyAll(updateList)
              swal({
                title: "Vacante eliminada!!",
                icon: "success",
                button: "ok!",
            });
            })
            .catch(error => {
              console.log(error.response);
            });
      };
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
          <div className="row softskills">
                <div className="col">
                <table className="table">
                    <thead className="thead-dark bg-body-secondary">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">TITULO</th>
                        <th scope="col">TIPO DE TRABAJO</th>
                        <th scope="col">MODALIDAD</th>
                        <th scope="col">SALARIO</th>
                        <th scope="col">OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { vacancyAll.map((item, index)=>{
                            const idVacancy=item._id
                                return(
                                    <tr key={myId()}>
                                   <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.type}</td>
                                    <td>{item.mode}</td>
                                    <td>{item.salary}</td>
                                    <td className="options_buttons d-flex justify-content-center gap-3">
                                        <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${idVacancy}`}>
                                            {/* <FaEdit className="icon_edit"/> */}
                                            <button type="button" className="buttons btn btn-outline-success"><FaEdit className="icon_edit"/></button> 
                                        </Link>
                                        <button type="button" className="buttons btn btn-outline-danger">
                                           <FaTrash className="icon_trash" onClick={() => handleDeleteSkill(index)}/>  
                                        </button> 
                                    </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                </div>
            </div>
              {/* <ListVacancy postdata={vacancyAll}/>
              <Outlet/> */}
          </div>
        </>
    )
}
export default Vacancy