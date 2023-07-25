import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";
import { myId } from "../../lib/myLib";
import useJob from "../../../hooks/useJob";
//import Footer from "../../Landing/Footer/Footer";

const HorizonTable = ({
  vacancies,
  my_vacancies,
  handleStopApplying,
  handleApply,
  handlePageChange,
  handlePerRowsChange,
  loading,
  totalRows,
  currentPage,
  perPage,
  isRefreshing
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


  const [tempArrayVancies, setTempArrayVancies] = useState([]);
  const [dataCandidate] = useJob();
  useEffect(() => {
    //console.log("Nuevo valor de limit(Hijo):..", perPage);
  }, [perPage]);
  useEffect(() => {
    initDataMyVacancies();
    ////console.log("vancacies:...", vacancies);
    
  }, []);

  useEffect(()=>{
    // console.log('refreshing data:...',String(isRefreshing))
  },[isRefreshing])

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const initDataMyVacancies = () => {
    let idUser = "";
    if (dataCandidate?.accessToken) {
      const result = parseJwt(dataCandidate?.accessToken);
      //console.log("data Token(jwt):...", result);
      idUser = result._id;
    }
    let innerArray = [];
    vacancies.forEach((element) => {
      const isFoudedUser = element?.rejecteds?.find(
        (item) => String(item) === idUser
      );
      if (!isFoudedUser) {
        innerArray.push(element);
      }
    });
    setTempArrayVancies([...innerArray]);
  };

  const data = vacancies?.map((item, index) => ({
    ...item,
    id: myId(),
    _id: item._id,
    index: index + 1,
    company: item.companyName,
    title: item.title,
    type: item.type,
    city: item.city,
    mode: item.mode,
    salary:`$ ${item.salary}.00`,
  }));
  //console.log("datooos....", data);
  const columns = [
    {
      name: "id",
      selector: (row) => row._id,
      sortable: true,
      omit: true,
    },
    {
      name: "EMPRESA ",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "TÍTULO DE LA VACANTE",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "TIPO DE TRABAJO",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "CIUDAD",
      selector: (row) => row.city,
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
          key={myId()}
          style={{
            width: "350px",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          {my_vacancies?.find((myVac) => myVac._id === d._id) === undefined ? (
            <button
              type="submit"
              id={d._id}
              key={myId()}
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
              key={myId()}
              onClick={handleStopApplying}
            >
              No Aplicar
            </button>
          )}
          <Link to={`/dashboard-candidato/detail-vacancy/${d._id}`}>
            <button
              type="submit"
              className="btn btn-outline-info w-100"
              key={myId()}
            >
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
    <>
    
      <div
        className=" m-2 p-3"
        style={{ fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma" }}
      >
        
        <DataTableExtensions {...tableData} export={false} print={false}>
          <DataTable
            {...tableData}
            key={myId()}
            columns={columns}
            data={data}
            /*    noHeader
            defaultSortField="#" 
            defaultSortAsc={true} */
            progressPending={loading}
            pagination
            paginationServer
            paginationPerPage={perPage}
            paginationTotalRows={totalRows}
            paginationDefaultPage={currentPage}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            highlightOnHover
            dense
            customStyles={customStyles}
          />
        </DataTableExtensions>
      </div>
    </>
  );
};

export default HorizonTable;
