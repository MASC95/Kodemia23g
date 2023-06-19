import React from 'react'
import { Link } from "react-router-dom";
import './scss/horizontal.scss'
const HorizonTable = ({vacancies, my_vacancies, handleStopApplying, handleApply}) => {



  return (
    <div className="d-none d-md-flex justify-content-center main-t">
            <table className="table-1">
              <thead className="thead-table">
                <tr className='tr-t'>
                  <th className="col ">#</th>
                  <th className="col " >
                    TÍTULO
                  </th>
                  <th className="col">TIPO DE TRABAJO</th>
                  <th className="col " >
                    MODALIDAD
                  </th>
                  <th className="col">SALARIO</th>
                  <th className="col">
                    OPCIÓN
                  </th>
                </tr>
              </thead>
              <tbody className='t-body-1'>
                {vacancies &&
                  vacancies?.map((item, index) => (
                    <tr key={item._id} className="text-dark tr-2">
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