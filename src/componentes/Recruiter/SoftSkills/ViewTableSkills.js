import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";



//muestra las skills de la vacante 
export const ViewTableSkills=({listSkils})=>{
    const [dataSkils, setDataSkils] = useState([]);

    useEffect(() => {
      console.log('listSkills:..',listSkils);
        cargarDatos();
    }, [])
    
    const cargarDatos = async()=>{
        try {
            for(let i =0; i<listSkils.length; i++){
                const response = await axios.get(`${endpointsGral.jobSkill}/${listSkils[i]}`);
                if (response?.data?.infoJobSkill){
                    const {name,level}= response.data.infoJobSkill;
                    setDataSkils(
                        [...dataSkils, {name,level}]
                    )
                }
            }
            
            //console.log('responseDataJobSkill:..',response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
             <div className="col">
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
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
        </>
    )
}
export default ViewTableSkills