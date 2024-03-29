import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { myId } from "../../../lib/myLib";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { useEffect } from "react";
import Button2 from "../../../Candidate/Buttons/Button2";
import Swal from "sweetalert2";
const initAddExp = {
  company:"",
  period:"",
  position: "",
  description: "",
};

const TableExperience = ({ dataExperience, setDataExpirience }) => {
  const [addExp, setAddExp] = useState(initAddExp);
  const [isEditing, setIsEditing] = useState(false);
  const [dataEditing, setDataEditing] = useState({});

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setAddExp({
      ...addExp,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    //console.log("dataExperience:..", dataExperience);
  }, [dataExperience]);



  const handleExperience = () => {
    // console.log("Agregando Experiencia:..", addExp);
   
    if (addExp.description === "" || addExp.position === "") {
      Swal.fire("Agrega experiencia!", "Valor vacio", "error");
    } else {
      setDataExpirience([...dataExperience, addExp]);
      setAddExp(initAddExp);
      Swal.fire("Elemento agregado!", "listo!, No olvides guardar tus cambios al final.", "success");
    }
    //console.log("...Aquí se agrega experiencia---");
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
        //console.log("Borrar el index:...", index);
        const tempData = [...dataExperience];
        const newData = tempData.filter((_, i) => i !== index);
        //console.log("newData:..", newData);
        setDataExpirience([...newData]);
        Swal.fire("Eliminado!", "Eliminado correctamente!, No olvides guardar tus cambios al final.", "success");
      }
    });
  };

  const handleEditExp =(index)=>{
    setIsEditing(true)

    // console.log(index)
    let tempEdit=dataExperience[index]
    setDataEditing({...tempEdit})
      setAddExp({
        company:tempEdit.company||"",
        period:tempEdit.period || "",
        position:tempEdit.position || "",
        description:tempEdit.description || "",
      })
  }
  const updateExp=()=>{
    // console.log('hola')
    // console.log('edit',dataEditing)
    // console.log('Datas',dataExperience)

    const result=dataExperience.map(item=>{
      if(item._id===dataEditing._id){
        item.company=addExp.company;
        item.period=addExp.period
        item.position=addExp.position
        item.description=addExp.description
      }
      return item
    })
      setDataExpirience([...result]);
      Swal.fire("Experiencia Editada!", "No olvides guardar tus cambios al final!", "success");

      setIsEditing(false)
      addExp.company='';
      addExp.period='';
      addExp.position='';
      addExp.description='';
  }

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
      <div className="row mb-1">
          <label
            htmlFor="position"
            className="form-label mb-3"
            style={{
              color: "#498BA6",
              fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
            }}
          >
            Nombre de la Empresa:
          </label>
          <input
            id="company"
            name="company"
            value={addExp.company}
            className="form-control mb-3"
            type="text"
            onChange={handleChange}
          />
        <div className="col p-1">
        <div className="form-outline bg-gray">
          <label
            htmlFor="position"
            className="form-label mb-3"
            style={{
              color: "#498BA6",
              fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
            }}
          >
            Período:
          </label>
          <input
            id="period"
            name="period"
            value={addExp.period}
            placeholder="MM-AAAA / MM-AAAA"
            className="form-control mb-3"
            type="text"
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="col p-1">
          <div className="form-outline bg-gray">
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
          </div>
        </div>
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
          <textarea
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
            onClick={
              isEditing?updateExp:
              handleExperience
            }
          >
           {
            isEditing?'Editar Experiencia':'Añadir Experiencia'
           }
          </button>
      </div>
   
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Puesto</th>
            <th>Descripción</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {dataExperience?.map((item, index) => {
            return (
              <tr key={myId()}>
                <td>{item.company}</td>
                <td>{item.position}</td>
                <td>{item.description}</td>
                {/* <td>{item.description}</td> */}
                <td>
                <div className="d-flex justify-content-around">
                  <span
                    className="btn btn-outline-danger"
                    name={index}
                    onClick={() => handleDeleteExp(index)}
                  >
                    <FaTrash />
                  </span>
                  <span
                    className="btn btn-outline-success"
                    name={index}
                    onClick={() => handleEditExp(index)}
                  >
                    <FaEdit style={{height:'20px'}} />
                  </span>
                </div>
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
