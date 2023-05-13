import {React,useEffect,useState} from "react";
import axios from "axios";
import { endpoints } from "../../services/endpoints";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
export const PostVacancy=()=>{
    const [formValues,setFormValues]=useState({})
    const [isLoading,setLoading]=useState(true)
    const formik= useFormik({
        initialValues: {
            company:'64406a93e56432b37db279d0',
            title:'',
            type_work:'',
            modalidad:'',
            city:'',
            salary:'',
            status:'',
            activities:''
        },
        validationSchema:Yup.object({
            title:Yup.string().required('Requerido'),
            type_work:Yup.string().required('Requerido'),
            modalidad:Yup.string().required('Requerido'),
            city:Yup.string().required('Requerido'),
            salary:Yup.number().required('Requerido'),
            status:Yup.string().required('Requerido'),
            activities:Yup.string().required('Requerido'),
        }),
        onSubmit:values=>{
            const form=JSON.stringify(values, null, 2)
            alert(form);
            guardarCallback(form)
        }
   
      });

      const guardarCallback=async(form)=>{
        try {
            alert(form)
            const addVacancy= await axios.post(endpoints.postVacancy,form)
            setFormValues(addVacancy)
            console.log(addVacancy)
        } catch (error) {
            console.log('error')
        }
      }
    //   const Callback=()=>{
        
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try {
    //             const endpointURL= `${endpoints.getByUser}`;
    //             const result= await axios.get(endpointURL,
    //                         {headers:{}})
    //             setProfileInformation(result.data)
    //             console.log(result.data[0])
    //         } catch (error) {
    //             console.log(error)
    //         } finally{
    //             setLoading(false)
    //         }         
    //     };
    //     fetchData()
    // },[]);
    //   }

    // const [formValues,setFormValues]= useState({
    //     title:'',
    //     type_work:'',
    //     modalidad:'',
    //     city:'',
    //     salary:'',
    //     activities:''
    // })
    // const navigate=useNavigate();
    // const onFormInputChange=(event)=>{
    //     const inputID=event.target.id;
    //     const inputValue=event.target.value

    //     setFormValues({
    //         ...formValues,[inputID]:inputValue
    //     })
    // }

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
                                className={`form-control ${formik.touched.type_work && formik.errors.type_work ? 'border border-danger':'border border-secondary' }`}
                                name="type_work"
                                id="type_work"
                                value={formik.values.type_work}
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
                                    className={`form-control ${formik.touched.modalidad && formik.errors.modalidad ? 'border border-danger':'border border-secondary'}`}
                                    id="modalidad"
                                    name="modalidad"
                                    value={formik.values.modalidad}
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


