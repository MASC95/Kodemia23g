import {React,useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import {FaEdit, FaEye} from 'react-icons/fa'
import Modalstatus from "../ModalStatus/Modalstatus";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import { myId } from "../../lib/myLib";

export const Match=()=>{
    const [dataInformation, setDataInformation]=useState([])
    const queryMatch= async()=>{
        try {
            const response= await axios.get(endpointsGral.vacancyURL)
            const datas=response.data['item']
            setDataInformation(datas['docs'])
            console.log(response.data)
        } catch (error) {
            console.log(error) 
        }
    }
    useEffect(()=>{
        queryMatch()
    },[])
    return(
        <>
         <div className='card-body'>
          <h1 className="text-start"><b>Match's</b></h1>
            {/* <ListMatches/> */}
            {/* <div className="container mt-2 p-5 w-100 " id="formGral"> */}
                <div className="row softskills">
                    <div className="col">
                    <table className="table">
                        <thead className="thead-dark bg-body-secondary">
                            <tr>
                            <th scope="col">#</th>
                            <th className=" text-center" scope="col">TITULO</th>
                            <th className=" text-center" scope="col">STATUS</th>
                            <th className=" text-center" scope="col">CANDIDATOS</th>
                            <th scope="col">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataInformation?.map((item,index)=>(         
                            <tr className="text-center" key={myId()}>
                            <th scope="row">{index+1}</th>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>{item.applicants.length}</td>
                            <td className="options_buttons d-flex text-center" >
                            <Link to={`/Dashboard-Recruiter/details-match/?m=${item._id}`}>
                            <button type="button" className="buttons btn btn-outline-info"><FaEye className="icon_eye1"/></button>
                            </Link>
                                <Modalstatus/>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
      
        {/* </div>   */}
         </div>           
        </>
    )
}
export default Match