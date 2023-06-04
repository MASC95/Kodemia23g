import React from "react";
import './scss/style.scss'
import {Link} from 'react-router-dom'
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState,useEffect } from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
// import Softskills from "./Form/SoftSkills";
export const TableSkills=()=>{
    const [getSoftSkills,setSoftSkills]=useState([])
    // const [isLoading, setIsLoading]=useState(true)
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const id = urlParams.get('v');
    useEffect(()=>{
        const fetch=async()=>{
            const allSoftSkills=await axios.get(`${endpointsGral.vacancyURL}${id}`, getSoftSkills)
            const datas=allSoftSkills.data['job_skills']
            setSoftSkills(datas)
            // console.log(datas)
        }
        fetch()
    },[id])
// console.log(getSoftSkills)
    return(
        <>
          <div className="col">
                <h2>Lista de skills agregadas</h2>
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Skill</th>
                    <th scope="col">Nivel</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {getSoftSkills.map((skill)=>{
                        console.log(skill._id)
                        return (
                            <tr>
                            <th scope="row">1</th>
                            <td>{skill.name}</td>
                            <td>{skill.level}</td>
                            <td className="options_buttons d-flex justify-content-center gap-3">
                                <Link to={`/recruiter-vacancy/edit/id`}>
                                   <FaEdit className="icon_edit"/>
                                </Link>
                                <a href="!#"><FaTrash className="icon_trash"/></a>
                            </td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </table>
            </div>
        </>
    )
}

export default TableSkills