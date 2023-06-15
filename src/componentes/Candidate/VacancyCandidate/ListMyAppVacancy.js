import React from "react";
import Badge from "react-bootstrap/Badge";
import "./style.scss";
import { endpoints } from "../EndpointsCandidate/endpoints";
import axios from "axios";
import { useState, useEffect } from "react";
import useJob from "../../../hooks/useJob";

export const ListMyAppVacancy = () => {
  const [dataCandidate] = useJob();
  const { my_vacancies } = dataCandidate;

  const cargarDatos = async () => {
    try {
      const response = await axios.get(endpoints.candidateMyVacancies);
      console.log("responseMyVacancies:..", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
          <div className="col">
            <table className="table">
              <thead className="thead-dark bg-body-secondary thead-up">
                <tr>
                  <th scope="col number">#</th>
                  <th scope="col title">TITULO</th>
                  <th scope="col type-work">TIPO DE TRABAJO</th>
                  <th scope="col modality">MODALIDAD</th>
                  <th scope="col ">SALARIO</th>
                  <th scope="col ">ESTADO</th>
                </tr>
              </thead>

              <tbody className="t-body">
                {my_vacancies &&
                  my_vacancies.map((item, index) => (
                    <tr key={index} className="main-tr">
                      <th scope="row" className="number">{index + 1}</th>

                      <td className="title-map">{item.title}</td>
                      <td className="type-map">{item.type}</td>
                      <td className="mode-map">{item.mode}</td>
                      <td className="salary-map">{item.salary}</td>
                      <td className="options_buttons justify-content-center gap-3">
                        <Badge bg="info" className="badge_state1">
                          {item.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListMyAppVacancy;
