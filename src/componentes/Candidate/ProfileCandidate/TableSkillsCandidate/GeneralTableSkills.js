import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from "react-router-dom";
import { FaHammer, FaPlus } from "react-icons/fa";
import { myId } from "../../../lib/myLib";

const GeneralTableSkills = ({
  generalSkills,
  loadingGeneralSkills,
  totalRowsGeneralSkills,
  handlePageChangeGeneralSkills,
  handlePerRowsChangeGeneralSkills,
  currentPageGeneralSkills,
  handleAddSkill,
}) => {
  const childHandleAddSkill = (id) => {
    //console.log("Agregando Skill:..",id);
    handleAddSkill(id);
  };
  /* {
    name: "#",
    selector: (row, i) => i + 1,
    sortable: true,
  }, */
  const data = generalSkills?.map((item, index) => {
    return {
      id: item._id,
      qty: index,
      level: item.level,
      name: item.name,
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
      name: "SKILL",
      selector: (row, i) => row.name,
      sortable: true,
    },
    {
      name: "LEVEL",
      selector: (row, i) => row.level,
      sortable: true,
    },
    {
      name: "OPCIONES",
      sortable: false,
      selector: (row, i) => row.null,
      cell: (d) => [
        <button
          type="button"
          key={myId()}
          className=" btn btn-outline-primary my-1"
          onClick={childHandleAddSkill.bind(this, d.id)}
        >
          <FaPlus className="" />
        </button>,
      ],
    },
  ];
  const tableData = {
    columns,
    data,
  };

  return (
    <>
      <h1
        className="text-center mt-4 mb-4 "
        style={{
          color: "rgb(73, 139, 166)",
          textShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 1px 3px",
          fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
        }}
      >
        Agrega Skills a tu perfil
      </h1>
      <h2
        style={{
          backgroundColor: "#498ba6",
          color: "#f2f2f2",
          textAlign: "center",
          textShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 1px 3px",
          borderRadius: "15px 15px 0px 0px",
          fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
        }}
      >
        <FaHammer style={{ marginRight: "10px" }} /> Lista General de Skills
      </h2>
      <DataTableExtensions export={false} print={false} {...tableData}>
        <DataTable
          {...tableData}
          columns={columns}
          data={data}
          // noHeader
          // defaultSortField="#"
          // defaultSortAsc={true}
          progressPending={loadingGeneralSkills}
          pagination
          paginationServer
          paginationTotalRows={totalRowsGeneralSkills}
          paginationDefaultPage={currentPageGeneralSkills}
          onChangeRowsPerPage={handlePerRowsChangeGeneralSkills}
          onChangePage={handlePageChangeGeneralSkills}
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </>
  );
};

export default GeneralTableSkills;
