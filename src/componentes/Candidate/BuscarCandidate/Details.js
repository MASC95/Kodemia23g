import React, { useState, useEffect } from "react";
import {
  FaAddressBook,
  FaBook,
  FaCalendarCheck,
  FaDollarSign,
  FaHandsHelping,
} from "react-icons/fa";
import ViewTableSkills from "../../Recruiter/SoftSkills/ViewTableSkills";
import imgProfile from "../../Recruiter/assets/img/perfil2.jpg";
import "./scss/style.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../EndpointsCandidate/endpoints";
import "../Alerts/Alert";
import AlertComponent from "../Alerts/Alert";
import useJob from "../../../hooks/useJob";
import { endpointsGral } from "../../Recruiter/services/vacancy";
import { FaUserCircle } from "react-icons/fa";
import "./scss/details.scss";

export const Details = () => {
  const [dataVacancy, setDataVacancy] = useState("");
  const [dataEntries, setDataEntries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const { my_vacancies } = dataCandidate;
  useEffect(() => {
    cargarDatos();
  }, []);

  const myParams = useParams();
  console.log(myParams.id);
  console.log("componente details");
  const cargarDatos = async () => {
    try {
      const response = await axios.get(
        `${endpoints.candidateVacancyById}${myParams.id}`
      );
      console.log("hola", response);

      //const entries = Object.entries(response.data);
      const datos = response?.data;
      if (datos) setDataVacancy(datos.infoVacancy);
      //setDataEntries(ent);
      console.log("datos (dataVacancie):..", datos);
    } catch (error) {
      console.log(error);
    }
  };
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

  const handleStopApplying = async () => {
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
      console.log(
        "Comenzando a dejar de aplicar en la vacante:..",
        my_vacancies,
        dataVacancies
      );
      //se actualiza el array de my_vacancies en la entidad user
      const responseUpdateDataUser = await axios.patch(
        `${endpointsGral.userURL}${dataCandidate.accessToken}`,
        { my_vacancies: dataVacancies }
      );

      //se actualiza el array de applicants en la entidad vacancie
      const responseUpdateDataVacancie = await axios.patch(
        `${endpointsGral.vacancyURL}${idVacancie}`,
        { token: dataCandidate.accessToken, deleteApplicant: true }
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center first-column">
        {dataVacancy && dataVacancy.avatar_url ? (
          <img
            src={dataVacancy.avatar_url}
            style={{ width: "30vw" }}
            alt="profile-pic"
            className=" my-5 rounded avatar-url"
          />
        ) : (
          <FaUserCircle style={{ width: "30vw" }} className=" my-5" />
        )}

        <div className="text-container">
          <p className=" text-info-general">
            <b>Nombre de la empresa:</b> {dataVacancy?.companyName}
          </p>
          <p className=" text-info-general">
            <FaAddressBook className="icons-form-general" /> <b>Ciudad:</b>{" "}
            {dataVacancy?.city}
          </p>
          <p className=" text-info-general">
            <FaBook className="icons-form-general" /> <b>Modalidad:</b>{" "}
            {dataVacancy?.mode}
          </p>
          <p className=" text-info-general">
            <FaCalendarCheck className="icons-form-general" /> <b>Tipo:</b>{" "}
            {dataVacancy?.type}
          </p>
          <p className=" text-info-general">
            <FaDollarSign className="icons-form-general" /> <b>Salario:</b>{" "}
            {dataVacancy?.salary}
          </p>
          {my_vacancies &&
          my_vacancies?.find((myVac) => myVac._id === myParams.id) ===
            undefined ? (
            <button
              type="button"
              className="btn btn-outline-info buscar "
              onClick={handleApply}
              disabled={
                my_vacancies?.find((myVac) => myVac._id === myParams.id) ===
                undefined
                  ? false
                  : true
              }
            >
              {my_vacancies &&
              my_vacancies?.find((myVac) => myVac._id === myParams.id) ===
                undefined
                ? "Aplicar"
                : "Aplicando"}
            </button>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-outline-danger"
                id={myParams.id}
                onClick={handleStopApplying}
                style={{ marginLeft: "50px" }}
              >
                Dejar de aplicar
              </button>
            </>
          )}

          {showAlert && <AlertComponent />}
        </div>
      </div>

      <div className="col-sm-12 col-md-8 col-lg-8 px-3 second-column">
        <div className="row mb-4 fila-actividades-grl">
          <h2 className="texto-inf-grl">Información General</h2>
          <div className="col columna-2-actividades-grl">
            <div className="form-outline  container-actividades-grl">
              <p className="actividad">Actividades</p>
              <p className=" actividades-text-dinamico">
                {dataVacancy?.activities}
              </p>
            </div>
          </div>
        </div>
        <h3 className="softskills-solicitadas">
          {" "}
          <FaHandsHelping className="dev" />
          Soft Skills Solicitadas
        </h3>
        {dataVacancy?.job_skills && (
          <ViewTableSkills listSkils={dataVacancy?.job_skills} />
        )}
      </div>
    </div>
  );
};

export default Details;
