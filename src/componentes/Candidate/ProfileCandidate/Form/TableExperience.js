import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { myId } from "../../../lib/myLib";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useEffect } from "react";

const initAddExp = {
  position: "",
  description: "",
};

const TableExperience = ({ dataExperience, setDataExpirience }) => {
  const [addExp, setAddExp] = useState(initAddExp);

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setAddExp({
      ...addExp,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    console.log('dataExperience:..',dataExperience)
  },[dataExperience])

  const handleExperience = () => {
    console.log("Agregando Experiencia:..", addExp);
    if (addExp.description === "" || addExp.position === "") {
      return;
    }
    setDataExpirience([...dataExperience, addExp]);
    setAddExp(initAddExp);
  };

  const handleDeleteExp = (index) => {
    console.log("Borrar el index:...", index);
    const tempData= [...dataExperience];
    const newData= tempData.filter((_,i)=>i!==index);
    console.log('newData:..',newData);
    setDataExpirience([...newData]);

  };

  return (
    <div>
      <h2
        className="text-center mt-4 mb-4 fs-1 "
        style={{
          color: "rgb(73, 139, 166)",
          textShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 1px 3px",
          fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
        }}
      >
        Experiencia Laboral
      </h2>
      <div className="">
        <label htmlFor="position" className="form-label">
          Puesto:
        </label>
        <input
          id="position"
          name="position"
          value={addExp.position}
          className="form-control"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="description" className="form-label">
          Descripción:
        </label>
        <input
          id="description"
          name="description"
          value={addExp.description}
          className="form-control"
          type="text"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleExperience}
        >
          <FaPlus /> Sumar Experiencia
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Decripcion</th>
          </tr>
        </thead>
        <tbody>
          {dataExperience?.map((item, index) => {
            return (
              <tr key={myId()}>
                <td>{item.position}</td>
                <td>{item.description}</td>
                <td>
                  <span
                    className="btn btn-outline-danger"
                    name={index}
                    onClick={()=>handleDeleteExp(index)}
                  >
                    <FaTrash />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableExperience;
