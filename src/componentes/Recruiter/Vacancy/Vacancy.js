import {React, useEffect, useState} from "react";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import {Link} from 'react-router-dom'
import axios from "axios";
import './style.scss'
import { myId } from '../../lib/myLib'
import { endpointsGral } from "../services/vacancy";
import {FaEdit, FaTrash} from 'react-icons/fa'
import swal from "sweetalert";
import useJob from '../../../hooks/useJob'
import Swal from "sweetalert2";

export const Vacancy=()=>{
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()
    const [vacancyAll,setVacancyAll]=useState([])


    const fetch=async()=>{
        const allVacancies=await axios.get(endpointsGral.vacancyURL)
        const datas=allVacancies.data['item']
        setVacancyAll(datas['docs'])
        console.log(datas['docs'])
    }
    useEffect(()=>{
        fetch()
    },[])
    console.log(vacancyAll)

    useEffect(()=>{
        if(vacancyAll.length>0){
            console.log('vaListTem',vacancyAll)
            setVacancyAll([...vacancyAll])
        }
    },[])


  const handleDeleteSkill = (index) => {
    Swal.fire({
        title: 'Eliminar Vacante?',
        text: "Estas seguro de eliminar esta vacante?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(index)
              const deleteVacancy=vacancyAll[index]
              const id=deleteVacancy?._id
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer: ${dataRecruiter.accessToken}`;
                        
                axios.delete(`${endpointsGral.vacancyURL}${id}`)
                    .then(response => {
                        console.log(response);
                        const updateList= vacancyAll.filter((_,i)=>i!==index)
                        setVacancyAll(updateList)
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
          Swal.fire(
            'Eliminado!',
            'Vacante eliminada correctamente.',
            'success'
          )
        }
      })
  
      };
// ----------------------------------- table
  const data= vacancyAll?.map((item, index) => {
            return(
            {
                id:item._id,
                qty: index,
                title: item.title,
                type: item.type,
                mode: item.mode,
                salary: item.salary,
            }
            )
     })

   const columns = [
        {
            name:'rowId',
            selector: (row) => `${row.id}${row.qty}`,
            sortable: true, hide:true,
            omit:true,

        },
        {
            name: "#",
            selector: (row,i) => i+1,
            sortable: true
        },
        {
            name: "TITULO",
            selector: (row, i) =>row.title,
            sortable: true
        },
        {
            name: "TIPO DE TRABAJO",
            selector: (row, i) => row.type,
            sortable: true
        },
        {
            name: "MODALIDAD",
            selector: (row, i) => row.mode,
            sortable: true,
        },
        {
            name: "SALARIO",
            selector: (row, i) => row.salary,
            sortable: true,
        },
        {
            name: "OPCIONES",
            sortable: false,
            selector: (row, i) => row.null,
            cell: (d) =>[
                <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${d.id}`}>
                 <button type="button" className="buttons btn btn-outline-success"><FaEdit className="icon_edit1"/></button> 
                </Link>,
                <button type="button" className="buttons btn btn-outline-danger" onClick={handleDeleteSkill.bind(this,d.qty)}>
                 <FaTrash className="icon_trash"/>  
                </button> 
        ]
        }
        ];
    const tableData = {
        columns,
        data
      };

    return(
        <>     
          <div className='row container_form_ForVacancy m-3'>
            <div className="content-principal">
              <h1 className="text-start">Vacantes</h1>
              <div className="">
                   <Link to={`/Dashboard-Recruiter/vacancy-new`} className="text-light buttons btn btn-info btn-lg text-decoration-none d-sm-block btn-sm h-100">
                     Crear vacante
                      </Link>
              </div>
            </div> 
          {/* </div> */}
          {/* <div className='card-body'> */}
          <div className="row softskills">
                <div className="col">
                <DataTableExtensions  
                    export={false}
                    print={false}
                    {...tableData}>
                    <DataTable {...tableData}
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
                </div>
            </div>
              {/* <ListVacancy postdata={vacancyAll}/>
              <Outlet/> */}
          </div>
        </>
    )
}
export default Vacancy