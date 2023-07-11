import React from "react";
import endpoints from "../services/endpoints";
import login from './img/login.png'
import logo from './img/logo.png'
import './scss/style.scss'
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import useJob from '../../../hooks/useJob';
import swal from "sweetalert";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const profileSchema = Yup.object({
    email: Yup.string()
      .required("Favor de ingresar el Usuario")
      ,
    password: Yup.string()
      .required("Ingresar el password")
      .min(8, "El password debe tener al menos 8 caracteres"),
  });
  
  const initialDataForm = {
    email: "",
    password: "",
  };

export const LoginRecruiter=()=>{

    const [dataForm, setDataForm] = useState(initialDataForm);
    const navigate=useNavigate();
    

    // const [formValues, setFormValues] = useState({
    //     email: "",
    //     password: "",
    //   });
      const [
        dataCandidate,
        setDataCandidate,
        dataRecruiter,
        setDataRecruiter,
        dataLocalStorage,
        setDataLocalStorage
      ] = useJob();
    //   const onFormInputChange = (event) => {
    //     const InputID = event.target.id;
    //     const InputValue = event.target.value;
    //     setFormValues({ ...formValues, [InputID]: InputValue });
    //   };
    //   const importantData = formValues.email !== "" && formValues.password !== "";
    //   const resetForm = () => {
    //     setFormValues({
    //       email: "",
    //       password: "",
    //     });
    //   };
    //   const onFormSubmit = (e) => {
    //     e.preventDefault();
    //     initLogin();
    //   };
      const handleSubmit = async (values) => {
        try {
          
            const loginRecruiter = await endpoints.loginAxios(values);
            setDataForm(loginRecruiter);
            console.log('loginRecruiter:..',loginRecruiter);
            setDataLocalStorage({...loginRecruiter});
            const role = loginRecruiter?.role;
            if (role === "empresa") {
              swal({
                title: "Bienvenido de vuelta!",
                icon: "success",
                button: "ok!",
              });
              console.log("dashboard Recruiter");
              navigate("/Dashboard-Recruiter/home");
            } else {
              swal({
                title: "Error al acceder!",
                icon: "error",
                button: "ok!",
              });
            }
          
        } catch (error) {
          swal({
            title: "Credenciales invalidas!",
            icon: "error",
            button: "ok!",
          });
        }
        // navigate('/dashboard-candidato')
      };

    return(
        <>
        <section className="Login-page account">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center">
                    <Link to={'/'} className="logo_Jobinder">
                        <img src={logo} alt=""/>
                    </Link>
                    <h2 className="text-center text-dark">Bienvenido</h2>
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
                                {/* <Form.Label>Email</Form.Label> */}
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
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control
                                   type="password" 
                                   className={`form-control rounded ${
                                    props.touched.email && props.errors.email
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

                            <Button type="submit" className="buttons btn btn-info btn-lg m-3">
                            Enviar
                            </Button>
                            </Form>
                        )}
                    
                    </Formik>
                    <p className="mt-20 text-black text-decoration-none">No tienes una cuenta?
                    <Link to={`/register-recruiter`}>
                    Crea una con nosotros
                    </Link>
                    </p>
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3 d-none d-sm-block">
                    <div className="block text-center  shadow-none">
                    <img className="container w-100 h-50" src={login} alt=""/>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default LoginRecruiter