import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
//import swal from "sweetalert";

const ListVacancies = ({
  vacancyAll,
  handleDeleteSkill,
  handlePageChange,
  handlePerRowsChange,
  loading,
  totalRows,
  currentPage,
  perPage,
  btnDelete
}) => {

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



  useEffect(() => {
    //console.log("Nuevo valor de limit:..", perPage);
  }, [perPage]);

  const childHandleDeleteSkill = (index) => {
    handleDeleteSkill(index);
  };

  const data = vacancyAll?.map((item, index) => {
    return {
      id: item._id,
      qty: index,
      company:item.companyName,
      title: item.title,
      type: item.type,
      mode: item.mode,
      salary: `$ ${item.salary}.00`,
    };
  });

  const columns = [
    {
      name: "rowId",
      selector: (row) => `${row.id}${row.qty}`,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "EMPRESA",
      selector: (row, i) => row.company,
      sortable: true,
    },
    {
      name: "TITULO DE LA VACANTE",
      selector: (row, i) => row.title,
      sortable: true,
    },
    {
      name: "TIPO DE TRABAJO",
      selector: (row, i) => row.type,
      sortable: true,
    },
    {
      name: "MODALIDAD",
      selector: (row, i) => row.mode,
      sortable: true,
    },
    {
      name: "SALARIO MENSUAL",
      selector: (row, i) => row.salary,
      sortable: true,
    },
    {
      name: "OPCIONES",
      sortable: false,
      selector: (row, i) => row.null,
      cell: (d) => [
        <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${d.id}`}>
          <button type="button" className="buttons btn btn-outline-success">
            <FaEdit className="icon_edit1" />
          </button>
        </Link>,
   
        <button
          type="button"
          disabled={btnDelete}
          className="buttons btn btn-outline-danger"
          onClick={childHandleDeleteSkill.bind(this, d.qty)}
        >
          <FaTrash className="icon_trash" />
        </button>
        
      ],
    },
  ];
  const tableData = {
    columns,
    data,
  };

  return (
    <DataTableExtensions export={false} print={false} {...tableData}>
      <DataTable
        {...tableData}
        columns={columns}
        data={data}
        customStyles={customStyles}
        // noHeader
        // defaultSortField="#"
        // defaultSortAsc={true}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        highlightOnHover
        dense
      />
    </DataTableExtensions>
  );
};

export default ListVacancies;
