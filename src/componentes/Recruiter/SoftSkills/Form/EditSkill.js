import  { useEffect , useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
import { myId } from "../../../lib/myLib";
import {FaTrash, FaPlus, FaEdit} from 'react-icons/fa'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Link } from "react-router-dom";
import '../scss/style.scss'
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

//   console.log("arr de skills", skillTemp);

  const handleDeleteSkill = (index) => {
    Swal.fire({
      title: 'Eliminar Skill',
      text: "Estas seguro de eliminar esta skill?!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        const skillToDelete = skillTemp[index];
        if (skillToDelete) {
          const updatedSkills = skillTemp.filter((_, i) => i !== index);
          setSkillTemp(updatedSkills);
        } else {
          console.log("error al eliminar");
        }
        Swal.fire(
          'Eliminado!',
          'Skill eliminada correctamente.',
          'success'
        )
      }
    })
  };
  // ----------------------------table

  const data= skillTemp?.map((skill, index) => {
    let myDataSkill=null;
    myDataSkill= dataSkill?.find(item=>item._id===skill.skill);
    if(!myDataSkill){
     myDataSkill= dataSkill?.find(item=>item._id===skill);
    }
    return(
      {
        id:myDataSkill?._id,
        qty:index,
        skill: myDataSkill?.name,
        level: myDataSkill?.level,
      }
    )
  })

  const columns = [
    {
      name:'rowId',
      selector: (row) =>`${row.id}${row.qty}`,
      sortable: true, hide:true,
      omit:true,

    },
    {
      name: "#",
      selector: (row,i) => i + 1,
      sortable: true
    },
    {
      name: "SKILL",
      selector: (row, i) =>`${row.skill}`,
      sortable: true
    },
    {
      name: "NIVEL",
      selector: (row, i) => row.level,
      sortable: true
    },
    {
      name: "OPCIONES",
      sortable: false,
      selector: (row, i) => row.null,
      cell: (d) =>[
        <button type="button" className="buttons btn btn-outline-danger"onClick={handleDeleteSkill.bind(this,d.qty)}>
         <FaTrash className="icon_trash" />  
         </button>,
  ]
 }
  ];

 


  const tableData = {
    columns,
    data
  };
  return (
    <>
        <div className="row softskills-tableEdit ">
          <div className="col">
              <div className="row d-flex">
                <label className="form-label text-dark" htmlFor="form6Example1">
                  Elige las SoftSkill de tu preferencia:
                </label>
                <div className="col">
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
                  <Link to={'/Dashboard-Recruiter/softskill-addNew'} className="text-black d-flex justify-content-start mb-3 mt-2 fs-6">
                      <p className="">Crear nueva SoftSkill</p> 
                  </Link>          
              
          </div>
          {/* table of skills */}
          <div className="col">
            <label className="form-label text-dark" htmlFor="">Lista de SoftSkill agregadas</label>
            <div className="main-table">
                <DataTableExtensions  
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
                </DataTableExtensions>
            </div>
            </div>

          {/* Table Skills */}
        </div>
    </>
  );

}
export default EditSkill