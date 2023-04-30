import React from "react";
import './scss/style.scss'
import { FaEdit, FaTrash } from "react-icons/fa";
export const ListVancancy=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
            <h1>Vacantes</h1>
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
                    <td className="options_buttons">
                    <button type="button" class="btn btn-outline-info">Info</button>
                    <button type="button" class="btn btn-info">Info</button>
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

export default ListVancancy