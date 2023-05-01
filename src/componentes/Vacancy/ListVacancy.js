import React from "react";
import {FaEdit, FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const ListVacancy=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Titulo</th>
                    <th scope="col">Ubicación</th>
                    <th scope="col">Posición</th>
                    <th scope="col">Salario</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {/* <th scope="row">1</th> */}
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="options_buttons d-flex justify-content-center gap-3">
                        <Link to={`/recruiter-vacancy/edit/id`}>
                           <button type="button" class="btn btn-outline-info"><FaEdit/></button>
                        </Link>
                           <button type="button" class="btn btn-info"><FaTrash/></button>
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