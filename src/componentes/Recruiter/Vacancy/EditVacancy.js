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
                const endpointURL= `${endpointsGral.vacancyURL}${id}`;
                const queryVacancy= await axios.get(endpointURL);
                setEditInfo(queryVacancy.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()

    },[])
    // -------------------------
    const onFormInputChange=(event)=>{
    
        const inputID= event.target.id
        const inputValue=event.target.value
      
        setEditInfo({
          ...editInfo,
          [inputID]:inputValue
        })
      }
      const onFormSubmit=(event)=>{
        event.preventDefault();
        guardarCallback()
      
      }
      const guardarCallback=async()=>{
        console.log(editInfo)
        const token = window.localStorage.getItem('token')
        console.log(token) 
        const headers = { 
            'Authorization':`Baerer ${token}`
        };
        try {
            const addPost=await axios.patch(`${endpointsGral.vacancyURL}${id}`,editInfo,{headers});  
            setEditInfo(addPost)
           console.log('listo')
        } catch (error) {
          console.log("Error in Petition");
        }
      }
    //   const resetForm = () => {
    //     setEditPost({
    //       imageURL: '', // mandatorio
    //       title: '',// mandatorio
    //       content: ''
    //     })
    //   }
    
    return(
        <>
   
         <div className='card-body'>
            <h1 className="text-start">{editInfo.title}</h1>
            <div className="container mt-2 p-5 w-100 " id="formGral">
            <form onSubmit={onFormSubmit}>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label" for="form6Example1">Título</label>
                        <input type="text" 
                               id="title" 
                               name="title"
                               className={`form-control`}
                               value={editInfo.title}
                               onChange={onFormInputChange}
                               placeholder="Título"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Tipo de trabajo</label>
                        <select 
                                className={`form-control`}
                                name="type"
                                id="type"
                                value={editInfo.type}
                                onChange={onFormInputChange}>
                            <option> Selecciona</option>
                            <option> Tiempo Completo</option>
                            <option> Por proyecto</option>
                        </select>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Modalidad</label>
                            <select 
                                    className={`form-control`}
                                    id="mode"
                                    name="mode"
                                    value={editInfo.mode}
                                    onChange={onFormInputChange}>
                                <option> Selecciona</option>
                                <option> Presencial</option>
                                <option> Remoto</option>
                                <option> Hibrído</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Ciudad</label>
                        <input type="text"
                                id="city" 
                                name="city"
                                value={editInfo.city}
                                onChange={onFormInputChange}
                                className={`form-control`}
                                placeholder="Ciudad"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Sueldo</label>
                        <input type="text" 
                               id="salary" 
                               name="salary"
                               value={editInfo.salary}
                                onChange={onFormInputChange}
                                className={`form-control`}
                               placeholder="Sueldo"/>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Status</label>
                        <select 
                                    className={`form-control`}
                                    id="status"
                                    name="status"
                                    value={editInfo.status}
                                    onChange={onFormInputChange}>
                                <option> Selecciona</option>
                                <option> Iniciado</option>
                                <option> Cerrado</option>
                            </select>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Actividades</label>
                        <input type="text" 
                               id="actividades" 
                               name="activities"
                               value={editInfo.activities}
                               onChange={onFormInputChange}
                               className={`form-control`}  
                               placeholder="Actividades"/>
                    </div>
                    </div>
                </div>
                <div className="buttons_actions">  
                    <button type="submit" className="buttons btn btn-info text-light">Guardar</button>               
                </div>
            </form>
        </div>
             {/* <PatchVancy editDatas={editInfo}/> */}
             <Softskills/>
         </div>
                       
        </>
    )
}
export default EditVacancy