import React from "react";
import {FaEdit, FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './style.scss'

export const ListVacancy=()=>{
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
                    <th scope="col">TIPO DE TRABAJO</th>
                    <th scope="col">MODALIDAD</th>
                    <th scope="col">SALARIO</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="options_buttons d-flex justify-content-center gap-3">
                        <Link to={`/recruiter-vacancy/edit/id`}>
                            <a href=""><FaEdit className="icon_edit"/></a>
                        </Link>
                           <a href=""><FaTrash className="icon_trash"/></a>
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
export default ListVacancy