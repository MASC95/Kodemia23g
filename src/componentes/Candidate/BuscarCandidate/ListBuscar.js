import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { endpointsGral } from "../../Recruiter/services/vacancy";
import "../Alerts/Alert";
import AlertComponent from "../Alerts/Alert";
import useJob from '../../../hooks/useJob';


export const ListBuscar = () => {
  const [vacancies, setVacancies] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [dataCandidate, setDataCandidate, dataRecruiter, setDataRecruiter, dataLocalStorage, setDataLocalStorage] = useJob();
  const { my_vacancies } = dataCandidate;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpointsGral.vacancyURL);
        const datas = response.data["item"];
        setVacancies(datas["docs"]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showAlert === true) {
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);

    }
  }, [showAlert]);
  useEffect(() => {
    console.log('dataLocalStorage:..', dataLocalStorage);
    console.log('my_vacancies:..', my_vacancies);
    console.log('dataCandidate:..', dataCandidate);
  }, [dataLocalStorage, dataCandidate, my_vacancies])

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
      const responseUpdateDataUser = await axios.patch(`${endpointsGral.userURL}${dataCandidate.accessToken}`, { my_vacancies: dataVacancies });
      //se actualiza el array de applicants en la entidad vacancie
      const responseUpdateDataVacancie = await axios.patch(`${endpointsGral.vacancyURL}${idVacancie}`, { token: dataCandidate.accessToken });

      if (responseUpdateDataUser && responseUpdateDataVacancie) {
        const getDataCandidate = await axios.get(`${endpointsGral.userURL}${dataCandidate.accessToken}`);
        if (getDataCandidate?.data?.user)
        //se actualiza el contexto
          setDataLocalStorage({
            ...getDataCandidate?.data?.user,
            accessToken: dataCandidate.accessToken,
          });
      }
      console.log('Response updateDataUser:..', responseUpdateDataUser);
      console.log('Response updateDataVacancie:..', responseUpdateDataVacancie);
    } catch (error) {
      console.log(error);
    }

    setShowAlert(true);

  };

  const handleStopApplying = async (e) => {
    //console.log('Dejando de aplicar a la vacante:..',e.target.id);
    const idVacancie = e.target.id;
    let dataVacancies = [];
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataCandidate?.accessToken}`;

      if (my_vacancies) {
        dataVacancies = my_vacancies.filter(item=>item._id!==idVacancie);
      } 

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
  };

  return (
    <>
      <div className="container mt-2 p-5 w-100" id="formGral">
        <div className="row softskills">
          <div className="col">
            <table className="table">
              <thead className="thead-dark bg-body-secondary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{ backgroundColor: "#FAFAFB" }}>
                    TITULO
                  </th>
                  <th scope="col">TIPO DE TRABAJO</th>
                  <th scope="col" style={{ backgroundColor: "#FAFAFB" }}>
                    MODALIDAD
                  </th>
                  <th scope="col">SALARIO</th>
                  <th scope="col" style={{ backgroundColor: "#FAFAFB" }}>
                    OPCION
                  </th>
                </tr>
              </thead>
              <tbody>
                {vacancies &&
                  vacancies?.map((item, index) => (
                    <tr key={item._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.mode}</td>
                      <td>{item.salary}</td>
                      <td className="options_buttons d-flex justify-content-center gap-3">
                        {my_vacancies?.find(myVac => myVac._id === item._id) === undefined ? (
                          <button
                            type="submit"
                            id={item._id}
                            className="btn btn-outline-info buscar"
                            onClick={handleApply}
                            disabled={my_vacancies?.find(myVac => myVac._id === item._id) === undefined ? false : true}
                          >
                            {my_vacancies?.find(myVac => myVac._id === item._id) === undefined ? 'Aplicar' : 'Aplicando'}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-outline-danger"
                            id={item._id}
                            onClick={handleStopApplying}
                          >
                            Dejar de aplicar
                          </button>
                        )}
                        <Link
                          to={`/dashboard-candidato/detail-vacancy/${item._id}`}
                        >
                          <button
                            type="submit"
                            className="btn btn-info text-light"
                          >
                            Abrir
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showAlert && <AlertComponent />}
    </>
  );
};

export default ListBuscar;
