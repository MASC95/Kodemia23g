import  { useEffect , useState } from "react";
import {FaTrash, FaPlus, FaEdit} from 'react-icons/fa'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { myId } from "../../../lib/myLib";
import Swal from "sweetalert2";
import swal from "sweetalert";



const ToDoList=({value, onChange,className})=>{

  const [dataSkill, setDataSkill] = useState([]);
  const [selectSkill, setSelectSkill] = useState("select");
  const [skillTemp, setSkillTemp] = useState([]);

  const handleSkillChange = (event) => {
    const value = event.target.value;
    setSelectSkill(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log('selectSkill:..',selectSkill);
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
                      id="salary"
                      name="salary"
                      value={value}
                      onChange={onChange}
                      className={className}
                      placeholder="Escribe una actividad"
                    />
                  </div>
                </div>
                  <div className="col-2 buttons_actions sm">
                    <button type="button" onClick={onFormSubmit} className="buttons btn btn-info text-light">
                      <FaPlus> </FaPlus>
                    </button>
                  </div>
              </div>
          </div>
          {/* table of skills */}
          <div className="col">
            <label className="form-label text-dark" htmlFor="">Lista de actividades agregadas</label>
            <div className="main-table">
                {/* <DataTableExtensions  
                    export={false}
                    print={false}
                    {...tableData}>
                    <DataTable {...tableData}
                    key={myId()}
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="#"
                    defaultSortAsc={true}
                    pagination
                    highlightOnHover
                    dense
                    />
                </DataTableExtensions> */}
            </div>
            </div>

          {/* Table Skills */}
        </div>
        </>
    )
}
export default ToDoList