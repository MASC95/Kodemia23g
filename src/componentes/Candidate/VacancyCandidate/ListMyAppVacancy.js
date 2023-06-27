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
import "react-data-table-component-extensions/dist/index.css";
import Badge from "react-bootstrap/Badge";
import { endpoints } from "../EndpointsCandidate/endpoints";
import axios from "axios";
import { useState, useEffect } from "react";
import useJob from "../../../hooks/useJob";
import { myId } from "../../lib/myLib";
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
  const data = my_vacancies?.map((item, index) => ({
    ...item,
    id: index + 1,
    title: item.title,
    type: item.type,
    mode: item.mode,
    salary: item.salary,
  }));

 

  const columns = [
    {
      name:'rowId',
      selector: (row) => row._id,
      sortable: true, 
      omit:true,

    },
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "TITULO",
      selector: (row) => `${row.title}`,
      sortable: true,
    },
    {
      name: "TIPO DE TRABAJO",
      selector: (row) => `${row.type}`,
      sortable: true,
    },
    {
      name: "MODALIDAD",
      selector: (row) => `${row.mode}`,
      sortable: true,
    },
    {
      name: "SALARIO",
      selector: (row) => `${row.salary}`,
      sortable: true,
    },
    {
      name: "ESTADO",
      selector: (row) => row.null,
      sortable: true,
      
      cell: (row) => (
        <Badge bg="info" className="badge_state1 p-2 buscar">
          {row.status}
        </Badge>
      ),
    },
  ];


  const tableData = {
    columns,
    data,
  };

  return (
    <div className="m-5 p-3" id="formGral" style={{ fontFamily: 'Poppins, sans-serif, Verdana, Geneva, Tahoma' }}>
        
          <DataTableExtensions {...tableData} export={false} print={false}>
            <DataTable {...tableData}
              columns={columns}
              data={data}
              defaultSortField="#"
              defaultSortAsc
              pagination
              highlightOnHover
              dense
              key={myId()}
            />
          </DataTableExtensions>
        </div>
     
  );
};

export default ListMyAppVacancy;
