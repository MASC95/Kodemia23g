import {React, useEffect, useState} from "react";
import { FaPhone,FaMailBulk } from "react-icons/fa"; 
// import ViewTableSkills from "../SoftSkills/ViewTableSkills";
import imgProfile from '../assets/img/profile.png'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import useJob from '../../../hooks/useJob'
export const Candidate=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const idCandidate = urlParams.get('c');
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter,dataLocalStorage,setDataLocalStorage]=useJob();


    const [infoCandidate,setInfoCandidate]=useState({})
    const queryByCandidate= async()=>{
        try {
            axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer: ${dataCandidate?.accessToken}`;
            const URL=`${endpointsGral.userURL}${dataCandidate.accessToken}`;
            const response= await axios.get(URL)
            setInfoCandidate(response)
        } catch (error) {
            console.log(error)
        }
    }

    useState(()=>{
        queryByCandidate()
    },[])

    console.log(infoCandidate)

    return(
        <>
        <div className='card-body'>
        <h1  className="text-start">Perfil Profesional</h1>
        <div className="row container_form_General">
            <div className="col-4 container_image">
                <img src={imgProfile} alt=""/>
                <div className="">  
                  <p className="text-justify">Nombre</p>
                  <p className="text-justify">Rol</p>
                  <p className="text-justify"><FaPhone/>Tel</p>
                  <p className="text-justify"><FaMailBulk/>Correo</p>
                </div>
            </div>
            <div className="col">
                <div className="row mb-4">
                    <h2 className="text-start">Información General</h2>
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label text-start" for="form6Example1">Nombre</label>
                        <p>JIM</p>
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
                <h3>Lista de skills agregadas</h3>
            {/* <ViewTableSkills/> */}
                <div className="buttons_actions d-flex justify-content-end gap-3">  
                    <button type="button" className="buttons btn btn-success text-light">Aceptar</button> 
                    <button type="button" className="buttons btn btn-danger text-light">Ignorar</button> 
                </div>
            </div>
        </div>
        </div>            
        </>
    )
}

export default Candidate