import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { myId } from "../../../lib/myLib";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import Button2 from "../../../Candidate/Buttons/Button2";
import Swal from "sweetalert2";
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

  useEffect(() => {
    // console.log("dataExperience:..", dataExperience);
  }, [dataExperience]);

  const handleExperience = () => {
    // console.log("Agregando Experiencia:..", addExp);
    if (addExp.description === "" || addExp.position === "") {
      Swal.fire("Agrega experiencia!", "Valor vacio", "error");
    } else {
      setDataExpirience([...dataExperience, addExp]);
      setAddExp(initAddExp);
      Swal.fire("Elemento agregado!", "listo!", "success");
    }
    // console.log("...Aquí se agrega experiencia---");
  };

  const handleDeleteExp = (index) => {
    Swal.fire({
      title: "Eliminar Elemento",
      text: "Estas seguro de eliminar este elemento?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("Borrar el index:...", index);
        const tempData = [...dataExperience];
        const newData = tempData.filter((_, i) => i !== index);
        // console.log("newData:..", newData);
        setDataExpirience([...newData]);
        Swal.fire("Eliminado!", "Eliminado correctamente!", "success");
      }
    });
  };

  return (
    <div
      style={{
        background: "rgba(0, 189, 214, 0.18)",
        borderRadius: "16px",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        padding: "50px",
      }}
    >
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
        <label
          htmlFor="position"
          className="form-label mb-3"
          style={{
            color: "#498BA6",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
          Puesto:
        </label>
        <input
          id="position"
          name="position"
          value={addExp.position}
          className="form-control mb-3"
          type="text"
          onChange={handleChange}
        />
        <label
          htmlFor="description"
          className="form-label "
          style={{
            color: "#498BA6",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}
        >
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
          className=" button-2 mb-2 mt-2"
          type="button"
          style={{
            width: "150px",
            fontSize: "10px",
            padding: "15px",
          }}
          onClick={handleExperience}
        >
          <FaPlus /> Añadir Experiencia
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Descripción</th>
            <th>Botones de acción</th>
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
                    onClick={() => handleDeleteExp(index)}
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
