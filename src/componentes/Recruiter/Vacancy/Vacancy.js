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
    const deleteVacancy=vacancyAll[index]
    console.log(deleteVacancy)
      
          axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer: ${dataRecruiter.accessToken}`;
              
          axios
            .delete(`${endpointsGral.vacancyURL}${deleteVacancy._id}`)
            .then(response => {
              console.log(response);
              const updateList= vacancyAll.filter((_,i)=>i!==index)
              setVacancyAll(updateList)
              swal({
                title: "Vacante eliminada!!",
                icon: "success",
                button: "ok!",
            });
            })
            .catch(error => {
              console.log(error.response);
            });
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
            selector: (row) => row.id,
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
                <button type="button" className="buttons btn btn-outline-danger">
                 <FaTrash className="icon_trash" onClick={handleDeleteSkill.bind(this,d.i)}/>  
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
          <div className='card-header d-flex gap-3'>
              <h1 className="text-start text-dark"><b>Vacantes</b></h1>
                 <div className="d-flex h-100  justify-content-around">
                   <Link to={`/Dashboard-Recruiter/vacancy-new`} className="text-light buttons btn btn-info btn-lg">
                     Agregar Nuevo
                      </Link>
                  </div> 
          </div>
          <div className='card-body'>
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
                {/* <table className="table">
                    <thead className="thead-dark bg-body-secondary">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">TITULO</th>
                        <th scope="col">TIPO DE TRABAJO</th>
                        <th scope="col">MODALIDAD</th>
                        <th scope="col">SALARIO</th>
                        <th scope="col">OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { vacancyAll.map((item, index)=>{
                            const idVacancy=item._id
                                return(
                                    <tr key={myId()}>
                                   <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.type}</td>
                                    <td>{item.mode}</td>
                                    <td>{item.salary}</td>
                                    <td className="options_buttons d-flex justify-content-center gap-3">
                                        <Link to={`/Dashboard-Recruiter/vacancy-edit/?v=${idVacancy}`}>
                                            <button type="button" className="buttons btn btn-outline-success"><FaEdit className="icon_edit"/></button> 
                                        </Link>
                                        <button type="button" className="buttons btn btn-outline-danger">
                                           <FaTrash className="icon_trash" onClick={() => handleDeleteSkill(index)}/>  
                                        </button> 
                                    </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table> */}
                </div>
            </div>
              {/* <ListVacancy postdata={vacancyAll}/>
              <Outlet/> */}
          </div>
        </>
    )
}
export default Vacancy