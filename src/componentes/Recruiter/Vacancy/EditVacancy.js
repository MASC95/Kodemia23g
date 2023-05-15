import React, { useEffect, useState } from "react";
import PatchVancy from "./Forms/PatchVacancy";
import Softskills from "../SoftSkills/SoftSkills";
import { endpointsGral } from "../services/vacancy";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditVacancy=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const id = urlParams.get('v');
    const [editInfo, setEditInfo]=useState([])
    useEffect(()=>{
        const fetch =async()=>{
            try {
                const endpointURL= `${endpointsGral.vacancyURL}/${id}`;
                const queryVacancy= await axios.get(endpointURL);
                setEditInfo(queryVacancy.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()

    },[])
    
    return(
        <>
   
         <div className='card-body'>
            <h1 className="text-start">{editInfo.title}</h1>
             <PatchVancy editDatas={editInfo}/>
             <Softskills/>
         </div>
                       
        </>
    )
}
export default EditVacancy