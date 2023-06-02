import React from "react";
import {Link} from 'react-router-dom'
import {FaEdit, FaEye} from 'react-icons/fa'
import Modalstatus from "../ModalStatus/Modalstatus";
import './style.scss'
export const ListMatches=()=>{
    return(
        <>
           <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">TITULO</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">CANDIDATOS</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td className="options_buttons  d-flex justify-content-center gap-3">
                      <Link to={`/Dashboard-Recruiter/details-match`}>
                        <a href=""><FaEye/></a>
                      </Link>
                        <Modalstatus/>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
      
        </div>    
        </>
    )
}
export default ListMatches