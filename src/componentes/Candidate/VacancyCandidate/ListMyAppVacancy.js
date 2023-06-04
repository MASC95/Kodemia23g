import React from "react";
import Badge from "react-bootstrap/Badge"
import './style.scss'
import { endpoints } from "../EndpointsCandidate/endpoints";
import axios from "axios";
import { useState,useEffect } from "react";


//Muestra las vacantes a las que ha aplicado el candidato

export const ListMyAppVacancy=()=>{

    useEffect(() => {
      cargarDatos();
       
    }, [])
    

    const cargarDatos = async()=>{
        try {
            const response = await axios.get(endpoints.candidateMyVacancies);
            console.log('responseMyVacancies:..',response);
        } catch (error) {
            console.log(error);
        }
    }

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
                    <th scope="col">ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="options_buttons justify-content-center gap-3">
                    <Badge bg="info" className="badge_state1">APLICANDO </Badge>
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
export default ListMyAppVacancy