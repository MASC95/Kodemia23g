import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { FaEye, FaCheck, FaEyeSlash } from "react-icons/fa";
import { myId } from "../../lib/myLib";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const MyFaCheck = ({ text }) => {
  return (
    <div>
      <FaCheck /> <span className="ms-1">{text}</span>
    </div>
  );
};

const MyTable = ({
  dataByUserCandidate,
  dataInfoVacancy,
  dadHandleHideofPanel,
  handlePageChange,
  handlePerRowsChange,
  loading,
  totalRows,
  currentPage,
  dadHandleofPanel,
  isButtonDisabled,
  buttonState,
  listApplicantsPhaseOne,
  idVacancy,
}) => {
  useEffect(() => {
    //console.log('dataInfoVacancy:..',dataInfoVacancy);
  }, [dataInfoVacancy]);
  useEffect(() => {}, [dataByUserCandidate, listApplicantsPhaseOne]);
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

  // useEffect(()=>{
  //     console.log('MyTable datos:..',dataByUserCandidate);
  // },[])

  const handleHideofPanel = (index) => {
    //console.log('Ocultando el usuario(MyTable):..',index);
    dadHandleHideofPanel(index);
  };

  const tooltip = <Tooltip>Ver</Tooltip>;

  const tooltip2 = <Tooltip>Aceptar</Tooltip>;

  const tooltip3 = <Tooltip>Rechazar</Tooltip>;

  const handleAddPanel = (index) => {
    //console.log('Agregando usuario a panel (MyTable):..',index);
    dadHandleofPanel(index);
  };

  const isFoundedUser = (idToFind) => {
    const findIdUser = listApplicantsPhaseOne?.find(
      (idUser) => String(idUser) === idToFind
    );
    if (findIdUser) {
      return true;
    } else {
      return false;
    }
  };

  const retriveVacancy = dataInfoVacancy.job_skills?.map((item) => {
    return item.name;
  });
  const filterRDuplexVacancy = [...new Set(retriveVacancy)];

  const datasCompare = dataByUserCandidate.map((item, index) => {
    const retriveUser = item.user_skills.map((idSkills) => {
      return idSkills.name;
    });
    const filterRDuplex = [...new Set(retriveUser)];
    const conteo = {};
    let newObj = [];
    filterRDuplex.forEach((elemento) => {
      if (conteo[elemento]) {
        conteo[elemento]++;
      } else {
        conteo[elemento] = 1;
      }
    });
    let suma = 0;
    const quanty = filterRDuplexVacancy?.length;
    filterRDuplexVacancy?.forEach((elemento) => {
      if (conteo[elemento]) {
        suma += conteo[elemento];
      }
    });
    // console.log(`La suma de los valores repetidos es: ${suma}`);

    let operador = 0;

    if (suma === 0) {
      operador = 0;
    } else {
      // console.log(((suma*100)/quanty))
      operador = Math.floor((suma * 100) / quanty);
      //  compare= dataByUserCandidate.sort((a, b) => b.operador- a.operador)
      //   console.log(compare)
      //console.log('nuevo map para iterar', )
    }
    const nameUser = `${item.name} ${item.last_name}`;

    return {
      id: item._id,
      qty: index,
      name: nameUser,
      bachelor: item.bachelor,
      match: `${operador}`,
    };
    // return {
    //   id: item._id,
    //   qty: index,
    //   name: isFoundedUser(item._id)?<MyFaCheck text={nameUser}/>:nameUser,
    //   bachelor: item.bachelor?`${item.bachelor} `:'-',
    //   match: `${operador} %` || 0 ,
    // };
  });

  datasCompare.sort((a, b) => b.match - a.match);
  const data = datasCompare.map((item2, index2) => {
    //console.log('item del map 2', item2)
    const nameUser = `${item2.name}`;

    return {
      id: item2.id,
      qty: index2,
      name: isFoundedUser(item2.id) ? <MyFaCheck text={nameUser} /> : nameUser,
      bachelor: item2.bachelor ? `${item2.bachelor} ` : "-",
      match: `${item2.match} %` || 0,
    };
  });

  // let userSkills=[]

  const columns = [
    {
      name: "rowId",
      selector: (row, i) => row.id + row.i,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "#",
      selector: (row, i) => i + 1,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "NOMBRE",
      selector: (row, i) => row.name,
      sortable: true,
    },
    {
      name: "ESCOLARIDAD",
      selector: (row, i) => row.bachelor,
      sortable: true,
    },
    {
      name: "COMPATIBILIDAD",
      selector: (row, i) => row.match,
      sortable: true,
    },
    {
      name: "OPCIONES",
      sortable: false,
      selector: (row, i) => row.null,
      cell: (d) => [
        <Link
          key={myId()}
          to={`/dashboard-recruiter/profile-candidato/?c=${d.id}&v=${idVacancy}`}
        >
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <button type="button" className="buttons btn btn-outline-info">
              <FaEye className="icon_eye1" />
            </button>
          </OverlayTrigger>
        </Link>,
        <OverlayTrigger key={myId()} placement="bottom" overlay={tooltip2}>
          <button
            disabled={isFoundedUser(d.id)}
            type="button"
            
            className={`buttons btn ${buttonState}`}
            // className="buttons btn btn-outline-success"
            onClick={handleAddPanel.bind(this, d.qty)}
          >
            {/* {buttonState==="btn btn-outline-success"?"btn btn-outline-success":"btn-outline-secondary"} */}
            <FaCheck
              className={
                isFoundedUser(d.id)
                  ? "icon_check1 text-secondary"
                  : "icon_check1"
              }
            />
          </button>
        </OverlayTrigger>,
        <OverlayTrigger key={myId()} placement="bottom" overlay={tooltip3}>
          <button
            type="button"
            
            className="buttons btn btn-outline-secondary"
            onClick={handleHideofPanel.bind(this, d.qty)}
          >
            <FaEyeSlash className="icon_eyeSlash1 text-danger opacity-50" />
          </button>
        </OverlayTrigger>,
      ],
    },
  ];

  const tableData = {
    columns,
    data,
  };

  //console.log('Id vacante', idVacancy)
  return (
    <DataTableExtensions export={false} print={false} {...tableData}>
      <DataTable
        {...tableData}
        key={myId()}
        customStyles={customStyles}
        columns={columns}
        data={data}
        // noHeader
        // defaultSortField="#"
        // defaultSortAsc={true}
        // pagination
        filterPlaceholder={false}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        highlightOnHover
        dense
        title="Lista de aplicantes"
      />
    </DataTableExtensions>
  );
};

export default MyTable;
