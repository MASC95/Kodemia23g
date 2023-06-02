import {React, useEffect, useState } from "react";
import {FaEdit, FaTrash} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import './style.scss'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import swal from "sweetalert";

export const ListVacancy=({postdata})=>{
    const navigate=useNavigate()
    
    const [deleteVacancy,setDeleteVacancy]=useState([])

        return(
            <>
            <div className="container mt-2 p-5 w-100 " id="formGral">
            <div className="row softskills">
                <div className="col">
                <table className="table">
                    <thead className="thead-dark bg-body-secondary">
                        <tr>
                        <th scope="col">TITULO</th>
                        <th scope="col">TIPO DE TRABAJO</th>
                        <th scope="col">MODALIDAD</th>
                        <th scope="col">SALARIO</th>
                        <th scope="col">OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { postdata.map((item)=>{
                            const idVacancy=item._id
                            const onClickDelete=(event)=>{
                                event.preventDefault()
                                try {
                                    const fetchData=async()=>{
                                        const token = window.localStorage.getItem('token')
                                        console.log(token) 
                                        const headers = { 
                                            'Authorization':`Baerer ${token}`
                                        };
                                        const deleteVacancy=await axios.delete(`${endpointsGral.vacancyURL}${idVacancy}`,{headers});  
                                        setDeleteVacancy(deleteVacancy)
                                        swal({
                                            title: "Vacante Eliminada!",
                                            icon: "success",
                                            button: "ok!",
                                          });
                                            // navigate(`/Dashboard-Recruiter/vacancy`)

                                    }
                                    fetchData()
                                } catch (error) {
                                    swal({
                                        title: "Error al eliminar vacante!",
                                        icon: "error",
                                        button: "ok!",
                                      });
                                }
                                
                            }       
                                return(
                                    <tr>
                                    <td>{item.title}</td>
                                    <td>{item.type}</td>
                                    <td>{item.mode}</td>
                                    <td>{item.salary}</td>
                                    <td className="options_buttons d-flex justify-content-center gap-3">
                                        <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${idVacancy}`}>
                                            <a href="#!"><FaEdit className="icon_edit"/></a>
                                        </Link>
                                        <button
                                        id='delete'
                                        type="submit"
                                        onClick={onClickDelete}><FaTrash 
                                        className="icon_trash"
                                        /></button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                </div>
            </div>
          
            </div>
            </>
        )
    // })
}
export default ListVacancy