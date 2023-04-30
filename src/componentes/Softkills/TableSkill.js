import React from "react";
import './scss/style.scss'
import { FaEdit, FaTrash } from "react-icons/fa";
export const TableSkill=()=>{
    return(
        <>
          <div className="col">
                <h2>Lista de skills agregadas</h2>
            <table className="table">
                <thead className="thead-dark">
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
                    <td className="options_buttons"><FaEdit/> <FaTrash/>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default TableSkill