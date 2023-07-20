import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import { myId } from "../../lib/myLib";



//muestra las skills de la vacante 
export const ViewTableSkills=({listSkils})=>{
    const [dataSkils, setDataSkils] = useState([]);

    useEffect(() => {
      //console.log('listSkills:..',listSkils);
        //cargarDatos();
    }, [])
    
    const cargarDatos = async()=>{
        try {
            if(listSkils.length>0){
                const tempArray =[];
            for(let i =0; i<listSkils?.length; i++){
                const response = await axios.get(`${endpointsGral.jobSkill}/${listSkils[i]}`);
                //console.log('responseDataJobSkill:..',response);
                if (response?.data?.infoJobSkill){
                    //console.log('responseDataJobSkill:..',response);
                    const {name,level}= response.data.infoJobSkill;
                   tempArray.push({
                    name,
                    level
                   })
                }
            }
            setDataSkils(
                [...tempArray]
                
            )
        }
            
            //
        } catch (error) {
            //console.log(error);
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
                    
                    {listSkils.map((item,i)=>{
                        return(
                        <tr key={myId()}>
                         <th scope="row">{i+1}</th>
                         <td>{item.name}</td>
                         <td>{item.level}</td>
                         </tr>
                        )
                        
                    })}    
                   
                 
                   
                </tbody>
            </table>
            </div>
        </>
    )
}
export default ViewTableSkills