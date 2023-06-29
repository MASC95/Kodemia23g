import {React, useEffect, useState} from "react";
import { FaPhone,FaMailBulk } from "react-icons/fa"; 
import {FaCheck, FaEyeSlash} from 'react-icons/fa'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import useJob from '../../../hooks/useJob'
import { myId } from "../../lib/myLib";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import './scss/style.scss'
export const Candidate=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const idCandidate = urlParams.get('c');
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter,dataLocalStorage,setDataLocalStorage]=useJob();

    console.log(idCandidate)
    const [dataSkill, setDataSkill] = useState([]);
    const [infoCandidate,setInfoCandidate]=useState({}) 
    const queryByUsers= async()=>{
        try {
            const response= await axios.get(endpointsGral.userURL)
            const dataUsers=response.data['item']
            const objUsers= dataUsers['docs']
            const userFind=objUsers.find((value) => value._id===idCandidate)
            setInfoCandidate(userFind)

        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        queryByUsers()
    },[])

    const fetchSkill = async () => {
        const response = await axios.get(endpointsGral.jobSkill);
        const infoSkill = response.data["item"];
        setDataSkill(infoSkill["docs"]);
      };
      useEffect(() => {
        fetchSkill()
      }, []);


      const data= infoCandidate?.user_skills?.map((skill,i) => {
        let myDataSkill=null;
            myDataSkill= dataSkill?.find(item=>item._id===skill.skill);
            if(!myDataSkill){
            myDataSkill= dataSkill?.find(item=>item._id===skill);
         }
        
        return(
          {
            id:myDataSkill?._id,
            qty: `${i+1}`,
            skill: myDataSkill?.name,
            nivel: myDataSkill?.level,
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
          selector: (row,i) => i + 1,
          sortable: true
        },
        {
          name: "SKILL",
          selector: (row, i) =>`${row.skill}`,
          sortable: true
        },
        {
          name: "NIVEL",
          selector: (row, i) => row.nivel,
          sortable: true
        },
        
    ];
      const tableData = {
        columns,
        data
      };
    // console.log('userCompartive MAP',infoCandidate)
    // console.log('skills',dataSkill)
  
    return(
        <>
        <div className='card-body'>
        <h1  className="text-start text-dark d-sm-block h2">Perfil Profesional</h1>
        <div className="row container_form_General">
            <div className="col-4 container_image justify-content-center">
                <img src={infoCandidate.avatar_url} alt=""/>
                <div className="">  
                  <p className="text-center text-dark">{`${infoCandidate.name} ${infoCandidate.last_name}`}</p>
                  <p className="text-center text-dark"><FaMailBulk/> { infoCandidate.email}</p>
                </div>
                <div className="buttons_actions d-flex justify-content-center gap-3">  
                <button type="button" className="buttons btn btn-outline-success"><FaCheck className="icon_check"/></button> 
                <button type="button" className="buttons btn btn-outline-secondary"><FaEyeSlash className="icon_eyeSlash"/></button>
                </div>
            </div>
            <div className="col">
                <div className="row mb-4">
                    <h2 className="text-start text-dark">Información General</h2>
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label text-start text-dark" for="form6Example1">Nombre</label>
                        <p className="text-dark">{`${infoCandidate.name}`}</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label text-start text-dark" for="form6Example1">Apellido</label>
                        <p className="text-dark">{infoCandidate.last_name}</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label text-start text-dark" for="form6Example1">Edad</label>
                        <p className="text-dark">{infoCandidate.age} años</p>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label text-dark" for="form6Example1">Experiencia</label>
                            <p className="text-dark">{infoCandidate.working_experience}</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-dark">Lista de skills agregadas</h3>
                <div className="col">
                <div className="main">
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
            </div>
        </div>
        </div>            
        </>
    )
}

export default Candidate