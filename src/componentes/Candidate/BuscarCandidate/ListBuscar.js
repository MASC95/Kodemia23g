import React, { useEffect, useState } from "react";
import axios from "axios";

import { endpointsGral } from "../../Recruiter/services/vacancy";
import "../Alerts/Alert";
import AlertComponent from "../Alerts/Alert";
import useJob from "../../../hooks/useJob";
import HorizonTable from "./HorizonTable";
import VerticalTable from "./VerticalTable";

export const ListBuscar = () => {
  const [vacancies, setVacancies] = useState([]);
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
    fetchData();
  }, []);

  const fetchData = async (page, limit) => {
    try {
      const response = await axios.get(
        `${endpointsGral.vacancyURL}?page=1&limit=10`
      );
      const datas = response.data["item"];
      setVacancies(datas["docs"]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (showAlert === true) {
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  }, [showAlert]);
  useEffect(() => {
    console.log("dataLocalStorage:..", dataLocalStorage);
    console.log("my_vacancies:..", my_vacancies);
    console.log("dataCandidate:..", dataCandidate);
  }, [dataLocalStorage, dataCandidate, my_vacancies]);

  const handleApply = async (e) => {
    //alert(e.target.id);
    const idVacancie = e.target.id;
    let dataVacancies = [];
    let dataApplicants = [];
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate?.accessToken}`;

      if (dataCandidate?.my_vacancies) {
        dataVacancies = [...dataCandidate?.my_vacancies, idVacancie];
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

  //dejar de aplicar
  const handleStopApplying = async (e) => {
    //console.log('Dejando de aplicar a la vacante:..',e.target.id);
    const idVacancie = e.target.id;
    let dataVacancies = [];
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate?.accessToken}`;

      if (my_vacancies) {
        dataVacancies = my_vacancies.filter((item) => item._id !== idVacancie);
      }

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
    <>
      {/* <VerticalTable vacancies={vacancies} my_vacancies={my_vacancies} handleApply={handleApply} handleStopApplying={handleStopApplying}/> */}
      {vacancies.length>0&&<HorizonTable
        vacancies={vacancies}
        my_vacancies={my_vacancies}
        handleApply={handleApply}
        handleStopApplying={handleStopApplying}
      />}
      
      {showAlert && <AlertComponent />}
    </>
  );
};

export default ListBuscar;
