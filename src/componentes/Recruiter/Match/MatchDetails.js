import {useState,useEffect} from "react";
import {FaEye, FaCheck} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
export const MatchDetails=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const idVacancy = urlParams.get('m');
    const [dataByUserCandidate,setDataByUserCandidate]=useState([])

    const fetchForMatch=async()=>{
        try {
            const endpointURL=`${endpointsGral.vacancyURL}${idVacancy}`;
            const response= await axios.get(endpointURL)
            setDataByUserCandidate(response.data.applicants);
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchForMatch()
    },[])
    console.log('dataUser',dataByUserCandidate)
    return(
        <>
        <div className='card-body'>
            <h1 className="text-start">Match's 'Nombre de la vacante'</h1>
            <>
           <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">BACHELOR</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataByUserCandidate&&dataByUserCandidate?.map((item,index)=>(
                                <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.bachelor}</td>
                                <td className="options_buttons d-flex justify-content-center gap-3">
                                    <Link to={`/Dashboard-Recruiter/profile-candidato/?c=${item._id}`} className="icon_eye">
                                       <FaEye className="icon_eye"/>
                                    </Link>
                                    <FaCheck className="icon_check"/>
                                </td>
                                </tr> 
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
      
        </div>    
        </>
        </div>
        <div className="d-flex w-100 justify-content-end p-4">
            <Link to='/Dashboard-Recruiter/panel-phases'>
              <button type="button" className="btn btn-info text-light">Panel de Reclutamiento</button>
            </Link>
        </div>
                        
        </>
    )
}
export default MatchDetails