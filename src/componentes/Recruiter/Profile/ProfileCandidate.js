import {React, useEffect, useState} from "react";
import { FaPhone,FaMailBulk } from "react-icons/fa"; 
import {FaCheck, FaEyeSlash} from 'react-icons/fa'
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import useJob from '../../../hooks/useJob'
import { myId } from "../../lib/myLib";
import './scss/style.scss'
export const Candidate=()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const idCandidate = urlParams.get('c');
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter,dataLocalStorage,setDataLocalStorage]=useJob();

    console.log(idCandidate)
    const [dataSkill, setDataSkill] = useState([]);
    const [infoCandidate,setInfoCandidate]=useState({}) 
    // const [infoUserComparative,setInfoUserComparative]=useState({})
    const queryByUsers= async()=>{
        try {
            const response= await axios.get(endpointsGral.userURL)
            const dataUsers=response.data['item']
            const objUsers= dataUsers['docs']
            // setInfoUserComparative(objUsers)

            const userFind=objUsers.find((value) => value._id===idCandidate)
            setInfoCandidate(userFind)

        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        queryByUsers()
    },[])

    const fetchSkill = async () => {
        const response = await axios.get(endpointsGral.jobSkill);
        const infoSkill = response.data["item"];
        setDataSkill(infoSkill["docs"]);
      };
      useEffect(() => {
        fetchSkill()
      }, []);

    console.log('userCompartive MAP',infoCandidate)
    console.log('skills',dataSkill)
  
    return(
        <>
        <div className='card-body'>
        <h1  className="text-start">Perfil Profesional</h1>
        <div className="row container_form_General">
            <div className="col-4 container_image">
                <img src={infoCandidate.avatar_url} alt=""/>
                <div className="">  
                  <p className="text-justify">{`${infoCandidate.name} ${infoCandidate.last_name}`}</p>
                  <p className="text-justify"><FaMailBulk/> { infoCandidate.email}</p>
                </div>
                <div className="buttons_actions d-flex justify-content-center gap-3">  
                <button type="button" className="buttons btn btn-outline-success"><FaCheck className="icon_check"/></button> 
                <button type="button" className="buttons btn btn-outline-secondary"><FaEyeSlash className="icon_eyeSlash"/></button>
                </div>
            </div>
            <div className="col">
                <div className="row mb-4">
                    <h2 className="text-start">Información General</h2>
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label text-start" for="form6Example1">Nombre</label>
                        <p>{`${infoCandidate.name}`}</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label text-start" for="form6Example1">Apellido</label>
                        <p>{infoCandidate.last_name}</p>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label text-start" for="form6Example1">Edad</label>
                        <p>{infoCandidate.age}</p>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Experiencia</label>
                            <p>{infoCandidate.working_experience}</p>
                        </div>
                    </div>
                </div>
                <h3>Lista de skills agregadas</h3>
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
                            {infoCandidate?.user_skills?.map((skill,i)=>{
                                console.log('info can',skill)
                                let myDataSkill=null;
                                myDataSkill= dataSkill?.find(item=>item._id===skill.skill);
                                if(!myDataSkill){
                                myDataSkill= dataSkill?.find(item=>item._id===skill);
                                }
                                
                                return (
                                    <tr key={myId()}>
                                    <th scope="row">{i+1}</th>
                                    <td>{myDataSkill?.name}</td>
                                    <td>{myDataSkill?.level}</td>
                                    </tr>
                                )
                            })}
                        
                        </tbody>
                  </table>
                </div>
                {/* <div className="buttons_actions d-flex justify-content-end gap-3">  
                    <FaCheck className="icon_check"/>
                    <FaEyeSlash className="icon_eyeSlash"/>
                    {/* <button type="button" className="buttons btn btn-success text-light">Aceptar</button> 
                    <button type="button" className="buttons btn btn-danger text-light">Ignorar</button> }
                </div> */}
            </div>
        </div>
        </div>            
        </>
    )
}

export default Candidate