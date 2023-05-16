import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { endpointsGral } from "../../services/vacancy";

export const PatchVacancy=({editDatas})=>{
    const token = window.localStorage.getItem('token')
    console.log(token) 
    const [editPost, setEditPost]=useState({})    
    const onFormInputChange=(event)=>{
    
        const inputID= event.target.id
        const inputValue=event.target.value
      
        setEditPost({
          ...editPost,
          [inputID]:inputValue
        })
      }
      const onFormSubmit=(event)=>{
        event.preventDefault();
        guardarCallback()
      
      }
      const guardarCallback=async()=>{
        const token = window.localStorage.getItem('token')
        console.log(token)
        // const headers = { 
        //     'Authorization': 'Bearer my-token',
        //     'My-Custom-Header': 'foobar'
        // };
        console.log(editPost)
        // try {
    
        //     const addPost=await axios.patch(`${endpoints.patchPost}/${id}`,editPost);  
        //     setEditPost(addPost)
           
        //     resetForm()
        //     return this.props.history.push('/');
        // } catch (error) {
        //   console.log("Error in Petition");
        // }
      }
      const resetForm = () => {
        setEditPost({
          imageURL: '', // mandatorio
          title: '',// mandatorio
          content: ''
        })
      }

    return(
        <>
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
                               value={editDatas.title}
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
                                value={editDatas.type}
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
                                    value={editDatas.mode}
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
                                value={editDatas.city}
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
                               value={editDatas.salary}
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
                                    value={editDatas.status}
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
                               value={editDatas.activities}
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
        </>
    )

}
export default PatchVacancy