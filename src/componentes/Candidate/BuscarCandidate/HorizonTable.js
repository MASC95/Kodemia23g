import React from 'react'
import { Link } from "react-router-dom";

const HorizonTable = ({vacancies, my_vacancies, handleStopApplying, handleApply}) => {
  return (
    <div className="d-none d-md-flex justify-content-center">
            <table className="">
              <thead className="text-dark bg-body-secondary">
                <tr>
                  <th className="col border-1 rounded">#</th>
                  <th className="col border-1 rounded" style={{ backgroundColor: "#FAFAFB" }}>
                    TITULO
                  </th>
                  <th className="col border-1 rounded">TIPO DE TRABAJO</th>
                  <th className="col border" style={{ backgroundColor: "#FAFAFB" }}>
                    MODALIDAD
                  </th>
                  <th className="col border">SALARIO</th>
                  <th className="col border" style={{ backgroundColor: "#FAFAFB" }}>
                    OPCION
                  </th>
                </tr>
              </thead>
              <tbody>
                {vacancies &&
                  vacancies?.map((item, index) => (
                    <tr key={item._id} className="text-dark">
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.mode}</td>
                      <td>{item.salary}</td>
                      <td className="options_buttons d-flex justify-content-center gap-3">
                        {my_vacancies?.find(
                          (myVac) => myVac._id === item._id
                        ) === undefined ? (
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
                            {my_vacancies?.find(
                              (myVac) => myVac._id === item._id
                            ) === undefined
                              ? "Aplicar"
                              : "Aplicando"}
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
  )
}

export default HorizonTable