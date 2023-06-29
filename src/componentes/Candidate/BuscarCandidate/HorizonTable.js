/* import React from 'react'
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

export default HorizonTable  */

import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";
import { myId } from "../../lib/myLib";
import useJob from "../../../hooks/useJob";

const HorizonTable = ({
  vacancies,
  my_vacancies,
  handleStopApplying,
  handleApply,
}) => {
  const data = vacancies?.map((item, index) => ({
    ...item,
    id: myId(),
    _id: item._id,
    index: index + 1,
    title: item.title,
    type: item.type,
    mode: item.mode,
    salary: item.salary,
  }));
  console.log("datooos....", data);
  const columns = [
    {
      name: "id",
      selector: (row) => row._id,
      sortable: true,
      omit: true,
    },
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "TÍTULO",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "TIPO DE TRABAJO",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "MODALIDAD",
      selector: (row) => row.mode,
      sortable: true,
    },
    {
      name: "SALARIO",
      selector: (row) => row.salary,
      sortable: true,
    },
    {
      name: "OPCIÓN",
      sortable: false,
      selector: (row) => row.null,
      center: true,
      cell: (d) => (
        <div
          className="options-buttons mt-3 mb-3 bg-light  d-flex flex-column gap-1"
          style={{
            width:'350px',
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          {my_vacancies?.find((myVac) => myVac._id === d._id) === undefined ? (
            <button
              type="submit"
              id={d._id}
              className="btn btn-outline-success buscar w-100"
              onClick={handleApply}
              disabled={
                my_vacancies?.find((myVac) => myVac._id === d._id) === undefined
                  ? false
                  : true
              }
            >
              {my_vacancies?.find((myVac) => myVac._id === d._id) === undefined
                ? "Aplicar"
                : "Aplicando"}
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-danger w-100"
              id={d._id}
              onClick={handleStopApplying}
            >
              No Aplicar
            </button>
          )}
          <Link to={`/dashboard-candidato/detail-vacancy/${d._id}`}>
            <button type="submit" className="btn btn-outline-info w-100">
              Abrir
            </button>
          </Link>
        </div>
      ),
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <div
      className=" m-5 p-3"
      style={{ fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma" }}
    >
      <DataTableExtensions {...tableData} export={false} print={false}>
        <DataTable
          {...tableData}
          key={myId()}
          columns={columns}
          data={data}
          noHeader
          defaultSortField="#"
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  );
};

export default HorizonTable;
