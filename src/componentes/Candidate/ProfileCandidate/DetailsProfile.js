import React from "react";
import { FaPhone,FaMailBulk } from "react-icons/fa"; 
import ViewTableSkills from "../SoftSkills/ViewTableSkills";
import imgProfile from '../assets/img/profile.png'
import './scss/style.scss'


export const DetailsProfile=()=>{
    return (
        <>
     <div className="row container_form_General">
            <div className="col-4 container_image">
                <img src={imgProfile} alt="img-profile"/>
                <div className="">  
                  <p className="text-justify text-dark">Nombre</p>
                  <p className="text-justify text-dark">Rol</p>
                  <p className="text-justify text-dark"><FaPhone/>Tel</p>
                  <p className="text-justify text-primary"><FaMailBulk/>Correo</p>
                </div>
            </div>
            <div className="col">
                <div className="row mb-4">
                    <h2 className="text-start text-dark">Información General</h2>
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label text-start" for="form6Example1">Nombre</label>
                        <p className="">JIM</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label text-start" for="form6Example1">Apellido</label>
                        <p>Davison</p>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Experiencia</label>
                            <p>Experiencia</p>
                        </div>
                    </div>
                </div>

            <ViewTableSkills/>
                <div className="buttons_actions d-flex justify-content-end gap-3">  
                    <button type="button" className="buttons btn btn-success text-light">Aceptar</button> 
                    <button type="button" className="buttons btn btn-danger text-light">Ignorar</button> 
                </div>
            </div>
        </div>
        </>
    )
}
export default DetailsProfile