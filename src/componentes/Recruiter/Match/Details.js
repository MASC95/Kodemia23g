import React from "react";
import {FaEye, FaCheck} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './style.scss'
export const Details=()=>{
    return(
        <>
           <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">ROLE</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="options_buttons d-flex justify-content-center gap-3">
                        <Link to={`/recruiter-vacancy/id/candidate`}>
                            <a href=""><FaEye className="icon_eye"/></a>
                        </Link>
                           <a href=""><FaCheck className="icon_check"/></a>
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
export default Details