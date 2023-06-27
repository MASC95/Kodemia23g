import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import React, { useEffect } from "react";
import {FaTrash, FaEdit} from 'react-icons/fa'
import '../scss/style.scss'
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
import { useFormik } from "formik";
import * as Yup from 'yup'
import useJob from '../../../../hooks/useJob'
import Swal from 'sweetalert2';

const initDataForm={
  name:'',
  level:''
}
const validInput=Yup.object().shape({
  name:Yup.string().required('Requerido'),
  level:Yup.string().required('Requerido')
});
export const AddSkills=()=>{

    const [dataSkill,setDataSkill]=useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [dataSkillEditing, setDataSkillEditing] = useState({});
    const [dataForm, setDataForm] = useState(initDataForm);
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()


      const fetchSkill=async()=>{
        const response = await axios.get(endpointsGral.jobSkill);
        const infoSkill = response.data["item"];
        setDataSkill(infoSkill["docs"]);
    }
    useEffect(()=>{
        // if()
        fetchSkill()
    },[])

    useEffect(()=>{
      //console.log('dataSkill(AddSkills):..',dataSkill)
      if(dataSkill.length>0){
        console.log('dataSkill(AddSkills):..',dataSkill)
      }
    },[dataSkill])

    const insertandoSkill= (values) => {
      let tempDataSkill = [...dataSkill];
      const tempNewSkil= {...values};
      console.log('values(AddSkills):..',values);
      const dataRepet=tempDataSkill.some((item) => item.name ===values.name && item.level===values.level);
      console.log('datarepet',dataRepet)

      if(dataRepet){
        swal({
            title: "Ya hemos agregado esa skill!",
            icon: "error",
            button: "ok!",
        });
    }else{
        tempDataSkill.push(tempNewSkil);
        setDataSkill([...tempDataSkill]);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataRecruiter.accessToken}`;
        
          axios
            .post(`${endpointsGral.jobSkill}`, values) 
            .then(response => {
              console.log(response);
              values.name='';
              values.level='';
            })
            .catch(error => {
              console.log(error.response);
            });
      

        
    }
    }

    const editandoSkill = (values)=>{
      
      let tempDataSkill= [...dataSkill];
      const tempNewSkil= {...values};
      //console.log('values(AddSkills):..',values);
      const dataRepet=tempDataSkill.some((item) => item.name ===values.name && item.level===values.level);
      //console.log('datarepet',dataRepet)

      if(dataRepet){
        swal({
            title: "Ya hemos agregado esa skill!",
            icon: "error",
            button: "ok!",
        });
    }else{
        //tempDataSkill.push(tempNewSkil);
        const arrayEditadoSkills= tempDataSkill.map(item=>{
          if(item._id===dataSkillEditing._id){
            item.name= values.name;
            item.level= values.level;
          }
          return item
        })
        setDataSkill([...arrayEditadoSkills]);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataRecruiter.accessToken}`;
        
          axios.patch(`${endpointsGral.jobSkill}${dataSkillEditing._id}`, values) 
            .then(response => {
              console.log(response);
              swal({
                title: "Skill editada!!",
                icon: "success",
                button: "ok!",
               });
            })
            .catch(error => {
              console.log(error.response);
            });   
        }
    }


    const formik=useFormik({
        initialValues:dataForm,
        enableReinitialize:true,
        validationSchema:Yup.object({
            name:Yup.string().required('Requerido'),
            level:Yup.string().required('Requerido'),
        }),
        onSubmit:(values)=>{
          if(isEditing){
            editandoSkill(values);
          }else{
            insertandoSkill(values);
          }

          values.name='';
          values.level='';

          }
    })

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
          console.log(index)
          const skillDelete=dataSkill[index]
          const id=skillDelete._id
          console.log(id)
          axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer: ${dataRecruiter.accessToken}`;
          axios.delete(`${endpointsGral.jobSkill}${id}`)
          .then(response => {
            console.log(response.data)
            const updatedSkills = dataSkill.filter((_, i) => i !== index);
            setDataSkill(updatedSkills);
          })
          .catch(error => {
            console.error(error);
          });
          Swal.fire(
            'Eliminado!',
            'Skill eliminada correctamente.',
            'success'
          )
        }
      })
        };

  
// ------------------------------------edit skill
    const handleEdit = (index) => {
      //console.log(index)
      setIsEditing(true);
      const skillEdit=dataSkill[index];
          console.log('skillDelete:..',skillEdit);
          //setInfoDataSkill(skillDelete);
          setDataSkillEditing({...skillEdit})
          setDataForm({
            name:skillEdit.name||'',
            level:skillEdit.level||'',
        })
       
      };

      useEffect(()=>{
        if(dataForm) console.log('dataForm:..',dataForm);
    },[dataForm])


     

      // -------------------------------------table
      const data= dataSkill?.map((skill, index) => {
        return(
          {
            index:index,
            qty: `${index+1}`,
            skill: skill.name,
            level: skill.level,
          }
          )
        })

      const columns = [
        {
          name:'rowId',
          selector: (row) => row.index,
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
             <button type="button" className="buttons btn btn-outline-success" onClick={handleEdit.bind(this,d.index)}>
              <FaEdit className="icon_edit2"/>
              </button>, 
             <button type="button" className="buttons btn btn-outline-danger"onClick={handleDeleteSkill.bind(this,d.index)}>
             <FaTrash className="icon_trash" />  
             </button>
            // <FaTrash className="icon_trash" onClick={handleDeleteSkill.bind(this,d.id)}/>  
      ]
     }
      ];

      const tableData = {
        columns,
        data
      };

    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
                  <h2 className='text-dark'>{isEditing?'Editando Skill':'Crear nueva Skill'}</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                        <label className="form-label text-dark" htmlFor="form6Example2">Nombre:</label>
                             <input type="text" 
                               id="name" 
                               name="name"
                               className={`form-control ${formik.touched.name && formik.errors.name ? 'border border-danger' : 'border border-secondary'}`}
                               value={formik.values.name}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               placeholder="Nombre skill"/>
                               {formik.touched.name && formik.errors.name && (<span className='text-danger'>{formik.errors.name}</span>)}

                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label text-dark" htmlFor="form6Example2">Nivel</label>
                            <select className={`form-control ${formik.touched.level && formik.errors.level ? 'border border-danger':'border border-secondary' }`}
                                name="level"
                                id="level"
                                value={formik.values.level}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                <option> Selecciona</option>
                                <option> Basico</option>
                                <option> Intermedio</option>
                                <option> Avanzado</option>
                            </select>
                            {formik.touched.level && formik.errors.level && (<span className='text-danger'>{formik.errors.level}</span>)}
                        </div>
                        </div>
                    </div>
                    <div className="buttons_actions">  
                        <button type="submit" className="buttons btn btn-info text-light">{isEditing?'Editar Skill':'Guardar Skill'}</button>               
                    </div>
                </form>
            </div>
          {/* table of skills */}
          <div className="col">
            <label className="form-label text-dark" >Lista de SoftSkill existentes</label>
            <DataTableExtensions  
            export={false}
            print={false}
            {...tableData}>
              <DataTable {...tableData}
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
            {/* <table className="table">
                <thead className="thead-dark bg-body-secondary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Skill</th>
                    <th scope="col">Nivel</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
              {dataSkill?.map((skill, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{skill?.name}</td>
                    <td>{skill?.level}</td>
                    <td>
                    <button type="button" className="buttons btn btn-outline-danger">
                       <FaTrash className="icon_trash" onClick={() => handleDeleteSkill(index)}/>  
                    </button> 
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>  */}
            </div>

          {/* Table Skills */}
        </div>
      
        </div>

        </>
    )
}
export default AddSkills