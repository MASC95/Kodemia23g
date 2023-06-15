import  { useEffect , useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
import { myId } from "../../../lib/myLib";
import {FaTrash, FaPlus} from 'react-icons/fa'
import { Link } from "react-router-dom";
export const EditSkill=({listSkills,setListSkills})=>{

  console.log('listSkills',listSkills)

  const [dataSkill, setDataSkill] = useState([]);
  const [selectSkill, setSelectSkill] = useState("select");
  const [skillTemp, setSkillTemp] = useState(listSkills?listSkills:[]);


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
      if(listSkills.length>0){
        console.log('skillsCandidate:..',listSkills);
        setSkillTemp([...listSkills])
      }
    }
  },[listSkills]) 

 
 

  useEffect(()=>{
    if(skillTemp.length>0){

      setListSkills([...skillTemp])
    }else{
      setListSkills([])
    }
    console.log('skillTemp:..',skillTemp)
  },[skillTemp])
 
 

  const handleSkillChange = (event) => {
    const value = event.target.value;
    setSelectSkill(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('selectSkill:..',selectSkill);
    const newSkill = {
      skill: selectSkill,
    };

    if(newSkill.skill==='select'){
      swal({
        title: "Favor de Seleccionar una Skill !!",
        icon: "error",
        button: "ok!",
    });
    return
    }
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
      console.log("error al eliminar");
    }
  };
  return (
    <>
        <div className="row softskills">
          <div className="col">
            <form >
              <div className="row d-flex">
                <label className="form-label" htmlFor="form6Example1">
                  Elige las SoftSkill de tu:
                </label>
                <div className="col-10">
                  <div className="form-outline">
                    <select
                      className="form-control"
                      id="selectSkill"
                      value={selectSkill}
                      onChange={handleSkillChange}
                    >
                      <option value="select">Select</option>
                      {dataSkill.map((item, index) => {
                        const id = item._id;
                        const skillComplete = `${item.name} - ${item.level}`;
                        return <option key={myId()}  value={`${id}`}>{skillComplete}</option>;
                      })}
                    </select>
                  </div>
                </div>
                  <div className="col-2 buttons_actions sm">
                    <button type="button" onClick={onFormSubmit} className="buttons btn btn-info text-light">
                      <FaPlus> </FaPlus>
                    </button>
                  </div>
              </div>
            </form>
                  <Link to={'/Dashboard-Recruiter/softskill-addNew'} className="text-black d-flex justify-content-end mb-3 fs-6">
                      <p className="">Crear nueva SoftSkill</p> 
                  </Link>          
              
          </div>

          {/* table of skills */}
          <div className="col">
            <label className="form-label" htmlFor="">Lista de SoftSkill agregadas</label>
            <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Skill</th>
                    <th scope="col">Nivel</th>
                    <th className="text-center"scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
              {skillTemp?.map((skill, index) => {
                 let myDataSkill=null;
                 myDataSkill= dataSkill?.find(item=>item._id===skill.skill);
                 if(!myDataSkill){
                  myDataSkill= dataSkill?.find(item=>item._id===skill);
                 }
                // console.log('myDataSkill:..',myDataSkill,'skill:..',skill);
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

}
export default EditSkill