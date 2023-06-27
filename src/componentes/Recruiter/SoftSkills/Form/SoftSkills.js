import React, { useEffect, useState } from "react";
import "../scss/style.scss";
import swal from "sweetalert";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
import { myId } from "../../../lib/myLib";
import {FaTrash, FaPlus} from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Softskills = ({setListSkills,isCandidate,skillsCandidate}) => {
  const [dataSkill, setDataSkill] = useState([]);
  const [selectSkill, setSelectSkill] = useState("select");
  const [skillTemp, setSkillTemp] = useState(skillsCandidate?skillsCandidate:[]);

  const fetchSkill = async () => {
    const response = await axios.get(endpointsGral.jobSkill);
    const infoSkill = response.data["item"];
    setDataSkill(infoSkill["docs"]);
  };
  useEffect(() => {
    fetchSkill();
    
  }, []);

  

  useEffect(()=>{
     if(skillTemp.length===0){
       if(skillsCandidate.length>0){
         console.log('skillsCandidate:..',skillsCandidate);
         setSkillTemp([...skillsCandidate])
       }
     }
   },[skillsCandidate]) 

  
  

   useEffect(()=>{
     if(skillTemp.length>0){
       setListSkills([...skillTemp])
     }else{
       setListSkills([])
     }
   },[skillTemp])

  const handleSkillChange = (event) => {
    const value = event.target.value;
    // console.log('Seleccionando skill:..',value);
    setSelectSkill(value);
  };

  const onFormSubmitCandidate = (e)=>{
    e.preventDefault();
    // console.log('Agregando skill:',selectSkill);
    if(selectSkill==='select'){
      swal({
        title: "Favor de Seleccionar tu Skill !!",
        icon: "error",
        button: "ok!",
    });
    return
    }
    const isRepeatedSkill= skillTemp.find(item=>item._id===selectSkill);

    if(isRepeatedSkill){
      swal({
        title: "Ya hemos agregado esa skill!",
        icon: "error",
        button: "ok!",
    });
    }else{
      const skillDB = dataSkill.find(item=>item._id===selectSkill);
      // console.log('Encontramos skill:',skillDB);
      setSkillTemp([...skillTemp,skillDB])
    }

  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newSkill = {
      skill: selectSkill,
    };
    const dataRepet= skillTemp?.find(item=>item.skill===newSkill.skill);
    if(dataRepet){
        swal({
            title: "Ya hemos agregado esa skill!",
            icon: "error",
            button: "ok!",
        });
    }else{
        setSkillTemp([...skillTemp, newSkill]);
    }
  };

//   console.log("arr de skills", skillTemp);

  const handleDeleteSkill = (index) => {
    const skillToDelete = skillTemp[index];

    if (skillToDelete) {
      const updatedSkills = skillTemp.filter((_, i) => i !== index);
      setSkillTemp(updatedSkills);
    } else {
      // console.log("error al eliminar");
    }
  };
  return (
    <>
        <div className="row softskills">
          <div className="col">
            < >
              <div className="row d-flex">
                <label className="form-label text-dark" htmlFor="form6Example1">
                  Elige las SoftSkill de tu {!isCandidate?'vacante':'perfil'}:
                </label>
                <div className="col-10">
                  <div className="form-outline">
                    <select
                      className="form-control"
                      id="selectSkill"
                      value={selectSkill}
                      onChange={handleSkillChange}
                    >
                      <option value={'select'}>Select</option>
                      {dataSkill.map((item, index) => {
                        const id = item._id;
                        const skillComplete = `${item.name} - ${item.level}`;
                        return <option key={myId()} value={`${id}`}>{skillComplete}</option>;
                      })}
                    </select>
                  </div>
                </div>
                  <div className="col-2 buttons_actions gap-3">
                    <button type="button" onClick={isCandidate?onFormSubmitCandidate:onFormSubmit} className="buttons btn btn-info text-light">
                      <FaPlus> Agregar </FaPlus> 
                    </button>
                  </div>
              </div>
            </>
            {
                !isCandidate
                &&
                  <Link to={'/Dashboard-Recruiter/softskill-addNew'} className="text-black d-flex justify-content-start mb-3 mt-2 fs-6">
                      <p className="">Crear nueva SoftSkill</p> 
                  </Link>          
                }
          </div>

          {/* table of skills */}
          <div className="col">
            <label className="form-label text-dark" htmlFor="">Lista de SoftSkill agregadas</label>
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th className="text-center"scope="col">Skill</th>
                    <th className="text-center"scope="col">Nivel</th>
                    <th className="text-center"scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
              {skillTemp.map((skill, index) => {
                let myDataSkill =null; 
                if(!isCandidate){
                  myDataSkill= dataSkill.find(item=>item._id===skill.skill);
                }else{
                  myDataSkill=skill
                }
                
                //console.log('myDataSkill:..',myDataSkill,'skill:..',skill);
                return (
                  <tr key={myId()}>
                    <td>{index + 1}</td>
                    <td>{myDataSkill?.name}</td>
                    <td>{myDataSkill?.level}</td>
                    <td className="text-center">
                    <button type="button" className="buttons btn btn-outline-danger">
                       <FaTrash className="icon_trash" onClick={() => handleDeleteSkill(index)}/>  
                    </button> 
                    {/* <FaTrash className="icon_trash"  onClick={() => handleDeleteSkill(index)}/> */}
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
            </div>

          {/* Table Skills */}
        </div>
    </>
  );
};
export default Softskills;
