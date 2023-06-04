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



export const Details = () => {
  const [dataVacancy, setDataVacancy] = useState("");
  const [dataEntries, setDataEntries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const response = await axios.get(`${endpoints.candidateVacancyById}${myParams.id}`)
      console.log("hola", response);

      const entries = Object.entries(response.data);
      setDataEntries(entries);

     
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
          <img src={imgProfile} />

          <div className="">
            <p className="text-justify"><b>Nombre de la empresa:</b> {dataEntries.find(([key, value]) => key === 'companyName')?.[1]}</p>
            <p className="text-justify"><FaAddressBook /> <b>Ciudad:</b> {dataEntries.find(([key, value]) => key === 'city')?.[1]}</p>
            <p className="text-justify"><FaBook /> <b>Modalidad:</b> {dataEntries.find(([key, value]) => key === 'mode')?.[1]}</p>
            <p className="text-justify"><FaCalendarCheck /> <b>Tipo:</b> {dataEntries.find(([key, value]) => key === 'type')?.[1]}</p>
            <p className="text-justify"><FaDollarSign /> <b>Salario:</b> {dataEntries.find(([key, value]) => key === 'salary')?.[1]}</p>
            <button type="submit" className="btn btn-outline-info buscar"  onClick={handleApply}>Aplicar</button>
            {showAlert && <AlertComponent/>}

          </div>
        </div>
        <div className="col">
          <div className="row mb-4">
            <h2 className="text-start">Información General</h2>
            <div className="col">
              <div className="form-outline bg-gray">
                <p className="text-start"><b>Actividades</b></p>
                <p className="text-start">{dataEntries.find(([key, value]) => key === 'activities')?.[1]}</p>
              </div>
            </div>
          </div>
          <h3>Soft Skills Solicitadas</h3>
          <ViewTableSkills />
        </div>
      </div>
    </>
  )
}

export default Details;
