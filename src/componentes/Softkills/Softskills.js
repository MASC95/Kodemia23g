import React from "react";
import './scss/style.scss'
import TableSkill from "./TableSkill";
import { FaEdit, FaTrash } from "react-icons/fa";
export const Softskills=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
            <h1>Soft Skill</h1>
        <div className="row softskills">
            <div className="col">
                  <h1>Agregar skill</h1>
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
                        <button type="button" className="buttons btn btn-outline-info">Guardar</button>               
                    </div>
                </form>
            </div>
            <TableSkill/>
        </div>
      
        </div>

        </>
    )
}
export default Softskills