import React from "react";
import './scss/style.scss'
import {Link} from 'react-router-dom'
import { FaEdit, FaTrash } from "react-icons/fa";
export const TableSkills=()=>{
    return(
        <>
          <div className="col">
                <h2>Lista de skills agregadas</h2>
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Skill</th>
                    <th scope="col">Nivel</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
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
        </>
    )
}

export default TableSkills