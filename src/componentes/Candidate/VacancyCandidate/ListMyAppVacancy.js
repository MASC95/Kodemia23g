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
import { endpointsGral } from "../../Recruiter/services/vacancy";


export const ListMyAppVacancy = ({refreshing}) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
        fontsize: "18px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#7FADC0",
        color: "#fff",
        fontWeight: "bold",
        fontsize: "12px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        fontsize: "18px",
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const [
    dataCandidate,
    setDataCandidate,
    dataRecruiter,
    setDataRecruiter,
    dataLocalStorage,
    setDataLocalStorage,
  ] = useJob();
  const { my_vacancies } = dataCandidate;

  const cargarDatos = async () => {
    try {
      const response = await axios.get(
        `${endpointsGral.userURL}getUserByEmail?email=${dataCandidate.email}`
      );
      //console.log('response Backend:..',response);
      const dataPhaseStatus = response?.data?.user?.phase_status;
      const dataMyVacancies = response?.data?.user?.my_vacancies;
      const newDataMyVacancies= dataMyVacancies.filter(el=>el.status==='Iniciado');
      const reversedData= newDataMyVacancies?.reverse();
      //console.log('dataMyVacancies:..',dataMyVacancies);
      if (dataPhaseStatus && dataCandidate) {
        setDataLocalStorage({
          ...dataLocalStorage,
          my_vacancies:[...reversedData],
          phase_status:[...dataPhaseStatus]
        });
      }
      //console.log("responseDataUser in Backend:..", response?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cargarDatos();
    //console.log('cargando componente:...',String(refreshing));
  }, [refreshing]);
  useEffect(() => {
    if (dataCandidate?.phase_status) {
      //console.log("phase_status:..", dataCandidate?.phase_status);
    }
  }, [dataCandidate]);
  const data = my_vacancies?.map((item, index) => {
    const findVacancy = dataCandidate?.phase_status?.find(
      (el) => el.idVacancy === item._id
    );
    let myPhase = "Aplicando";
    if (findVacancy) {
      myPhase = findVacancy.phase;
    }
    return {
      ...item,
      id: index + 1,
      company: item.companyName,
      title: item.title,
      type: item.type,
      mode: item.mode,
      salary: `$ ${item.salary}.00`,
      phase: myPhase,
    };
  });

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
      name: "SALARIO MENSUAL",
      selector: (row) => `${row.salary}`,
      sortable: true,
    },
    {
      name: "ESTADO",
      selector: (row) => row.null,
      sortable: true,

      cell: (row) => (
        <Badge bg="info" className="badge_state1 p-2 buscar">
          {row.phase}
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
