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
import { endpointsGral } from "../../Recruiter/services/vacancy";
//hacer un renderizado condicional en el botón aplicarñ
export const Details = () => {
  const [dataVacancy, setDataVacancy] = useState("");
  const [dataEntries, setDataEntries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter,dataLocalStorage,setDataLocalStorage]=useJob();
  const {my_vacancies}=dataCandidate;
  useEffect(() => {
    cargarDatos();
  }, []);

  const myParams = useParams();
  console.log(myParams.id);
  console.log("componente details");
  const cargarDatos = async () => {
    try {
      const response = await axios.get(`${endpoints.candidateVacancyById}${myParams.id}`)
      console.log("hola", response);

      //const entries = Object.entries(response.data);
      const datos = response?.data;
      if(datos) setDataVacancy(datos.infoVacancy);
      //setDataEntries(ent);
      console.log('datos (dataVacancie):..',datos);

     
    }
    catch (error) {
      console.log(error);
    }
  }
  /* const handleApply = () => {
    setShowAlert(true);
  }; */
  
  const handleApply = async (e) => {
    //alert(e.target.id);
    const idVacancie = myParams.id;
    let dataVacancies = [];
    let dataApplicants = [];
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate?.accessToken}`;

      if (my_vacancies) {
        dataVacancies = [...my_vacancies, idVacancie];
      } else {
        dataVacancies.push(idVacancie);
      }

      //se actualiza el array de my_vacancies en la entidad user
      const responseUpdateDataUser = await axios.patch(
        `${endpointsGral.userURL}${dataCandidate.accessToken}`,
        { my_vacancies: dataVacancies }
      );
      //se actualiza el array de applicants en la entidad vacancie
      const responseUpdateDataVacancie = await axios.patch(
        `${endpointsGral.vacancyURL}${idVacancie}`,
        { token: dataCandidate.accessToken }
      );

      if (responseUpdateDataUser && responseUpdateDataVacancie) {
        const getDataCandidate = await axios.get(
          `${endpointsGral.userURL}${dataCandidate.accessToken}`
        );
        if (getDataCandidate?.data?.user)
          //se actualiza el contexto
          setDataLocalStorage({
            ...getDataCandidate?.data?.user,
            accessToken: dataCandidate.accessToken,
          });
      }
      console.log("Response updateDataUser:..", responseUpdateDataUser);
      console.log("Response updateDataVacancie:..", responseUpdateDataVacancie);
    } catch (error) {
      console.log(error);
    }

    setShowAlert(true);
  };



  const handleStopApplying = async ()=> {
    const idVacancie = myParams.id;
    
    let dataVacancies = [];
    //let dataApplicants=[]; 
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate?.accessToken}`;

      if (my_vacancies) {
        dataVacancies = my_vacancies.filter((item) => item._id !== idVacancie);
      } 
      console.log('Comenzando a dejar de aplicar en la vacante:..',my_vacancies,dataVacancies);
      //se actualiza el array de my_vacancies en la entidad user
      const responseUpdateDataUser = await axios.patch(`${endpointsGral.userURL}${dataCandidate.accessToken}`, { my_vacancies: dataVacancies });
      
      //se actualiza el array de applicants en la entidad vacancie
      const responseUpdateDataVacancie = await axios.patch(`${endpointsGral.vacancyURL}${idVacancie}`, { token: dataCandidate.accessToken, deleteApplicant:true });

      if (responseUpdateDataUser && responseUpdateDataVacancie) {
        const getDataCandidate = await axios.get(`${endpointsGral.userURL}${dataCandidate.accessToken}`);
        if (getDataCandidate?.data?.user)
        //se actualiza el contexto
          setDataLocalStorage({
            ...getDataCandidate?.data?.user,
            accessToken: dataCandidate.accessToken,
          });
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="row container_form_General text-dark">
        <div className="col-4 container_image">
          <img src={dataVacancy?.avatar_url? dataVacancy?.avatar_url: imgProfile} />

          <div className="text-dark">
            <p className="text-justify"><b>Nombre de la empresa:</b> {dataVacancy?.companyName}</p>
            <p className="text-justify text-black"><FaAddressBook /> <b>Ciudad:</b> {dataVacancy?.city}</p>
            <p className="text-justify"><FaBook /> <b>Modalidad:</b> {dataVacancy?.mode}</p>
            <p className="text-justify"><FaCalendarCheck /> <b>Tipo:</b> {dataVacancy?.type}</p>
            <p className="text-justify"><FaDollarSign /> <b>Salario:</b> {dataVacancy?.salary}</p>
            {my_vacancies && my_vacancies?.find(myVac=>myVac._id===myParams.id)===undefined? (
            <button type="button" className="btn btn-outline-info buscar"  onClick={handleApply} disabled ={my_vacancies?.find(myVac=>myVac._id===myParams.id)===undefined?false:true} >
            {my_vacancies && my_vacancies?.find(myVac=>myVac._id===myParams.id)===undefined?'Aplicar':'Aplicando'}
            </button>
            ):(<>
              <button
              type="button"
              className="btn btn-outline-danger"
              id={myParams.id}
              onClick={handleStopApplying}
            >
              Dejar de aplicar
            </button>
            
            </>
            )}
            
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
