/* import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import axios from 'axios';
import useJob from "../../../hooks/useJob"; */

/* const Example = () => {
  function testClickEvent(param) {
    alert('Row Click Event');
  }
  const [dataCandidate] = useJob();
  const { my_vacancies } = dataCandidate;

  const data = () => {
    const mappedRows = my_vacancies.map((item, index) => ({
        qty: index+1,
        titulo: item.title,
        tipo: item.type,
        Modalidad: item.mode,

        Salario: item.salary,
        Estado: item.status,
        clickEvent: () => testClickEvent(1),
      }));
    return {
      columns: [
        {
            label: '#',
            field: 'qty',
            width: 100,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
        {
          label: 'titulo',
          field: 'titulo',
          width: 100,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'tipo',
          field: 'tipo',
          width: 100,
        },
        {
          label: 'Modalidad',
          field: 'Modalidad',
          width: 200,
        },
        {
          label: 'Salario',
          field: 'Salario',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Estado',
          field: 'Estado',
          sort: 'disabled',
          width: 150,
        },
      ],
     
      rows: mappedRows,
    };
  };
  return (
    <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            bordered
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={data()}
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Example;  */

/* import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net/js/jquery.dataTables";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import Badge from "react-bootstrap/Badge";
import "./style.scss";
import { endpoints } from "../EndpointsCandidate/endpoints";
import axios from "axios";
import useJob from "../../../hooks/useJob";

export const ListMyAppVacancy = () => {
  const [dataCandidate] = useJob();
  const { my_vacancies } = dataCandidate;

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const response = await axios.get(endpoints.candidateMyVacancies);
      console.log("responseMyVacancies:..", response);
      initializeDataTable();
    } catch (error) {
      console.log(error);
    }
  };

  const initializeDataTable = () => {
    $(document).ready(() => {
      $("#myTable").DataTable({
        responsive: true,
      });
    });
  };

  return (
    <div className="d-none d-md-flex justify-content-center main-t" id="formGral">
      <div className="row softskills">
        <div className="col">
          <table className="table-1" id="myTable">
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
                    <th scope="row" className="number">
                      {index + 1}
                    </th>
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
  );
};

export default ListMyAppVacancy; */
