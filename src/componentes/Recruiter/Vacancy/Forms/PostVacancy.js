import {React,useEffect,useState} from "react";
import axios from "axios";
import { endpointsGral } from "../../services/vacancy";
// import { endpoints } from "../../services/endpoints";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
export const PostVacancy=()=>{
    const navigate =useNavigate();
    
    const formik= useFormik({
        initialValues: {
            companyName:'64406a93e56432b37db279d0',
            title:'',
            type:'',
            mode:'',
            city:'',
            salary:'',
            status:'',
            activities:''
        },
        validationSchema:Yup.object({
            title:Yup.string().required('Requerido'),
            type:Yup.string().required('Requerido'),
            mode:Yup.string().required('Requerido'),
            city:Yup.string().required('Requerido'),
            salary:Yup.number().required('Requerido'),
            status:Yup.string().required('Requerido'),
            activities:Yup.string().required('Requerido'),
        }),
        onSubmit:(values) => {
            setTimeout(() => {
              axios
                .post(endpointsGral.vacancyURL, values) 
                .then(response => {
                  console.log(response);
                  navigate(`/Dashboard-Recruiter/vacancy`)

                })
                .catch(error => {
                  console.log(error.response);
                });
              console.log({ values});
              alert(JSON.stringify(values, null, 2));
            }, 400);
          }
      });


    return(
        <div className="container mt-2 p-5 w-100 " id="formGral">
            <form onSubmit={formik.handleSubmit}>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label" for="form6Example1">Título</label>
                        <input type="text" 
                               id="title" 
                               name="title"
                               className={`form-control ${formik.touched.title && formik.errors.title ? 'border border-danger' : 'border border-secondary'}`}
                               value={formik.values.title}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               placeholder="Título"/>
                               {formik.touched.title && formik.errors.title && (<span className='text-danger'>{formik.errors.title}</span>)}
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Tipo de trabajo</label>
                        <select 
                                className={`form-control ${formik.touched.type && formik.errors.type ? 'border border-danger':'border border-secondary' }`}
                                name="type"
                                id="type"
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                            <option> Selecciona</option>
                            <option> Tiempo Completo</option>
                            <option> Por proyecto</option>
                        </select>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Modalidad</label>
                            <select 
                                    className={`form-control ${formik.touched.mode && formik.errors.mode ? 'border border-danger':'border border-secondary'}`}
                                    id="mode"
                                    name="mode"
                                    value={formik.values.mode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}>
                                <option> Selecciona</option>
                                <option> Presencial</option>
                                <option> Remoto</option>
                                <option> Hibrído</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Ciudad</label>
                        <input type="text"
                                id="city" 
                                name="city"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`form-control ${formik.touched.city && formik.errors.city ? 'border border-danger':'border border-secondary'}`}
                                placeholder="Ciudad"/>
                                {formik.touched.city && formik.errors.city && (<span className='text-danger'>{formik.errors.city}</span>)}
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Sueldo</label>
                        <input type="text" 
                               id="salary" 
                               name="salary"
                               value={formik.values.salary}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.touched.salary && formik.errors.salary ? 'border border-danger':'border border-secondary'}`}
                               placeholder="Sueldo"/>
                               {formik.touched.salary && formik.errors.salary && (<span className='text-danger'>{formik.errors.salary}</span>)} 
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Status</label>
                        <select 
                                    className={`form-control ${formik.touched.status && formik.errors.status ? 'border border-danger':'border border-secondary'}`}
                                    id="status"
                                    name="status"
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}>
                                <option> Selecciona</option>
                                <option> Iniciado</option>
                                <option> Cerrado</option>
                            </select>
                    </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">Actividades</label>
                        <input type="text" 
                               id="actividades" 
                               name="activities"
                               value={formik.values.activities}
                               onChange={formik.handleChange}
                               className={`form-control ${formik.touched.activities && formik.errors.activities ? 'border border-danger':'border border-secondary'}`}  
                               placeholder="Actividades"/>
                               {formik.touched.activities && formik.errors.activities && (<span className='text-danger'>{formik.errors.activities}</span>)} 

                    </div>
                    </div>
                </div>
                <div className="buttons_actions">  
                    {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}
                    <button type="submit" className="buttons btn btn-info text-light">Guardar</button>               
                </div>
            </form>
        </div>
    )
}
export default PostVacancy


