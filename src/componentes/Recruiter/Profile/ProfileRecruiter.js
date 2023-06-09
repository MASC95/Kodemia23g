import {React,useEffect,useState} from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import imgProfile from '../assets/img/profile.png'
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup"
import UploadImage from "../../UploadImage/UploadImage";
import useJob from "../../../hooks/useJob"


const initDataForm = {
    name: "",
    last_name: "",
    email: "",
    rfc:'',
    avatar_url:''
  };

  const profileSchema = Yup.object().shape({
    name: Yup.string().required('El Nombres es Requerido').min(2, 'El nombre debe tener al menos 2 caracteres').max(50, 'El nombre debe tener como máximo 50 caracteres'),
    last_name: Yup.string().required('El Apellido es Requerido').min(2, 'El apellido debe tener al menos 2 caracteres').max(50, 'El apellido debe tener como máximo 50 caracteres'),
    email: Yup.string().required('El correo electrónico es requerido').email('ingrese un correo electrónico válido'),
    age: Yup.number().required('El campo es requerido').min(18, 'Debe ser mayor de 18 años'),
    rfc: Yup.string().required('Ingrese una experiencia válida'),
  })
  


export const ProfileRecruiter=()=>{

  const [dataForm, setDataForm] = useState(initDataForm);
  const [imageUser, setImageUser] = useState(null);
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, initDataCandidate, initDataRecrutier] = useJob();

  useEffect(() => {
      
    if (dataRecruiter) {
      console.log("dataRecruiter:..", dataRecruiter);
      setDataForm({
        name: dataRecruiter?.name||'',
        last_name: dataRecruiter.last_name||'',
        email: dataRecruiter.email||"",
        rfc: dataRecruiter.rfc||"",
        avatar_url: dataRecruiter.avatar_url||"",
      });
    }
  }, [dataRecruiter]);
  const handleSubmit = async(values)=>{
    alert(values)
    //e.preventDefault();
    try {

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer: ${dataRecruiter.accessToken}`;
      const formData = new FormData();
      if (imageUser) formData.append("image", imageUser);
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
        //console.log(key,value);
      });
      axios
        .patch(`${endpointsGral.userURL}${dataRecruiter.accessToken}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("response.data:..", response.data);
        })
        .catch((error) => {
          console.error(error);
        });


    } catch (error) {
      console.log('error:..',error);
    }
  }



    return(
        <>
        <div className='card-body'>
           <h1 className="text-start">Información General</h1> 
           <div className="row container_form_General">
            <div className="col-4 container_image">
             {!imageUser && (
                <>
                <div className="ppic-container">
                    <img src={dataForm.avatar_url?dataForm.avatar_url:imgProfile} alt="imgProfile" />
                </div>
                <p className="allowed-files"> Archivos permitidos .png, .jpg, jpeg </p>
                </>
            )}

            <div className="buttons_actions d-flex justify-content-center gap-3">
                <UploadImage setDataImg={setImageUser} />
            </div>
            </div>
            <div className="col">


                <Formik
                initialValues={dataForm}
                enableReinitialize={true}
                validationSchema={profileSchema}
                onSubmit={(values)=>handleSubmit(values)}>
                {props => (
                <Form onSubmit={props.handleSubmit} >
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray" >
                        <label className="form-label" htmlFor="form6Example1">
                        Nombre
                        </label>
                        <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        className={`form-control ${props.touched.name && props.errors.name ? 'border border-danger' : 'border border-secondary'}`}
                        value={props.values.name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                        {props.touched.name && props.errors.name && (<span className='text-danger'>{props.errors.name}</span>)}
                    </div>
                    
                    
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example1">
                        Apellido
                        </label>
                        <Field
                        type="text"
                        id="last_name"
                        placeholder="Apellido"
                        name="last_name"
                        className={`form-control ${props.touched.last_name && props.errors.last_name ? 'border border-danger' : 'border border-secondary'}`}
                        value={props.values.last_name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                    </div>
                    
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label" htmlFor="form6Example1">
                        Email
                        </label>
                        <Field
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        className={`form-control ${props.touched.email && props.errors.email ? 'border border-danger' : 'border border-secondary'}`}
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                    </div>
                    
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example1">
                        Reset Password
                        </label>
                        <Field
                        type="password"
                        id="password"
                        placeholder="Reset Password"
                        name="password"
                        className={`form-control ${props.touched.password && props.errors.password ? 'border border-danger' : 'border border-secondary'}`}
                        value={props.values.password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                        <ErrorMessage name="password"/>
                    </div>
                    
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example2">
                        RFC
                        </label>
                        <Field
                        type="text"
                        id="rfc"
                        placeholder="RFC"
                        name="rfc"
                        className={`form-control ${props.touched.rfc && props.errors.rfc ? 'border border-danger' : 'border border-secondary'}`}
                        value={props.values.rfc}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                    </div>
                
                    </div>
                </div>
                <div className="buttons_actions d-flex justify-content-center gap-3">
                    {/* <button type="button" className="buttons btn btn-info">Cancelar</button> */}

                    <button type="submit" className="buttons btn btn-info text-light" value='enviar' >
                    Guardar
                    </button>
                </div>
                </Form>
                )}
                </Formik> 
                </div>
        </div>
        </div>
                   
    </>
    )
    
}
export default ProfileRecruiter