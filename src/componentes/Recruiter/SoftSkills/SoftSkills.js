import React from "react";
import './scss/style.scss'
import TableSkills from "./TableSkills";
import { FaEdit, FaTrash } from "react-icons/fa";
export const Softskills=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
                  <h2>Agregar skill</h2>
                <form>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Skills</label>
                            <select className="form-control" id="skill">
                                <option> Selecciona</option>
                                <option>Python</option>
                                <option>JavaScript</option>
                                <option>Java</option>
                                <option>C#</option>
                                <option>C++</option>
                                <option>Go</option>
                                <option>R</option>
                                <option>Swift</option>

                            </select>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2">Nivel</label>
                            <select className="form-control" id="level">
                                <option> Selecciona</option>
                                <option> Basico</option>
                                <option> Intermedio</option>
                                <option> Avanzado</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="buttons_actions">  
                        <button type="button" className="buttons btn btn-info text-light">Guardar Skill</button>               
                    </div>
                </form>
            </div>
            <TableSkills/>
        </div>
      
        </div>

        </>
    )
}
export default Softskills