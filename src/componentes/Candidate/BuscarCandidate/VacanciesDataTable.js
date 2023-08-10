import React from 'react'
import { useEffect } from 'react';
import DataTable from "react-data-table-component";

const VacanciesDataTable = ({
    columns,
    data,
    loading,
    perPage,
    totalRows,
    currentPage,
    handlePageChange,
    handlePerRowsChange
}) => {
    useEffect(()=>{

    },[data])
    useEffect(()=>{
        console.log('nuevo valor de limit(perPage)(son):..',perPage)
    },[perPage])
    useEffect(()=>{

    },[totalRows])
    useEffect(()=>{
      console.log('nuevo valor de currentPage(son):..',currentPage)
    },[currentPage])
  return (
    <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        responsive
        striped
        pagination
        paginationServer
        paginationPerPage={perPage}
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        highlightOnHover
        dense
      />
  )
}

export default VacanciesDataTable