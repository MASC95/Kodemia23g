import React from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import useJob from "../../../hooks/useJob";
import { endpoints } from "../EndpointsCandidate/endpoints";
import { myId } from "../../lib/myLib";

const VerticalListVacancy = () => {
  const [dataCandidate] = useJob();
  const { my_vacancies } = dataCandidate;

  const cargarDatos = async () => {
    try {
      const response = await axios.get(endpoints.candidateMyVacancies);
      //console.log("responseMyVacancies:..", response);
    } catch (error) {
      //console.log(error);
    }
  };
  return (
    <div className="d-block d-md-none ">
      {my_vacancies &&
        my_vacancies.map((item, index) => (
          <table key={myId()} className="mb-5 table-v">
            <tbody className="body-table-v">
              <tr className="vertical-table-title-1">
                <th className="gato">#</th>
                <th className="titulo">Título</th>
              </tr>
              <tr className="vertical-table-content-1">
                <th className="numeros">{index + 1}</th>
                <td className="titulo-contenido">{item.title} </td>
              </tr>
              <tr className="vertical-table-title-2">
                <th className="tipo">Tipo</th>
                <th className="modalidad">Modalidad</th>
              </tr>
              <tr className="vertical-table-content-2">
                <th className="tipo">{item.type}</th>
                <td className="modo">{item.mode}</td>
              </tr>
              <tr className="vertical-table-title-3">
                <th className="salario">Salario</th>
                <td className="opciones">Estado</td>
              </tr>
              <tr className="vertical-table-content-3">
                <td className="salario-1">{item.salary}</td>
                <td className="opciones-1 m-2">
                  <Badge bg="info" className="badge_state1 p-3">
                    {item.status}
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
};
export default VerticalListVacancy;
