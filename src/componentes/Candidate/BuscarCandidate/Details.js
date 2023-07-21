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
import Table from "react-bootstrap/Table";
import { myId } from "../../lib/myLib";


export const Details = () => {
  const style={
    color: "#498BA6",
    fontFamily:
      "Poppins, sans-serif, Verdana, Geneva, Tahoma",
  }

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
  //console.log(myParams.id);
  //console.log("componente details");
  const cargarDatos = async () => {
    try {
      const response = await axios.get(
        `${endpoints.candidateVacancyById}${myParams.id}`
      );
      //console.log("hola", response);

      //const entries = Object.entries(response.data);
      const datos = response?.data;
      if (datos) setDataVacancy(datos.infoVacancy);
      //setDataEntries(ent);
      //console.log("datos (dataVacancie):..", datos);
    } catch (error) {
      //console.log(error);
    }
  };
  /* const handleApply = () => {
    setShowAlert(true);
  }; */
  //console.log('datos de la vacante', dataVacancy)

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
      //console.log("Response updateDataUser:..", responseUpdateDataUser);
      //console.log("Response updateDataVacancie:..", responseUpdateDataVacancie);
    } catch (error) {
      //console.log(error);
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
      //console.log(
      //   "Comenzando a dejar de aplicar en la vacante:..",
      //   my_vacancies,
      //   dataVacancies
      // );
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
      //console.log(error);
    }
  };
  //console.log('datasSkilssss', dataVacancy.job_skills)

  return (
    <>
      <div className="">
        <h3
          className="text-start ms-2 mt-3"
          style={{
            color: "#498BA6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          ${dataVacancy.companyName} solicita {dataVacancy.title}:
        </h3>

        {dataVacancy?.companyName && (
          <div
            className="row"
            style={{
              color: "#106973",
              fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
            }}
          >
            <div className="col-12 col-md-4">
              <img
                style={{ width: "20vw", height: "auto" }}
                src={dataVacancy?.avatar_url ? dataVacancy?.avatar_url : ""}
                alt="avatarImg"
                className="d-block ms-auto me-auto my-2 rounded"
              />
              <div className="row">
                <p className="text-center text-dark">Empresa: {`${dataVacancy?.companyName}`}</p>
                <p className="text-center text-dark">Ciudad: {dataVacancy?.city}
                </p>
              </div>
              <div className="buttons_actions d-flex justify-content-center gap-3">
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
            <div className="col-12 col-md-8 px-5">
              <div className="row mb-4">
                {/* <h2 className="text-start text-dark">Información General</h2> */}
                <div className="col">
                  <div className="form-outline bg-gray">
                    <label
                      className="form-label text-start"
                      for="form6Example1"
                      style={style}
                    >
                     Modalidad
                    </label>
                    <p className="text-dark">{`${dataVacancy?.mode}`}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-start"
                      for="form6Example1"
                      style={style}
                    >
                      Tipo de trabajo
                    </label>
                    <p className="text-dark">{dataVacancy?.type}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label
                      className="form-label text-start"
                      for="form6Example1"
                      style={style}
                    >
                     Salario
                    </label>
                    <p className="text-dark">$ {dataVacancy?.salary}.00</p>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label text-dark" for="form6Example1" style={{fontSize:'22px'}}>
                      Lo que haras con nosotros será:
                    </label>
                    {/* <p className="text-dark">
                      {infoCandidate.working_experience}
                    </p> */}
                    <Table striped bordered hover>
                      <thead>
                        <tr style={{borderRadius:'200px'}}>
                          <th style={{backgroundColor:'#7FADC0', color:'white', fontSize:"12px"}}>DESCRIPCIÓN</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataVacancy?.activities?.map((item, index) => {
                          return (
                            <tr key={myId()}>
                              <td>{item.task}</td>
                              {/* <td>{item.description}</td> */}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              {/* <h3 className="text-dark">Lista de skills agregadas</h3> */}
              <div className="col">
               <label className="form-label text-dark" for="form6Example1" style={{fontSize:'22px'}}>
                      Lista de skills solicitadas
               </label>
              <Table striped bordered hover>
                      <thead>
                        <tr style={{borderRadius:'200px'}}>
                          <th style={{backgroundColor:'#7FADC0', color:'white', fontSize:"12px"}}>SKILL</th>
                          <th style={{backgroundColor:'#7FADC0', color:'white', fontSize:"12px"}}>NIVEL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataVacancy?.job_skills?.map((item, index) => {
                          return (
                            <tr key={myId()}>
                              <td>{item.name}</td>
                              <td>{item.level}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
