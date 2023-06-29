import React from 'react'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { FaEye, FaCheck, FaEyeSlash } from "react-icons/fa";
import { myId } from "../../lib/myLib";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const MyTable = ({ dataByUserCandidate,job_skills, dadHandleHideofPanel  }) => {
    
    useEffect(()=>{
        console.log('MyTable datos:..',dataByUserCandidate);
    },[])

    const handleHideofPanel=(index)=>{
        console.log('Ocultando el usuario(MyTable):..',index);
        dadHandleHideofPanel(index);
    } 
    
    const handleAddPanel= ()=>{

    }



    const applicants = dataByUserCandidate;
    const onlyApplicans = applicants?.filter((objeto, indice) => {
      var objetoString = JSON.stringify(objeto);
      return (
        applicants.findIndex((obj, i) => {
          return JSON.stringify(obj) === objetoString;
        }) === indice
      );
    });

    const skills = job_skills;

   

  // let userSkills=[]
  let jobSkilss = [];
  const retriveVacancy = skills?.map((item) => {
    return item._id;
  });
  jobSkilss.push(retriveVacancy);

    const data =
    onlyApplicans &&
    onlyApplicans?.map((item, index) => {
      const retriveUser = item.user_skills;
      const conteo = {};
      retriveUser.forEach((elemento) => {
        if (conteo[elemento]) {
          conteo[elemento]++;
        } else {
          conteo[elemento] = 1;
        }
      });
      let suma = 0;
      const quanty = retriveVacancy.length;
      retriveVacancy.forEach((elemento) => {
        const repeticiones = conteo[elemento] || 0;
        if (repeticiones) {
          suma += repeticiones;
        }
      });
      const operador = Math.floor((suma * 100) / quanty);

      return {
        id: item._id,
        qty: index,
        name: `${item.name} ${item.last_name}`,
        bachelor: `${item.bachelor} `,
        match: `${operador} %` || "",
      };
    });

  // let userSkills=[]

  const columns = [
    {
      name: "rowId",
      selector: (row) => row.id,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "#",
      selector: (row, i) => i + 1,
      sortable: true,
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
        <Link to={`/Dashboard-Recruiter/profile-candidato/?c=${d.id}`}>
          <button type="button" className="buttons btn btn-outline-info">
            <FaEye className="icon_eye1" />
          </button>
        </Link>,
        <button
          type="button"
          className="buttons btn btn-outline-success"
          onClick={handleAddPanel.bind(this, d.id)}
        >
          <FaCheck className="icon_check1" />
        </button>,
        <button
          type="button"
          className="buttons btn btn-outline-secondary"
          onClick={handleHideofPanel.bind(this, d.qty)}
        >
          <FaEyeSlash className="icon_eyeSlash1" />
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
            noHeader
            defaultSortField="#"
            defaultSortAsc={true}
            pagination
            highlightOnHover
            dense
          />
        </DataTableExtensions>
  )
}

export default MyTable