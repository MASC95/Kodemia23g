import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { endpointsGral } from "../../../Recruiter/services/vacancy"
import '../Alerts/Alert'
import AlertComponent from '../Alerts/Alert';
export const ListBuscar = () => {
  const [vacancies, setVacancies] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpointsGral.vacancyURL);
        setVacancies(response.data);
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
                  <th scope="col">TITULO</th>
                  <th scope="col">TIPO DE TRABAJO</th>
                  <th scope="col">MODALIDAD</th>
                  <th scope="col">SALARIO</th>
                  <th scope="col">OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map(item => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.mode}</td>
                    <td>{item.salary}</td>
                    <td className="options_buttons d-flex justify-content-center gap-3">
                      <button type="submit" className="btn btn-outline-info buscar" onClick={handleApply}>Aplicar</button>
                      <Link to={`/welcome-candidate/search-vacancy/${item.id}`}>
                        <button type="submit" className="btn btn-info text-light">Abrir</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showAlert && <AlertComponent/>}
    </>
  );
};

export default ListBuscar;
