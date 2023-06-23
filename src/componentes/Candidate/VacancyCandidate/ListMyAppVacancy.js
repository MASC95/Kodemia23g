/* import React from "react";
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

              <tbody className="t-body-1">
                {my_vacancies &&
                  my_vacancies.map((item, index) => (
                    <tr key={index} className="text-dark tr-2">
                      <th scope="row" className="number">{index + 1}</th>

                      <td className="title-map">{item.title}</td>
                      <td className="type-map">{item.type}</td>
                      <td className="mode-map">{item.mode}</td>
                      <td className="salary-map">{item.salary}</td>
                      <td className="options_buttons justify-content-center gap-3">
                        <Badge bg="info" className="badge_state1 p-2 buscar">
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
export default ListMyAppVacancy; */

import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Badge from "react-bootstrap/Badge";
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

  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "TITULO",
      selector: "title",
      sortable: true,
    },
    {
      name: "TIPO DE TRABAJO",
      selector: "type",
      sortable: true,
    },
    {
      name: "MODALIDAD",
      selector: "mode",
      sortable: true,
    },
    {
      name: "SALARIO",
      selector: "salary",
      sortable: true,
    },
    {
      name: "ESTADO",
      selector: "status",
      sortable: true,
      cell: (row) => (
        <Badge bg="info" className="badge_state1 p-2 buscar">
          {row.status}
        </Badge>
      ),
    },
  ];

  const data = my_vacancies?.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const tableData = {
    columns,
    data,
  };

  return (
    <div className="d-none d-md-flex justify-content-center main-t" id="formGral">
      <div className="row softskills">
        <div className="col">
          <DataTableExtensions filter={true} {...tableData} export={false} print={false}>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              defaultSortField="#"
              defaultSortAsc
              pagination
              highlightOnHover
              dense
            />
          </DataTableExtensions>
        </div>
      </div>
    </div>
  );
};

export default ListMyAppVacancy;
