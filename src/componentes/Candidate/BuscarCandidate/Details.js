import React from "react";
import { FaAddressBook, FaBook, FaCalendarCheck, FaDollarSign} from "react-icons/fa"; 
import ViewTableSkills from "../../Recruiter/SoftSkills/ViewTableSkills";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import './scss/style.scss'


export const Details=()=>{
    return (
        <>
     <div className="row container_form_General">
            <div className="col-4 container_image">
                <img src={imgProfile}/>
                <div className="">  
                  <p className="text-justify">Nombre de la empresa</p>
                  <p className="text-justify"><FaAddressBook/>Ciudad</p>
                  <p className="text-justify"><FaBook/>Modalidad</p>
                  <p className="text-justify"><FaCalendarCheck/>Tipo</p>
                  <p className="text-justify"><FaDollarSign/>Salario</p>
                  <button type="submit" className="btn btn-outline-info buscar">Aplicar</button>

                </div>
            </div>
            <div className="col">
                <div className="row mb-4">
                    <h2 className="text-start">Información General</h2>
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <p className="text-start"><b>Actividades</b></p>
                        <p className="text-start">Lorem....................</p>
                    </div>
                    </div>
                </div>
                <h3>Soft Skills Solicitadas</h3>
            <ViewTableSkills/>
            </div>
        </div>
        </>
    )
}
export default Details