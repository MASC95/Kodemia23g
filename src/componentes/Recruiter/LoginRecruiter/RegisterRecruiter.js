import {useState, useEffect} from "react";
import logo from './img/logo.png'
import register from './img/14.png'
import './scss/style.scss'
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { endpointsGral } from "../services/vacancy";
import useJob from '../../../hooks/useJob';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const initDataForm={
  email:'',
  password:'',
  role:'empresa',
  code: "",
  backCode:''
}

const profileSchema = Yup.object().shape({
  email: Yup.string()
    .required("Favor de ingresar correo"),
  password: Yup.string()
    .required("Ingresar el password")
    .min(8, "El password debe tener al menos 8 caracteres")
    .max(10, "El password debe tener al maximo 10 caracteres")
    .matches(
      /^(?=.\d)(?=.[\u0021-\u002b\u003c-\u0040])(?=.[A-Z])(?=.[a-z])\S{8,10}$/,
      "La contraseña debe tener al entre 8 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    ),
    code: Yup.string()
    .required("Ingresar el código de verificación")
    .max(6, "El código de verificación debe tener 6 caracteres"),
});

export const RegisterRecruiter=()=>{
  const navigate =useNavigate()
  const [dataForm, setDataForm] = useState(initDataForm);


  const [isResgitering, setIsResgitering] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [isInformationUser,setInformationUser]=useState([])
  const [dataCandidate, setDataCandidate, dataRecruiter, setDataRecruiter, dataLocalStorage, setDataLocalStorage]= useJob();

  const fetchUser=async()=>{
    const response = await axios.get(endpointsGral.userURL);
    const dataInformation = response.data["item"];
    if(dataInformation){
      setInformationUser(dataInformation["docs"]);
    }else{
      console.log('error infoSkill')
    }
  }
  useEffect(()=>{
      // if()
      fetchUser()
  },[])

  // const [formValues, setFormValues]=useState({
  //   email:'',
  //   password:'',
  //   role:'empresa',
  //   code: "",
  //   backCode:'',
  // })
  // useEffect(() => {
  //   if(formValues.code!==''&&(formValues.code.trim()===String(formValues.backCode))){
  //     setIsConfirmEmail(true);
  //   }else{
  //     setIsConfirmEmail(false);
  //   }
  // }, [formValues.code,formValues.backCode])


  // const onFormInputChange=(event)=>{
  //   const Input=event.target.id;
  //   const InputValue=event.target.value;

  //   setFormValues({
  //     ...formValues,[Input]:InputValue
  //   })
  // }

  // const importantData= (formValues.email!=='' &&
  // // formValues.rfc !==''&&
  // formValues.password!=='')


  // const onFormSubmit=(event)=>{
  //   event.preventDefault()

  // }

  //   if(importantData){
  //     const dataRepet=isInformationUser.some((item)=>item.email===formValues.email)
  //     if(dataRepet){
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error al registrar!',
  //         text: 'Este correo ya tiene una cuenta, inicia sesión!',
  //       })
  //     }else{
        
  //       setIsResgitering(true);
  //       confirmAccesCode();
  //       console.log('agregalo')
  //     }
  //   }else{
  //     swal({
  //       title: "Todos los campos son requeridos!",
  //       icon: "error",
  //       button: "ok!",
  //     });
  //   }
    // console.log(formValues.email)
    // const dataRepet=isInformationUser.some((item)=>item.email===formValues.email)

    // if(dataRepet){
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error al registrar!',
    //     text: 'Este correo ya tiene una cuenta, inicia sesión!',
    //   })
    // }else{

    //   setIsResgitering(true);
    // confirmAccesCode();
    //   // console.log('agregalo')
    // }
  // }
 

  // const resetForm=()=>{
  //       setFormValues({
  //         email:'',
  //         password:'',
  //         role:'empresa',
  //         code: "",
  //         backCode:'',
  //        })
  //       }
  //  const confirmAccesCode = async () => {
  //    console.log("Estamos confirmando el email:..");
  //    const { confirmEmail } = endpointsGral;
  //    const dataLogin = {
  //      email: formValues.email,
  //    };
  //    try {
  //      const response = await axios.post(confirmEmail, dataLogin);
  //      console.log("responseConfirmEmail:..", response);
  //      setFormValues({
  //        ...formValues,
  //        backCode:response?.data?.code
  //      })
  //    } catch (error) {
  //      console.log(error);
  //    }  
  //  };
  const registerRecruiter=async(values)=>{
      try {
      // if(importantData){
        console.log('lleno')
        const register=await axios.post(endpointsGral.userURL,values);
        setDataForm(register)
        setDataLocalStorage({...register?.data});
        if(values.role==='empresa'){
          navigate(`/Dashboard-recruiter/home`)
        }else{
          console.log("pagina candidato");
          navigate(`/dashboard-candidato/home`)
        }


      // } else{
      //   swal({
      //     title: "Todos los campos son requeridos!",
      //     icon: "error",
      //     button: "ok!",
      //   });
      // }
    } catch (error) {
      swal({
        title: "Error al registrar!",
        icon: "error",
        button: "ok!",
      });
    }
  }

  // const handleSubmit = (code) => {
  //   console.log("codigo:", formValues.code);
  //   console.log('codigoBack:..', formValues.backCode);
  //   if(formValues.code===''){
  //     swal({
  //       title: "Agregar código de verficación!",
  //       icon: "error",
  //       button: "ok!",
  //     });
  //   }else{
  //   if(isConfirmEmail===true){
  //       registerRecruiter();
  //      console.log('Email confirmado con Exito:..')  
  //   }else{
  //     console.log('Codigo de acceso Erroneo:..');
  //     swal({
  //       title: "Código de verficación incorrecto!",
  //       icon: "error",
  //       button: "ok!",
  //     });
  //   }
  // }
  // };

  const handleSubmit = () => {
    console.log('aqui debe haber datos')
    
  
  };

  //Use Formik




    return(
        <>
        <section className="signin-page account">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="block text-center">
                <Link to={'/'} className="logo_Jobinder">
                        <img src={logo} alt=""/>
                    </Link>
                <h2 className="text-center">Crear cuenta</h2>
                <Formik
                        initialValues={dataForm}
                        enableReinitialize={true}
                        validationSchema={profileSchema}
                        onSubmit={handleSubmit}
                    >
                        {(props)=>(
                            <Form  
                               className="text-left clearfix" 
                               onSubmit={props.handleSubmit}>
                            <Form.Group className="form-group">
                                <Form.Control
                                   type="email" 
                                   className={`form-control rounded ${
                                    props.touched.email && props.errors.email
                                      ? "border border-danger"
                                      : "border border-secondary"
                                  }`} 
                                   id="email" 
                                   name="email"
                                   placeholder="Escribe tu correo"
                                   value={props.values.email}
                                   onChange={props.handleChange}
                                   onBlur={props.handleBlur}
                                />
                                    <span className="text-danger">
                                      <ErrorMessage name='email'/>
                                  </span>
                            </Form.Group>

                            <Form.Group  className="form-group">
                                <Form.Control
                                   type="password" 
                                   className={`form-control rounded ${
                                    props.touched.password && props.errors.password
                                      ? "border border-danger"
                                      : "border border-secondary"
                                  }`} 
                                   id="password" 
                                   name="password"
                                   placeholder="Password"
                                   value={props.values.password}
                                   onChange={props.handleChange}
                                   onBlur={props.handleBlur}
                                />
                                    <span className="text-danger">
                                      <ErrorMessage name='password'/>
                                  </span>
                            </Form.Group>
                            {!isResgitering &&(
                              <Button type="submit" className="buttons btn btn-info btn-lg m-3">
                            Enviar
                            </Button>
                            )}
                            {isResgitering &&(
                              <>
                              <Form.Group className="form-group">
                                <Form.Control
                                   type="password" 
                                   className={`form-control ${
                                    props.touched.code && props.errors.code
                                      ? "border border-danger"
                                      : "border border-secondary"
                                  }`} 
                                   id="text" 
                                   name="text"
                                   placeholder="Código de verficación"
                                   value={props.values.code}
                                   onChange={props.handleChange}
                                   onBlur={props.handleBlur}
                                />
                                    <ErrorMessage name='code'/>
                            </Form.Group>
                            <Button type="submit" className="buttons btn btn-info btn-lg">
                            Confirmar
                            </Button>
                              </>

                            )}
                            
                            </Form>
                        )}
                    
                    </Formik>
                <p className="mt-20 text-black">Ya tienes una cuenta?
                <Link to={`/login-recruiter`}>
                 Accede
                </Link>
                </p>
                </div>
              </div>
            <div className="col-md-6 col-md-offset-3">
                <div className="block text-center  shadow-none">
                <img className="container w-100 h-50" src={register} alt=""/>
                </div>
            </div>
            </div>
          </div>
        </section>
        
        </>
    )

}

export default RegisterRecruiter