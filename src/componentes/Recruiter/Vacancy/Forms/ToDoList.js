import  { useEffect , useState } from "react";
import {FaTrash, FaPlus, FaEdit} from 'react-icons/fa'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { myId } from "../../../lib/myLib";
import Swal from "sweetalert2";
import swal from "sweetalert";



const ToDoList=({dataTask,setDataTask})=>{

  const [addTask,setAddTask]=useState([])

  const handleChange = (event) => {
    const value = event.target.value;
    setDataTask([...addTask,
      value]);
  };
  const handleTask = (event) => {
    console.log(addTask)
    setAddTask([...dataTask,addTask])


    // event.preventDefault();
    // // console.log('selectSkill:..',selectSkill);
    // const newSkill = {
    //   skill: selectSkill,
    // };

    // if(newSkill.skill==='select'){
    //   swal({
    //     title: "Favor de Seleccionar una Skill !!",
    //     icon: "error",
    //     button: "ok!",
    // });
    // return
    // }
    // const dataRepet= skillTemp?.find(item=>item.skill===newSkill.skill);
    // if(dataRepet){
    //     swal({
    //         title: "Ya hemos agregado esa skill!",
    //         icon: "error",
    //         button: "ok!",
    //     });
    // }else{
    //     setSkillTemp([...skillTemp, newSkill]);
    // }
  };
  const handleDeleteSkill = (index) => {
 
  };
    return(
        <>
         <div className="row softskills-tableEdit ">
          <div className="col">
              <div className="row d-flex">
                <label className="form-label text-dark" htmlFor="form6Example1">
                  Actividades:
                </label>
                <div className="col">
                  <div className="form-outline">
                  <input
                      type="text"
                      id="task"
                      name="task"
                      value={addTask.value}
                      onChange={handleChange}
                      className='form-control'
                      placeholder="Escribe una actividad"
                    />
                  </div>
                </div>
                  <div className="col-2 buttons_actions sm">
                    <button type="button" onClick={handleTask} className="buttons btn btn-info text-light">
                      <FaPlus> </FaPlus>
                    </button>
                  </div>
              </div>
          </div>
          {/* table of skills */}
          <div className="col">
        <label className="form-label text-dark" htmlFor="">
          Actividades agregadas
        </label>
        <table className="table">
          <thead className="thead-dark bg-body-secondary">
            <tr>
              <th scope="col">#</th>
              <th className="text-center" scope="col">
               Actividad
              </th>
              <th className="text-center" scope="col">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTask.map((item) => {
              return (
                <tr key={myId()}>
                  <td>{item.task}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="buttons btn btn-outline-danger"
                    >
                      <FaTrash
                        className="icon_trash"
                        onClick={() => handleDeleteSkill(item)}
                      />
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
    )
}
export default ToDoList