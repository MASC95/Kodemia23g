import {useState,useEffect} from "react";
import {FaEye, FaCheck, FaEyeSlash} from 'react-icons/fa'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import {Link} from 'react-router-dom'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import { myId } from "../../lib/myLib";
import Swal from "sweetalert2";
import useJob from '../../../hooks/useJob'
import './style.scss'
export const MatchDetails=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const idVacancy = urlParams.get('m');
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()
    const [dataByUserCandidate,setDataByUserCandidate]=useState([])

    const fetchForMatch=async()=>{
        try {
            const endpointURL=`${endpointsGral.vacancyURL}${idVacancy}`;
            const response= await axios.get(endpointURL)
            const datasVacancy=response.data['infoVacancy']
            setDataByUserCandidate(datasVacancy);
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchForMatch()
    },[])

    useEffect(()=>{
      console.log('hay datos')
    },[dataByUserCandidate])


    const applicants= dataByUserCandidate.applicants
    const skills= dataByUserCandidate.job_skills

    const onlyApplicans = applicants?.filter((objeto, indice)=>{
        var objetoString = JSON.stringify(objeto);
        return (
          applicants.findIndex((obj, i)=>{
            return JSON.stringify(obj) === objetoString;
          }) === indice
        );
      });

    // let userSkills=[]
    let jobSkilss=[]
    const retriveVacancy=skills?.map((item)=>{
        return item._id
    })
    jobSkilss.push(retriveVacancy)
    console.log('Job', jobSkilss)

    const handleAddPanel=(id)=>{

    }
    const handleHideofPanel=(index)=>{
      Swal.fire({
        title: 'Ocultar candidato',
        text: "Estas seguro de ocultar esta candidato?!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, ocultar!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(index)
          const hideCandidate=dataByUserCandidate.applicants[index]
          const id=hideCandidate._id
          console.log(id)
         if(hideCandidate){
          const deleteOnList=dataByUserCandidate.applicants.filter((_,i)=> i!==index);
          setDataByUserCandidate(deleteOnList)
          console.log(deleteOnList)
         }else{
          console.log('error al ocultar')
         }
        }
      })
    }
      const data= onlyApplicans&&onlyApplicans?.map((item,index)=>{
        const retriveUser=item.user_skills
             const conteo = {};
             retriveUser.forEach(elemento => {
             if (conteo[elemento]) {
                 conteo[elemento]++;
             } else {
                 conteo[elemento] = 1;
             }
             });
             let suma=0
             const quanty=retriveVacancy.length
            retriveVacancy.forEach(elemento => {
                const repeticiones = conteo[elemento] || 0;
                if(repeticiones){
                    suma+=repeticiones
                }
             });
             const operador = Math.floor((suma*100)/quanty)

             return(
                {
                    id:item._id,
                    qty: index,
                    name: `${item.name} ${item.last_name}`,
                    bachelor: `${item.bachelor} `,
                    match: `${operador} %`||'',
                }
             )
        })
      
       
        

    // let userSkills=[]



    const columns = [
        {
          name:'rowId',
          selector: (row) => row.id,
          sortable: true, hide:true,
          omit:true,
    
        },
        {
          name: "#",
          selector: (row,i) => i + 1,
          sortable: true
        },
        {
          name: "NOMBRE",
          selector: (row, i) =>row.name,
          sortable: true
        },
        {
          name: "ESCOLARIDAD",
          selector: (row, i) => row.bachelor,
          sortable: true
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
          cell: (d) =>[
            <Link to={`/Dashboard-Recruiter/profile-candidato/?c=${d.id}`}>
            <button type="button" className="buttons btn btn-outline-info" ><FaEye className="icon_eye1"/></button>
            </Link>,
           <button type="button" className="buttons btn btn-outline-success" onClick={handleAddPanel.bind(this,d.id)}><FaCheck className="icon_check1"/></button>,
           <button type="button" className="buttons btn btn-outline-secondary" onClick={handleHideofPanel.bind(this,d.qty)}><FaEyeSlash className="icon_eyeSlash1"/></button>
      ]
     }
    ];
    
      // const data = dataShow;
    
    
    const tableData = {
      columns,
      data
    };

    return(
        <>
        <div className='row m-3'>
        <h2 className="text-dark">Lista de aplicantes</h2>
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
        <div className="d-flex w-100 justify-content-end p-4">
            <Link to={`/Dashboard-Recruiter/panel-phases?v=${idVacancy}`}>
              <button type="button" className="btn btn-info text-light">Panel de Reclutamiento</button>
            </Link>
        </div>
                        
        </>
    )
}
export default MatchDetails