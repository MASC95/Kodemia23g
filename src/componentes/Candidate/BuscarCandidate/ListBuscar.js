import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { endpointsGral } from "../../Recruiter/services/vacancy";
import "../Alerts/Alert";
import AlertComponent from "../Alerts/Alert";
export const ListBuscar = () => {
  const [vacancies, setVacancies] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
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

  const handleApply = () => {
    setShowAlert(true);
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
                    OPCIONES
                  </th>
                </tr>
              </thead>
              <tbody>
                {vacancies &&
                  vacancies?.map((item) => (
                    <tr key={item._id}>
                      <th scope="row">{item._id}</th>
                      <td>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.mode}</td>
                      <td>{item.salary}</td>
                      <td className="options_buttons d-flex justify-content-center gap-3">
                        <button
                          type="submit"
                          className="btn btn-outline-info buscar"
                          onClick={handleApply}
                        >
                          Aplicar
                        </button>
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
