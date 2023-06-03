import React, { useState } from 'react';
import axios from 'axios';
import { endpoints } from '../EndpointsCandidate/endpoints';
const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleSaveSkills = () => {
    const newSkill = {
      skill: selectedSkill,
      level: selectedLevel
    };

    setSkills([...skills, newSkill]);
    setSelectedSkill('');
    setSelectedLevel('');
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleEditSkill = (index, newLevel) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = newLevel;
    setSkills(updatedSkills);
  };

  const handleSendSkillsToAPI = () => {
    axios.post(endpoints.profileAddSkills, skills)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Agregar Skills</h2>
      <div className="mb-3">
        <label htmlFor="skillDropdown" className="form-label">Skills</label>
        <select id="skillDropdown" className="form-select" value={selectedSkill} onChange={handleSkillChange}>
          <option value="">Selecciona una skill</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="levelDropdown" className="form-label">Nivel</label>
        <select id="levelDropdown" className="form-select" value={selectedLevel} onChange={handleLevelChange}>
          <option value="">Selecciona un nivel</option>
          <option value="Básico">Básico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSaveSkills}>Guardar Skills</button>
      <table className="table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Nivel</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.skill}</td>
              <td>{skill.level}</td>
              <td>
                <button className="btn btn-sm btn-primary" onClick={() => handleEditSkill(index, 'Nuevo Nivel')}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteSkill(index)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={handleSendSkillsToAPI}>Enviar Skills a la API</button>
    </div>
  );
};

export default SkillsSection;