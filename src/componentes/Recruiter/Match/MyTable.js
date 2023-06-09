import React from 'react'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { FaEye, FaCheck, FaEyeSlash } from "react-icons/fa";
import { myId } from "../../lib/myLib";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const MyFaCheck =({text})=>{
return <div><FaCheck/> <span className='ms-1'>{text}</span>{text}</div>
}

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
  listApplicantsPhaseOne
  }) => {

    useEffect(()=>{
        console.log('MyTable datos:..',dataByUserCandidate);
    },[])

    const handleHideofPanel=(index)=>{
        console.log('Ocultando el usuario(MyTable):..',index);
        dadHandleHideofPanel(index);
    } 
    
    const handleAddPanel= (index)=>{
      console.log('Agregando usuario a panel (MyTable):..',index);
      dadHandleofPanel(index);
    }

    const isFoundedUser= (idToFind)=>{
      const findIdUser = listApplicantsPhaseOne?.find(idUser=>String(idUser)===idToFind);
      if(findIdUser){
        return true
      }else{
        return false
      }
    }

  const retriveVacancy = dataInfoVacancy.job_skills?.map((item) => {
    return item._id;
  });

    const data = dataByUserCandidate.map((item, index) => {
      // const retriveUser = item.user_skills;
      const retriveUser=item.user_skills.map((idSkills)=>{
        return idSkills._id
      })
      // console.log('skills usuario', retriveUser)
      // console.log('skills vacante', retriveVacancy)

      const conteo = {};
      retriveUser.forEach((elemento) => {
        if (conteo[elemento]) {
          conteo[elemento]++;
        } else {
          conteo[elemento] = 1;
        }
      });
      let suma = 0;
      const quanty = retriveVacancy?.length;
      retriveVacancy?.forEach((elemento) => {
        if (conteo[elemento]) {
          suma += conteo[elemento];
        }
      });
      // console.log(`La suma de los valores repetidos es: ${suma}`);
      // console.log(((suma*100)/quanty))
      const operador = Math.floor((suma * 100) / quanty);
      
      const nameUser = `${item.name} ${item.last_name}`;

      return {
        id: item._id,
        qty: index,
        name: isFoundedUser(item._id)?<MyFaCheck text={nameUser}/>:nameUser,
        bachelor: `${item.bachelor} `,
        match: `${operador} %` || "",
      };
    });

  // let userSkills=[]

  const columns = [
    {
      name: "rowId",
      selector: (row,i) => row.id + row.i,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "#",
      selector: (row, i) => i+1,
      sortable: true,
      // hide: true,
      // omit: true,
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
        <Link to={`/dashboard-recruiter/profile-candidato/?c=${d.id}`}>
          <button type="button" className="buttons btn btn-outline-info">
            <FaEye className="icon_eye1" />
          </button>
        </Link>,
        
        <button
          disabled={isFoundedUser(d.id)}
          type="button"
          className={`buttons btn ${buttonState}`}
          // className="buttons btn btn-outline-success"
          onClick={handleAddPanel.bind(this, d.qty)}

        >
          {/* {buttonState==="btn btn-outline-success"?"btn btn-outline-success":"btn-outline-secondary"} */}
          <FaCheck className={isFoundedUser(d.id)?"icon_check1 text-secondary":"icon_check1"} />
        </button>,
        
        <button
          type="button"
          className="buttons btn btn-outline-secondary"
          onClick={handleHideofPanel.bind(this, d.qty)}
        >
          <FaEyeSlash className="icon_eyeSlash1 text-danger opacity-50" />
        </button>,
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
            key={myId()}
            columns={columns}
            data={data}
            // noHeader
            // defaultSortField="#"
            // defaultSortAsc={true}
            // pagination
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
  )
}

export default MyTable