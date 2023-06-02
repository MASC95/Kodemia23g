import React from "react";
import '../scss/style.scss'
import TableSkills from "../TableSkills";
// import { useState } from "react";
// import swal from "sweetalert";
// import axios from "axios";
// import { endpointsGral } from "../../services/vacancy";
// import { FaEdit, FaTrash } from "react-icons/fa";
export const AddSoftSkills=()=>{
    // const valores = window.location.search;
    // const urlParams = new URLSearchParams(valores);
    // const id = urlParams.get('v');

    // const [formValue,setFormValue]=useState({
    //     vacancy:`${id}`,
    //     name:'',
    //     level:''
    // })

    // const onFormInputChange=(event)=>{
    //     const input=event.target.id
    //     const inputValue=event.target.value

    //     setFormValue({
    //         ...formValue,
    //         [input]:inputValue
    //     })
    // }
    // const onFormSubmit=(event)=>{
    //     event.preventDefault()
    //     saveSkill()
    // }

    // const saveSkill=async()=>{
    //     try {
    //         const token = window.localStorage.getItem('token')
    //         // console.log(token) 
    //         const headers = { 
    //             'Authorization':`Baerer ${token}`
    //         };
    //         const addSkill = await axios.post(endpointsGral.jobSkill,formValue,{headers}) 
    //         setFormValue(addSkill)
    //         console.log('hecho')
    //         swal({
    //             title: "Soft Skill agregada!",
    //             icon: "success",
    //             button: "ok!",
    //           });
    //     } catch (error) {
    //         swal({
    //             title: "Se a producido un error!",
    //             text: "Revisar los datos ingresados!",
    //             icon: "error",
    //             button: "ok!",
    //           });
    //     }
    // }

    return(
        <>
        <div className="container mt-2 p-5 w-100 " id="formGral">
        <div className="row softskills">
            <div className="col">
                  <h2>Agregar skill</h2>
                <form >
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Skills</label>
                            <select className="form-control" 
                                           id="name">
                                <option> Selecciona</option>
                                <option>Python</option>
                                <option>JavaScript</option>
                                <option>Java</option>
                                <option>C#</option>
                                <option>C++</option>
                                <option>Go</option>
                                <option>R</option>
                                <option>Swift</option>

                            </select>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2">Nivel</label>
                            <select className="form-control" 
                                           id="level">
                                <option> Selecciona</option>
                                <option> Basico</option>
                                <option> Intermedio</option>
                                <option> Avanzado</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="buttons_actions">  
                        <button type="submit" className="buttons btn btn-info text-light">Guardar Skill</button>               
                    </div>
                </form>
            </div>
            {/* <TableSkills/> */}
        </div>
      
        </div>

        </>
    )
}
export default AddSoftSkills