import {useState,useEffect} from "react";
import {FaEye, FaCheck, FaEyeSlash} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import { myId } from "../../lib/myLib";
import './style.scss'
export const MatchDetails=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const idVacancy = urlParams.get('m');
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
    const applicants= dataByUserCandidate.applicants
    const skills= dataByUserCandidate.job_skills
    
    

    
    console.log('dataUser',dataByUserCandidate)
    return(
        <>
        <div className='card-body'>
           {/* <div className="container mt-2 p-5 w-100 " id="formGral"> */}
            <h2 className="text-start">Titulo: {dataByUserCandidate.title}</h2>
          <div className="row softskills">
            <div className="col">
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th className="text-center" scope="col">NOMBRE</th>
                    <th className="text-center" scope="col">ESCOLARIDAD</th>
                    <th className="text-center" scope="col">COMPATIBILIDAD</th>
                    <th  className="text-center"scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {                        
                        applicants&&applicants?.map((item,index)=>(

                                <tr key={myId()} className="text-center">
                                <th scope="row">{index+1}</th>
                                <td>{`${item.name} ${item.last_name}`}</td>
                                <td>{item.bachelor}</td>
                                <td>30 %</td>
                                <td className="options_buttons d-flex justify-content-center gap-3 text-center">
                                    <Link to={`/Dashboard-Recruiter/profile-candidato/?c=${item._id}`}>
                                    <button type="button" className="buttons btn btn-outline-info"><FaEye className="icon_eye1"/></button> 
                                    </Link>
                                    <button type="button" className="buttons btn btn-outline-success"><FaCheck className="icon_check1"/></button> 
                                    <button type="button" className="buttons btn btn-outline-secondary"><FaEyeSlash className="icon_eyeSlash1"/></button>
                                </td>
                                </tr> 
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
      
           {/* </div>     */}
        </div>
        <div className="d-flex w-100 justify-content-end p-4">
            <Link to={`/Dashboard-Recruiter/panel-phases?v=${idVacancy}`}>
            </Link>
        </div>
                        
              <button type="button" className="btn btn-info text-light">Panel de Reclutamiento</button>
        </>
    )
}
export default MatchDetails