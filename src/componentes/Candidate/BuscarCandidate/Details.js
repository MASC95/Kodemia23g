import React, { useState, useEffect } from "react";
import { FaAddressBook, FaBook, FaCalendarCheck, FaDollarSign } from "react-icons/fa";
import ViewTableSkills from "../../Recruiter/SoftSkills/ViewTableSkills";
import imgProfile from '../../Recruiter/assets/img/perfil2.jpg'
import './scss/style.scss'
import { useParams } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../EndpointsCandidate/endpoints";
import '../Alerts/Alert'
import AlertComponent from '../Alerts/Alert';
import useJob from '../../../hooks/useJob';

//hacer un renderizado condicional en el botón aplicar
export const Details = () => {
  const [dataVacancy, setDataVacancy] = useState("");
  const [dataEntries, setDataEntries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter,dataLocalStorage,setDataLocalStorage]=useJob();
  const {my_vacancies}=dataCandidate;
  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const response = await axios.get(`${endpoints.candidateVacancyById}${myParams.id}`)
      console.log("hola", response);

      //const entries = Object.entries(response.data);
      const datos = response?.data;
      if(datos) setDataVacancy(datos);
      //setDataEntries(ent);
      console.log('datos:..',datos);

     
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleApply = () => {
    setShowAlert(true);
  };

  const myParams = useParams();
  console.log(myParams.id);
  console.log("componente details");

  return (
    <>
      <div className="row container_form_General">
        <div className="col-4 container_image">
          <img src={dataVacancy?.avatar_url? dataVacancy?.avatar_url: imgProfile} />

          <div className="">
            <p className="text-justify"><b>Nombre de la empresa:</b> {dataVacancy?.companyName}</p>
            <p className="text-justify"><FaAddressBook /> <b>Ciudad:</b> {dataVacancy?.city}</p>
            <p className="text-justify"><FaBook /> <b>Modalidad:</b> {dataVacancy?.mode}</p>
            <p className="text-justify"><FaCalendarCheck /> <b>Tipo:</b> {dataVacancy?.type}</p>
            <p className="text-justify"><FaDollarSign /> <b>Salario:</b> {dataVacancy?.salary}</p>
            
            <button type="submit" className="btn btn-outline-info buscar"  onClick={handleApply} disabled ={my_vacancies?.find(myVac=>myVac._id===myParams.id)===undefined?false:true} >
            {my_vacancies?.find(myVac=>myVac._id===myParams.id)===undefined?'Aplicar':'Aplicando'}
            </button>
            
            {showAlert && <AlertComponent/>}

          </div>
        </div>
        <div className="col">
          <div className="row mb-4">
            <h2 className="text-start">Información General</h2>
            <div className="col">
              <div className="form-outline bg-gray">
                <p className="text-start"><b>Actividades</b></p>
                <p className="text-start">{dataVacancy?.activities}</p>
              </div>
            </div>
          </div>
          <h3>Soft Skills Solicitadas</h3>
          {dataVacancy?.job_skills&&<ViewTableSkills listSkils={dataVacancy?.job_skills} />}
         
        </div>
      </div>
    </>
  )
}

export default Details;
