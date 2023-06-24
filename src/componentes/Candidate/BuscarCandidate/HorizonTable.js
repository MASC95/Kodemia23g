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


import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Link } from 'react-router-dom';
import { myId } from '../../lib/myLib';

const HorizonTable = ({ vacancies, my_vacancies, handleStopApplying, handleApply }) => {
  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: 'TÍTULO',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'TIPO DE TRABAJO',
      selector: 'type',
      sortable: true,
    },
    {
      name: 'MODALIDAD',
      selector: 'mode',
      sortable: true,
    },
    {
      name: 'SALARIO',
      selector: 'salary',
      sortable: true,
    },
    {
      name: 'OPCIÓN',
      sortable: false,
      cell: (row) => (
        <div className="options-buttons m-2 " style={{width: '250px'}}>
          {my_vacancies?.find((myVac) => myVac._id === row._id) === undefined ? (
            <button
              type="submit"
              id={row._id}
              className="btn btn-outline-info buscar "
              onClick={handleApply}
              disabled={my_vacancies?.find((myVac) => myVac._id === row._id) === undefined ? false : true}
            >
              {my_vacancies?.find((myVac) => myVac._id === row._id) === undefined ? 'Aplicar' : 'Aplicando'}
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-danger mb-2"
              id={row._id}
              onClick={handleStopApplying}
            >
              Dejar de aplicar
            </button>
          )}
          <Link to={`/dashboard-candidato/detail-vacancy/${row._id}`}>
            <button type="submit" className="btn btn-info text-light mt-2 w-100">
              Abrir
            </button>
          </Link>
        </div>
      ),
    },
  ];

  const data = vacancies?.map((item, index) => ({
    ...item,
    id: myId(),
    index: index + 1,
  }));

  const tableData = {
    columns,
    data,
  };

  return (
    <div className="d-flex flex-column align-items-center ">
      <div className="mb-3">
        {/* Tabla con filtrado */}
        <DataTableExtensions filter={true} {...tableData} export={false}
      print={false}>
          <DataTable
          key={myId()}
            columns={columns}
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
  );
};

export default HorizonTable;
