import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { myId } from "../../../lib/myLib";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";
import DataTable, { createTheme } from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

const initAddExp = {
  task: "",
};

const ToDoList = ({ dataActivities, setDataActivities }) => {
  const [addTask, setAddTask] = useState(initAddExp);

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setAddTask({
      ...addTask,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    //console.log('dataActivities:..',dataActivities)
  },[dataActivities])

  const handleExperience = () => {
    console.log("Agregando Actividad:..", addTask);
    if (addTask.task === "") {
      Swal.fire("Agrega una actividad!", "Valor vacio", "error");
    } else {
      setDataActivities([...dataActivities, addTask]);
      setAddTask(initAddExp);
      Swal.fire("Actividad agregada!", "listo!", "success");
    }
  };

  const handleDeleteExp = (index) => {
    Swal.fire({
      title: "Eliminar actividad",
      text: "Estas seguro de eliminar esta actividad?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tempData = [...dataActivities];
        const newData = tempData.filter((_, i) => i !== index);
        console.log("newData:..", newData);
        setDataActivities([...newData]);
        Swal.fire("Eliminado!", "Actividad eliminada!", "success");
      }
    });
    // ----------------------------------------
    // console.log("Borrar el index:...", index);
    // const tempData= [...dataActivities];
    // const newData= tempData.filter((_,i)=>i!==index);
    // console.log('newData:..',newData);
    // setDataActivities([...newData]);
  };
  const data = dataActivities?.map((item, index) => {
    return {
      qty: index,
      task: item.task,
    };
  });

  const columns = [
    {
      name: "rowId",
      selector: (row, i) => i,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "#",
      selector: (row, i) => i + 1,
      sortable: true,
      hide: true,
      omit: true,
    },
    {
      name: "Descripción",
      grow: 2,
      selector: (row, i) => `${row.task}`,
      sortable: true,
    },
    {
      name: "OPCIONES",
      sortable: false,
      right: true,
      selector: (row, i) => row.null,
      cell: (d) => [
        <span
          className="btn btn-outline-danger"
          name={d.i}
          onClick={handleDeleteExp.bind(this, d.qty)}
        >
          <FaTrash />
        </span>,
        // <button type="button" className="buttons btn btn-outline-success" onClick={handleClick.bind(this,d.qty)} ><FaEdit className="icon_edit1"/></button>
      ],
    },
  ];
  const tableData = {
    columns,
    data,
  };

  return (
    <div className="row">
      <h2
        className="text-start mt-4 fs-4 text-center"
        style={{
          color: "rgb(73, 139, 166)",
          textShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px, rgba(60, 64, 67, 0.15) 0px 1px 3px",
          fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
        }}
      >
        Actividades
      </h2>
      <div className="col-12 form-outline">
        <textarea
          id="task"
          name="task"
          value={addTask.task}
          className="form-control"
          type="text"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-outline-info m-2"
          onClick={handleExperience}
        >
          <FaPlus /> Agregar actividad
        </button>
      </div>
      <div className="col-12">
        <DataTableExtensions export={false} print={false} {...tableData}>
          <DataTable
            {...tableData}
            columns={columns}
            data={data}
            highlightOnHover
            dense
            title="Actividades agregadas"
          />
        </DataTableExtensions>
      </div>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th className="fs-6">#</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {dataActivities?.map((item, index) => {
            return (
              <tr key={myId()}>
                <td>{index+1}</td>
                <td>{item.task}</td>
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
      </Table> */}
    </div>
  );
};

export default ToDoList;
