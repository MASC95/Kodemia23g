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
  const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            fontsize:"18px",
        },
    },
    headCells: {
        style: {
          backgroundColor:'#7FADC0',
          color:'#fff',
          fontWeight: "bold",
          fontsize:"12px",
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
        },
    },
    cells: {
        style: {
          fontsize:"18px",
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
        },
    },
};

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
  useEffect(()=>{

    if(dataCandidate?.phase_status){
      console.log('dataCandidate:..',dataCandidate)
    }
  },[dataCandidate])
  const data = my_vacancies?.map((item, index) => ({
    ...item,
    id: index + 1,
    company: item.companyName,
    title: item.title,
    type: item.type,
    mode: item.mode,
    salary: `$ ${item.salary}.00`,
  }));

  const columns = [
    {
      name: "rowId",
      selector: (row) => row._id,
      sortable: true,
      omit: true,
    },
    {
      name: "EMPRESA",
      selector: (row) => `${row.company}`,
      sortable: true,
    },
    {
      name: "TITULO DE LA VACANTE",
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
    <>
      <div
        className="m-5 p-3"
        id="formGral"
        style={{ fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma" }}
      >
        
        <DataTableExtensions {...tableData} export={false} print={false}>
          <DataTable
            {...tableData}
            columns={columns}
            data={data}
            defaultSortField="#"
            defaultSortAsc
            pagination
            /*  paginationPerPage={perPage} */
            highlightOnHover
            dense
            key={myId()}
            customStyles={customStyles}
          />
        </DataTableExtensions>
      </div>
    </>
  );
};

export default ListMyAppVacancy;
