import React from "react";
import './scss/style.scss'
import Badge from 'react-bootstrap/Badge'
import { FaRoute, FaGlobe, FaCalendar, FaReadme } from "react-icons/fa";
import TableSkill from "../Softkills/TableSkill";
export const Vacancy=()=>{
    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
            <h1>Web Developer</h1>
            <div className="row vacancy">
                <div className="col">
                    <div className="col">   
                    <div className="img_vacancy">
                    <img className="container w-50" src="https://img.freepik.com/vector-gratis/plantilla-diseno-pluma-degradada_23-2149837194.jpg?w=996&t=st=1682803272~exp=1682803872~hmac=799286ca0213312fcf0be5176cbba2eb8827da193a8e6457ce2a036643cecd3e" />
                    </div>
                    <div className="buttons">
                        <div className="row">
                            <div className="col"><button type="button" class="btn btn-outline-info">Aplicar</button></div>
                            <div className="col"><button type="button" class="btn btn-info">Cancelar</button></div>
                        </div>
                    </div>
                    </div>
                    <div className="col generalidades">  
                    <div className="row">
                        <div className="col">
                        <span><FaGlobe/> Web</span>
                        <span><FaReadme/> Hybrido</span>
                        <span><FaCalendar/> Monday-Friday</span>
                        </div>
                        <div className="col">
                        <span><FaRoute/> Tucson</span>
                        <span>$1500.00</span>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                        <h2>Vacante</h2>  
                        <p>Lorem......</p>
                    </div>
                </div>
                <div className="col ">
                    <h2>Skills Solicitadas</h2>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Skill</th>
                                <th scope="col">Nivel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

        </>
    )
}

export default Vacancy