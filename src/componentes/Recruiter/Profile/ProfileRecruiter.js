import {React,useEffect,useState} from "react";
import axios from "axios";
import { endpointsGral } from "../services/vacancy";
import imgProfile from '../assets/img/profile.png'
import swal from "sweetalert";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { Formik, Field, ErrorMessage } from "formik";
import { useFormik } from "formik";
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
    name: Yup.string().required('El Nombres es Requerido'),
    last_name: Yup.string().required('El Apellido es Requerido'),
    email: Yup.string().required('El correo electrónico es requerido'),
    age: Yup.number().required('El campo es requerido'),
    rfc: Yup.string().required('Ingrese una experiencia válida'),
  })
  


export const ProfileRecruiter=()=>{

  const [dataForm, setDataForm] = useState(initDataForm);
  const [imageUser, setImageUser] = useState(null);
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage,setDataLocalStorage] = useJob();
  const navigate =useNavigate()
  useEffect(() => {
    if (dataRecruiter) {
      // console.log("dataRecruiter ********:..", dataRecruiter);
      setDataForm({
        name: dataRecruiter.name||'',
        last_name: dataRecruiter.last_name||'',
        email: dataRecruiter.email||"",
        rfc: dataRecruiter.rfc||"",
        avatar_url: dataRecruiter.avatar_url||"",
      });
    }
  }, [dataRecruiter]);

  const formik=useFormik({
    initialValues:dataForm,
    enableReinitialize:true,
    validationSchema:Yup.object({
      name: Yup.string().required('El Nombres es Requerido'),
      last_name: Yup.string().required('El Apellido es Requerido'),
      email: Yup.string().required('El correo electrónico es requerido'),
      // age: Yup.number().required('El campo es requerido'),
      rfc: Yup.string().required('Ingrese una experiencia válida')
    }),
    onSubmit:(values)=>{
      console.log('values', values)
      Swal.fire({
        title: 'Mensaje de confirmación',
        text: '¿Estás seguro de que quieres guardar los cambios?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#0CF574',
        cancelButtonColor: '#FF2F2F',
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
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
              console.log('formData', formData)
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
          Swal.fire('Los cambios han sido guardados correctamente!');
          navigate(`/Dashboard-Recruiter/vacancy`)
        }
      });
 
    }
  })

    return(
        <>
        <div className='card-body'>
           <h1 className="text-start d-sm-flex mt-2 perfil-text m-2"
          style={{
            color: "#498BA6",
            textShadow:
              "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px rgba(60, 64, 67, 0.15)",
            fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
          }}>Información General</h1> 
           <div className="row"  style={{color: "#106973",fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma"}}>
            <div className="col-12 col-md-4">
              {!imageUser && (
                <>
                    <img 
                    src={dataForm.avatar_url
                    ?dataForm.avatar_url
                    :imgProfile} alt="imgProfile" className="perfil-C d-flex justify-content-center d-block ms-auto me-auto" />
                <p className="allowed-files w-100 text-center mt-3 "
                  style={{
                    color: "#106973",
                    fontFamily: "Poppins, sans-serif, Verdana, Geneva, Tahoma",
                  }}> Archivos permitidos .png, .jpg, jpeg </p>
                </>
              )}

                <div className="buttons_actions d-flex justify-content-center gap-3">
                    <UploadImage setDataImg={setImageUser} />
                </div>
            </div>
            <div className="col-12 col-md-8">
              <form onSubmit={formik.handleSubmit}>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray" >
                        <label className="form-label" htmlFor="form6Example1" >
                        Nombre
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        className={`form-control ${
                          formik.touched.name && formik.errors.name ? 'border border-danger' : 'border border-secondary'}`}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                         {formik.touched.name && formik.errors.name&& (
                            <span className="text-danger">
                              {formik.errors.name}
                            </span>
                          )}
                    </div>
                    
                    
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example1">
                        Apellido
                        </label>
                        <input
                        type="text"
                        id="last_name"
                        placeholder="Apellido"
                        name="last_name"
                        className={`form-control ${
                          formik.touched.last_name && formik.errors.last_name 
                          ? 'border border-danger' 
                          : 'border border-secondary'}`}
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                         {formik.touched.last_name && formik.errors.last_name && (
                            <span className="text-danger">
                              {formik.errors.last_name}
                            </span>
                          )}
                    </div>
                    
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline bg-gray">
                        <label className="form-label " htmlFor="form6Example1">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        className={`form-control ${formik.touched.email && formik.errors.email 
                          ? 'border border-danger' 
                          : 'border border-secondary'}`}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                         {formik.touched.email && formik.errors.email && (
                            <span className="text-danger">
                              {formik.errors.email}
                            </span>
                          )}
                    </div>
                    
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example1">
                        Reset Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        placeholder="Reset Password"
                        name="password"
                        className={`form-control ${formik.touched.password && formik.errors.password 
                          ? 'border border-danger' 
                          : 'border border-secondary'}`}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                         {formik.touched.password && formik.errors.password && (
                            <span className="text-danger">
                              {formik.errors.password}
                            </span>
                          )}
                    </div>
                    
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example2">
                        RFC
                        </label>
                        <input
                        type="text"
                        id="rfc"
                        placeholder="RFC"
                        name="rfc"
                        className={`form-control ${formik.touched.rfc && formik.errors.rfc 
                          ? 'border border-danger' 
                          : 'border border-secondary'}`}
                        value={formik.values.rfc}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                         {formik.touched.rfc && formik.errors.rfc && (
                            <span className="text-danger">
                              {formik.errors.rfc}
                            </span>
                          )}
                    </div>
                
                    </div>
                </div>
                <div className="buttons_actions d-flex justify-content-center gap-3">
                   <button type="submit" className="buttons btn btn-info text-light">
                    Guardar
                    </button>
                </div>
              </form>
                
            </div>
        </div>
        </div>
                   
    </>
    )
    
}
export default ProfileRecruiter