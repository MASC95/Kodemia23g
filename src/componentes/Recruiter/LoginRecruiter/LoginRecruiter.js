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
    const [formValues,setFormValues]=useState({
        email:'',
        password:''
    })
    const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, initDataCandidate, initDataRecrutier]=useJob();
    const navigate= useNavigate();
    // const [isLoading,setLoading]=useState(true)
    const onFormInputChange=(event)=>{
        const inputID=event.target.id;
        const inputValue=event.target.value
        setFormValues({...formValues,[inputID]:inputValue})
    }
    // console.log(formValues)
    const importantData=(formValues.email!==''&& formValues.password!=='')
    const resetForm=()=>{
        setFormValues({
            email:'',
            password:''
        })
    }

    const onFormSubmit=(event)=>{
        event.preventDefault();
         loginCallback()
    }

    const loginCallback=async()=>{
        try {
            if(importantData){
              const loginRecruiter= await endpoints.loginAxios(formValues);
              setFormValues(loginRecruiter)
              window.localStorage.setItem('accessToken',JSON.stringify(loginRecruiter))
              if(loginRecruiter.access_token){
                setDataRecruiter(loginRecruiter);
              }

              const perfil = JSON.parse(localStorage.getItem('accessToken'))
                const token=perfil['accessToken']
                function parseJwt (token) {
                    var base64Url = token.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    return JSON.parse(window.atob(base64));
                };
                const destroy=parseJwt(token)
                const role= destroy['role']
                    if(role==='empresa'){
                        swal({
                            title: "Bienvenido de vuelta!",
                            icon: "success",
                            button: "ok!",
                        });
                        resetForm()
                        // console.log('dashboard Empresa')
                        navigate(`/Dashboard-Recruiter/home`)
                    }else{
                         swal({
                            title: "Error al acceder!",
                            icon: "error",
                            button: "ok!",
                        });
                    }
            }else{
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
    }

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
                <div className="col-md-6 col-md-offset-3">
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