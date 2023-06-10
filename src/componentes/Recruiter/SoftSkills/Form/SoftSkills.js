import React, { useEffect } from "react";
import "../scss/style.scss";
import TableSkills from "../TableSkills";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
import { myId } from "../../../lib/myLib";

export const Softskills = () => {
  const [dataSkill, setDataSkill] = useState([]);
  const [selectSkill, setSelectSkill] = useState("");
  const [skillTemp, setSkillTemp] = useState([]);

  const fetchSkill = async () => {
    const response = await axios.get(endpointsGral.jobSkill);
    const infoSkill = response.data["item"];
    setDataSkill(infoSkill["docs"]);
  };
  useEffect(() => {
    fetchSkill();
  }, []);
  const handleSkillChange = (event) => {
    const value = event.target.value;
    setSelectSkill(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newSkill = {
      skill: selectSkill,
    };
    console.log("new arr", newSkill);
    setSkillTemp([...skillTemp, newSkill]);
  };

  console.log("arr de skills", skillTemp);

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
      <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
          <div className="col">
            <h2>Agregar skill</h2>
            <form onSubmit={onFormSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" for="form6Example1">
                      Skills
                    </label>
                    <select
                      className="form-control"
                      id="selectSkill"
                      value={selectSkill}
                      onChange={handleSkillChange}
                    >
                      {dataSkill.map((item, index) => {
                        const id = item._id;
                        const skillComplete = `${item.name} - ${item.level}`;
                        return <option value={`${id}`}>{skillComplete}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="buttons_actions">
                <button
                  type="submit"
                  className="buttons btn btn-info text-light"
                >
                  Agregar Skill
                </button>
              </div>
            </form>
          </div>

          {/* table of skills */}
          <table className="table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Nivel</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {skillTemp.map((skill, index) => {
                const myDataSkill= dataSkill.find(item=>item._id===skill.skill);
                console.log('myDataSkill:..',myDataSkill,'skill:..',skill);
                return (
                  <tr key={myId()}>
                    <td>{index + 1}</td>
                    <td>{myDataSkill?.name}</td>
                    <td>{myDataSkill?.level}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteSkill(index)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* <TableSkills/> */}
        </div>
      </div>
    </>
  );
};
export default Softskills;
