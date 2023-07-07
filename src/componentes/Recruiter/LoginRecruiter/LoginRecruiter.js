import React from "react";
import endpoints from "../services/endpoints";
import login from './img/login.png'
import logo from './img/logo.png'
import './scss/style.scss'
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import useJob from '../../../hooks/useJob';
import swal from "sweetalert";

export const LoginRecruiter=()=>{
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
      const [
        dataCandidate,
        setDataCandidate,
        dataRecruiter,
        setDataRecruiter,
        dataLocalStorage,
        setDataLocalStorage
      ] = useJob();
      const onFormInputChange = (event) => {
        const InputID = event.target.id;
        const InputValue = event.target.value;
        setFormValues({ ...formValues, [InputID]: InputValue });
      };
      const importantData = formValues.email !== "" && formValues.password !== "";
      const resetForm = () => {
        setFormValues({
          email: "",
          password: "",
        });
      };
      const onFormSubmit = (e) => {
        e.preventDefault();
        initLogin();
      };
      const initLogin = async () => {
        try {
          if (importantData) {
            const loginRecruiter = await endpoints.loginAxios(formValues);
            setFormValues(loginRecruiter);
            console.log('loginRecruiter:..',loginRecruiter);
            setDataLocalStorage({...loginRecruiter});
            const role = loginRecruiter?.role;
            if (role === "empresa") {
              swal({
                title: "Bienvenido de vuelta!",
                icon: "success",
                button: "ok!",
              });
              resetForm();
              console.log("dashboard Recruiter");
              navigate("/Dashboard-Recruiter/home");
            } else {
              swal({
                title: "Error al acceder!",
                icon: "error",
                button: "ok!",
              });
            }
          } else {
            swal({
              title: "Todos los datos son requeridos!",
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
                    <form 
                        className="text-left clearfix"
                        id="formLoginRecruiter"
                        onSubmit={onFormSubmit}>
                        <div className="form-group">
                        <input type="email" 
                               className="form-control" 
                               id="email" 
                               name="email"
                               onChange={onFormInputChange}
                               value={formValues.email}
                               placeholder="Email"
                               />
                        </div>
                        <div className="form-group">
                        <input type="password" 
                               className="form-control" 
                               id="password" 
                               name="password"
                               value={formValues.password}
                               onChange={onFormInputChange}
                               placeholder="Password"/>
                        </div>
                        <div className="text-center">
                            <div className="buttons_actions d-grid">  
                                    <button type="submit" className="buttons btn btn-info btn-lg">Enviar</button>               
                                </div>
                        </div>
                    </form>
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