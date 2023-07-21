import React from "react";
import './scss/style.scss'
import {Link} from 'react-router-dom'
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState,useEffect } from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";


export const TableSkills=()=>{
    const [getSoftSkills,setSoftSkills]=useState([])
    const [dataSkils, setDataSkils] = useState([]);

    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const id = urlParams.get('v');

    useEffect(()=>{
        fetch()
    },[])

    useEffect(()=>{
        if(getSoftSkills.length>0){
            // //console.log('intentando cargar datos', getSoftSkills)
            cargarDatos()
        }
    },[getSoftSkills])

    const fetch=async()=>{
        const allSoftSkills=await axios.get(`${endpointsGral.vacancyURL}${id}`)
        const datas=allSoftSkills.data['job_skills']
        setSoftSkills(datas)
        // console.log('job' ,datas)
    }

    const cargarDatos = async()=>{
        // console.log('intentando cargar datos',getSoftSkills)
        try {
            if(getSoftSkills.length>0){
                const tempArray =[];
            for(let i =0; i<getSoftSkills?.length; i++){
                const response = await axios.get(`${endpointsGral.jobSkill}/${getSoftSkills[i]}`);
                const datasBySkill=response.data
                //console.log('response', datasBySkill)
                if (response?.data){
                    //console.log('responseDataJobSkill:..',response.data);
                    const {_id,name,level}= response.data;
                   tempArray.push({
                    _id,
                    name,
                    level
                   })
                }
            }
            setDataSkils(
                [...tempArray]
            )
        }  
        } catch (error) {
            //console.log(error);
        }
    }
    return(
        <>
          <div className="col">
                <h2 >Lista de skills agregadas</h2>
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
                    {dataSkils.map((skill,i)=>{
                        //console.log(skill._id)
                        return (
                            <tr>
                            <th scope="row">{i+1}</th>
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