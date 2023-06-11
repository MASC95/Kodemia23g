import React, { useEffect } from "react";
import {FaTrash} from 'react-icons/fa'
import '../scss/style.scss'
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
import { useFormik } from "formik";
import * as Yup from 'yup'
import useJob from '../../../../hooks/useJob'
export const AddSkills=()=>{

    const [dataSkill,setDataSkill]=useState([])
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



    const formik=useFormik({
        initialValues:{
            name:'',
            level:''
        },
        validationSchema:Yup.object({
            name:Yup.string().required('Requerido'),
            level:Yup.string().required('Requerido'),
        }),
        onSubmit:(values)=>{
          let tempDataSkill = [...dataSkill];
          const tempNewSkil= {...values};
          console.log('values(AddSkills):..',values);
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
            //   console.log({ values});
              alert(JSON.stringify(values, null, 2));
          

            values.name='';
            values.level='';

          }
    })

  
    const handleDeleteSkill = (index) => {
        const skillDelete=dataSkill[index]
        const id=skillDelete._id

        axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer: ${dataRecruiter.accessToken}`;
          
        axios.delete(`${endpointsGral.jobSkill}${id}`)
        .then(response => {
          const updatedSkills = dataSkill.filter((_, i) => i !== index);
          setDataSkill(updatedSkills);
        })
        .catch(error => {
          console.error(error);
        });
      };

    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
                  <h2>Crear nueva Skill</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                        <label className="form-label" for="form6Example2">Nombre de la Skill:</label>
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
                            <label className="form-label" for="form6Example2">Nivel</label>
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
                        <button type="submit" className="buttons btn btn-info text-light">Guardar Skill</button>               
                    </div>
                </form>
            </div>
          {/* table of skills */}
          <div className="col">
            <label className="form-label" htmlFor="">Lista de SoftSkill existentes</label>
            <table className="table">
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
                // const myDataSkill= dataSkill.find(item=>item._id===skill.skill);
                // console.log('myDataSkill:..',myDataSkill,'skill:..',skill);
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{skill?.name}</td>
                    <td>{skill?.level}</td>
                    <td>
                    <FaTrash className="icon_trash"  onClick={() => handleDeleteSkill(index)}/>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
            </div>

          {/* Table Skills */}
        </div>
      
        </div>

        </>
    )
}
export default AddSkills