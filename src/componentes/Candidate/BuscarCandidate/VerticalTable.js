import React from "react";
import "./scss/verticaltable.scss";
import { Link } from "react-router-dom";
import { myId } from "../../lib/myLib";

const VerticalTable = ({
  vacancies,
  my_vacancies,
  handleStopApplying,
  handleApply,
}) => {
  return (
    <div className="d-block d-md-none ">
      {vacancies &&
        vacancies?.map((item, index) => (
          <table className="mb-5 table-v" key={myId()}>
            <tbody className="body-table-v">
              <tr className="vertical-table-title-1 ">
                <th className="gato">#</th>
                <td className="titulo">Título</td>
              </tr>
              <tr className="vertical-table-content-1">
                <th className="numeros">{index + 1}</th>
                <td className="titulo-contenido">{item.title}</td>
              </tr>
              <tr className="vertical-table-title-2">
                <th className="tipo">Tipo</th>
                <td className="modalidad">Modalidad</td>
              </tr>
              <tr className="vertical-table-content-2">
                <th className="tipo">{item.type}</th>
                <td className="modo">{item.mode}</td>
              </tr>
              <tr className="vertical-table-title-3">
                <th className="salario">Salario</th>
                <td className="opciones">Opciones</td>
              </tr>
              <tr className="vertical-table-content-3">
                <th className="salario-1">{item.salary}</th>
                <td className="opciones-1">
                  {my_vacancies?.find((myVac) => myVac._id === item._id) ===
                  undefined ? (
                    <button
                      type="submit"
                      id={item._id}
                      className="btn btn-outline-info buscar"
                      onClick={handleApply}
                      disabled={
                        my_vacancies?.find(
                          (myVac) => myVac._id === item._id
                        ) === undefined
                          ? false
                          : true
                      }
                    >
                      {my_vacancies?.find((myVac) => myVac._id === item._id) ===
                      undefined
                        ? "Aplicar"
                        : "Aplicando"}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-outline-danger "
                      id={item._id}
                      onClick={handleStopApplying}
                    >
                      Dejar de aplicar
                    </button>
                  )}
                  <Link to={`/dashboard-candidato/detail-vacancy/${item._id}`}>
                    <button
                      type="submit"
                      className="btn btn-info text-light m-2 "
                    >
                      Abrir
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
};

export default VerticalTable;
