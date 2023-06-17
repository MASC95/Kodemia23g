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
      <div className="d-none d-md-flex justify-content-center main-t " id="formGral">
        <div className="row softskills">
          <div className="col">
            <table className="table-1">
              <thead className="thead-table">
                <tr className="tr-t">
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
                    <tr key={index} className="text-dark tr-2">
                      <th scope="row" className="number">{index + 1}</th>

                      <td className="title-map">{item.title}</td>
                      <td className="type-map">{item.type}</td>
                      <td className="mode-map">{item.mode}</td>
                      <td className="salary-map">{item.salary}</td>
                      <td className="options_buttons justify-content-center gap-3">
                        <Badge bg="info" className="badge_state1 p-2">
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
